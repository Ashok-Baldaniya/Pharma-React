import type { Product } from "../data/products"

type Props = {
  product: Product
}

const ProductSpecs = ({ product }: Props) => {
  const rows = [
    { label: "Strength", value: product.strength },
    { label: "Dosage Form", value: product.dosageForm },
    { label: "Packaging", value: product.packaging },
    { label: "Minimum Order Quantity", value: product.moq },
    { label: "Business Type", value: product.businessType },
    { label: "Country of Origin", value: product.origin },
  ]

  return (
    <div className="rounded-3xl border border-white/70 bg-white/80 p-6 shadow-soft">
      <div className="text-xs uppercase tracking-[0.3em] text-reef/70">
        Specifications
      </div>
      <div className="mt-4 grid gap-3 text-sm text-ink/70">
        {rows.map((row) => (
          <div
            key={row.label}
            className="flex flex-col gap-1 border-b border-reef/10 pb-3 last:border-b-0 last:pb-0 md:flex-row md:justify-between"
          >
            <span className="font-semibold text-ink">{row.label}</span>
            <span>{row.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductSpecs
