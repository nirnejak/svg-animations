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
            isExpanded={isOpen}
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

export const useModal = (): [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>,
  React.ReactNode,
  React.Dispatch<React.SetStateAction<React.ReactNode>>,
] => {
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

  return [isOpen, setIsOpen, content, setContent]
}
