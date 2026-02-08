import { useState } from "react"
import type { ChangeEvent, FormEvent } from "react"
import { Link, useParams } from "react-router-dom"
import ProductSpecs from "../components/ProductSpecs"
import { products } from "../data/products"

const whatsappNumber = "919722050731"

const ProductDetail = () => {
  const { slug } = useParams()
  const product = products.find((item) => item.slug === slug)

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    quantity: "",
    quantityUnit: "box",
    message: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (field: keyof typeof form) => (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }))
  }

  const validate = () => {
    const nextErrors: Record<string, string> = {}
    if (!form.name.trim()) nextErrors.name = "Name is required."
    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      nextErrors.email = "Enter a valid email."
    const digitsOnly = form.phone.replace(/\D/g, "")
    if (!digitsOnly) nextErrors.phone = "Phone is required."
    if (digitsOnly && !/^\d{10}$/.test(digitsOnly))
      nextErrors.phone = "Enter a 10-digit phone number."
    if (!form.quantity.trim()) nextErrors.quantity = "Quantity is required."
    if (!form.message.trim()) nextErrors.message = "Requirement is required."
    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    if (!validate()) return
    const text = [
      "Hello, I would like to enquire about the following product:",
      `Product: ${product?.name ?? "N/A"}`,
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Quantity: ${form.quantity} ${form.quantityUnit}`,
      `Requirement: ${form.message}`,
    ].join("\n")
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`
    window.open(url, "_blank")
  }

  if (!product) {
    return (
      <div className="section-padding">
        <div className="mx-auto max-w-4xl rounded-3xl border border-reef/20 bg-white/80 p-10 text-center">
          <h2 className="font-display text-3xl">Product not found</h2>
          <p className="mt-3 text-sm text-ink/70">
            The product you are looking for is not available in the sample
            catalog.
          </p>
          <Link
            to="/products"
            className="mt-6 inline-flex rounded-full bg-reef px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white"
          >
            Back to Products
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="section-padding">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <div className="text-xs uppercase tracking-[0.3em] text-reef/70">
              {product.category.replace("-", " ")}
            </div>
            <h1 className="font-display text-4xl">{product.name}</h1>
            <p className="text-sm text-ink/70">{product.summary}</p>
            <div className="grid gap-3 rounded-3xl border border-reef/10 bg-white/80 p-5 text-sm text-ink/70">
              <div className="font-semibold text-ink">Applications</div>
              <div className="flex flex-wrap gap-2">
                {product.applications.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-reef/20 px-3 py-1 text-xs uppercase tracking-[0.2em]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  `Hello, I would like to enquire about ${product.name}.`,
                )}`}
                className="w-full rounded-full bg-reef px-6 py-3 text-center text-xs font-semibold uppercase tracking-[0.3em] text-white"
              >
                WhatsApp Enquiry
              </a>
              <Link
                to="/contact"
                className="w-full rounded-full border border-reef/30 px-6 py-3 text-center text-xs font-semibold uppercase tracking-[0.3em] text-reef"
              >
                Contact Page
              </Link>
            </div>
          </div>
          <div className="rounded-3xl border border-white/70 bg-gradient-to-br from-reef/20 via-white to-ember/20 p-6 md:p-8">
            <div className="text-xs uppercase tracking-[0.3em] text-reef/70">
              Product Visual
            </div>
            <div className="mt-6 flex h-48 items-center justify-center rounded-2xl bg-white/80 text-reef md:h-60">
              <span className="text-xs uppercase tracking-[0.3em]">Packshot</span>
            </div>
            <div className="mt-6 rounded-2xl bg-white/80 p-4 text-xs text-ink/70">
              Sample image placeholder - replace with real product visuals.
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <ProductSpecs product={product} />
          <div className="rounded-3xl border border-reef/10 bg-white/80 p-6 md:p-8">
            <div className="text-xs uppercase tracking-[0.3em] text-reef/70">
              Quick Enquiry
            </div>
            <form className="mt-5 grid gap-3 text-sm" onSubmit={handleSubmit}>
              <label className="text-xs font-semibold uppercase tracking-[0.25em] text-reef/70">
                Full Name
              </label>
              <input
                value={form.name}
                onChange={handleChange("name")}
                className="rounded-2xl border border-reef/20 bg-white px-4 py-3 focus:border-reef/50 focus:outline-none"
                placeholder="Your Name"
              />
              {errors.name && <p className="text-xs text-ember">{errors.name}</p>}
              <label className="text-xs font-semibold uppercase tracking-[0.25em] text-reef/70">
                Email (Optional)
              </label>
              <input
                value={form.email}
                onChange={handleChange("email")}
                className="rounded-2xl border border-reef/20 bg-white px-4 py-3 focus:border-reef/50 focus:outline-none"
                placeholder="Email Address"
              />
              {errors.email && <p className="text-xs text-ember">{errors.email}</p>}
              <label className="text-xs font-semibold uppercase tracking-[0.25em] text-reef/70">
                Phone Number
              </label>
              <input
                value={form.phone}
                onChange={handleChange("phone")}
                className="rounded-2xl border border-reef/20 bg-white px-4 py-3 focus:border-reef/50 focus:outline-none"
                placeholder="Phone Number"
                inputMode="numeric"
                pattern="\d{10}"
                maxLength={10}
              />
              {errors.phone && <p className="text-xs text-ember">{errors.phone}</p>}
              <label className="text-xs font-semibold uppercase tracking-[0.25em] text-reef/70">
                Quantity
              </label>
              <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
                <input
                  value={form.quantity}
                  onChange={handleChange("quantity")}
                  className="rounded-2xl border border-reef/20 bg-white px-4 py-3 focus:border-reef/50 focus:outline-none"
                  placeholder="Quantity"
                  inputMode="numeric"
                />
                <select
                  value={form.quantityUnit}
                  onChange={handleChange("quantityUnit")}
                  className="select-field rounded-2xl border border-reef/20 bg-white px-4 py-3 focus:border-reef/50 focus:outline-none"
                >
                  <option value="box">Box</option>
                  <option value="nos">Nos</option>
                </select>
              </div>
              {errors.quantity && <p className="text-xs text-ember">{errors.quantity}</p>}
              <label className="text-xs font-semibold uppercase tracking-[0.25em] text-reef/70">
                Requirement Details
              </label>
              <textarea
                value={form.message}
                onChange={handleChange("message")}
                className="min-h-[120px] rounded-2xl border border-reef/20 bg-white px-4 py-3 focus:border-reef/50 focus:outline-none"
                placeholder="Your Requirement"
              />
              {errors.message && <p className="text-xs text-ember">{errors.message}</p>}
              <button
                type="submit"
                className="w-full rounded-full bg-reef px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white sm:w-auto"
              >
                Send Enquiry on WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
