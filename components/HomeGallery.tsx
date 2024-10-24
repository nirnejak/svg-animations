"use client"
import * as React from "react"

import { AnimatePresence } from "framer-motion"
import * as motion from "framer-motion/client"

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
  const [isOpen, setIsOpen] = React.useState(false)
  const [content, setContent] = React.useState<React.ReactNode>(null)

  React.useEffect(() => {
    const handleEsc = (event: KeyboardEvent): void => {
      if (event.key === "Escape") {
        setIsOpen(false)
        setContent(null)
      }
    }

    if (isOpen) {
      document.body.style.overflowY = "hidden"
      document.addEventListener("keydown", handleEsc)
    }

    return () => {
      document.body.style.overflowY = "unset"
      document.removeEventListener("keydown", handleEsc)
    }
  }, [isOpen, setIsOpen])

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
            isOpen={isOpen}
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
            isOpen={isOpen}
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
            isOpen={isOpen}
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
            isOpen={isOpen}
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
            isOpen={isOpen}
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
            isOpen={isOpen}
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
            isOpen={isOpen}
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
            isOpen={isOpen}
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
            isOpen={isOpen}
            onClick={() => {
              setIsOpen(!isOpen)
              setContent(<QueryBuilderIllustration isExpanded />)
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

export default HomeGallery