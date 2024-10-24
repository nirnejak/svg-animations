import * as React from "react"

import { type Metadata } from "next"

import DetailsGallery from "components/DetailsGallery"
import { generateMetadata } from "utils/seo"

export const metadata: Metadata = generateMetadata({
  path: "/details/",
  title: "Details | SVG Animations",
  description: "SVG Animations with Framer Motion",
})

const Details: React.FC = () => {
  return <DetailsGallery />
}

export default Details
