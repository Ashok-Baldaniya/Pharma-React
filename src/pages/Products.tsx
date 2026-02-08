import { useMemo, useState } from "react"
import { Link, useSearchParams } from "react-router-dom"
import SectionHeading from "../components/SectionHeading"
import ProductCard from "../components/ProductCard"
import { categories } from "../data/categories"
import { products } from "../data/products"

const Products = () => {
  const [params, setParams] = useSearchParams()
  const [query, setQuery] = useState("")
  const selectedCategory = params.get("category") ?? "all"

  const filtered = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === "all" || product.category === selectedCategory
      const matchesQuery = product.name
        .toLowerCase()
        .includes(query.toLowerCase())
      return matchesCategory && matchesQuery
    })
  }, [query, selectedCategory])

  return (
    <div className="section-padding">
      <div className="mx-auto max-w-6xl space-y-10">
        <SectionHeading
          eyebrow="Products"
          title="Explore our pharma manufacturing portfolio."
          description="Browse by category or search for a formulation. Product data is sample and can be replaced with your catalog."
        />

        <div className="grid gap-6 md:grid-cols-[1fr_2fr]">
          <div className="card p-5">
            <div className="text-xs uppercase tracking-[0.3em] text-reef/70">
              Categories
            </div>
            <div className="mt-4 grid gap-2 text-sm text-ink/70">
              <button
                className={`rounded-xl border px-3 py-2 text-left ${
                  selectedCategory === "all"
                    ? "border-reef/40 bg-reef/10 text-reef"
                    : "border-reef/10"
                }`}
                onClick={() => setParams({})}
              >
                All Categories
              </button>
              {categories.map((category) => (
                <button
                  key={category.slug}
                  className={`rounded-xl border px-3 py-2 text-left ${
                    selectedCategory === category.slug
                      ? "border-reef/40 bg-reef/10 text-reef"
                      : "border-reef/10"
                  }`}
                  onClick={() => setParams({ category: category.slug })}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search products..."
                className="w-full rounded-full border border-reef/20 bg-white/80 px-5 py-3 text-sm outline-none focus:border-reef/50 md:w-80"
              />
              <Link
                to="/contact"
                className="w-full rounded-full border border-reef/30 px-6 py-3 text-center text-xs font-semibold uppercase tracking-[0.3em] text-reef md:w-auto"
              >
                Bulk Enquiry
              </Link>
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {filtered.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
              {filtered.length === 0 && (
                <div className="rounded-3xl border border-reef/20 bg-white/80 p-8 text-sm text-ink/70">
                  No products found. Try another category or search term.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
