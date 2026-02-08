type Props = {
  eyebrow?: string
  title: string
  description?: string
  align?: "left" | "center"
}

const SectionHeading = ({ eyebrow, title, description, align = "left" }: Props) => {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      {eyebrow && (
        <div className="pill inline-flex text-reef/80">{eyebrow}</div>
      )}
      <h2 className="mt-4 font-display text-3xl text-ink md:text-4xl">{title}</h2>
      {description && (
        <p className="mt-3 text-sm text-ink/70 md:text-base">{description}</p>
      )}
    </div>
  )
}

export default SectionHeading
