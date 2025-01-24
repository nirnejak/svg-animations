"use client"
import * as React from "react"

import * as Tooltip from "@radix-ui/react-tooltip"

import classNames from "@/utils/classNames"

interface Props {
  isExpanded: boolean
  onClick: () => void
}

const PlayButton: React.FC<Props> = ({ isExpanded, onClick }) => {
  return (
    <Tooltip.Root key={"Play Animation"}>
      <Tooltip.Trigger asChild>
        <button
          onClick={(e) => {
            e.stopPropagation()
            onClick()
          }}
          className={classNames(
            isExpanded ? "top-8 right-8" : "bottom-2 right-2",
            "absolute rounded-full bg-zinc-200 p-3 text-xs text-zinc-700 outline-none transition-transform hover:bg-zinc-300 focus:bg-zinc-300 active:scale-95"
          )}
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
          className="z-20 select-none rounded-md bg-zinc-800 px-3.5 py-2.5 text-sm leading-none text-zinc-300 will-change-[transform,opacity] data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade"
          sideOffset={5}
        >
          Play Animation
          <Tooltip.Arrow className="fill-zinc-800" />
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip.Root>
  )
}

export default PlayButton
