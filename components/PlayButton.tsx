import * as React from "react"

import * as Tooltip from "@radix-ui/react-tooltip"
import localFont from "next/font/local"

interface Props {
  onClick: () => void
}

const satoshi = localFont({
  variable: "--font-sans",
  src: [
    {
      path: "../fonts/Satoshi-Variable.woff2",
      style: "normal",
    },
    {
      path: "../fonts/Satoshi-VariableItalic.woff2",
      style: "italic",
    },
  ],
})

const PlayButton: React.FC<Props> = ({ onClick }) => {
  return (
    <Tooltip.Provider delayDuration={200}>
      <Tooltip.Root key={"Play Animation"}>
        <Tooltip.Trigger asChild>
          <button
            onClick={() => {
              onClick()
            }}
            className="absolute bottom-2 right-2 rounded-full bg-gray-200 p-3 text-xs text-gray-700 outline-none transition-transform hover:bg-gray-300 focus:bg-gray-300 active:scale-95"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 4v16" />
              <path d="M20 12L6 20" />
              <path d="M20 12L6 4" />
            </svg>
          </button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="z-20 select-none rounded-md bg-zinc-800 px-3.5 py-2.5 font-sans text-sm leading-none text-zinc-300 will-change-[transform,opacity] data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade"
            style={satoshi.style}
            sideOffset={5}
          >
            Play Animation
            <Tooltip.Arrow className="fill-zinc-800" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}

export default PlayButton
