import * as React from "react"

const useModal = (): [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>,
] => {
  const [isOpen, setIsOpen] = React.useState(false)

  React.useEffect(() => {
    const handleEsc = (event: KeyboardEvent): void => {
      if (event.key === "Escape") {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEsc)
    }

    return () => {
      document.removeEventListener("keydown", handleEsc)
    }
  }, [isOpen, setIsOpen])

  return [isOpen, setIsOpen]
}

export default useModal
