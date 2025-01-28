import React from "react"

interface Dimensions {
  width: number | null
  height: number | null
}

const useWindowSize = (): Dimensions => {
  const [size, setSize] = React.useState<Dimensions>({
    width: null,
    height: null,
  })

  React.useLayoutEffect(() => {
    const handleResize = (): void => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return size
}

export default useWindowSize
