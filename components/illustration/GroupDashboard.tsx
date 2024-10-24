"use client"
import * as React from "react"

import { motion, useAnimation } from "framer-motion"

import ExpandButton from "components/ExpandButton"
import PlayButton from "components/PlayButton"
import useModal from "hooks/useModal"
import classNames from "utils/classNames"

const GroupDashboard: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useModal()

  const controls = useAnimation()

  const circleVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
  }

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
        isModalOpen &&
          "fixed left-0 top-0 z-10 grid h-screen place-content-center bg-zinc-100/80 backdrop-blur"
      )}
    >
      <div className="w-full">
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
          <motion.path
            d="M0 15C0 6.71573 6.71573 0 15 0H271C279.284 0 286 6.71573 286 15H0Z"
            fill="#DDDDDD"
            initial={"visible"}
            animate={controls}
            variants={rectangleVariants}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.7 }}
          />
          <motion.rect
            x="15"
            y="25"
            width="120"
            height="64"
            rx="5"
            fill="white"
            initial={"visible"}
            animate={controls}
            variants={rectangleVariants}
            transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
          />
          <motion.rect
            x="24"
            y="29.2664"
            width="25.6098"
            height="4.26667"
            rx="2.13333"
            fill="#F1F1F1"
            initial={"visible"}
            animate={controls}
            variants={rectangleVariants}
            transition={{ duration: 0.3, ease: "easeOut", delay: 1.2 }}
          />
          <motion.rect
            x="122"
            y="29.2666"
            width="4.26829"
            height="4.26667"
            rx="2.13333"
            fill="#F1F1F1"
            initial={"visible"}
            animate={controls}
            variants={rectangleVariants}
            transition={{ duration: 0.3, ease: "easeOut", delay: 1.3 }}
          />
          <motion.path
            d="M24.5371 52.1866C24.5371 49.4252 26.7757 47.1866 29.5371 47.1866H36.6103C39.3717 47.1866 41.6103 49.4252 41.6103 52.1866V80.4666H24.5371V52.1866Z"
            fill="#00D09F"
            initial={"visible"}
            animate={controls}
            variants={barVariants}
            transition={{ duration: 0.3, ease: "easeOut", delay: 1.4 }}
          />
          <motion.path
            d="M52.6094 70.1065C52.6094 67.3451 54.848 65.1065 57.6094 65.1065H64.6825C67.444 65.1065 69.6825 67.3451 69.6825 70.1065V80.4665H52.6094V70.1065Z"
            fill="#F1F1F1"
            initial={"visible"}
            animate={controls}
            variants={barVariants}
            transition={{ duration: 0.3, ease: "easeOut", delay: 1.6 }}
          />
          <motion.path
            d="M80.6816 59.8668C80.6816 57.1054 82.9202 54.8668 85.6816 54.8668H92.7548C95.5162 54.8668 97.7548 57.1054 97.7548 59.8668V80.4668H80.6816V59.8668Z"
            fill="#F1F1F1"
            initial={"visible"}
            animate={controls}
            variants={barVariants}
            transition={{ duration: 0.3, ease: "easeOut", delay: 1.8 }}
          />
          <motion.path
            d="M108.754 66.6935C108.754 63.932 110.992 61.6935 113.754 61.6935H120.827C123.589 61.6935 125.827 63.932 125.827 66.6935V80.4668H108.754V66.6935Z"
            fill="#F1F1F1"
            initial={"visible"}
            animate={controls}
            variants={barVariants}
            transition={{ duration: 0.3, ease: "easeOut", delay: 2 }}
          />
          <motion.rect
            x="151"
            y="25"
            width="120"
            height="64"
            rx="5"
            fill="white"
            initial={"visible"}
            animate={controls}
            variants={rectangleVariants}
            transition={{ duration: 0.5, ease: "easeOut", delay: 1.5 }}
          />
          <motion.rect
            x="160"
            y="29.2664"
            width="25.6098"
            height="4.26667"
            rx="2.13333"
            fill="#F1F1F1"
            initial={"visible"}
            animate={controls}
            variants={rectangleVariants}
            transition={{ duration: 0.3, ease: "easeOut", delay: 1.6 }}
          />
          <motion.rect
            x="258"
            y="29.2666"
            width="4.26829"
            height="4.26667"
            rx="2.13333"
            fill="#F1F1F1"
            initial={"visible"}
            animate={controls}
            variants={rectangleVariants}
            transition={{ duration: 0.3, ease: "easeOut", delay: 1.7 }}
          />
          <motion.rect
            x="15"
            y="96"
            width="120"
            height="64"
            rx="5"
            fill="white"
            initial={"visible"}
            animate={controls}
            variants={rectangleVariants}
            transition={{ duration: 0.5, ease: "easeOut", delay: 2.3 }}
          />
          <motion.rect
            x="151"
            y="96"
            width="120"
            height="64"
            rx="5"
            fill="#E5E5E5"
            initial={"visible"}
            animate={controls}
            variants={rectangleVariants}
            transition={{ duration: 0.5, ease: "easeOut", delay: 3 }}
          />
          <motion.path
            d="M210.112 62.8879V44.7757C206.288 44.7757 202.561 45.9866 199.466 48.2348C196.372 50.4831 194.069 53.6532 192.887 57.2909L210.112 62.8879Z"
            fill="#F1F1F1"
            initial={"visible"}
            animate={controls}
            variants={circleVariants}
            transition={{ duration: 0.3, ease: "easeOut", delay: 3 }}
          />
          <motion.path
            d="M210.112 62.8879L192.886 57.2909C192.102 59.7049 191.834 62.2568 192.099 64.7811C192.365 67.3054 193.157 69.7458 194.427 71.9439C195.696 74.1421 197.413 76.049 199.466 77.5409C201.52 79.0328 203.864 80.0765 206.346 80.6042C208.829 81.132 211.395 81.132 213.878 80.6042C216.361 80.0765 218.705 79.0328 220.758 77.5409C222.812 76.049 224.529 74.1421 225.798 71.9439C227.067 69.7458 227.86 67.3054 228.125 64.7811L210.112 62.8879Z"
            fill="#F1F1F1"
            initial={"visible"}
            animate={controls}
            variants={circleVariants}
            transition={{ duration: 0.3, ease: "easeOut", delay: 1.9 }}
          />
          <motion.path
            d="M211.888 61.1121L229.901 63.0054C230.166 60.4811 229.898 57.9292 229.113 55.5152C228.329 53.1012 227.046 50.879 225.348 48.9928C223.649 47.1065 221.573 45.5983 219.255 44.5659C216.936 43.5335 214.426 43 211.888 43V61.1121Z"
            fill="#F1F1F1"
            initial={"visible"}
            animate={controls}
            variants={circleVariants}
            transition={{ duration: 0.3, ease: "easeOut", delay: 2 }}
          />
          <motion.rect
            x="24"
            y="101"
            width="25.6098"
            height="4.26667"
            rx="2.13333"
            fill="#F1F1F1"
            initial={"visible"}
            animate={controls}
            variants={rectangleVariants}
            transition={{ duration: 0.3, ease: "easeOut", delay: 2.7 }}
          />
          <motion.rect
            x="122"
            y="101"
            width="4.26829"
            height="4.26667"
            rx="2.13333"
            fill="#F1F1F1"
            initial={"visible"}
            animate={controls}
            variants={rectangleVariants}
            transition={{ duration: 0.3, ease: "easeOut", delay: 2.8 }}
          />
          <motion.rect
            x="24"
            y="111"
            width="69"
            height="10"
            rx="5"
            fill="#F1F1F1"
            initial={"visible"}
            animate={controls}
            variants={rectangleVariants}
            transition={{ duration: 0.3, ease: "easeOut", delay: 2.9 }}
          />
          <motion.rect
            x="24"
            y="111"
            width="20"
            height="10"
            rx="5"
            fill="#DDDDDD"
            initial={"visible"}
            animate={controls}
            variants={rectangleVariants}
            transition={{ duration: 0.3, ease: "easeOut", delay: 3 }}
          />
          <motion.rect
            x="24"
            y="127"
            width="69"
            height="10"
            rx="5"
            fill="#F1F1F1"
            initial={"visible"}
            animate={controls}
            variants={rectangleVariants}
            transition={{ duration: 0.3, ease: "easeOut", delay: 3.1 }}
          />
          <motion.rect
            x="24"
            y="127"
            width="56"
            height="10"
            rx="5"
            fill="#DDDDDD"
            initial={"visible"}
            animate={controls}
            variants={rectangleVariants}
            transition={{ duration: 0.3, ease: "easeOut", delay: 3.2 }}
          />
          <motion.rect
            x="24"
            y="143"
            width="69"
            height="10"
            rx="5"
            fill="#F1F1F1"
            initial={"visible"}
            animate={controls}
            variants={rectangleVariants}
            transition={{ duration: 0.3, ease: "easeOut", delay: 3.3 }}
          />
          <motion.rect
            x="24"
            y="143"
            width="41"
            height="10"
            rx="5"
            fill="#DDDDDD"
            initial={"visible"}
            animate={controls}
            variants={rectangleVariants}
            transition={{ duration: 0.3, ease: "easeOut", delay: 3.4 }}
          />
          <motion.rect
            x="153.762"
            y="91.2874"
            width="120"
            height="64"
            rx="5"
            transform="rotate(4.60375 153.762 91.2874)"
            fill="white"
            initial={"visible"}
            animate={controls}
            variants={rectangleVariants}
            transition={{ duration: 0.5, ease: "easeOut", delay: 3 }}
          />
          <motion.rect
            x="162.331"
            y="96.9936"
            width="25.6098"
            height="4.26667"
            rx="2.13333"
            transform="rotate(4.60375 162.331 96.9936)"
            fill="#F1F1F1"
            initial={"visible"}
            animate={controls}
            variants={rectangleVariants}
            transition={{ duration: 0.3, ease: "easeOut", delay: 3.3 }}
          />
          <motion.rect
            x="260.015"
            y="104.86"
            width="4.26829"
            height="4.26667"
            rx="2.13333"
            transform="rotate(4.60375 260.015 104.86)"
            fill="#F1F1F1"
            initial={"visible"}
            animate={controls}
            variants={rectangleVariants}
            transition={{ duration: 0.5, ease: "easeOut", delay: 3.4 }}
          />
          <motion.rect
            x="203.988"
            y="115.397"
            width="16"
            height="16"
            rx="8"
            transform="rotate(4.60375 203.988 115.397)"
            fill="#EFEFEF"
            initial={"visible"}
            animate={controls}
            variants={rectangleVariants}
            transition={{ duration: 0.5, ease: "easeOut", delay: 3.5 }}
          />
          <motion.rect
            x="184.957"
            y="139.948"
            width="50"
            height="8"
            rx="4"
            transform="rotate(4.60375 184.957 139.948)"
            fill="#F1F1F1"
            initial={"visible"}
            animate={controls}
            variants={rectangleVariants}
            transition={{ duration: 0.5, ease: "easeOut", delay: 3.6 }}
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

export default GroupDashboard
