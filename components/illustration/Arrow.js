import React from "react"
import { useInView } from "react-intersection-observer"

import { motion, useAnimation } from "framer-motion"

const Arrow = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  React.useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const arrowVariants = {
    hidden: { opacity: 0, scale: 0, originX: 1, originY: 0 },
    visible: { opacity: 1, scale: 1, originX: 1, originY: 1 },
  }

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  return (
    <motion.svg
      ref={ref}
      width="540"
      height="191"
      viewBox="0 0 540 191"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M3.5 191L16.8518 179.967L0.621037 173.92L3.5 191Z"
        fill="#00D09F"
        stroke="#00D09F"
        initial={"hidden"}
        animate={controls}
        variants={contentVariants}
        transition={{ duration: 0.5, ease: "easeOut", delay: 4.06 }}
      />

      <motion.path
        d="M537.261 0.155259C536.719 0.949369 536.162 1.73641 535.591 2.51648L538.01 4.28979C538.602 3.48274 539.178 2.66804 539.739 1.84559L537.261 0.155259Z"
        fill="#00D09F"
        stroke="#00D09F"
        initial={"hidden"}
        animate={controls}
        variants={arrowVariants}
        transition={{ duration: 0.1, ease: "easeOut", delay: 3 }}
      />
      <motion.path
        d="M531.983 7.11406C530.731 8.60763 529.422 10.0745 528.057 11.5155L530.236 13.5785C531.641 12.0948 532.99 10.5826 534.282 9.04095L531.983 7.11406Z"
        fill="#00D09F"
        stroke="#00D09F"
        initial={"hidden"}
        animate={controls}
        variants={arrowVariants}
        transition={{ duration: 0.1, ease: "easeOut", delay: 3.1 }}
      />
      <motion.path
        d="M523.943 15.623C522.521 16.9683 521.048 18.29 519.525 19.5886L521.472 21.8712C523.032 20.5405 524.544 19.1845 526.005 17.8027L523.943 15.623Z"
        fill="#00D09F"
        stroke="#00D09F"
        initial={"hidden"}
        animate={controls}
        variants={arrowVariants}
        transition={{ duration: 0.1, ease: "easeOut", delay: 3.12 }}
      />
      <motion.path
        d="M515.002 23.2673C513.468 24.4588 511.89 25.6301 510.271 26.7816L512.009 29.2265C513.662 28.0515 515.273 26.8552 516.842 25.6368L515.002 23.2673Z"
        fill="#00D09F"
        stroke="#00D09F"
        initial={"hidden"}
        animate={controls}
        variants={arrowVariants}
        transition={{ duration: 0.1, ease: "easeOut", delay: 3.14 }}
      />
      <motion.path
        d="M505.356 30.1326C503.747 31.1851 502.102 32.2204 500.422 33.2389L501.978 35.8043C503.686 34.7686 505.36 33.715 506.998 32.6429L505.356 30.1326Z"
        fill="#00D09F"
        stroke="#00D09F"
        initial={"hidden"}
        animate={controls}
        variants={arrowVariants}
        transition={{ duration: 0.1, ease: "easeOut", delay: 3.16 }}
      />
      <motion.path
        d="M495.278 36.2444C493.582 37.1997 491.854 38.1397 490.095 39.0646L491.491 41.7199C493.275 40.782 495.028 39.8283 496.75 38.8583L495.278 36.2444Z"
        fill="#00D09F"
        stroke="#00D09F"
        initial={"hidden"}
        animate={controls}
        variants={arrowVariants}
        transition={{ duration: 0.1, ease: "easeOut", delay: 3.18 }}
      />
      <motion.path
        d="M484.858 41.7298C483.084 42.6042 481.281 43.4648 479.45 44.3119L480.71 47.0345C482.562 46.1775 484.387 45.3064 486.184 44.4208L484.858 41.7298Z"
        fill="#00D09F"
        stroke="#00D09F"
        initial={"hidden"}
        animate={controls}
        variants={arrowVariants}
        transition={{ duration: 0.1, ease: "easeOut", delay: 3.2 }}
      />
      <motion.path
        d="M474.088 46.7209C472.301 47.5003 470.491 48.2679 468.658 49.0241L469.801 51.7975C471.653 51.0339 473.482 50.2584 475.287 49.4706L474.088 46.7209Z"
        fill="#00D09F"
        stroke="#00D09F"
        initial={"hidden"}
        animate={controls}
        variants={arrowVariants}
        transition={{ duration: 0.1, ease: "easeOut", delay: 3.22 }}
      />
      <motion.path
        d="M463.088 51.2585C461.275 51.9665 459.44 52.6642 457.586 53.3518L458.629 56.1647C460.499 55.4713 462.349 54.7675 464.179 54.0531L463.088 51.2585Z"
        fill="#00D09F"
        stroke="#00D09F"
        initial={"hidden"}
        animate={controls}
        variants={arrowVariants}
        transition={{ duration: 0.1, ease: "easeOut", delay: 3.24 }}
      />
      <motion.path
        d="M452.034 55.3595C450.165 56.0191 448.276 56.6693 446.369 57.3103L447.325 60.1539C449.246 59.5083 451.148 58.8533 453.032 58.1886L452.034 55.3595Z"
        fill="#00D09F"
        stroke="#00D09F"
        initial={"hidden"}
        animate={controls}
        variants={arrowVariants}
        transition={{ duration: 0.1, ease: "easeOut", delay: 3.26 }}
      />
      <motion.path
        d="M440.744 59.1583C438.884 59.7553 437.009 60.1443 435.118 60.9253L435.999 63.793C437.901 63.2084 439.789 62.6157 441.661 62.0146L440.744 59.1583Z"
        fill="#00D09F"
        stroke="#00D09F"
        initial={"hidden"}
        animate={controls}
        variants={arrowVariants}
        transition={{ duration: 0.1, ease: "easeOut", delay: 3.28 }}
      />
      <motion.path
        d="M429.399 62.6449C427.501 63.2035 425.588 63.7547 423.662 64.2987L424.478 67.1857C426.414 66.6389 428.337 66.0847 430.246 65.5229L429.399 62.6449Z"
        fill="#00D09F"
        stroke="#00D09F"
        initial={"hidden"}
        animate={controls}
        variants={arrowVariants}
        transition={{ duration: 0.1, ease: "easeOut", delay: 3.3 }}
      />
      <motion.path
        d="M417.989 65.8696C416.085 66.3866 414.169 66.897 412.24 67.401L412.999 70.1035C414.936 69.7972 416.862 69.2843 418.775 68.7648L417.989 65.8696Z"
        fill="#00D09F"
        stroke="#00D09F"
        initial={"hidden"}
        animate={controls}
        variants={arrowVariants}
        transition={{ duration: 0.1, ease: "easeOut", delay: 3.32 }}
      />
      <motion.path
        d="M406.419 68.8943C404.524 69.3715 402.618 69.8429 400.702 70.1088L401.411 73.2238C403.335 72.7561 405.249 72.2827 407.152 71.8035L406.419 68.8943Z"
        fill="#00D09F"
        stroke="#00D09F"
        initial={"hidden"}
        animate={controls}
        variants={arrowVariants}
        transition={{ duration: 0.1, ease: "easeOut", delay: 3.34 }}
      />
      <motion.path
        d="M394.937 71.687C393.005 72.1411 391.064 72.5898 389.113 73.0335L389.778 75.9588C391.736 75.5136 393.684 75.0632 395.623 74.6075L394.937 71.687Z"
        fill="#00D09F"
        stroke="#00D09F"
        initial={"hidden"}
        animate={controls}
        variants={arrowVariants}
        transition={{ duration: 0.1, ease: "easeOut", delay: 3.36 }}
      />
      <motion.path
        d="M383.298 74.3353C381.381 74.7579 379.455 75.1758 377.522 75.5894L378.149 78.5231C380.089 78.1082 382.02 77.6889 383.944 77.265L383.298 74.3353Z"
        fill="#00D09F"
        stroke="#00D09F"
        initial={"hidden"}
        animate={controls}
        variants={arrowVariants}
        transition={{ duration: 0.1, ease: "easeOut", delay: 3.38 }}
      />
      <motion.path
        d="M371.698 76.8172C369.749 77.2222 367.793 77.623 365.83 78.0198L366.425 80.9603C368.393 80.5625 370.154 80.1606 372.308 79.7544L371.698 76.8172Z"
        fill="#00D09F"
        stroke="#00D09F"
        initial={"hidden"}
        animate={controls}
        variants={arrowVariants}
        transition={{ duration: 0.1, ease: "easeOut", delay: 3.4 }}
      />
      <motion.path
        d="M360.022 79.1787C358.086 79.5598 356.145 79.9373 354.198 80.1113L354.764 83.2575C356.715 82.8826 358.661 82.5042 360.601 82.1221L360.022 79.1787Z"
        fill="#00D09F"
        stroke="#00D09F"
        initial={"hidden"}
        animate={controls}
        variants={arrowVariants}
        transition={{ duration: 0.1, ease: "easeOut", delay: 3.42 }}
      />
      <motion.path
        d="M348.339 81.4233C346.385 81.7899 344.426 82.1532 342.462 82.5135L343.003 85.4643C344.971 85.1033 346.934 84.7392 348.892 84.3719L348.339 81.4233Z"
        fill="#00D09F"
        stroke="#00D09F"
        initial={"hidden"}
        animate={controls}
        variants={arrowVariants}
        transition={{ duration: 0.1, ease: "easeOut", delay: 3.44 }}
      />
      <motion.path
        d="M336.634 83.5714C334.687 83.9212 332.735 84.2682 330.78 84.6126L331.3 87.5672C333.259 87.2222 335.214 86.8746 337.164 86.5241L336.634 83.5714Z"
        fill="#00D09F"
        stroke="#00D09F"
        initial={"hidden"}
        animate={controls}
        variants={arrowVariants}
        transition={{ duration: 0.1, ease: "easeOut", delay: 3.46 }}
      />
      <motion.path
        d="M324.903 85.6383C322.948 85.9763 320.99 86.312 319.029 86.6454L319.532 89.603C321.496 89.2691 323.456 88.933 325.414 88.5944L324.903 85.6383Z"
        fill="#00D09F"
        stroke="#00D09F"
        initial={"hidden"}
        animate={controls}
        variants={arrowVariants}
        transition={{ duration: 0.1, ease: "easeOut", delay: 3.48 }}
      />
      <motion.path
        d="M313.173 87.6334C311.218 87.9606 309.26 88.2859 307.301 88.6093L307.789 91.5693C309.751 91.2455 311.711 90.9198 313.668 90.5922L313.173 87.6334Z"
        fill="#00D09F"
        stroke="#00D09F"
        initial={"hidden"}
        animate={controls}
        variants={arrowVariants}
        transition={{ duration: 0.1, ease: "easeOut", delay: 3.5 }}
      />
      <motion.path
        d="M301.416 89.5743C299.458 89.8933 297.499 90.2107 295.539 90.5266L296.016 93.4884C297.978 93.1722 299.939 92.8546 301.898 92.5353L301.416 89.5743Z"
        fill="#00D09F"
        stroke="#00D09F"
        initial={"hidden"}
        animate={controls}
        variants={arrowVariants}
        transition={{ duration: 0.1, ease: "easeOut", delay: 3.52 }}
      />
      <motion.path
        d="M289.664 91.4685C287.704 91.7811 285.744 92.0924 283.783 92.4027L284.252 95.3658C286.214 95.0554 288.176 94.7438 290.136 94.431L289.664 91.4685Z"
        fill="#00D09F"
        stroke="#00D09F"
        initial={"hidden"}
        animate={controls}
        variants={arrowVariants}
        transition={{ duration: 0.1, ease: "easeOut", delay: 3.54 }}
      />
      <motion.path
        d="M277.899 93.3304C275.937 93.6388 273.974 93.9462 272.012 94.2529L272.475 97.2169C274.438 96.9101 276.401 96.6025 278.365 96.294L277.899 93.3304Z"
        fill="#00D09F"
        stroke="#00D09F"
        initial={"hidden"}
        animate={controls}
        variants={arrowVariants}
        transition={{ duration: 0.1, ease: "easeOut", delay: 3.56 }}
      />
      <motion.path
        d="M266.126 95.1711C264.165 95.4765 262.204 95.7814 260.244 96.0859L260.705 99.0503C262.665 98.7458 264.626 98.4408 266.588 98.1353L266.126 95.1711Z"
        fill="#00D09F"
        stroke="#00D09F"
        initial={"hidden"}
        animate={controls}
        variants={contentVariants}
        transition={{ duration: 0.1, ease: "easeOut", delay: 3.58 }}
      />
      <motion.path
        d="M254.367 96.9986C252.398 97.3042 250.431 97.6097 248.466 97.915L248.927 100.879C250.892 100.574 252.858 100.269 254.827 99.9631L254.367 96.9986Z"
        fill="#00D09F"
        stroke="#00D09F"
        initial={"hidden"}
        animate={controls}
        variants={contentVariants}
        transition={{ duration: 0.1, ease: "easeOut", delay: 3.6 }}
      />
      <motion.path
        d="M242.576 98.8313C240.615 99.1369 238.656 99.4426 236.7 99.7486L237.164 102.713C239.119 102.407 241.077 102.101 243.038 101.796L242.576 98.8313Z"
        fill="#00D09F"
        stroke="#00D09F"
        initial={"hidden"}
        animate={controls}
        variants={contentVariants}
        transition={{ duration: 0.1, ease: "easeOut", delay: 3.62 }}
      />
      <motion.path
        d="M230.822 100.671C228.85 100.981 226.881 101.292 224.915 101.603L225.385 104.566C227.349 104.255 229.317 103.944 231.288 103.634L230.822 100.671Z"
        fill="#00D09F"
        stroke="#00D09F"
        initial={"hidden"}
        animate={controls}
        variants={contentVariants}
        transition={{ duration: 0.1, ease: "easeOut", delay: 3.64 }}
      />
      <motion.path
        d="M219.03 102.54C217.072 102.853 215.117 103.168 213.168 103.483L213.646 106.444C215.594 106.129 217.547 105.816 219.503 105.503L219.03 102.54Z"
        fill="#00D09F"
        stroke="#00D09F"
        initial={"hidden"}
        animate={controls}
        variants={contentVariants}
        transition={{ duration: 0.1, ease: "easeOut", delay: 3.66 }}
      />
      <motion.path
        d="M207.279 104.44C205.306 104.763 203.338 105.087 201.375 105.413L201.867 108.373C203.827 108.047 205.792 107.724 207.763 107.401L207.279 104.44Z"
        fill="#00D09F"
        stroke="#00D09F"
        initial={"hidden"}
        animate={controls}
        variants={contentVariants}
        transition={{ duration: 0.1, ease: "easeOut", delay: 3.68 }}
      />
      <motion.path
        d="M195.504 106.395C193.553 106.724 191.607 107.055 189.668 107.387L190.175 110.144C192.112 110.012 194.054 109.682 196.003 109.353L195.504 106.395Z"
        fill="#00D09F"
        stroke="#00D09F"
        initial={"hidden"}
        animate={controls}
        variants={contentVariants}
        transition={{ duration: 0.1, ease: "easeOut", delay: 3.7 }}
      />
      <motion.path
        d="M183.755 108.411C181.785 108.756 179.823 109.102 177.868 109.451L178.395 112.404C180.146 112.056 182.305 111.71 184.271 111.366L183.755 108.411Z"
        fill="#00D09F"
        stroke="#00D09F"
        initial={"hidden"}
        animate={controls}
        variants={contentVariants}
        transition={{ duration: 0.1, ease: "easeOut", delay: 3.72 }}
      />

      <motion.path
        d="M172.026 110.505C170.07 110.862 168.122 111.222 166.183 111.585L166.734 114.534C168.669 114.172 170.613 113.813 172.565 113.457L172.026 110.505Z"
        fill="#00D09F"
        stroke="#00D09F"
        initial={"hidden"}
        animate={controls}
        variants={contentVariants}
        transition={{ duration: 0.1, ease: "easeOut", delay: 3.74 }}
      />

      <motion.path
        d="M160.275 112.704C158.315 113.08 156.365 113.459 154.424 113.842L155.005 116.785C156.94 116.404 158.886 116.025 160.841 115.65L160.275 112.704Z"
        fill="#00D09F"
        stroke="#00D09F"
        initial={"hidden"}
        animate={controls}
        variants={contentVariants}
        transition={{ duration: 0.1, ease: "easeOut", delay: 3.76 }}
      />

      <motion.path
        d="M148.633 115.001C146.658 115.403 144.694 115.808 142.742 116.217L143.358 119.153C145.304 118.745 147.261 118.341 149.23 117.941L148.633 115.001Z"
        fill="#00D09F"
        stroke="#00D09F"
        initial={"hidden"}
        animate={controls}
        variants={contentVariants}
        transition={{ duration: 0.1, ease: "easeOut", delay: 3.78 }}
      />

      <motion.path
        d="M136.883 117.466C134.942 117.886 133.013 118.312 131.098 118.742L131.755 121.669C133.663 121.24 135.584 120.817 137.518 120.198L136.883 117.466Z  "
        fill="#00D09F"
        stroke="#00D09F"
        initial={"hidden"}
        animate={controls}
        variants={contentVariants}
        transition={{ duration: 0.1, ease: "easeOut", delay: 3.8 }}
      />

      <motion.path
        d="M125.284 120.07C123.316 120.529 121.362 120.992 119.424 121.462L120.13 124.378C122.06 123.91 124.005 123.448 125.965 122.992L125.284 120.07Z  "
        fill="#00D09F"
        stroke="#00D09F"
        initial={"hidden"}
        animate={controls}
        variants={contentVariants}
        transition={{ duration: 0.1, ease: "easeOut", delay: 3.82 }}
      />

      <motion.path
        d="M113.654 122.888C111.727 123.374 109.816 123.867 107.922 124.365L108.686 127.267C110.57 126.77 112.471 126.281 114.388 125.797L113.654 122.888Z "
        fill="#00D09F"
        stroke="#00D09F"
        initial={"hidden"}
        animate={controls}
        variants={contentVariants}
        transition={{ duration: 0.1, ease: "easeOut", delay: 3.84 }}
      />

      <motion.path
        d="M102.075 125.941C100.145 126.473 98.2337 127.013 96.342 127.561L97.1759 130.442C99.0551 129.899 100.954 129.362 102.873 128.833L102.075 125.941Z "
        fill="#00D09F"
        stroke="#00D09F"
        initial={"hidden"}
        animate={controls}
        variants={contentVariants}
        transition={{ duration: 0.1, ease: "easeOut", delay: 3.86 }}
      />

      <motion.path
        d="M90.6859 129.238C88.7292 129.833 86.7952 130.438 84.8848 131.051L85.802 133.907C87.6971 133.299 89.6163 132.699 91.5589 132.108L90.6859 129.238Z "
        fill="#00D09F"
        stroke="#00D09F"
        initial={"hidden"}
        animate={controls}
        variants={contentVariants}
        transition={{ duration: 0.1, ease: "easeOut", delay: 3.88 }}
      />

      <motion.path
        d="M79.2252 132.92C77.3372 133.561 75.4742 134.212 73.6373 134.874L74.6541 137.697C76.4731 137.041 78.3187 136.396 80.19 135.76L79.2252 132.92Z "
        fill="#00D09F"
        stroke="#00D09F"
        initial={"hidden"}
        animate={controls}
        variants={contentVariants}
        transition={{ duration: 0.1, ease: "easeOut", delay: 3.9 }}
      />

      <motion.path
        d="M67.938 136.994C66.0676 137.713 64.2269 138.443 62.417 139.186L63.5565 141.961C65.3444 141.227 67.1638 140.505 69.0138 139.795L67.938 136.994Z "
        fill="#00D09F"
        stroke="#00D09F"
        initial={"hidden"}
        animate={controls}
        variants={contentVariants}
        transition={{ duration: 0.1, ease: "easeOut", delay: 3.92 }}
      />

      <motion.path
        d="M56.9016 141.533C55.0313 142.358 53.1975 143.198 51.4015 144.053L52.6918 146.762C54.4602 145.919 56.2674 145.091 58.1122 144.278L56.9016 141.533Z "
        fill="#00D09F"
        stroke="#00D09F"
        initial={"hidden"}
        animate={controls}
        variants={contentVariants}
        transition={{ duration: 0.1, ease: "easeOut", delay: 3.94 }}
      />

      <motion.path
        d="M46.128 146.668C44.2864 147.619 42.4895 148.589 40.7392 149.579L42.2155 152.19C43.9314 151.22 45.6949 150.268 47.5046 149.334L46.128 146.668Z "
        fill="#00D09F"
        stroke="#00D09F"
        initial={"hidden"}
        animate={controls}
        variants={contentVariants}
        transition={{ duration: 0.1, ease: "easeOut", delay: 3.96 }}
      />

      <motion.path
        d="M35.6005 152.625C33.863 153.706 32.1782 154.809 30.5483 155.937L32.2549 158.404C33.8428 157.306 35.4868 156.229 37.1853 155.172L35.6005 152.625Z "
        fill="#00D09F"
        stroke="#00D09F"
        initial={"hidden"}
        animate={controls}
        variants={contentVariants}
        transition={{ duration: 0.1, ease: "easeOut", delay: 4 }}
      />

      <motion.path
        d="M25.6689 159.512C24.0612 160.762 22.5174 162.039 21.04 163.346L23.0276 165.593C24.4551 164.331 25.9499 163.093 27.5102 161.88L25.6689 159.512Z "
        fill="#00D09F"
        stroke="#00D09F"
        initial={"hidden"}
        animate={controls}
        variants={contentVariants}
        transition={{ duration: 0.1, ease: "easeOut", delay: 4.02 }}
      />

      <motion.path
        d="M16.62 167.548C15.196 169.008 13.8503 170.502 12.5862 172.032L14.899 173.943C16.108 172.479 17.3982 171.046 18.7673 169.643L16.62 167.548 165.548Z"
        fill="#00D09F"
        stroke="#00D09F"
        initial={"hidden"}
        animate={controls}
        variants={contentVariants}
        transition={{ duration: 0.1, ease: "easeOut", delay: 4.04 }}
      />
    </motion.svg>
  )
}

export default Arrow
