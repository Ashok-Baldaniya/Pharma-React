import { Link } from "react-router-dom"
import { categories } from "../data/categories"
import { siteInfo } from "../data/site"

const Footer = () => {
  return (
    <footer className="border-t border-white/60 bg-white/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-[1.2fr_1fr_1fr] md:py-14">
        <div>
          <div className="font-display text-2xl">MediCrest Healthcare</div>
          <p className="mt-3 text-sm text-ink/70">
            Reliable pharma manufacturing and export partner with a focus on
            precision, compliance, and trust.
          </p>
          <div className="mt-6 text-sm text-ink/70">
            <div>{siteInfo.address}</div>
            <div className="mt-2">{siteInfo.phone}</div>
            <div>{siteInfo.email}</div>
          </div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-reef/70">
            Quick Links
          </div>
          <div className="mt-4 grid gap-2 text-sm text-ink/70">
            <Link to="/about">About</Link>
            <Link to="/products">Products</Link>
            <Link to="/certificates">Certificates</Link>
            <Link to="/contact">Contact</Link>
            {/* <Link to="/admin">Admin Portal</Link> */}
          </div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-reef/70">
            Categories
          </div>
          <div className="mt-4 grid gap-2 text-sm text-ink/70">
            {categories.map((category) => (
              <Link key={category.slug} to={`/products?category=${category.slug}`}>
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/60 py-6 text-center text-xs uppercase tracking-[0.3em] text-ink/50">
        © 2026 MediCrest Healthcare. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
