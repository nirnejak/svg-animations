"use client"
import * as React from "react"

import { motion } from "framer-motion"

import Modal, { useModal } from "./Modal"
import ExpandButton from "components/ExpandButton"
import AlertsIllustration from "components/illustration/Alerts"
import DashboardIllustration from "components/illustration/Dashboard"
import DataExportIllustration from "components/illustration/DataExport"
import PermissionsIllustration from "components/illustration/Permissions"
import QueryBuilderIllustration from "components/illustration/QueryBuilder"
import SavedQueryIllustration from "components/illustration/SavedQuery"
import SharingIllustration from "components/illustration/Sharing"
import VisualizeIllustration from "components/illustration/Visualize"
import { gridContainerVariants, gridItemVariants } from "utils/animationConfig"

const HomeGallery: React.FC = () => {
  const [isOpen, setIsOpen, content, setContent] = useModal()

  return (
    <>
      <motion.main
        variants={gridContainerVariants}
        initial="hidden"
        animate="visible"
        className="mb-20 grid min-h-screen grid-cols-1 gap-3 p-3 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"
      >
        <motion.div
          variants={gridItemVariants}
          className="relative rounded-3xl bg-zinc-50 p-10"
        >
          <QueryBuilderIllustration />
          <ExpandButton
            isExpanded={isOpen}
            onClick={() => {
              setIsOpen(!isOpen)
              setContent(<QueryBuilderIllustration isExpanded />)
            }}
          />
        </motion.div>
        <motion.div
          variants={gridItemVariants}
          className="relative rounded-3xl bg-zinc-50 p-10"
        >
          <VisualizeIllustration />
          <ExpandButton
            isExpanded={isOpen}
            onClick={() => {
              setIsOpen(!isOpen)
              setContent(<VisualizeIllustration isExpanded />)
            }}
          />
        </motion.div>
        <motion.div
          variants={gridItemVariants}
          className="relative rounded-3xl bg-zinc-50 p-10"
        >
          <SavedQueryIllustration />
          <ExpandButton
            isExpanded={isOpen}
            onClick={() => {
              setIsOpen(!isOpen)
              setContent(<SavedQueryIllustration isExpanded />)
            }}
          />
        </motion.div>
        <motion.div
          variants={gridItemVariants}
          className="relative rounded-3xl bg-zinc-50 p-10"
        >
          <DataExportIllustration />
          <ExpandButton
            isExpanded={isOpen}
            onClick={() => {
              setIsOpen(!isOpen)
              setContent(<DataExportIllustration isExpanded />)
            }}
          />
        </motion.div>
        <motion.div
          variants={gridItemVariants}
          className="relative rounded-3xl bg-zinc-50 p-10"
        >
          <PermissionsIllustration />
          <ExpandButton
            isExpanded={isOpen}
            onClick={() => {
              setIsOpen(!isOpen)
              setContent(<PermissionsIllustration isExpanded />)
            }}
          />
        </motion.div>
        <motion.div
          variants={gridItemVariants}
          className="relative rounded-3xl bg-zinc-50 p-10"
        >
          <PermissionsIllustration />
          <ExpandButton
            isExpanded={isOpen}
            onClick={() => {
              setIsOpen(!isOpen)
              setContent(<PermissionsIllustration isExpanded />)
            }}
          />
        </motion.div>
        <motion.div
          variants={gridItemVariants}
          className="relative rounded-3xl bg-zinc-50 p-10"
        >
          <DashboardIllustration />
          <ExpandButton
            isExpanded={isOpen}
            onClick={() => {
              setIsOpen(!isOpen)
              setContent(<DashboardIllustration isExpanded />)
            }}
          />
        </motion.div>
        <motion.div
          variants={gridItemVariants}
          className="relative rounded-3xl bg-zinc-50 p-10"
        >
          <AlertsIllustration />
          <ExpandButton
            isExpanded={isOpen}
            onClick={() => {
              setIsOpen(!isOpen)
              setContent(<AlertsIllustration isExpanded />)
            }}
          />
        </motion.div>
        <motion.div
          variants={gridItemVariants}
          className="relative rounded-3xl bg-zinc-50 p-10"
        >
          <SharingIllustration />
          <ExpandButton
            isExpanded={isOpen}
            onClick={() => {
              setIsOpen(!isOpen)
              setContent(<QueryBuilderIllustration isExpanded />)
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

export default HomeGallery
