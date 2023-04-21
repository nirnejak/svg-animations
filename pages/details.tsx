import * as React from "react"

import Head from "next/head"

import GridItemWrapper from "components/GridItemWrapper"
import DataChangeAlertIllustration from "components/illustration/DataChangeAlert"
import DataSourceConnectionIllustration from "components/illustration/DataSourceConnection"
import DataThresholdAlertIllustration from "components/illustration/DataThresholdAlert"
import GroupDashboardIllustration from "components/illustration/GroupDashboard"
import TimelyUpdatesIllustration from "components/illustration/TimelyUpdates"

const Other: React.FC = () => {
  return (
    <div>
      <Head>
        <title>SVG Animations</title>
        <meta name="description" content="SVG Animations with Framer Motion" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mb-4 mt-10 grid grid-cols-1 gap-3 px-3 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
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
