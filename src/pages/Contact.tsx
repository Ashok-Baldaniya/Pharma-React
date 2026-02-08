import { useState } from "react"
import type { ChangeEvent, FormEvent } from "react"
import SectionHeading from "../components/SectionHeading"
import { categories } from "../data/categories"
import { products } from "../data/products"
import { siteInfo } from "../data/site"

const whatsappNumber = "919722050731"

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    product: "",
    quantity: "",
    quantityUnit: "box",
    message: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange =
    (field: keyof typeof form) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
    if (!form.product.trim()) nextErrors.product = "Product/Service is required."
    if (!form.quantity.trim()) nextErrors.quantity = "Quantity is required."
    if (!form.message.trim()) nextErrors.message = "Enquiry details are required."
    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    if (!validate()) return
    const text = [
      "Hello, I would like to enquire about the following:",
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Product/Service: ${form.product}`,
      `Quantity: ${form.quantity} ${form.quantityUnit}`,
      `Requirement: ${form.message}`,
    ].join("\n")
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`
    window.open(url, "_blank")
  }

  return (
    <div className="section-padding">
      <div className="mx-auto max-w-6xl space-y-10">
        <SectionHeading
          eyebrow="Contact"
          title="Let's discuss your formulation requirements."
          description="Send your enquiry and our team will reply with pricing, MOQ, and lead time."
        />
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <form className="card grid gap-4 p-6 text-sm md:p-8" onSubmit={handleSubmit}>
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
              Product / Service
            </label>
            <select
              value={form.product}
              onChange={handleChange("product")}
              className="select-field rounded-2xl border border-reef/20 bg-white px-4 py-3 focus:border-reef/50 focus:outline-none"
            >
              <option value="" disabled>
                Select a product
              </option>
              {categories.map((category) => (
                <optgroup key={category.slug} label={category.name}>
                  {products
                    .filter((product) => product.category === category.slug)
                    .map((product) => (
                      <option key={product.slug} value={product.name}>
                        {product.name}
                      </option>
                    ))}
                </optgroup>
              ))}
            </select>
            {errors.product && <p className="text-xs text-ember">{errors.product}</p>}
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
              className="min-h-[140px] rounded-2xl border border-reef/20 bg-white px-4 py-3 focus:border-reef/50 focus:outline-none"
              placeholder="Tell us about your requirement"
            />
            {errors.message && <p className="text-xs text-ember">{errors.message}</p>}
            <button
              type="submit"
              className="w-full rounded-full bg-reef px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white sm:w-auto"
            >
              Send Enquiry on WhatsApp
            </button>
          </form>
          <div className="space-y-6">
            <div className="card p-6">
              <div className="text-xs uppercase tracking-[0.3em] text-reef/70">
                Contact Info
              </div>
              <div className="mt-4 text-sm text-ink/70">
                <div>{siteInfo.address}</div>
                <div className="mt-2">{siteInfo.phone}</div>
                <div>{siteInfo.email}</div>
              </div>
              <div className="mt-4 rounded-2xl bg-mist p-4 text-xs uppercase tracking-[0.3em] text-ink/60">
                {siteInfo.hours}
              </div>
            </div>
            <div className="card p-6">
              <div className="text-xs uppercase tracking-[0.3em] text-reef/70">
                Map Placeholder
              </div>
              <div className="mt-4 flex h-40 items-center justify-center rounded-2xl bg-gradient-to-br from-reef/20 via-white to-ember/20 text-reef">
                <span className="text-xs uppercase tracking-[0.3em]">
                  Map Embed
                </span>
              </div>
              <p className="mt-4 text-xs text-ink/60">
                Replace with a Google Maps iframe or local map widget.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
