import * as React from "react"

import { motion } from "framer-motion"

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

const GridItemWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <motion.div variants={item} className="rounded-3xl bg-zinc-50 p-10">
    {children}
  </motion.div>
)

export default GridItemWrapper
