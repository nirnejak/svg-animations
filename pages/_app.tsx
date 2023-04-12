import * as React from "react"

import type { AppProps } from "next/app"

import Header from "components/Header"

import "../styles/main.css"

const MyApp: React.FC<AppProps> = (props) => {
  const { Component, pageProps } = props

  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
