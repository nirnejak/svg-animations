"use client"
import * as React from "react"

import { AnimatePresence, motion } from "framer-motion"

import ExpandButton from "./ExpandButton"

interface Props {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

const Modal: React.FC<Props> = ({ isOpen, onClose, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ translateY: 10, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          exit={{ translateY: 10, opacity: 0 }}
          className="fixed left-0 top-0 z-10 grid h-screen w-screen place-content-center bg-zinc-100/80 backdrop-blur"
          onClick={() => {
            onClose()
          }}
        >
          {children}
          <ExpandButton
            isOpen={isOpen}
            onClick={() => {
              onClose()
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Modal
