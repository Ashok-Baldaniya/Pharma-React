import { useMemo, useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { categories } from "../data/categories"
import { siteInfo } from "../data/site"

const navLinks = [
  { label: "Home", to: "/", end: true },
  { label: "About", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Certificates", to: "/certificates" },
]

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)

  const grouped = useMemo(() => categories, [])
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/40 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-3 text-[10px] uppercase tracking-[0.25em] text-reef/80 md:text-xs">
        <span>{siteInfo.phone}</span>
        <span className="hidden md:inline">{siteInfo.address}</span>
        <span className="break-all md:break-normal">{siteInfo.email}</span>
      </div>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link to="/" className="text-xl font-semibold tracking-tight" onClick={handleScrollTop}>
          <span className="font-display text-2xl">MediCrest</span>
          <span className="ml-2 text-sm text-reef/80">Healthcare</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          {navLinks.map((link) =>
            link.label === "Products" ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
              >
                <NavLink
                  to={link.to}
                  end={link.end}
                  onClick={handleScrollTop}
                  className={({ isActive }) =>
                    `transition ${isActive ? "text-reef" : "text-ink/80 hover:text-reef"}`
                  }
                >
                  {link.label}
                </NavLink>
                {productsOpen && (
                  <div className="absolute left-1/2 top-full mt-6 w-[520px] -translate-x-1/2 rounded-3xl border border-white/70 bg-white/95 p-6 shadow-soft">
                    <div className="mb-4 text-xs uppercase tracking-[0.3em] text-reef/70">
                      Explore Categories
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      {grouped.map((category) => (
                        <Link
                          key={category.slug}
                          to={`/products?category=${category.slug}`}
                          className="rounded-2xl border border-reef/10 p-3 transition hover:border-reef/30 hover:bg-reef/5"
                        >
                          <div className="font-semibold text-ink">{category.name}</div>
                          <p className="mt-1 text-xs text-ink/60">{category.description}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={link.label}
                to={link.to}
                end={link.end}
                onClick={handleScrollTop}
                className={({ isActive }) =>
                  `transition ${isActive ? "text-reef" : "text-ink/80 hover:text-reef"}`
                }
              >
                {link.label}
              </NavLink>
            ),
          )}
          <Link
            to="/contact"
            className="rounded-full bg-reef px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white shadow-glow transition hover:-translate-y-0.5"
          >
            Enquire Now
          </Link>
        </nav>
        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border border-reef/20 text-reef md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>
      {menuOpen && (
        <div className="border-t border-white/60 bg-white/95 px-6 py-6 md:hidden">
          <div className="flex flex-col gap-4 text-sm font-medium">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                end={link.end}
                onClick={() => {
                  setMenuOpen(false)
                  handleScrollTop()
                }}
                className={({ isActive }) =>
                  `transition ${isActive ? "text-reef" : "text-ink/80 hover:text-reef"}`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="mt-3 rounded-2xl border border-reef/20 p-4">
              <div className="text-xs uppercase tracking-[0.3em] text-reef/70">
                Product Categories
              </div>
              <div className="mt-3 grid gap-2 text-sm">
                {grouped.map((category) => (
                  <Link
                    key={category.slug}
                    to={`/products?category=${category.slug}`}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-xl border border-reef/10 p-3"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="rounded-full bg-reef px-5 py-2 text-center text-xs font-semibold uppercase tracking-[0.3em] text-white"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
