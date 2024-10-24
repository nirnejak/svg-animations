import * as React from "react"

import { motion } from "framer-motion"
import Head from "next/head"

import AlertsIllustration from "components/illustration/Alerts"
import DashboardIllustration from "components/illustration/Dashboard"
import DataExportIllustration from "components/illustration/DataExport"
import PermissionsIllustration from "components/illustration/Permissions"
import QueryBuilderIllustration from "components/illustration/QueryBuilder"
import SavedQueryIllustration from "components/illustration/SavedQuery"
import SharingIllustration from "components/illustration/Sharing"
import VisualizeIllustration from "components/illustration/Visualize"
import { gridContainerVariants, gridItemVariants } from "utils/animationConfig"

const Home: React.FC = () => {
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
    </div>
  )
}

export default Home
