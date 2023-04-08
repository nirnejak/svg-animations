import * as React from "react"

import Head from "next/head"

import GridItemWrapper from "components/GridItemWrapper"
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
        <GridItemWrapper>
          <SetAlertsIllustration />
        </GridItemWrapper>
        <GridItemWrapper>
          <DraxlrInSlackIllustration />
        </GridItemWrapper>
      </main>
      <main className="grid grid-cols-3">
        <GridItemWrapper>
          <div className="flex">
            <div className="m-auto">
              <DataSourceConnectionIllustration />
            </div>
          </div>
        </GridItemWrapper>
        <GridItemWrapper>
          <div className="flex">
            <div className="m-auto">
              <DataChangeAlertIllustration />
            </div>
          </div>
        </GridItemWrapper>
        <GridItemWrapper>
          <div className="flex">
            <div className="m-auto">
              <DataThresholdAlertIllustration />
            </div>
          </div>
        </GridItemWrapper>
        <GridItemWrapper>
          <div className="flex">
            <div className="m-auto">
              <TimelyUpdatesIllustration />
            </div>
          </div>
        </GridItemWrapper>
        <GridItemWrapper>
          <div className="flex">
            <div className="m-auto">
              <GroupDashboardIllustration />
            </div>
          </div>
        </GridItemWrapper>
      </main>
    </div>
  )
}

export default Other
