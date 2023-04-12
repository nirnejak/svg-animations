import * as React from "react"

import Head from "next/head"

import GridItemWrapper from "components/GridItemWrapper"
import DraxlrInSlackIllustration from "components/illustration/DraxlrInSlack"
import SetAlertsIllustration from "components/illustration/SetAlerts"

const Other: React.FC = () => {
  return (
    <div>
      <Head>
        <title>SVG Animations</title>
        <meta name="description" content="SVG Animations with Framer Motion" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="grid min-h-screen grid-cols-3">
        <GridItemWrapper>
          <SetAlertsIllustration />
        </GridItemWrapper>
        <GridItemWrapper>
          <DraxlrInSlackIllustration />
        </GridItemWrapper>
      </main>
    </div>
  )
}

export default Other
