"use client"
import * as React from "react"

import { motion, useAnimation } from "framer-motion"

import PlayButton from "components/PlayButton"
import classNames from "utils/classNames"

const DataChangeAlert: React.FC<{ isExpanded?: boolean }> = ({
  isExpanded = false,
}) => {
  const controls = useAnimation()

  const rectangleVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, originX: 0, originY: 0 },
  }

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
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
        width="286"
        height="170"
        viewBox="0 0 286 170"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.rect
          width="286"
          height="170"
          rx="15"
          fill="#F1F1F1"
          initial={"visible"}
          animate={controls}
          variants={rectangleVariants}
          transition={{ duration: 0.7, ease: "easeOut" }}
        />
        <motion.rect
          x="20"
          y="20"
          width="60"
          height="11"
          rx="5.5"
          fill="#DDDDDD"
          initial={"visible"}
          animate={controls}
          variants={sector3Variants}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.7 }}
        />
        <motion.rect
          x="20"
          y="57.1428"
          width="47.223"
          height="9.28572"
          rx="4.64286"
          fill="white"
          initial={"visible"}
          animate={controls}
          variants={sector3Variants}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.75 }}
        />
        <motion.rect
          x="121.033"
          y="57.1428"
          width="35.1427"
          height="9.28572"
          rx="4.64286"
          fill="white"
          initial={"visible"}
          animate={controls}
          variants={sector3Variants}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.77 }}
        />
        <motion.rect
          x="175.947"
          y="57.1428"
          width="35.1427"
          height="9.28572"
          rx="4.64286"
          fill="white"
          initial={"visible"}
          animate={controls}
          variants={sector3Variants}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.78 }}
        />
        <motion.rect
          x="230.857"
          y="57.1428"
          width="35.1427"
          height="9.28572"
          rx="4.64286"
          fill="white"
          initial={"visible"}
          animate={controls}
          variants={sector3Variants}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.79 }}
        />
        <motion.rect
          x="121.033"
          y="85"
          width="35.1427"
          height="9.28572"
          rx="4.64286"
          fill="white"
          initial={"visible"}
          animate={controls}
          variants={sector3Variants}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.8 }}
        />
        <motion.rect
          x="175.947"
          y="85"
          width="35.1427"
          height="9.28572"
          rx="4.64286"
          fill="white"
          initial={"visible"}
          animate={controls}
          variants={sector3Variants}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.81 }}
        />
        <motion.rect
          x="230.857"
          y="85"
          width="35.1427"
          height="9.28572"
          rx="4.64286"
          fill="white"
          initial={"visible"}
          animate={controls}
          variants={sector3Variants}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.82 }}
        />
        <motion.rect
          x="121.033"
          y="112.857"
          width="35.1427"
          height="9.28572"
          rx="4.64286"
          fill="#00D09F"
          initial={"visible"}
          animate={controls}
          variants={sector3Variants}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.83 }}
        />
        <motion.rect
          x="175.947"
          y="112.857"
          width="35.1427"
          height="9.28572"
          rx="4.64286"
          fill="#00D09F"
          initial={"visible"}
          animate={controls}
          variants={sector3Variants}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.84 }}
        />
        <motion.rect
          x="230.857"
          y="112.857"
          width="35.1427"
          height="9.28572"
          rx="4.64286"
          fill="#00D09F"
          initial={"visible"}
          animate={controls}
          variants={sector3Variants}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.85 }}
        />
        <motion.rect
          x="121.033"
          y="140.714"
          width="35.1427"
          height="9.28572"
          rx="4.64286"
          fill="white"
          initial={"visible"}
          animate={controls}
          variants={sector3Variants}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.86 }}
        />
        <motion.rect
          x="175.947"
          y="140.714"
          width="35.1427"
          height="9.28572"
          rx="4.64286"
          fill="white"
          initial={"visible"}
          animate={controls}
          variants={sector3Variants}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.87 }}
        />
        <motion.rect
          x="230.857"
          y="140.714"
          width="35.1427"
          height="9.28572"
          rx="4.64286"
          fill="white"
          initial={"visible"}
          animate={controls}
          variants={sector3Variants}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.88 }}
        />
        <motion.rect
          x="20"
          y="85"
          width="47.223"
          height="9.28572"
          rx="4.64286"
          fill="white"
          initial={"visible"}
          animate={controls}
          variants={sector3Variants}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.89 }}
        />
        <motion.rect
          x="20"
          y="112.857"
          width="47.223"
          height="9.28572"
          rx="4.64286"
          fill="#00D09F"
          initial={"visible"}
          animate={controls}
          variants={sector3Variants}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.9 }}
        />
        <motion.rect
          x="20"
          y="140.714"
          width="47.223"
          height="9.28572"
          rx="4.64286"
          fill="white"
          initial={"visible"}
          animate={controls}
          variants={sector3Variants}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.91 }}
        />
        <motion.rect
          x="180"
          y="20"
          width="28"
          height="11"
          rx="5.5"
          fill="#DDDDDD"
          initial={"visible"}
          animate={controls}
          variants={sector3Variants}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.92 }}
        />
        <motion.rect
          x="235"
          y="20"
          width="28"
          height="11"
          rx="5.5"
          fill="#DDDDDD"
          initial={"visible"}
          animate={controls}
          variants={sector3Variants}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.93 }}
        />
        <motion.rect
          x="125"
          y="20"
          width="28"
          height="11"
          rx="5.5"
          fill="#DDDDDD"
          initial={"visible"}
          animate={controls}
          variants={sector3Variants}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.94 }}
        />
        <motion.rect
          x="100"
          y="20"
          width="3"
          height="130"
          rx="1.5"
          fill="white"
          initial={"visible"}
          animate={controls}
          variants={sector3Variants}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.95 }}
        />
        <motion.rect
          x="20"
          y="45"
          width="2.99999"
          height="246"
          rx="1.49999"
          transform="rotate(-90 20 45)"
          fill="white"
          initial={"visible"}
          animate={controls}
          variants={contentVariants}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.96 }}
        />
      </motion.svg>
      <PlayButton
        onClick={() => {
          playAnimation()
        }}
      />
    </div>
  )
}

export default DataChangeAlert
