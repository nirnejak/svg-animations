import * as React from "react"

import { motion } from "framer-motion"
import Head from "next/head"

import GridItemWrapper from "components/GridItemWrapper"
import AlertsIllustration from "components/illustration/Alerts"
import DashboardIllustration from "components/illustration/Dashboard"
import DataExportIllustration from "components/illustration/DataExport"
import PermissionsIllustration from "components/illustration/Permissions"
import QueryBuilderIllustration from "components/illustration/QueryBuilder"
import SavedQueryIllustration from "components/illustration/SavedQuery"
import SharingIllustration from "components/illustration/Sharing"
import VisualizeIllustration from "components/illustration/Visualize"
import { gridContainer } from "utils/animationConfig"

const Home: React.FC = () => {
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
        className="mb-20 grid min-h-screen grid-cols-1 gap-3 p-3 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"
      >
        <GridItemWrapper>
          <QueryBuilderIllustration />
        </GridItemWrapper>
        <GridItemWrapper>
          <DashboardIllustration />
        </GridItemWrapper>
        <GridItemWrapper>
          <VisualizeIllustration />
        </GridItemWrapper>
        <GridItemWrapper>
          <DataExportIllustration />
        </GridItemWrapper>
        <GridItemWrapper>
          <SavedQueryIllustration />
        </GridItemWrapper>
        <GridItemWrapper>
          <PermissionsIllustration />
        </GridItemWrapper>
        <GridItemWrapper>
          <AlertsIllustration />
        </GridItemWrapper>
        <GridItemWrapper>
          <SharingIllustration />
        </GridItemWrapper>
        <GridItemWrapper>
          <PermissionsIllustration />
        </GridItemWrapper>
      </motion.main>
    </div>
  )
}

export default Home
