import * as React from "react"

type Props = {
  onClick: () => void
}

const RestartButton: React.FC<Props> = ({ onClick }) => {
  return (
    <button
      onClick={() => onClick()}
      className="absolute bottom-2 right-2 rounded-md bg-gray-800 px-3 py-2 text-xs text-white transition-transform hover:bg-gray-700 active:scale-95"
    >
      Restart
    </button>
  )
}

export default RestartButton
