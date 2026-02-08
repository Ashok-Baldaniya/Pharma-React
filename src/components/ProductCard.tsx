import { Link } from "react-router-dom"
import type { Product } from "../data/products"

type Props = {
  product: Product
}

const ProductCard = ({ product }: Props) => {
  return (
    <div className="card flex h-full flex-col p-5">
      <div className="flex h-32 items-center justify-center rounded-2xl bg-gradient-to-br from-reef/20 via-white to-ember/20 text-reef">
        <span className="text-xs uppercase tracking-[0.3em]">Product</span>
      </div>
      <div className="mt-4 flex-1">
        <div className="text-xs uppercase tracking-[0.3em] text-reef/70">
          {product.category.replace("-", " ")}
        </div>
        <h3 className="mt-2 font-display text-xl">{product.name}</h3>
        <p className="mt-2 text-sm text-ink/70">{product.summary}</p>
      </div>
      <div className="mt-5 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em]">
        <span className="text-ink/60">{product.dosageForm}</span>
        <Link to={`/products/${product.slug}`} className="text-reef">
          View Details →
        </Link>
      </div>
    </div>
  )
}

export default ProductCard
