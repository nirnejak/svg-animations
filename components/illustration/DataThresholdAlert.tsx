import * as React from "react"

import { motion, useAnimation } from "framer-motion"

import ExpandButton from "components/ExpandButton"
import PlayButton from "components/PlayButton"
import classNames from "utils/classNames"

const DataThresholdAlert: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false)

  const controls = useAnimation()

  const rectangleVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, originX: 0, originY: 0 },
  }

  const barVariants = {
    hidden: { scaleY: 0 },
    visible: { scaleY: 1, originY: 1 },
  }

  const playAnimation = (): void => {
    controls.set("hidden")
    controls.start("visible").catch((err) => {
      console.log(err)
    })
  }

  return (
    <div
      className={classNames(
        "w-full",
        isModalOpen &&
          "fixed left-0 top-0 z-10 grid h-screen place-content-center bg-zinc-100/80 backdrop-blur"
      )}
    >
      <div className="w-full">
        <motion.svg
          width="283"
          height="170"
          viewBox="0 0 283 170"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.rect
            width="283"
            height="170"
            rx="15"
            fill="#F1F1F1"
            initial={"visible"}
            animate={controls}
            variants={rectangleVariants}
            transition={{ duration: 0.7, ease: "easeOut" }}
          />
          <motion.path
            d="M33.96 92.8901C33.96 89.0241 37.094 85.8901 40.96 85.8901H72.24C76.106 85.8901 79.24 89.0241 79.24 92.8901V149.122H33.96V92.8901Z"
            fill="#D9D9D9"
            initial={"visible"}
            animate={controls}
            variants={barVariants}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.7 }}
          />
          <motion.path
            d="M90.5601 71.1221C90.5601 67.2561 93.6941 64.1221 97.5601 64.1221H128.84C132.706 64.1221 135.84 67.2561 135.84 71.1221V149.122H90.5601V71.1221Z"
            fill="#00D09F"
            initial={"visible"}
            animate={controls}
            variants={barVariants}
            transition={{ duration: 0.7, ease: "easeOut", delay: 1 }}
          />
          <motion.path
            d="M147.16 81.4878C147.16 77.6218 150.294 74.4878 154.16 74.4878H185.44C189.306 74.4878 192.44 77.6218 192.44 81.4878V149.122H147.16V81.4878Z"
            fill="#D9D9D9"
            initial={"visible"}
            animate={controls}
            variants={barVariants}
            transition={{ duration: 0.7, ease: "easeOut", delay: 1.2 }}
          />
          <motion.path
            d="M203.76 113.622C203.76 109.756 206.894 106.622 210.76 106.622H242.04C245.906 106.622 249.04 109.756 249.04 113.622V149.122H203.76V113.622Z"
            fill="#D9D9D9"
            initial={"visible"}
            animate={controls}
            variants={barVariants}
            transition={{ duration: 0.7, ease: "easeOut", delay: 1.4 }}
          />
          <motion.line
            x1="34.5"
            y1="63.5"
            x2="246.5"
            y2="63.5"
            stroke="#00D09F"
            strokeLinecap="round"
            strokeDasharray="2 2"
            initial={"visible"}
            animate={controls}
            variants={rectangleVariants}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.7 }}
          />
          <motion.rect
            x="34"
            y="21"
            width="61"
            height="7"
            rx="3.5"
            fill="#D9D9D9"
            initial={"visible"}
            animate={controls}
            variants={rectangleVariants}
            transition={{ duration: 0.7, ease: "easeOut", delay: 1 }}
          />
          <motion.rect
            x="208"
            y="21"
            width="39"
            height="7"
            rx="3.5"
            fill="#D9D9D9"
            initial={"visible"}
            animate={controls}
            variants={rectangleVariants}
            transition={{ duration: 0.7, ease: "easeOut", delay: 1 }}
          />
        </motion.svg>
        <div>
          <ExpandButton
            isOpen={isModalOpen}
            onClick={() => {
              setIsModalOpen(!isModalOpen)
            }}
          />
          <PlayButton
            onClick={() => {
              playAnimation()
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default DataThresholdAlert
