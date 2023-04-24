import * as React from "react"

import * as Tooltip from "@radix-ui/react-tooltip"

interface Props {
  onClick: () => void
}

const EnlargeButton: React.FC<Props> = ({ onClick }) => {
  return (
    <Tooltip.Provider delayDuration={200}>
      <Tooltip.Root key={"Expand"}>
        <Tooltip.Trigger asChild>
          <button
            onClick={() => {
              onClick()
            }}
            className="absolute bottom-2 right-14 rounded-full bg-gray-200 p-3 text-xs text-gray-700 outline-none transition-transform hover:bg-gray-300 focus:bg-gray-300 active:scale-95"
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
              <path d="M14.5 9.5L21 3m0 0h-6m6 0v6M3 21l6.5-6.5M3 21v-6m0 6h6" />
            </svg>
          </button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="select-none rounded-md bg-zinc-800 px-3.5 py-2.5 text-sm leading-none text-zinc-300 will-change-[transform,opacity] data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade"
            sideOffset={5}
          >
            Expand
            <Tooltip.Arrow className="fill-zinc-800" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}

export default EnlargeButton
