import * as React from "react"

import { type Metadata } from "next"

import * as motion from "framer-motion/client"

import AlertsIllustration from "components/illustration/Alerts"
import DashboardIllustration from "components/illustration/Dashboard"
import DataExportIllustration from "components/illustration/DataExport"
import PermissionsIllustration from "components/illustration/Permissions"
import QueryBuilderIllustration from "components/illustration/QueryBuilder"
import SavedQueryIllustration from "components/illustration/SavedQuery"
import SharingIllustration from "components/illustration/Sharing"
import VisualizeIllustration from "components/illustration/Visualize"
import { gridContainerVariants, gridItemVariants } from "utils/animationConfig"
import { generateMetadata } from "utils/seo"

export const metadata: Metadata = generateMetadata({
  path: "/",
  title: "SVG Animations",
  description: "SVG Animations with Framer Motion",
})

const Home: React.FC = () => {
  return (
    <motion.main
      variants={gridContainerVariants}
      initial="hidden"
      animate="visible"
      className="mb-20 grid min-h-screen grid-cols-1 gap-3 p-3 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"
    >
      <motion.div
        variants={gridItemVariants}
        className="rounded-3xl bg-zinc-50 p-10"
      >
        <QueryBuilderIllustration />
      </motion.div>
      <motion.div
        variants={gridItemVariants}
        className="rounded-3xl bg-zinc-50 p-10"
      >
        <VisualizeIllustration />
      </motion.div>
      <motion.div
        variants={gridItemVariants}
        className="rounded-3xl bg-zinc-50 p-10"
      >
        <SavedQueryIllustration />
      </motion.div>
      <motion.div
        variants={gridItemVariants}
        className="rounded-3xl bg-zinc-50 p-10"
      >
        <DataExportIllustration />
      </motion.div>
      <motion.div
        variants={gridItemVariants}
        className="rounded-3xl bg-zinc-50 p-10"
      >
        <PermissionsIllustration />
      </motion.div>
      <motion.div
        variants={gridItemVariants}
        className="rounded-3xl bg-zinc-50 p-10"
      >
        <PermissionsIllustration />
      </motion.div>
      <motion.div
        variants={gridItemVariants}
        className="rounded-3xl bg-zinc-50 p-10"
      >
        <DashboardIllustration />
      </motion.div>
      <motion.div
        variants={gridItemVariants}
        className="rounded-3xl bg-zinc-50 p-10"
      >
        <AlertsIllustration />
      </motion.div>
      <motion.div
        variants={gridItemVariants}
        className="rounded-3xl bg-zinc-50 p-10"
      >
        <SharingIllustration />
      </motion.div>
    </motion.main>
  )
}

export default Home
