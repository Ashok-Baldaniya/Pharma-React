import SectionHeading from "../components/SectionHeading"
import { certificates } from "../data/certificates"

const Certificates = () => {
  return (
    <div className="section-padding">
      <div className="mx-auto max-w-6xl space-y-10">
        <SectionHeading
          eyebrow="Certificates"
          title="Compliance and quality certifications."
          description="All certificates listed are placeholders and can be replaced with scanned originals."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {certificates.map((certificate) => (
            <div key={certificate.id} className="card p-6">
              <div className="flex h-32 items-center justify-center rounded-2xl bg-gradient-to-br from-reef/20 via-white to-ember/20 text-reef">
                <span className="text-xs uppercase tracking-[0.3em]">
                  Certificate
                </span>
              </div>
              <h3 className="mt-4 font-display text-xl">{certificate.title}</h3>
              <p className="mt-2 text-sm text-ink/70">
                {certificate.description}
              </p>
              <div className="mt-4 text-xs uppercase tracking-[0.3em] text-reef/70">
                {certificate.issuedBy} • {certificate.year}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Certificates

