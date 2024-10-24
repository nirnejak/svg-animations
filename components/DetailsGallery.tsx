"use client"
import * as React from "react"

import { AnimatePresence, motion } from "framer-motion"

import ExpandButton from "components/ExpandButton"
import DataChangeAlertIllustration from "components/illustration/DataChangeAlert"
import DataSourceConnectionIllustration from "components/illustration/DataSourceConnection"
import DataThresholdAlertIllustration from "components/illustration/DataThresholdAlert"
import GroupDashboardIllustration from "components/illustration/GroupDashboard"
import TimelyUpdatesIllustration from "components/illustration/TimelyUpdates"
import useModal from "hooks/useModal"
import { gridContainerVariants, gridItemVariants } from "utils/animationConfig"

const DetailsGallery: React.FC = () => {
  const [isOpen, setIsOpen, content, setContent] = useModal()

  return (
    <>
      <motion.main
        variants={gridContainerVariants}
        initial="hidden"
        animate="visible"
        className="mb-20 grid grid-cols-1 gap-3 p-3 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"
      >
        <motion.div
          variants={gridItemVariants}
          className="relative rounded-3xl bg-zinc-50 p-20"
        >
          <DataSourceConnectionIllustration />
          <ExpandButton
            isOpen={isOpen}
            onClick={() => {
              setIsOpen(!isOpen)
              setContent(<DataSourceConnectionIllustration isExpanded />)
            }}
          />
        </motion.div>
        <motion.div
          variants={gridItemVariants}
          className="relative rounded-3xl bg-zinc-50 p-20"
        >
          <DataChangeAlertIllustration />
          <ExpandButton
            isOpen={isOpen}
            onClick={() => {
              setIsOpen(!isOpen)
              setContent(<DataChangeAlertIllustration isExpanded />)
            }}
          />
        </motion.div>
        <motion.div
          variants={gridItemVariants}
          className="relative rounded-3xl bg-zinc-50 p-20"
        >
          <DataThresholdAlertIllustration />
          <ExpandButton
            isOpen={isOpen}
            onClick={() => {
              setIsOpen(!isOpen)
              setContent(<DataThresholdAlertIllustration isExpanded />)
            }}
          />
        </motion.div>
        <motion.div
          variants={gridItemVariants}
          className="relative rounded-3xl bg-zinc-50 p-20"
        >
          <TimelyUpdatesIllustration />
          <ExpandButton
            isOpen={isOpen}
            onClick={() => {
              setIsOpen(!isOpen)
              setContent(<TimelyUpdatesIllustration isExpanded />)
            }}
          />
        </motion.div>
        <motion.div
          variants={gridItemVariants}
          className="relative rounded-3xl bg-zinc-50 p-20"
        >
          <GroupDashboardIllustration />
          <ExpandButton
            isOpen={isOpen}
            onClick={() => {
              setIsOpen(!isOpen)
              setContent(<GroupDashboardIllustration isExpanded />)
            }}
          />
        </motion.div>
      </motion.main>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ translateY: 10, opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            exit={{ translateY: 10, opacity: 0 }}
            className="fixed left-0 top-0 z-10 grid h-screen w-screen place-content-center bg-zinc-100/80 backdrop-blur"
            onClick={() => {
              setIsOpen(!isOpen)
              setContent(null)
            }}
          >
            {content}
            <ExpandButton
              isOpen={isOpen}
              onClick={() => {
                setIsOpen(!isOpen)
                setContent(null)
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default DetailsGallery
