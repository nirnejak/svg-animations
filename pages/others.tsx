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

      <main className="mb-4 mt-10 grid grid-cols-1 gap-3 px-3 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
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
