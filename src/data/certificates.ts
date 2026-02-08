export type Certificate = {
  id: string
  title: string
  description: string
  issuedBy: string
  year: string
}

export const certificates: Certificate[] = [
  {
    id: "gmp-2024",
    title: "WHO-GMP Compliance",
    description: "Manufacturing facilities audited under WHO-GMP standards.",
    issuedBy: "Global Quality Council",
    year: "2024",
  },
  {
    id: "iso-9001",
    title: "ISO 9001:2015",
    description: "Quality management system certification.",
    issuedBy: "ISO Registry",
    year: "2023",
  },
  {
    id: "fssai",
    title: "FSSAI License",
    description: "Nutraceutical manufacturing compliance.",
    issuedBy: "FSSAI India",
    year: "2025",
  },
]
