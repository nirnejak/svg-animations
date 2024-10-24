import * as React from "react"

import type { AppProps } from "next/app"
import localFont from "next/font/local"

import Footer from "components/Footer"
import Header from "components/Header"
import classNames from "utils/classNames"

import "../styles/main.css"

const satoshi = localFont({
  variable: "--font-sans",
  src: [
    {
      path: "../fonts/Satoshi-Variable.woff2",
      style: "normal",
    },
    {
      path: "../fonts/Satoshi-VariableItalic.woff2",
      style: "italic",
    },
  ],
})

const MyApp: React.FC<AppProps> = (props) => {
  const { Component, pageProps } = props

  return (
    <main className={classNames(satoshi.variable, "font-sans")}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </main>
  )
}

export default MyApp
