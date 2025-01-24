"use client"
import * as React from "react"

import * as Tooltip from "@radix-ui/react-tooltip"
import { motion } from "framer-motion"

import Modal, { useModal } from "./Modal"
import ExpandButton from "@/components/ExpandButton"
import DataChangeAlertIllustration from "@/components/illustration/DataChangeAlert"
import DataSourceConnectionIllustration from "@/components/illustration/DataSourceConnection"
import DataThresholdAlertIllustration from "@/components/illustration/DataThresholdAlert"
import GroupDashboardIllustration from "@/components/illustration/GroupDashboard"
import TimelyUpdatesIllustration from "@/components/illustration/TimelyUpdates"
import {
  gridContainerVariants,
  gridItemVariants,
} from "@/utils/animationConfig"

const components = [
  DataSourceConnectionIllustration,
  DataChangeAlertIllustration,
  DataThresholdAlertIllustration,
  TimelyUpdatesIllustration,
  GroupDashboardIllustration,
]

const DetailsGallery: React.FC = () => {
  const [isOpen, setIsOpen, content, setContent] = useModal()

  return (
    <Tooltip.Provider delayDuration={200}>
      <motion.main
        variants={gridContainerVariants}
        initial="hidden"
        animate="visible"
        className="mb-20 grid grid-cols-1 gap-3 p-3 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"
      >
        {components.map((AnimatedComponent, index) => (
          <motion.div
            key={index}
            variants={gridItemVariants}
            className="shadow-card relative rounded-3xl bg-zinc-50 p-20"
          >
            <AnimatedComponent />
            <ExpandButton
              isExpanded={isOpen}
              onClick={() => {
                setIsOpen(!isOpen)
                setContent(<AnimatedComponent isExpanded />)
              }}
            />
          </motion.div>
        ))}
      </motion.main>

      <Modal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(!isOpen)
          setContent(null)
        }}
      >
        {content}
      </Modal>
    </Tooltip.Provider>
  )
}

export default DetailsGallery
