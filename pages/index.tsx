import * as React from "react"

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

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>SVG Animations</title>
        <meta name="description" content="SVG Animations with Framer Motion" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="grid min-h-screen grid-cols-3">
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
      </main>
    </div>
  )
}

export default Home
