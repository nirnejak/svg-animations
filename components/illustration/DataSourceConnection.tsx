"use client"
import * as React from "react"

import { motion, useAnimation } from "framer-motion"

import PlayButton from "components/PlayButton"
import classNames from "utils/classNames"

const DataSourceConnection: React.FC<{ isExpanded?: boolean }> = ({
  isExpanded = false,
}) => {
  const controls = useAnimation()

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  const circleVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
  }

  const rectangleVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, originX: 0, originY: 0 },
  }

  const sector3Variants = {
    hidden: { scale: 0 },
    visible: { scale: 1, originX: 0, originY: 1 },
  }

  const playAnimation = (): void => {
    controls.set("hidden")
    controls.start("visible").catch((err) => {
      console.log(err)
    })
  }

  return (
    <div className={classNames(isExpanded ? "w-[700px]" : "w-full")}>
      <motion.svg
        viewBox="0 0 286 170"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.rect
          x="172"
          y="44"
          width="114"
          height="75.2252"
          rx="10"
          fill="#F1F1F1"
          initial={"visible"}
          animate={controls}
          variants={sector3Variants}
          transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
        />
        <motion.rect
          x="172"
          y="44.5498"
          width="114"
          height="10"
          fill="#DDDDDD"
          initial={"visible"}
          animate={controls}
          variants={rectangleVariants}
          transition={{ duration: 0.5, ease: "easeOut", delay: 1.2 }}
        />
        <motion.circle
          cx="229"
          cy="83.5498"
          r="15"
          fill="#00D09F"
          initial={"visible"}
          animate={controls}
          variants={circleVariants}
          transition={{ duration: 0.5, ease: "easeOut", delay: 1.5 }}
        />
        <motion.path
          d="M222.474 84.8548C220.89 83.1684 223.326 80.6523 225.085 82.2486C225.704 82.8057 226.602 83.6201 227.225 84.174L232.234 78.1253C233.915 76.4031 236.568 78.9311 234.91 80.6621L228.666 88.0062C228.492 88.1879 228.283 88.3327 228.051 88.4319C227.819 88.531 227.569 88.5823 227.316 88.5828H227.294C226.848 88.5838 226.417 88.4187 226.088 88.1202C225.047 87.1646 223.556 85.7627 222.48 84.8624L222.474 84.8548Z"
          fill="white"
          initial={"visible"}
          animate={controls}
          variants={contentVariants}
          transition={{ duration: 0.5, ease: "easeOut", delay: 1.6 }}
        />
        <motion.path
          d="M132.812 24.2858V39.4642C132.812 52.8405 103.068 63.75 66.4062 63.75C29.7444 63.75 0 52.8405 0 39.4642V24.2858C0 10.9096 29.7444 0 66.4062 0C103.068 0 132.812 10.9096 132.812 24.2858ZM132.812 58.4375V92.5892C132.812 105.965 103.068 116.875 66.4062 116.875C29.7444 116.875 0 105.965 0 92.5892V58.4375C14.267 69.442 40.3797 74.5649 66.4062 74.5649C92.4328 74.5649 118.545 69.442 132.812 58.4375ZM132.812 111.562V145.714C132.812 159.09 103.068 170 66.4062 170C29.7444 170 0 159.09 0 145.714V111.562C14.267 122.567 40.3797 127.69 66.4062 127.69C92.4328 127.69 118.545 122.567 132.812 111.562Z"
          fill="#F1F1F1"
          initial={"visible"}
          animate={controls}
          variants={circleVariants}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <motion.rect
          x="133"
          y="82"
          width="39"
          height="6"
          fill="#00D09F"
          initial={"visible"}
          animate={controls}
          variants={rectangleVariants}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.8 }}
        />
        <motion.path
          d="M133 77H136.5C138.433 77 140 78.567 140 80.5V88.5C140 90.433 138.433 92 136.5 92H133V77Z"
          fill="#00D09F"
          initial={"visible"}
          animate={controls}
          variants={circleVariants}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
        />
      </motion.svg>
      <PlayButton
        isExpanded={isExpanded}
        onClick={() => {
          playAnimation()
        }}
      />
    </div>
  )
}

export default DataSourceConnection
