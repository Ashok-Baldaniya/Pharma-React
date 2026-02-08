export type Category = {
  slug: string
  name: string
  description: string
}

export const categories: Category[] = [
  {
    slug: "antibiotics",
    name: "Antibiotics",
    description: "Broad-spectrum therapies for bacterial infections.",
  },
  {
    slug: "cardiac-care",
    name: "Cardiac Care",
    description: "Cardiovascular formulations with proven efficacy.",
  },
  {
    slug: "gastro-health",
    name: "Gastro Health",
    description: "Digestive and gut wellness formulations.",
  },
  {
    slug: "neuro-care",
    name: "Neuro Care",
    description: "Neurology and mental wellness solutions.",
  },
  {
    slug: "pain-management",
    name: "Pain Management",
    description: "Analgesics and anti-inflammatory treatments.",
  },
  {
    slug: "nutraceuticals",
    name: "Nutraceuticals",
    description: "Vitamins, minerals, and wellness blends.",
  },
]
