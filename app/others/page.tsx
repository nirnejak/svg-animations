import * as React from "react"

import { type Metadata } from "next"

import { generateMetadata } from "@/utils/seo"
import OthersGallery from "@/components/OthersGallery"

export const metadata: Metadata = generateMetadata({
  path: "/others/",
  title: "Others | SVG Animations",
  description: "SVG Animations with Framer Motion",
})

const Others: React.FC = () => {
  return <OthersGallery />
}

export default Others
