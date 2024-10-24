import * as React from "react"

import { type Metadata } from "next"

import * as motion from "framer-motion/client"

import SetAlertsIllustration from "components/illustration/SetAlerts"
import SlackAlertIllustration from "components/illustration/SlackAlert"
import { gridContainerVariants, gridItemVariants } from "utils/animationConfig"
import { generateMetadata } from "utils/seo"

export const metadata: Metadata = generateMetadata({
  path: "/others/",
  title: "Others | SVG Animations",
  description: "SVG Animations with Framer Motion",
})

const Others: React.FC = () => {
  return (
    <motion.main
      variants={gridContainerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 gap-3 p-3 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"
    >
      <motion.div
        variants={gridItemVariants}
        className="rounded-3xl bg-zinc-50 p-10"
      >
        <SetAlertsIllustration />
      </motion.div>
      <motion.div
        variants={gridItemVariants}
        className="rounded-3xl bg-zinc-50 p-10"
      >
        <SlackAlertIllustration />
      </motion.div>
    </motion.main>
  )
}

export default Others
