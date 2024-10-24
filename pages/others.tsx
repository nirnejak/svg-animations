import * as React from "react"

import { motion } from "framer-motion"
import Head from "next/head"

import SetAlertsIllustration from "components/illustration/SetAlerts"
import SlackAlertIllustration from "components/illustration/SlackAlert"
import { gridContainerVariants, itemVariants } from "utils/animationConfig"

const Other: React.FC = () => {
  return (
    <div>
      <Head>
        <title>SVG Animations</title>
        <meta name="description" content="SVG Animations with Framer Motion" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <motion.main
        variants={gridContainerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 gap-3 p-3 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"
      >
        <motion.div
          variants={itemVariants}
          className="rounded-3xl bg-zinc-50 p-10"
        >
          <SetAlertsIllustration />
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="rounded-3xl bg-zinc-50 p-10"
        >
          <SlackAlertIllustration />
        </motion.div>
      </motion.main>
    </div>
  )
}

export default Other
