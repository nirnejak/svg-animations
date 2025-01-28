import * as React from "react"

import useWindowSize from "./useWindowSize"

interface HighlightProperties {
  wrapperRef: React.RefObject<HTMLDivElement | null>
  highlightStyles: React.CSSProperties
}

const useLinkHighlight = (activeTab: number): HighlightProperties => {
  const size = useWindowSize()

  const wrapperRef = React.useRef<HTMLDivElement | null>(null)

  const [highlightStyles, setHighlightStyles] =
    React.useState<React.CSSProperties>({ opacity: 0 })

  React.useEffect(() => {
    if (wrapperRef?.current !== null) {
      const elements = wrapperRef.current?.getElementsByTagName("a")

      if (elements?.length !== 0) {
        const dimensions = elements[activeTab].getBoundingClientRect()
        const wrapperDimensions = wrapperRef.current.getBoundingClientRect()

        setHighlightStyles({
          opacity: 1,
          width: `${dimensions.width}px`,
          transform: `translate(${dimensions.left - wrapperDimensions.left}px)`,
        })
      }
    }
  }, [activeTab, size])

  return { wrapperRef, highlightStyles }
}

export default useLinkHighlight
