import * as React from "react"

import Head from "next/head"

import GridItem from "components/GridItem"
import AlertsIllustration from "components/illustration/Alerts"
import DashboardIllustration from "components/illustration/Dashboard"
import DataExportIllustration from "components/illustration/DataExport"
import PermissionsIllustration from "components/illustration/Permissions"
import QueryBuilderIllustration from "components/illustration/QueryBuilder"
import SavedQueryIllustration from "components/illustration/SavedQuery"
import SharingIllustration from "components/illustration/Sharing"
import VisualizeIllustration from "components/illustration/Visualize"

const Home = () => {
  return (
    <div>
      <Head>
        <title>SVG Animations</title>
        <meta name="description" content="SVG Animations with Framer Motion" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="grid min-h-screen grid-cols-3">
        <GridItem>
          <QueryBuilderIllustration />
        </GridItem>
        <GridItem>
          <DashboardIllustration />
        </GridItem>
        <GridItem>
          <VisualizeIllustration />
        </GridItem>
        <GridItem>
          <DataExportIllustration />
        </GridItem>
        <GridItem>
          <SavedQueryIllustration />
        </GridItem>
        <GridItem>
          <PermissionsIllustration />
        </GridItem>
        <GridItem>
          <AlertsIllustration />
        </GridItem>
        <GridItem>
          <SharingIllustration />
        </GridItem>
        <GridItem>
          <PermissionsIllustration />
        </GridItem>
      </main>
    </div>
  )
}

export default Home
