import * as React from "react"

import { type Metadata } from "next"

import HomeGallery from "components/HomeGallery"
import { generateMetadata } from "utils/seo"

export const metadata: Metadata = generateMetadata({
  path: "/",
  title: "SVG Animations",
  description: "SVG Animations with Framer Motion",
})

const Home: React.FC = () => {
  return <HomeGallery />
}

export default Home
