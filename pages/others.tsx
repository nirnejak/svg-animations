import * as React from "react"

import { motion } from "framer-motion"
import Head from "next/head"

import GridItemWrapper from "components/GridItemWrapper"
import SetAlertsIllustration from "components/illustration/SetAlerts"
import SlackAlertIllustration from "components/illustration/SlackAlert"
import { gridContainer } from "utils/animationConfig"

const Other: React.FC = () => {
  return (
    <div>
      <Head>
        <title>SVG Animations</title>
        <meta name="description" content="SVG Animations with Framer Motion" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <motion.main
        variants={gridContainer}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 gap-3 p-3 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"
      >
        <GridItemWrapper>
          <SetAlertsIllustration />
        </GridItemWrapper>
        <GridItemWrapper>
          <SlackAlertIllustration />
        </GridItemWrapper>
      </motion.main>
    </div>
  )
}

export default Other
