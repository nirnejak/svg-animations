import React from "react"

import { motion } from "framer-motion"

const Footer: React.FC = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, translateY: 50, translateX: "-50%" }}
      animate={{ opacity: 1, translateY: 0, translateX: "-50%" }}
      transition={{ delay: 3 }}
      className="fixed bottom-5 left-1/2 w-[calc(100vw-30px)] -translate-x-1/2 rounded-md bg-white px-3 py-2 text-center text-sm text-gray-700 shadow-lg md:w-max"
    >
      Designed in <strong>Figma</strong>, animated with{" "}
      <strong>Framer Motion</strong> by{" "}
      <a
        className="font-bold underline"
        target="_blank"
        href="https://nirnejak.com/"
      >
        nirnejak
      </a>
    </motion.footer>
  )
}

export default Footer
