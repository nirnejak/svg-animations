import * as React from "react"

import { type Metadata } from "next"

import { generateMetadata } from "@/utils/seo"
import DetailsGallery from "@/components/DetailsGallery"

export const metadata: Metadata = generateMetadata({
  path: "/details/",
  title: "Details | SVG Animations",
  description: "SVG Animations with Framer Motion",
})

const Details: React.FC = () => {
  return <DetailsGallery />
}

export default Details
