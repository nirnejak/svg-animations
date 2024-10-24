import * as React from "react"

import { type Metadata } from "next"

import OthersGallery from "components/OthersGallery"
import { generateMetadata } from "utils/seo"

export const metadata: Metadata = generateMetadata({
  path: "/others/",
  title: "Others | SVG Animations",
  description: "SVG Animations with Framer Motion",
})

const Others: React.FC = () => {
  return <OthersGallery />
}

export default Others
