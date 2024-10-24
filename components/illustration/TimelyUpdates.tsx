import * as React from "react"

import { motion, useAnimation } from "framer-motion"

import ExpandButton from "components/ExpandButton"
import PlayButton from "components/PlayButton"
import useModal from "hooks/useModal"
import classNames from "utils/classNames"

const TimelyUpdates: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useModal()

  const controls = useAnimation()

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
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
          <motion.rect
            x="25"
            y="21"
            width="111"
            height="80"
            rx="5"
            fill="white"
            initial={"visible"}
            animate={controls}
            variants={rectangleVariants}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.7 }}
          />
          <motion.rect
            x="33.4629"
            y="28"
            width="25.6098"
            height="4.26667"
            rx="2.13333"
            fill="#F1F1F1"
            initial={"visible"}
            animate={controls}
            variants={rectangleVariants}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.8 }}
          />
          <motion.rect
            x="123.463"
            y="28.0002"
            width="4.26829"
            height="4.26667"
            rx="2.13333"
            fill="#F1F1F1"
            initial={"visible"}
            animate={controls}
            variants={rectangleVariants}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.8 }}
          />
          <motion.path
            d="M33 50C33 48.3431 34.3431 47 36 47H48C49.6569 47 51 48.3431 51 50V94H33V50Z"
            fill="#00D09F"
            initial={"visible"}
            animate={controls}
            variants={barVariants}
            transition={{ duration: 0.7, ease: "easeOut", delay: 1 }}
          />
          <motion.path
            d="M58.5059 72.8196C58.5059 71.1627 59.849 69.8196 61.5059 69.8196H73.451C75.1078 69.8196 76.451 71.1627 76.451 72.8196V93.7333H58.5059V72.8196Z"
            fill="#F1F1F1"
            initial={"visible"}
            animate={controls}
            variants={barVariants}
            transition={{ duration: 0.7, ease: "easeOut", delay: 1.1 }}
          />
          <motion.path
            d="M84.0117 56.8774C84.0117 55.2206 85.3549 53.8774 87.0117 53.8774H98.9568C100.614 53.8774 101.957 55.2206 101.957 56.8774V93.7337H84.0117V56.8774Z"
            fill="#F1F1F1"
            initial={"visible"}
            animate={controls}
            variants={barVariants}
            transition={{ duration: 0.7, ease: "easeOut", delay: 1.2 }}
          />
          <motion.path
            d="M109.518 67.5057C109.518 65.8489 110.861 64.5057 112.518 64.5057H124.463C126.12 64.5057 127.463 65.8489 127.463 67.5057V93.7336H109.518V67.5057Z"
            fill="#F1F1F1"
            initial={"visible"}
            animate={controls}
            variants={barVariants}
            transition={{ duration: 0.7, ease: "easeOut", delay: 1.3 }}
          />
          <motion.path
            d="M206 89C221.464 89 234 76.464 234 61C234 45.536 221.464 33 206 33C190.536 33 178 45.536 178 61C178 76.464 190.536 89 206 89Z"
            stroke="#DDDDDD"
            strokeWidth="5.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={"visible"}
            animate={controls}
            variants={contentVariants}
            transition={{ duration: 0.7, ease: "easeOut", delay: 1.4 }}
          />
          <motion.path
            d="M214.4 72.2L207.641 65.4408C206.591 64.3908 206 62.9666 206 61.4816V44.2"
            stroke="#DDDDDD"
            strokeWidth="5.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={"visible"}
            animate={controls}
            variants={contentVariants}
            transition={{ duration: 0.7, ease: "easeOut", delay: 1.4 }}
          />
          <motion.rect
            x="15"
            y="120"
            width="31"
            height="32"
            rx="5"
            fill="#DDDDDD"
            initial={"visible"}
            animate={controls}
            variants={barVariants}
            transition={{ duration: 0.7, ease: "easeOut", delay: 1.5 }}
          />
          <motion.path
            d="M32.787 134.046H32.748L32.085 135.372L30.317 138.583L28.588 135.385L27.899 133.955H27.86V140H26.001V130.926H28.094L30.317 135.177H30.343L32.54 130.926H34.646V140H32.787V134.046Z"
            fill="white"
            initial={"visible"}
            animate={controls}
            variants={contentVariants}
            transition={{ duration: 0.7, ease: "easeOut", delay: 1.5 }}
          />
          <motion.rect
            x="53"
            y="120"
            width="31"
            height="32"
            rx="5"
            fill="#DDDDDD"
            initial={"visible"}
            animate={controls}
            variants={barVariants}
            transition={{ duration: 0.7, ease: "easeOut", delay: 1.7 }}
          />
          <motion.path
            d="M68.784 132.681V140H66.808V132.681H64.351V130.926H71.241V132.681H68.784Z"
            fill="white"
            initial={"visible"}
            animate={controls}
            variants={contentVariants}
            transition={{ duration: 0.7, ease: "easeOut", delay: 1.7 }}
          />
          <motion.rect
            x="91"
            y="120"
            width="31"
            height="32"
            rx="5"
            fill="#DDDDDD"
            initial={"visible"}
            animate={controls}
            variants={barVariants}
            transition={{ duration: 0.7, ease: "easeOut", delay: 1.9 }}
          />
          <motion.path
            d="M102.431 140L100.377 130.926H102.327L103.185 135.281L103.666 137.803H103.705L104.277 135.281L105.278 130.926H107.436L108.45 135.281L109.009 137.803H109.048L109.529 135.281L110.4 130.926H112.272L110.166 140H107.917L106.773 135.086L106.331 133.097H106.292L105.837 135.086L104.693 140H102.431Z"
            fill="white"
            initial={"visible"}
            animate={controls}
            variants={contentVariants}
            transition={{ duration: 0.7, ease: "easeOut", delay: 1.9 }}
          />
          <motion.rect
            x="129"
            y="120"
            width="31"
            height="32"
            rx="5"
            fill="#DDDDDD"
            initial={"visible"}
            animate={controls}
            variants={barVariants}
            transition={{ duration: 0.7, ease: "easeOut", delay: 2.1 }}
          />
          <motion.path
            d="M144.784 132.681V140H142.808V132.681H140.351V130.926H147.241V132.681H144.784Z"
            fill="white"
            initial={"visible"}
            animate={controls}
            variants={contentVariants}
            transition={{ duration: 0.7, ease: "easeOut", delay: 2.1 }}
          />
          <motion.rect
            x="167"
            y="120"
            width="31"
            height="32"
            rx="5"
            fill="#DDDDDD"
            initial={"visible"}
            animate={controls}
            variants={barVariants}
            transition={{ duration: 0.7, ease: "easeOut", delay: 2.3 }}
          />
          <motion.path
            d="M179.001 140V130.926H185.02V132.681H180.977V134.54H184.422V136.282H180.977V140H179.001Z"
            fill="white"
            initial={"visible"}
            animate={controls}
            variants={contentVariants}
            transition={{ duration: 0.7, ease: "easeOut", delay: 2.5 }}
          />
          <motion.rect
            x="205"
            y="120"
            width="31"
            height="32"
            rx="5"
            fill="#DDDDDD"
            initial={"visible"}
            animate={controls}
            variants={barVariants}
            transition={{ duration: 0.7, ease: "easeOut", delay: 2.7 }}
          />
          <motion.path
            d="M219.939 140.156C219.142 140.156 218.466 140.022 217.911 139.753C217.356 139.476 216.884 139.12 216.494 138.687L217.794 137.374C218.409 138.067 219.168 138.414 220.069 138.414C220.554 138.414 220.914 138.314 221.148 138.115C221.382 137.916 221.499 137.651 221.499 137.322C221.499 137.071 221.43 136.863 221.291 136.698C221.152 136.525 220.871 136.408 220.446 136.347L219.549 136.23C218.587 136.109 217.881 135.818 217.43 135.359C216.988 134.9 216.767 134.289 216.767 133.526C216.767 133.119 216.845 132.746 217.001 132.408C217.157 132.07 217.378 131.78 217.664 131.537C217.959 131.294 218.314 131.108 218.73 130.978C219.155 130.839 219.636 130.77 220.173 130.77C220.858 130.77 221.46 130.878 221.98 131.095C222.5 131.312 222.946 131.628 223.319 132.044L222.006 133.37C221.789 133.119 221.525 132.915 221.213 132.759C220.91 132.594 220.524 132.512 220.056 132.512C219.614 132.512 219.285 132.59 219.068 132.746C218.851 132.902 218.743 133.119 218.743 133.396C218.743 133.708 218.825 133.933 218.99 134.072C219.163 134.211 219.441 134.31 219.822 134.371L220.719 134.514C221.655 134.661 222.348 134.952 222.799 135.385C223.25 135.81 223.475 136.416 223.475 137.205C223.475 137.638 223.397 138.037 223.241 138.401C223.085 138.765 222.855 139.077 222.552 139.337C222.257 139.597 221.889 139.801 221.447 139.948C221.005 140.087 220.502 140.156 219.939 140.156Z"
            fill="white"
            initial={"visible"}
            animate={controls}
            variants={contentVariants}
            transition={{ duration: 0.7, ease: "easeOut", delay: 2.7 }}
          />
          <motion.rect
            x="243"
            y="120"
            width="31"
            height="32"
            rx="5"
            fill="#DDDDDD"
            initial={"visible"}
            animate={controls}
            variants={barVariants}
            transition={{ duration: 0.7, ease: "easeOut", delay: 2.9 }}
          />
          <motion.path
            d="M257.939 140.156C257.142 140.156 256.466 140.022 255.911 139.753C255.356 139.476 254.884 139.12 254.494 138.687L255.794 137.374C256.409 138.067 257.168 138.414 258.069 138.414C258.554 138.414 258.914 138.314 259.148 138.115C259.382 137.916 259.499 137.651 259.499 137.322C259.499 137.071 259.43 136.863 259.291 136.698C259.152 136.525 258.871 136.408 258.446 136.347L257.549 136.23C256.587 136.109 255.881 135.818 255.43 135.359C254.988 134.9 254.767 134.289 254.767 133.526C254.767 133.119 254.845 132.746 255.001 132.408C255.157 132.07 255.378 131.78 255.664 131.537C255.959 131.294 256.314 131.108 256.73 130.978C257.155 130.839 257.636 130.77 258.173 130.77C258.858 130.77 259.46 130.878 259.98 131.095C260.5 131.312 260.946 131.628 261.319 132.044L260.006 133.37C259.789 133.119 259.525 132.915 259.213 132.759C258.91 132.594 258.524 132.512 258.056 132.512C257.614 132.512 257.285 132.59 257.068 132.746C256.851 132.902 256.743 133.119 256.743 133.396C256.743 133.708 256.825 133.933 256.99 134.072C257.163 134.211 257.441 134.31 257.822 134.371L258.719 134.514C259.655 134.661 260.348 134.952 260.799 135.385C261.25 135.81 261.475 136.416 261.475 137.205C261.475 137.638 261.397 138.037 261.241 138.401C261.085 138.765 260.855 139.077 260.552 139.337C260.257 139.597 259.889 139.801 259.447 139.948C259.005 140.087 258.502 140.156 257.939 140.156Z"
            fill="white"
            initial={"visible"}
            animate={controls}
            variants={contentVariants}
            transition={{ duration: 0.7, ease: "easeOut", delay: 2.9 }}
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

export default TimelyUpdates
