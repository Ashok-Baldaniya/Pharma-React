import { Link } from "react-router-dom"
import SectionHeading from "../components/SectionHeading"
import ProductCard from "../components/ProductCard"
import { categories } from "../data/categories"
import { products } from "../data/products"
import { capabilities, siteInfo } from "../data/site"

const Home = () => {
  return (
    <div>
      <section className="section-padding">
        <div className="mx-auto grid max-w-6xl items-center gap-12">
          <div className="space-y-6 animate-rise">
            <div className="pill inline-flex text-reef/80">Quality First</div>
            <h1 className="text-balance font-display text-4xl md:text-5xl lg:text-6xl">
              Global-ready pharma manufacturing for trusted healthcare brands.
            </h1>
            <p className="text-base text-ink/70 md:text-lg">
              {siteInfo.tagline} We deliver consistent formulations, regulatory
              support, and responsive supply chains across diverse therapy areas.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                to="/products"
                className="w-full rounded-full bg-reef px-6 py-3 text-center text-xs font-semibold uppercase tracking-[0.3em] text-white shadow-glow transition hover:-translate-y-0.5 sm:w-auto"
              >
                Browse Products
              </Link>
              <Link
                to="/contact"
                className="w-full rounded-full border border-reef/30 px-6 py-3 text-center text-xs font-semibold uppercase tracking-[0.3em] text-reef sm:w-auto"
              >
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white/70">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Capabilities"
            title="Pharma manufacturing built for scale and compliance."
            description="From formulation to packaging, every step is monitored under rigorous quality controls."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {capabilities.map((capability) => (
              <div key={capability.title} className="card p-6">
                <h3 className="font-display text-xl">{capability.title}</h3>
                <p className="mt-3 text-sm text-ink/70">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Therapy Areas"
            title="A wide portfolio across high-demand segments."
            description="Explore core categories with reliable, export-ready products."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {categories.map((category) => (
              <Link
                key={category.slug}
                to={`/products?category=${category.slug}`}
                className="card group p-6 transition hover:-translate-y-1"
              >
                <div className="text-xs uppercase tracking-[0.3em] text-reef/70">
                  {category.name}
                </div>
                <p className="mt-3 text-sm text-ink/70">{category.description}</p>
                <div className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-reef">
                  Explore
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white/70">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Featured Products"
            title="Reliable formulations trusted by healthcare partners."
            description="Select products from our high-performing manufacturing portfolio."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {products.slice(0, 6).map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto grid max-w-6xl gap-8 rounded-3xl border border-reef/20 bg-gradient-to-r from-reef/10 via-white to-ember/10 p-6 md:grid-cols-[1.5fr_1fr] md:p-10">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-reef/70">
              Quick Response
            </div>
            <h3 className="mt-4 font-display text-3xl">
              Let's build your next product line together.
            </h3>
            <p className="mt-3 text-sm text-ink/70">
              Submit an enquiry and our team will share pricing, documentation,
              and lead times within 24 hours.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <Link
              to="/contact"
              className="w-full rounded-full bg-reef px-6 py-3 text-center text-xs font-semibold uppercase tracking-[0.3em] text-white shadow-glow"
            >
              Send Enquiry
            </Link>
            <a
              href={`tel:${siteInfo.phone}`}
              className="w-full rounded-full border border-reef/30 px-6 py-3 text-center text-xs font-semibold uppercase tracking-[0.3em] text-reef"
            >
              Call Now
            </a>
            <a
              href={`https://wa.me/${siteInfo.whatsapp.replace(/\D/g, "")}`}
              className="w-full rounded-full border border-ember/30 px-6 py-3 text-center text-xs font-semibold uppercase tracking-[0.3em] text-ember"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home




