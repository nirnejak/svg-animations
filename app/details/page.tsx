import * as React from "react"

import { type Metadata } from "next"

import * as motion from "framer-motion/client"

import DataChangeAlertIllustration from "components/illustration/DataChangeAlert"
import DataSourceConnectionIllustration from "components/illustration/DataSourceConnection"
import DataThresholdAlertIllustration from "components/illustration/DataThresholdAlert"
import GroupDashboardIllustration from "components/illustration/GroupDashboard"
import TimelyUpdatesIllustration from "components/illustration/TimelyUpdates"
import { gridContainerVariants, gridItemVariants } from "utils/animationConfig"
import { generateMetadata } from "utils/seo"

export const metadata: Metadata = generateMetadata({
  path: "/",
  title: "Details | SVG Animations",
  description: "SVG Animations with Framer Motion",
})

const Details: React.FC = () => {
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
        <div className="flex">
          <div className="m-auto">
            <DataSourceConnectionIllustration />
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={gridItemVariants}
        className="rounded-3xl bg-zinc-50 p-10"
      >
        <div className="flex">
          <div className="m-auto">
            <DataChangeAlertIllustration />
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={gridItemVariants}
        className="rounded-3xl bg-zinc-50 p-10"
      >
        <div className="flex">
          <div className="m-auto">
            <DataThresholdAlertIllustration />
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={gridItemVariants}
        className="rounded-3xl bg-zinc-50 p-10"
      >
        <div className="flex">
          <div className="m-auto">
            <TimelyUpdatesIllustration />
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={gridItemVariants}
        className="rounded-3xl bg-zinc-50 p-10"
      >
        <div className="flex">
          <div className="m-auto">
            <GroupDashboardIllustration />
          </div>
        </div>
      </motion.div>
    </motion.main>
  )
}

export default Details
