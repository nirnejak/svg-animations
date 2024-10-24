export const gridContainerVariants = {
  hidden: {
    translateY: 10,
    opacity: 1,
    scale: 0,
  },
  visible: {
    translateY: 0,
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
}

export const gridItemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}
