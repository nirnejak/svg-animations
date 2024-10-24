"use client"
import * as React from "react"

import { motion } from "framer-motion"

import Modal, { useModal } from "./Modal"
import ExpandButton from "components/ExpandButton"
import SetAlertsIllustration from "components/illustration/SetAlerts"
import SlackAlertIllustration from "components/illustration/SlackAlert"
import { gridContainerVariants, gridItemVariants } from "utils/animationConfig"

const OthersGallery: React.FC = () => {
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
          className="relative rounded-3xl bg-zinc-50 p-10"
        >
          <SetAlertsIllustration />
          <ExpandButton
            isOpen={isOpen}
            onClick={() => {
              setIsOpen(!isOpen)
              setContent(<SetAlertsIllustration isExpanded />)
            }}
          />
        </motion.div>
        <motion.div
          variants={gridItemVariants}
          className="relative rounded-3xl bg-zinc-50 p-10"
        >
          <SlackAlertIllustration />
          <ExpandButton
            isOpen={isOpen}
            onClick={() => {
              setIsOpen(!isOpen)
              setContent(<SlackAlertIllustration isExpanded />)
            }}
          />
        </motion.div>
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
    </>
  )
}

export default OthersGallery
