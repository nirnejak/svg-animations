import * as React from "react"

import type { Viewport } from "next"

import localFont from "next/font/local"

import Footer from "components/Footer"
import Header from "components/Header"
import classNames from "utils/classNames"
import { renderSchemaTags } from "utils/schema"

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
    <html lang="en">
      <head>
        {renderSchemaTags()}

        <script
          defer
          data-domain="svg-animations-gallery.vercel.app"
          src="https://plausible.io/js/script.js"
        />
      </head>

      <body
        className={classNames(
          sansFont.variable,
          "overflow-x-hidden font-sans bg-zinc-100"
        )}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout
