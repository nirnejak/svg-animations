import * as React from "react"

import type { Viewport } from "next"

import localFont from "next/font/local"

import { renderSchemaTags } from "@/utils/schema"
import Header from "@/components/Header"

import "../styles/main.css"

const sansFont = localFont({
  variable: "--font-sans",
  src: [
    {
      path: "../fonts/Satoshi-Variable.woff2",
      weight: "300 800",
      style: "normal",
    },
    {
      path: "../fonts/Satoshi-VariableItalic.woff2",
      weight: "300 800",
      style: "italic",
    },
  ],
})

export const viewport: Viewport = {
  themeColor: "#000000",
}

interface Props {
  children: React.ReactNode
}

const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <html lang="en" className={sansFont.variable}>
      <head>
        {renderSchemaTags()}

        <script
          defer
          data-domain="svg-animations-gallery.vercel.app"
          src="https://plausible.io/js/script.js"
        />
      </head>

      <body className="overflow-x-hidden bg-zinc-100 font-sans">
        <Header />
        {children}
      </body>
    </html>
  )
}

export default RootLayout
