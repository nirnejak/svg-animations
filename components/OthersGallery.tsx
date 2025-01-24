"use client"
import * as React from "react"

import * as Tooltip from "@radix-ui/react-tooltip"
import { motion } from "framer-motion"

import Modal, { useModal } from "./Modal"
import ExpandButton from "@/components/ExpandButton"
import SetAlertsIllustration from "@/components/illustration/SetAlerts"
import SlackAlertIllustration from "@/components/illustration/SlackAlert"
import {
  gridContainerVariants,
  gridItemVariants,
} from "@/utils/animationConfig"

const components = [SetAlertsIllustration, SlackAlertIllustration]

const OthersGallery: React.FC = () => {
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
            className="shadow-card relative rounded-3xl bg-zinc-50 p-10"
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

export default OthersGallery
