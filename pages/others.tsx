import * as React from "react"

import Head from "next/head"

import GridItem from "components/GridItem"
import DataChangeAlertIllustration from "components/illustration/DataChangeAlert"
import DataSourceConnectionIllustration from "components/illustration/DataSourceConnection"
import DataThresholdAlertIllustration from "components/illustration/DataThresholdAlert"
import DraxlrInSlackIllustration from "components/illustration/DraxlrInSlack"
import GroupDashboardIllustration from "components/illustration/GroupDashboard"
import SetAlertsIllustration from "components/illustration/SetAlerts"
import TimelyUpdatesIllustration from "components/illustration/TimelyUpdates"

const Other = () => {
  return (
    <div>
      <Head>
        <title>SVG Animations</title>
        <meta name="description" content="SVG Animations with Framer Motion" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="grid min-h-screen grid-cols-3">
        <GridItem>
          <SetAlertsIllustration />
        </GridItem>
        <GridItem>
          <DraxlrInSlackIllustration />
        </GridItem>
      </main>
      <main className="grid grid-cols-3">
        <GridItem>
          <div className="flex">
            <div className="m-auto">
              <DataSourceConnectionIllustration />
            </div>
          </div>
        </GridItem>
        <GridItem>
          <div className="flex">
            <div className="m-auto">
              <DataChangeAlertIllustration />
            </div>
          </div>
        </GridItem>
        <GridItem>
          <div className="flex">
            <div className="m-auto">
              <DataThresholdAlertIllustration />
            </div>
          </div>
        </GridItem>
        <GridItem>
          <div className="flex">
            <div className="m-auto">
              <TimelyUpdatesIllustration />
            </div>
          </div>
        </GridItem>
        <GridItem>
          <div className="flex">
            <div className="m-auto">
              <GroupDashboardIllustration />
            </div>
          </div>
        </GridItem>
      </main>
    </div>
  )
}

export default Other
