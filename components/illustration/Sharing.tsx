import * as React from "react"

import { motion, useAnimation } from "framer-motion"

import RestartButton from "components/RestartButton"

const Sharing: React.FC = () => {
  const controls = useAnimation()

  React.useEffect(() => {
    controls.start("visible").catch((err) => {
      console.log(err)
    })
  }, [controls])

  const backgroundVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1, originX: 0, originY: 0 },
  }

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  const sector1Variants = {
    hidden: { scale: 0 },
    visible: { scale: 1, originX: 1, originY: 1 },
  }

  const sector2Variants = {
    hidden: { scale: 0 },
    visible: { scale: 1, originY: 0 },
  }

  const sector3Variants = {
    hidden: { scale: 0 },
    visible: { scale: 1, originX: 0, originY: 1 },
  }

  const restartAnimation = () => {
    controls.set("hidden")
    controls.start("visible").catch((err) => {
      console.log(err)
    })
  }

  return (
    <div className="w-full">
      <motion.svg
        viewBox="0 0 520 534"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_790_3637)">
          <motion.rect
            initial={"hidden"}
            animate={controls}
            variants={backgroundVariants}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
            x="6"
            width="350"
            height="238"
            rx="15"
            fill="white"
          />
          <motion.path
            initial={"hidden"}
            animate={controls}
            variants={sector1Variants}
            transition={{ duration: 0.3, ease: "easeOut", delay: 1.3 }}
            d="M122.496 132.504V61.0093C107.398 61.0093 92.687 65.7891 80.4722 74.6636C68.2574 83.5382 59.1656 96.0519 54.5 110.411L122.496 132.504Z"
            fill="#E4F9F4"
          />
          <motion.path
            initial={"hidden"}
            animate={controls}
            variants={sector2Variants}
            transition={{ duration: 0.3, ease: "easeOut", delay: 1.3 }}
            d="M122.495 132.504L54.4992 110.411C51.4031 119.94 50.3444 130.013 51.3917 139.978C52.439 149.942 55.5689 159.575 60.5786 168.252C65.5882 176.929 72.3656 184.456 80.4714 190.345C88.5772 196.234 97.8302 200.354 107.631 202.437C117.431 204.52 127.56 204.52 137.36 202.437C147.16 200.354 156.413 196.234 164.519 190.345C172.625 184.456 179.402 176.929 184.412 168.252C189.422 159.575 192.552 149.942 193.599 139.978L122.495 132.504Z"
            fill="#00D09F"
          />
          <motion.path
            initial={"hidden"}
            animate={controls}
            variants={sector3Variants}
            transition={{ duration: 0.3, ease: "easeOut", delay: 1.3 }}
            d="M129.505 125.495L200.608 132.968C201.656 123.004 200.597 112.931 197.501 103.402C194.405 93.873 189.34 85.1013 182.636 77.6555C175.932 70.2098 167.738 64.2563 158.585 60.1811C149.432 56.1059 139.524 54 129.505 54V125.495Z"
            fill="#E4F9F4"
          />
          <motion.circle
            initial={"hidden"}
            animate={controls}
            variants={contentVariants}
            transition={{ duration: 0.3, ease: "easeOut", delay: 2 }}
            cx="74.5"
            cy="184.5"
            r="17.5"
            fill="#F1F1F1"
          />
          <motion.path
            initial={"hidden"}
            animate={controls}
            variants={contentVariants}
            transition={{ duration: 0.3, ease: "easeOut", delay: 2 }}
            d="M72.1545 192.99L70.8073 192.615C70.6615 192.575 70.5747 192.425 70.6163 192.286L75.5052 176.193C75.5469 176.053 75.7031 175.97 75.849 176.01L77.1962 176.385C77.342 176.425 77.4288 176.574 77.3872 176.714L72.4983 192.807C72.4566 192.95 72.3038 193.03 72.1545 192.99ZM69.2656 188.969L70.2101 188.006C70.3177 187.896 70.3073 187.724 70.1927 187.624L66.5087 184.5L70.1927 181.376C70.3108 181.276 70.3177 181.103 70.2101 180.994L69.2656 180.031C69.1615 179.925 68.9844 179.918 68.8733 180.018L64.0885 184.307C63.9705 184.414 63.9705 184.59 64.0885 184.696L68.8733 188.982C68.9844 189.082 69.158 189.075 69.2656 188.969ZM79.1302 188.982L83.9115 184.696C84.0295 184.59 84.0295 184.414 83.9115 184.307L79.1302 180.018C79.0191 179.918 78.842 179.921 78.7378 180.031L77.7934 180.994C77.6858 181.103 77.6962 181.276 77.8108 181.376L81.4948 184.5L77.8108 187.624C77.6927 187.724 77.6858 187.896 77.7934 188.006L78.7378 188.969C78.8455 189.075 79.0191 189.082 79.1302 188.982Z"
            fill="black"
          />
          <motion.path
            initial={"hidden"}
            animate={controls}
            variants={contentVariants}
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.9 }}
            d="M258 130.954V131.25H251.333V125H251.649C251.98 125 252.298 125.123 252.533 125.343L257.634 130.125C257.868 130.345 258 130.643 258 130.954ZM250.917 132.812C250.229 132.812 249.667 132.285 249.667 131.641V125H239.25C238.56 125 238 125.525 238 126.172V148.828C238 149.475 238.56 150 239.25 150H256.75C257.44 150 258 149.475 258 148.828V132.812H250.917ZM243.862 133.594C245.242 133.594 246.362 134.643 246.362 135.938C246.362 137.232 245.242 138.281 243.862 138.281C242.481 138.281 241.362 137.232 241.362 135.938C241.362 134.643 242.481 133.594 243.862 133.594ZM254.695 145.312H241.362L241.387 142.945L243.445 141.016C243.689 140.787 244.06 140.81 244.304 141.039L246.362 142.969L251.753 137.914C251.997 137.685 252.393 137.685 252.637 137.914L254.695 139.844V145.312Z"
            fill="#00D09F"
          />
          <motion.path
            initial={"hidden"}
            animate={controls}
            variants={contentVariants}
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.9 }}
            d="M307.444 128.175V130.159C307.444 131.907 303.09 133.333 297.722 133.333C292.355 133.333 288 131.907 288 130.159V128.175C288 126.426 292.355 125 297.722 125C303.09 125 307.444 126.426 307.444 128.175ZM307.444 132.639V137.103C307.444 138.852 303.09 140.278 297.722 140.278C292.355 140.278 288 138.852 288 137.103V132.639C290.089 134.077 293.912 134.747 297.722 134.747C301.533 134.747 305.356 134.077 307.444 132.639ZM307.444 139.583V144.048C307.444 145.796 303.09 147.222 297.722 147.222C292.355 147.222 288 145.796 288 144.048V139.583C290.089 141.022 293.912 141.691 297.722 141.691C301.533 141.691 305.356 141.022 307.444 139.583Z"
            fill="#00D09F"
          />
          <motion.path
            initial={"hidden"}
            animate={controls}
            variants={contentVariants}
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.9 }}
            d="M313.152 137.194H302.431C301.175 137.194 300.194 138.229 300.194 139.459V148.735C300.194 149.965 301.175 151 302.431 151H313.152C314.408 151 315.389 149.965 315.389 148.735V139.459C315.389 138.229 314.408 137.194 313.152 137.194ZM305.967 147.313H303.844V146.784H305.967V147.313ZM305.967 143.097H303.844V142.567H305.967V143.097ZM311.739 147.313H309.616V146.784H311.739V147.313ZM311.739 143.097H309.616V142.567H311.739V143.097Z"
            fill="#00D09F"
            stroke="white"
            strokeWidth="2"
          />
          <motion.path
            initial={"hidden"}
            animate={controls}
            variants={contentVariants}
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.9 }}
            d="M275.85 175.545C275.616 175.779 275.3 175.91 274.969 175.91C274.639 175.91 274.323 175.779 274.089 175.545C273.856 175.312 273.725 174.995 273.725 174.665C273.725 174.334 273.856 174.018 274.089 173.784L276.204 171.676C277.283 170.603 278.743 170 280.264 170C281.786 170 283.246 170.603 284.324 171.676L284.336 171.689C285.404 172.769 286.002 174.228 286 175.747C285.998 177.266 285.396 178.723 284.324 179.8L282.209 181.908C281.976 182.141 281.659 182.272 281.329 182.272C280.999 182.272 280.682 182.141 280.449 181.908C280.216 181.674 280.084 181.357 280.084 181.027C280.084 180.697 280.216 180.38 280.449 180.146L282.564 178.031C283.168 177.419 283.507 176.593 283.507 175.733C283.507 174.873 283.168 174.048 282.564 173.436L282.546 173.418C281.933 172.816 281.108 172.48 280.25 172.482C279.391 172.485 278.568 172.825 277.958 173.429L275.851 175.545H275.85ZM278.127 176.06C278.365 175.852 278.673 175.743 278.989 175.754C279.305 175.765 279.604 175.896 279.827 176.12C280.05 176.344 280.179 176.644 280.189 176.96C280.199 177.276 280.088 177.583 279.88 177.821L273.818 183.885C273.582 184.109 273.269 184.231 272.945 184.227C272.62 184.223 272.31 184.092 272.081 183.863C271.851 183.634 271.72 183.324 271.716 182.999C271.712 182.675 271.834 182.361 272.057 182.126L278.121 176.06H278.127ZM276.103 184.494C276.339 184.271 276.652 184.148 276.977 184.152C277.301 184.157 277.611 184.288 277.84 184.517C278.069 184.747 278.2 185.057 278.204 185.382C278.208 185.706 278.086 186.02 277.862 186.255L275.796 188.324C274.722 189.393 273.269 189.996 271.753 190C270.237 190.004 268.781 189.41 267.7 188.346L267.655 188.302C266.591 187.221 265.996 185.764 266 184.247C266.004 182.73 266.606 181.276 267.676 180.2L269.742 178.138C269.855 178.013 269.992 177.911 270.145 177.841C270.298 177.77 270.464 177.731 270.633 177.726C270.802 177.722 270.97 177.751 271.126 177.814C271.283 177.876 271.426 177.969 271.545 178.088C271.665 178.208 271.759 178.35 271.822 178.506C271.885 178.663 271.915 178.831 271.912 178.999C271.908 179.168 271.87 179.334 271.8 179.488C271.729 179.641 271.629 179.779 271.504 179.893L269.436 181.961C268.831 182.573 268.492 183.399 268.492 184.26C268.492 185.121 268.831 185.947 269.436 186.559C270.048 187.166 270.874 187.507 271.736 187.507C272.597 187.507 273.424 187.166 274.036 186.559L276.103 184.494Z"
            fill="#00D09F"
          />
          <motion.rect
            initial={"hidden"}
            animate={controls}
            variants={contentVariants}
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.9 }}
            x="238"
            y="103"
            width="76"
            height="2"
            rx="1"
            fill="#DDDDDD"
          />
          <motion.path
            initial={"hidden"}
            animate={controls}
            variants={contentVariants}
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.9 }}
            d="M279.39 69V78.3168H282.839C283.415 78.3423 283.825 78.5384 284.061 78.9066C284.703 79.8935 283.827 80.8692 283.22 81.5563C281.496 83.4981 277.594 87.015 276.743 88.0417C276.098 88.7734 275.181 88.7734 274.536 88.0417C273.657 86.9879 269.542 83.2589 267.904 81.3697C267.336 80.7129 266.633 79.8169 267.224 78.9066C267.466 78.5384 267.872 78.3423 268.448 78.3168H271.887V69H279.39Z"
            fill="#DDDDDD"
          />
          <motion.rect
            initial={"hidden"}
            animate={controls}
            variants={contentVariants}
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.9 }}
            x="267"
            y="90.895"
            width="17.2857"
            height="2.30476"
            fill="#DDDDDD"
          />
        </g>
        <g filter="url(#filter1_d_790_3637)">
          <motion.rect
            initial={"hidden"}
            animate={controls}
            variants={backgroundVariants}
            transition={{ duration: 0.4, ease: "easeOut", delay: 2.8 }}
            x="164"
            y="260"
            width="350"
            height="238"
            rx="15"
            fill="white"
          />
          <motion.rect
            initial={"hidden"}
            animate={controls}
            variants={backgroundVariants}
            transition={{ duration: 0.4, ease: "easeOut", delay: 3.7 }}
            x="194"
            y="440"
            width="287"
            height="35"
            rx="5"
            fill="#F1F1F1"
          />
          <motion.rect
            initial={"hidden"}
            animate={controls}
            variants={contentVariants}
            transition={{ duration: 0.4, ease: "easeOut", delay: 4.3 }}
            x="314"
            y="310"
            width="167"
            height="25"
            rx="12.5"
            fill="#F1F1F1"
          />
          <motion.rect
            initial={"hidden"}
            animate={controls}
            variants={contentVariants}
            transition={{ duration: 0.4, ease: "easeOut", delay: 4.3 }}
            x="314"
            y="345"
            width="113"
            height="15"
            rx="7.5"
            fill="#F1F1F1"
          />
          <motion.rect
            initial={"hidden"}
            animate={controls}
            variants={contentVariants}
            transition={{ duration: 0.4, ease: "easeOut", delay: 4.3 }}
            x="314"
            y="370"
            width="137"
            height="5"
            rx="2.5"
            fill="#F1F1F1"
          />
          <motion.rect
            initial={"hidden"}
            animate={controls}
            variants={contentVariants}
            transition={{ duration: 0.4, ease: "easeOut", delay: 4.3 }}
            x="314"
            y="380"
            width="137"
            height="5"
            rx="2.5"
            fill="#F1F1F1"
          />
          <motion.rect
            initial={"hidden"}
            animate={controls}
            variants={contentVariants}
            transition={{ duration: 0.4, ease: "easeOut", delay: 4.3 }}
            x="314"
            y="390"
            width="137"
            height="5"
            rx="2.5"
            fill="#F1F1F1"
          />
          <motion.rect
            initial={"hidden"}
            animate={controls}
            variants={contentVariants}
            transition={{ duration: 0.4, ease: "easeOut", delay: 4.3 }}
            x="314"
            y="400"
            width="137"
            height="5"
            rx="2.5"
            fill="#F1F1F1"
          />
          <motion.rect
            initial={"hidden"}
            animate={controls}
            variants={contentVariants}
            transition={{ duration: 0.4, ease: "easeOut", delay: 4.3 }}
            x="314"
            y="410"
            width="137"
            height="5"
            rx="2.5"
            fill="#F1F1F1"
          />
          <motion.rect
            initial={"hidden"}
            animate={controls}
            variants={contentVariants}
            transition={{ duration: 0.4, ease: "easeOut", delay: 4.3 }}
            x="314"
            y="420"
            width="137"
            height="5"
            rx="2.5"
            fill="#F1F1F1"
          />
          <motion.path
            initial={"hidden"}
            animate={controls}
            variants={sector1Variants}
            transition={{ duration: 0.4, ease: "easeOut", delay: 3.3 }}
            d="M239.758 360.243V314.486C230.095 314.486 220.68 317.545 212.862 323.225C205.045 328.904 199.226 336.913 196.24 346.103L239.758 360.243Z"
            fill="#E4F9F4"
          />
          <motion.path
            initial={"hidden"}
            animate={controls}
            variants={sector2Variants}
            transition={{ duration: 0.4, ease: "easeOut", delay: 3.3 }}
            d="M239.757 360.243L196.24 346.103C194.258 352.202 193.58 358.648 194.251 365.026C194.921 371.403 196.924 377.568 200.13 383.121C203.336 388.674 207.674 393.492 212.862 397.261C218.049 401.03 223.971 403.666 230.244 405C236.516 406.333 242.998 406.333 249.27 405C255.543 403.666 261.465 401.03 266.652 397.261C271.84 393.492 276.177 388.674 279.384 383.121C282.59 377.568 284.593 371.403 285.263 365.026L239.757 360.243Z"
            fill="#00D09F"
          />
          <motion.path
            initial={"hidden"}
            animate={controls}
            variants={sector3Variants}
            transition={{ duration: 0.4, ease: "easeOut", delay: 3.3 }}
            d="M244.243 355.757L289.749 360.54C290.42 354.163 289.742 347.716 287.761 341.617C285.779 335.519 282.538 329.905 278.247 325.14C273.957 320.374 268.712 316.564 262.854 313.956C256.996 311.348 250.655 310 244.243 310V355.757Z"
            fill="#E4F9F4"
          />
          <motion.rect
            initial={"hidden"}
            animate={controls}
            variants={contentVariants}
            transition={{ duration: 0.4, ease: "easeOut", delay: 4 }}
            x="194"
            y="268"
            width="96"
            height="10"
            rx="5"
            fill="#DDDDDD"
          />
          <motion.circle
            initial={"hidden"}
            animate={controls}
            variants={contentVariants}
            transition={{ duration: 0.4, ease: "easeOut", delay: 4 }}
            cx="184"
            cy="273"
            r="5"
            fill="#DDDDDD"
          />
          <motion.circle
            initial={"hidden"}
            animate={controls}
            variants={contentVariants}
            transition={{ duration: 0.4, ease: "easeOut", delay: 4 }}
            cx="461"
            cy="273"
            r="5"
            fill="#DDDDDD"
          />
          <motion.circle
            initial={"hidden"}
            animate={controls}
            variants={contentVariants}
            transition={{ duration: 0.4, ease: "easeOut", delay: 4 }}
            cx="476"
            cy="273"
            r="5"
            fill="#DDDDDD"
          />
          <motion.circle
            initial={"hidden"}
            animate={controls}
            variants={contentVariants}
            transition={{ duration: 0.4, ease: "easeOut", delay: 4 }}
            cx="491"
            cy="273"
            r="5"
            fill="#DDDDDD"
          />
        </g>
        <motion.path
          initial={"hidden"}
          animate={controls}
          variants={contentVariants}
          transition={{ duration: 0.3, ease: "easeOut", delay: 2.4 }}
          d="M74.0374 208.166C74.1293 207.622 73.7624 207.106 73.2178 207.014C72.6732 206.922 72.1572 207.289 72.0653 207.834L74.0374 208.166ZM196 327L186.655 320.217L185.453 331.701L196 327ZM71.5025 211.866C71.4413 212.415 71.8366 212.91 72.3854 212.971C72.9343 213.033 73.4289 212.637 73.4902 212.088L71.5025 211.866ZM73.007 220.025C73.014 219.473 72.5721 219.019 72.0198 219.012C71.4676 219.005 71.0142 219.447 71.0072 220L73.007 220.025ZM71.2707 228.142C71.3129 228.693 71.7935 229.105 72.3442 229.063C72.8949 229.021 73.3071 228.54 73.2649 227.989L71.2707 228.142ZM74.215 235.909C74.126 235.364 73.6119 234.994 73.0669 235.083C72.5218 235.172 72.1521 235.686 72.2412 236.231L74.215 235.909ZM73.8916 244.204C74.0262 244.74 74.5695 245.065 75.1051 244.93C75.6408 244.796 75.9659 244.253 75.8313 243.717L73.8916 244.204ZM78.0951 251.351C77.9159 250.828 77.3471 250.55 76.8247 250.729C76.3023 250.908 76.0241 251.477 76.2033 252L78.0951 251.351ZM79.1701 259.584C79.3929 260.09 79.9833 260.319 80.4886 260.096C80.9939 259.873 81.2229 259.283 81 258.777L79.1701 259.584ZM84.5233 265.925C84.2583 265.441 83.6506 265.263 83.1661 265.528C82.6816 265.793 82.5037 266.401 82.7687 266.885L84.5233 265.925ZM86.9747 273.852C87.28 274.312 87.9006 274.437 88.3608 274.132C88.8211 273.827 88.9467 273.206 88.6414 272.746L86.9747 273.852ZM93.3231 279.196C92.9803 278.763 92.3513 278.69 91.9183 279.033C91.4854 279.376 91.4123 280.005 91.7552 280.438L93.3231 279.196ZM97.0705 286.608C97.4478 287.011 98.0806 287.032 98.4839 286.655C98.8873 286.278 98.9084 285.645 98.5311 285.242L97.0705 286.608ZM104.197 290.834C103.789 290.462 103.157 290.491 102.785 290.899C102.412 291.307 102.441 291.94 102.849 292.312L104.197 290.834ZM109.065 297.561C109.5 297.901 110.128 297.824 110.468 297.389C110.809 296.954 110.732 296.326 110.297 295.986L109.065 297.561ZM116.774 300.684C116.316 300.376 115.695 300.498 115.387 300.956C115.078 301.414 115.2 302.036 115.658 302.344L116.774 300.684ZM122.537 306.64C123.015 306.917 123.627 306.754 123.904 306.276C124.181 305.798 124.018 305.186 123.54 304.909L122.537 306.64ZM130.569 308.692C130.074 308.445 129.474 308.646 129.227 309.14C128.98 309.634 129.181 310.234 129.675 310.481L130.569 308.692ZM137.031 313.889C137.538 314.107 138.126 313.872 138.344 313.365C138.562 312.857 138.327 312.269 137.82 312.051L137.031 313.889ZM145.253 315.008C144.735 314.817 144.16 315.083 143.969 315.601C143.779 316.119 144.044 316.694 144.563 316.885L145.253 315.008ZM152.236 319.493C152.763 319.658 153.324 319.364 153.489 318.837C153.654 318.31 153.361 317.749 152.834 317.584L152.236 319.493ZM160.535 319.805C160.001 319.663 159.454 319.982 159.313 320.516C159.172 321.05 159.49 321.597 160.024 321.738L160.535 319.805ZM167.906 323.647C168.446 323.766 168.979 323.425 169.098 322.886C169.217 322.347 168.877 321.813 168.337 321.694L167.906 323.647ZM176.226 323.276C175.683 323.177 175.162 323.538 175.064 324.082C174.966 324.625 175.326 325.146 175.87 325.244L176.226 323.276ZM183.823 326.539C184.369 326.618 184.877 326.24 184.956 325.693C185.036 325.147 184.657 324.639 184.11 324.56L183.823 326.539ZM192.044 325.581C191.495 325.519 191 325.914 190.939 326.462C190.877 327.011 191.272 327.506 191.821 327.568L192.044 325.581ZM72.0653 207.834C71.8465 209.13 71.6578 210.476 71.5025 211.866L73.4902 212.088C73.6414 210.734 73.825 209.425 74.0374 208.166L72.0653 207.834ZM71.0072 220C70.9738 222.617 71.0559 225.339 71.2707 228.142L73.2649 227.989C73.0546 225.245 72.9744 222.583 73.007 220.025L71.0072 220ZM72.2412 236.231C72.6686 238.847 73.2145 241.51 73.8916 244.204L75.8313 243.717C75.1682 241.079 74.6335 238.47 74.215 235.909L72.2412 236.231ZM76.2033 252C77.0677 254.52 78.0534 257.052 79.1701 259.584L81 258.777C79.9067 256.298 78.9416 253.818 78.0951 251.351L76.2033 252ZM82.7687 266.885C84.0474 269.222 85.4468 271.548 86.9747 273.852L88.6414 272.746C87.1453 270.49 85.7752 268.213 84.5233 265.925L82.7687 266.885ZM91.7552 280.438C93.4082 282.525 95.1779 284.585 97.0705 286.608L98.5311 285.242C96.6762 283.259 94.9422 281.241 93.3231 279.196L91.7552 280.438ZM102.849 292.312C104.811 294.101 106.881 295.853 109.065 297.561L110.297 295.986C108.153 294.309 106.121 292.59 104.197 290.834L102.849 292.312ZM115.658 302.344C117.852 303.819 120.144 305.253 122.537 306.64L123.54 304.909C121.185 303.545 118.931 302.134 116.774 300.684L115.658 302.344ZM129.675 310.481C132.039 311.661 134.49 312.798 137.031 313.889L137.82 312.051C135.314 310.975 132.897 309.854 130.569 308.692L129.675 310.481ZM144.563 316.885C147.043 317.797 149.6 318.667 152.236 319.493L152.834 317.584C150.228 316.768 147.702 315.908 145.253 315.008L144.563 316.885ZM160.024 321.738C162.583 322.415 165.209 323.052 167.906 323.647L168.337 321.694C165.667 321.105 163.067 320.474 160.535 319.805L160.024 321.738ZM175.87 325.244C178.461 325.713 181.111 326.145 183.823 326.539L184.11 324.56C181.421 324.169 178.794 323.741 176.226 323.276L175.87 325.244Z"
          fill="#00D09F"
        />
        <defs>
          <filter
            id="filter0_d_790_3637"
            x="0"
            y="0"
            width="362"
            height="274"
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
              radius="24"
              operator="erode"
              in="SourceAlpha"
              result="effect1_dropShadow_790_3637"
            />
            <feOffset dy="30" />
            <feGaussianBlur stdDeviation="15" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0.05 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_790_3637"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_790_3637"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_d_790_3637"
            x="158"
            y="260"
            width="362"
            height="274"
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
              radius="24"
              operator="erode"
              in="SourceAlpha"
              result="effect1_dropShadow_790_3637"
            />
            <feOffset dy="30" />
            <feGaussianBlur stdDeviation="15" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0.05 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_790_3637"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_790_3637"
              result="shape"
            />
          </filter>
        </defs>
      </motion.svg>
      <RestartButton onClick={() => restartAnimation()} />
    </div>
  )
}

export default Sharing
