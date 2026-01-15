"use client"
import * as React from "react"

import { motion, useAnimation, ValueTransition } from "motion/react"

import PlayButton from "@/components/PlayButton"
import classNames from "@/utils/classNames"

const SlackAlert: React.FC<{ isExpanded?: boolean }> = ({
  isExpanded = false,
}) => {
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

  const sector1Variants = {
    hidden: { scale: 0 },
    visible: { scale: 1, originX: 1, originY: 1 },
  }

  const sector3Variants = {
    hidden: { scale: 0 },
    visible: { scale: 1, originX: 0, originY: 1 },
  }

  const playAnimation = async (): Promise<void> => {
    await controls.start("hidden", {
      transitionDuration: 0,
    } as ValueTransition)
    await controls.start("visible")
  }

  return (
    <div className={classNames(isExpanded ? "w-[700px]" : "w-full")}>
      <motion.svg
        viewBox="0 0 403 430"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_4415_2045)">
          <motion.rect
            x="8"
            width="387"
            height="383"
            rx="20"
            fill="white"
            initial={"visible"}
            animate={controls}
            variants={rectangleVariants}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0 }}
          />
        </g>
        <motion.path
          d="M8 15C8 6.71573 14.7157 0 23 0H47V383H23C14.7157 383 8 376.284 8 368V15Z"
          initial={"visible"}
          animate={controls}
          variants={rectangleVariants}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
          fill="#F1F1F1"
        />
        <motion.rect
          x="59.8701"
          y="20.7478"
          width="59.6504"
          height="15.561"
          rx="6.48374"
          fill="#F1F1F1"
          initial={"visible"}
          animate={controls}
          variants={sector3Variants}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.9 }}
        />
        <motion.rect
          x="60"
          y="49"
          width="215"
          height="11"
          rx="5.5"
          fill="#F1F1F1"
          initial={"visible"}
          animate={controls}
          variants={sector3Variants}
          transition={{ duration: 0.3, ease: "easeOut", delay: 1.1 }}
        />
        <motion.path
          d="M83.2109 111.348H62.4629C61.128 111.348 60.042 110.262 60.042 108.927V88.179C60.042 86.8441 61.128 85.7581 62.4629 85.7581H83.2109C84.5458 85.7581 85.6319 86.8441 85.6319 88.179V108.927C85.6319 110.262 84.5458 111.348 83.2109 111.348Z"
          fill="#05FAC0"
          initial={"visible"}
          animate={controls}
          variants={contentVariants}
          transition={{ duration: 0.3, ease: "easeOut", delay: 1.7 }}
        />
        <motion.path
          d="M62.4636 85.9303C61.2238 85.9303 60.2152 86.9389 60.2152 88.1787V108.927C60.2152 110.166 61.2238 111.175 62.4636 111.175H83.2116C84.4514 111.175 85.46 110.166 85.46 108.927V88.1787C85.46 86.9389 84.4514 85.9303 83.2116 85.9303H62.4636ZM62.4636 85.5852H83.2116C84.6439 85.5852 85.8051 86.7464 85.8051 88.1787V108.927C85.8051 110.359 84.6439 111.52 83.2116 111.52H62.4636C61.0313 111.52 59.8701 110.359 59.8701 108.927V88.1787C59.8701 86.7464 61.0313 85.5852 62.4636 85.5852Z"
          fill="#00FCC8"
          initial={"visible"}
          animate={controls}
          variants={contentVariants}
          transition={{ duration: 0.3, ease: "easeOut", delay: 1.7 }}
        />
        <motion.path
          d="M60.0005 108.823C67.1586 108.823 73.5032 106.402 77.3984 102.608C81.2935 98.8136 83.0956 92.3154 83.0653 85.7226L63.0494 85.7178C59.9746 85.7243 60.0033 88.2256 60.0074 88.237L60.0005 108.823Z"
          fill="#03E2AE"
          stroke="#03E2AE"
          strokeWidth="1.29675"
          initial={"visible"}
          animate={controls}
          variants={contentVariants}
          transition={{ duration: 0.3, ease: "easeOut", delay: 1.7 }}
        />
        <motion.path
          d="M60.0059 103.448C65.8122 103.448 70.1263 102.067 73.1314 99.1339C76.1366 96.2006 78.1247 91.1493 78.1247 85.7195H62.6297C59.979 85.7257 60.0035 88.0783 60.0069 88.0904L60.0059 103.448Z"
          fill="#00D09F"
          stroke="#00D09F"
          strokeWidth="1.29675"
          initial={"visible"}
          animate={controls}
          variants={contentVariants}
          transition={{ duration: 0.3, ease: "easeOut", delay: 1.7 }}
        />
        <motion.rect
          x="96.1787"
          y="140.049"
          width="5.18699"
          height="199.699"
          rx="2.5935"
          fill="#F1F1F1"
          initial={"visible"}
          animate={controls}
          variants={sector1Variants}
          transition={{ duration: 0.3, ease: "easeOut", delay: 2.5 }}
        />
        <motion.line
          x1="47"
          y1="72.9352"
          x2="352"
          y2="72.9352"
          stroke="black"
          strokeWidth="0.129675"
          initial={"visible"}
          animate={controls}
          variants={sector3Variants}
          transition={{ duration: 0.3, ease: "easeOut", delay: 1.4 }}
        />
        <motion.path
          d="M97.0294 88.3442H99.6644C100.135 88.3442 100.56 88.4202 100.94 88.5724C101.328 88.7245 101.656 88.9528 101.926 89.2571C102.203 89.5545 102.413 89.9314 102.559 90.3878C102.711 90.8374 102.787 91.363 102.787 91.9647C102.787 92.5664 102.711 93.0954 102.559 93.5519C102.413 94.0014 102.203 94.3784 101.926 94.6827C101.656 94.9801 101.328 95.2048 100.94 95.357C100.56 95.5091 100.135 95.5852 99.6644 95.5852H97.0294V88.3442ZM99.6644 94.3714C100.176 94.3714 100.581 94.2228 100.878 93.9254C101.182 93.6211 101.335 93.1577 101.335 92.5353V91.3941C101.335 90.7717 101.182 90.3118 100.878 90.0144C100.581 89.7101 100.176 89.5579 99.6644 89.5579H98.3987V94.3714H99.6644ZM104.099 95.5852V90.17H105.427V91.2904H105.479C105.513 91.1451 105.565 91.0068 105.634 90.8754C105.71 90.7371 105.807 90.6161 105.925 90.5123C106.042 90.4086 106.18 90.3256 106.34 90.2634C106.506 90.2011 106.696 90.17 106.91 90.17H107.201V91.4252H106.786C106.336 91.4252 105.997 91.4909 105.769 91.6223C105.541 91.7537 105.427 91.9681 105.427 92.2655V95.5852H104.099ZM112.044 95.5852C111.753 95.5852 111.521 95.5022 111.348 95.3362C111.182 95.1633 111.079 94.9351 111.037 94.6515H110.975C110.885 95.0043 110.702 95.2705 110.425 95.4503C110.149 95.6232 109.806 95.7097 109.398 95.7097C108.845 95.7097 108.42 95.5645 108.122 95.274C107.825 94.9835 107.676 94.5962 107.676 94.1121C107.676 93.5519 107.877 93.1369 108.278 92.8672C108.679 92.5906 109.249 92.4523 109.989 92.4523H110.913V92.0581C110.913 91.7537 110.833 91.5186 110.674 91.3526C110.515 91.1866 110.259 91.1036 109.906 91.1036C109.595 91.1036 109.343 91.1728 109.149 91.3111C108.962 91.4425 108.803 91.6016 108.672 91.7883L107.884 91.0829C108.084 90.7717 108.35 90.5227 108.682 90.336C109.014 90.1423 109.453 90.0455 110 90.0455C110.733 90.0455 111.29 90.2115 111.67 90.5434C112.05 90.8754 112.241 91.3526 112.241 91.9751V94.5271H112.78V95.5852H112.044ZM109.844 94.7449C110.142 94.7449 110.394 94.6792 110.602 94.5478C110.809 94.4164 110.913 94.2228 110.913 93.9669V93.2511H110.062C109.371 93.2511 109.025 93.4724 109.025 93.915V94.0914C109.025 94.3127 109.094 94.4786 109.232 94.5893C109.377 94.693 109.581 94.7449 109.844 94.7449ZM113.284 95.5852L115.131 92.8361L113.326 90.17H114.84L115.961 91.9647H116.002L117.112 90.17H118.523L116.687 92.8568L118.533 95.5852H117.019L115.878 93.7179H115.836L114.695 95.5852H113.284ZM120.826 95.5852C120.369 95.5852 120.034 95.4711 119.819 95.2429C119.605 95.0146 119.498 94.693 119.498 94.2781V87.9085H120.826V94.5271H121.541V95.5852H120.826ZM122.547 95.5852V90.17H123.875V91.2904H123.927C123.961 91.1451 124.013 91.0068 124.082 90.8754C124.158 90.7371 124.255 90.6161 124.373 90.5123C124.49 90.4086 124.629 90.3256 124.788 90.2634C124.954 90.2011 125.144 90.17 125.358 90.17H125.649V91.4252H125.234C124.784 91.4252 124.445 91.4909 124.217 91.6223C123.989 91.7537 123.875 91.9681 123.875 92.2655V95.5852H122.547Z"
          fill="black"
          initial={"visible"}
          animate={controls}
          variants={contentVariants}
          transition={{ duration: 0.3, ease: "easeOut", delay: 1.7 }}
        />
        <motion.path
          d="M137.593 294.075C137.593 289.062 141.657 284.998 146.67 284.998H168.204C173.217 284.998 177.281 289.062 177.281 294.075V340.217H137.593V294.075Z"
          fill="#E4F9F4"
          initial={"visible"}
          animate={controls}
          variants={barVariants}
          transition={{ duration: 0.3, ease: "easeOut", delay: 3.5 }}
        />
        <motion.path
          d="M312 309.077C312 304.064 316.064 300 321.077 300H342.923C347.936 300 352 304.064 352 309.077V340H312V309.077Z"
          fill="#E4F9F4"
          initial={"visible"}
          animate={controls}
          variants={barVariants}
          transition={{ duration: 0.3, ease: "easeOut", delay: 4.1 }}
        />
        <motion.path
          d="M196.029 204.345C196.029 199.331 200.093 195.267 205.106 195.267H224.915C229.928 195.267 233.992 199.331 233.992 204.345V340.217H196.029V204.345Z"
          fill="#00D09F"
          initial={"visible"}
          animate={controls}
          variants={barVariants}
          transition={{ duration: 0.3, ease: "easeOut", delay: 3.7 }}
        />
        <motion.path
          d="M253.249 276.819C253.249 271.806 257.313 267.742 262.326 267.742H283.86C288.874 267.742 292.938 271.806 292.938 276.819V340.217H253.249V276.819Z"
          fill="#E4F9F4"
          initial={"visible"}
          animate={controls}
          variants={barVariants}
          transition={{ duration: 0.3, ease: "easeOut", delay: 3.9 }}
        />
        <motion.rect
          x="142.862"
          y="352.715"
          width="27.2317"
          height="6.48374"
          rx="3.24187"
          fill="#DDDDDD"
          initial={"visible"}
          animate={controls}
          variants={contentVariants}
          transition={{ duration: 0.3, ease: "easeOut", delay: 3 }}
        />
        <motion.rect
          x="200.961"
          y="352.715"
          width="27.2317"
          height="6.48374"
          rx="3.24187"
          fill="#DDDDDD"
          initial={"visible"}
          animate={controls}
          variants={contentVariants}
          transition={{ duration: 0.3, ease: "easeOut", delay: 3.1 }}
        />
        <motion.rect
          x="258.272"
          y="352.715"
          width="27.2317"
          height="6.48374"
          rx="3.24187"
          fill="#DDDDDD"
          initial={"visible"}
          animate={controls}
          variants={contentVariants}
          transition={{ duration: 0.3, ease: "easeOut", delay: 3.2 }}
        />
        <motion.rect
          x="318"
          y="352.715"
          width="27.2317"
          height="6.48374"
          rx="3.24187"
          fill="#DDDDDD"
          initial={"visible"}
          animate={controls}
          variants={contentVariants}
          transition={{ duration: 0.3, ease: "easeOut", delay: 3.3 }}
        />
        <motion.rect
          x="115.16"
          y="331.59"
          width="8.62797"
          height="8.62797"
          fill="#DDDDDD"
          initial={"visible"}
          animate={controls}
          variants={contentVariants}
          transition={{ duration: 0.3, ease: "easeOut", delay: 2.6 }}
        />
        <motion.rect
          x="115.16"
          y="295.352"
          width="8.62797"
          height="8.62797"
          fill="#DDDDDD"
          initial={"visible"}
          animate={controls}
          variants={contentVariants}
          transition={{ duration: 0.3, ease: "easeOut", delay: 1.7 }}
        />
        <motion.rect
          x="115.16"
          y="259.115"
          width="8.62797"
          height="8.62797"
          fill="#DDDDDD"
          initial={"visible"}
          animate={controls}
          variants={contentVariants}
          transition={{ duration: 0.3, ease: "easeOut", delay: 1.8 }}
        />
        <motion.rect
          x="115.16"
          y="222.877"
          width="8.62797"
          height="8.62797"
          fill="#DDDDDD"
          initial={"visible"}
          animate={controls}
          variants={contentVariants}
          transition={{ duration: 0.3, ease: "easeOut", delay: 1.9 }}
        />
        <motion.rect
          x="115.16"
          y="186.64"
          width="8.62797"
          height="8.62797"
          fill="#DDDDDD"
          initial={"visible"}
          animate={controls}
          variants={contentVariants}
          transition={{ duration: 0.3, ease: "easeOut", delay: 2 }}
        />
        <motion.rect
          x="136.378"
          y="89.4756"
          width="25.935"
          height="6.48374"
          rx="2.5935"
          fill="#F1F1F1"
          initial={"visible"}
          animate={controls}
          variants={contentVariants}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.7 }}
        />
        <motion.rect
          x="96"
          y="118"
          width="256"
          height="6"
          rx="2.5935"
          fill="#F1F1F1"
          initial={"visible"}
          animate={controls}
          variants={sector3Variants}
          transition={{ duration: 0.3, ease: "easeOut", delay: 1 }}
        />
        <motion.circle
          cx="293.539"
          cy="144.587"
          r="4.53862"
          fill="#F1F1F1"
          initial={"visible"}
          animate={controls}
          variants={contentVariants}
          transition={{ duration: 0.3, ease: "easeOut", delay: 1.1 }}
        />
        <motion.circle
          cx="329.848"
          cy="144.587"
          r="4.53862"
          fill="#F1F1F1"
          initial={"visible"}
          animate={controls}
          variants={contentVariants}
          transition={{ duration: 0.3, ease: "easeOut", delay: 1.2 }}
        />
        <motion.circle
          cx="347.937"
          cy="144.587"
          r="4.53862"
          fill="#F1F1F1"
          initial={"visible"}
          animate={controls}
          variants={contentVariants}
          transition={{ duration: 0.3, ease: "easeOut", delay: 1.3 }}
        />
        <motion.circle
          cx="311.693"
          cy="144.587"
          r="4.53862"
          fill="#F1F1F1"
          initial={"visible"}
          animate={controls}
          variants={contentVariants}
          transition={{ duration: 0.3, ease: "easeOut", delay: 1.4 }}
        />
        <motion.path
          d="M22.1789 31.748C22.1789 32.8792 21.2656 33.7917 20.1369 33.7917C19.0082 33.7917 18.0933 32.8776 18.0933 31.748C18.0933 30.6169 19.0066 29.7043 20.1353 29.7043H22.1773V31.748H22.1789ZM23.2 31.748C23.2 30.6169 24.1133 29.7043 25.242 29.7043C26.3707 29.7043 27.284 30.6185 27.284 31.748V36.8588C27.284 37.99 26.3707 38.9025 25.242 38.9025C24.1133 38.9025 23.2 37.9884 23.2 36.8588V31.748Z"
          fill="#E01E5A"
          initial={"visible"}
          animate={controls}
          variants={contentVariants}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.5 }}
        />
        <motion.path
          d="M25.2417 23.5407C24.1115 23.5407 23.1997 22.6266 23.1997 21.497C23.1997 20.3659 24.113 19.4534 25.2417 19.4534C26.3704 19.4534 27.2838 20.3675 27.2838 21.497V23.5407H25.2417ZM25.2417 24.5784C26.372 24.5784 27.2838 25.4925 27.2838 26.6221C27.2838 27.7532 26.3704 28.6658 25.2417 28.6658H20.1192C18.9905 28.6674 18.0771 27.7532 18.0771 26.6221C18.0771 25.4909 18.9905 24.5784 20.1192 24.5784H25.2417Z"
          fill="#36C5F0"
          initial={"visible"}
          animate={controls}
          variants={contentVariants}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.5 }}
        />
        <motion.path
          d="M33.4274 26.6215C33.4274 25.4903 34.3407 24.5778 35.4694 24.5778C36.5997 24.5778 37.5115 25.4919 37.5115 26.6215C37.5115 27.7526 36.5981 28.6652 35.4694 28.6652H33.4274V26.6215ZM32.4063 26.6215C32.4063 27.7526 31.493 28.6652 30.3643 28.6652C29.2341 28.6652 28.3223 27.751 28.3223 26.6215V21.4949C28.3223 20.3637 29.2356 19.4512 30.3643 19.4512C31.4946 19.4512 32.4063 20.3653 32.4063 21.4949V26.6215Z"
          fill="#2EB67D"
          initial={"visible"}
          animate={controls}
          variants={contentVariants}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.5 }}
        />
        <motion.path
          d="M30.3643 34.8135C31.4946 34.8135 32.4063 35.7277 32.4063 36.8572C32.4063 37.9884 31.493 38.9009 30.3643 38.9009C29.2341 38.9009 28.3223 37.9868 28.3223 36.8572V34.8135H30.3643ZM30.3643 33.7917C29.2341 33.7917 28.3223 32.8776 28.3223 31.748C28.3223 30.6169 29.2356 29.7043 30.3643 29.7043H35.4868C36.6171 29.7043 37.5289 30.6185 37.5289 31.748C37.5289 32.8792 36.6155 33.7917 35.4868 33.7917H30.3643Z"
          fill="#ECB22E"
          initial={"visible"}
          animate={controls}
          variants={contentVariants}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.5 }}
        />
        <defs>
          <filter
            id="filter0_d_4415_2045"
            x="0"
            y="0"
            width="403"
            height="430"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="31"
              operator="erode"
              in="SourceAlpha"
              result="effect1_dropShadow_4415_2045"
            />
            <feOffset dy="39" />
            <feGaussianBlur stdDeviation="19.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0.05 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_4415_2045"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_4415_2045"
              result="shape"
            />
          </filter>
        </defs>
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

export default SlackAlert
