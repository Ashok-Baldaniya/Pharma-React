import SectionHeading from "../components/SectionHeading"
import { capabilities, siteInfo } from "../data/site"

const About = () => {
  return (
    <div className="section-padding">
      <div className="mx-auto max-w-6xl space-y-12">
        <SectionHeading
          eyebrow="About Us"
          title="Committed to quality-driven pharma manufacturing."
          description="MediCrest Healthcare partners with healthcare brands to deliver consistent formulations, scalable production, and regulatory readiness."
        />
        <div className="grid gap-8 md:grid-cols-[1.3fr_0.7fr]">
          <div className="card p-6 md:p-8">
            <h3 className="font-display text-2xl">Who We Are</h3>
            <p className="mt-4 text-sm text-ink/70">
              We are a contract manufacturing and export partner focused on
              precision formulation, transparent sourcing, and predictable
              supply. Our teams work alongside clients to support private label,
              institutional supply, and international tenders.
            </p>
            <p className="mt-4 text-sm text-ink/70">
              Our facilities are designed for efficiency, with automated
              packaging lines, in-house labs, and traceable batch records.
            </p>
          </div>
          <div className="rounded-3xl border border-reef/20 bg-white/70 p-6">
            <div className="text-xs uppercase tracking-[0.3em] text-reef/70">
              Contact
            </div>
            <div className="mt-4 text-sm text-ink/70">
              <div>{siteInfo.address}</div>
              <div className="mt-2">{siteInfo.phone}</div>
              <div>{siteInfo.email}</div>
            </div>
            <div className="mt-6 rounded-2xl bg-mist p-4 text-xs uppercase tracking-[0.3em] text-ink/60">
              {siteInfo.hours}
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {capabilities.map((capability) => (
            <div key={capability.title} className="card p-6">
              <h3 className="font-display text-xl">{capability.title}</h3>
              <p className="mt-3 text-sm text-ink/70">{capability.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About
