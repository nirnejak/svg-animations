import * as React from "react"

interface Props {
  onClick: () => void
}

const PlayButton: React.FC<Props> = ({ onClick }) => {
  return (
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
  )
}

export default PlayButton
