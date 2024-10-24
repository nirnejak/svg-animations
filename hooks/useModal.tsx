import * as React from "react"

const useModal = (): [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>,
  React.ReactNode,
  React.Dispatch<React.SetStateAction<React.ReactNode>>,
] => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [content, setContent] = React.useState<React.ReactNode>(null)

  React.useEffect(() => {
    const handleEsc = (event: KeyboardEvent): void => {
      if (event.key === "Escape") {
        setIsOpen(false)
        setContent(null)
      }
    }

    if (isOpen) {
      document.body.style.overflowY = "hidden"
      document.addEventListener("keydown", handleEsc)
    }

    return () => {
      document.body.style.overflowY = "unset"
      document.removeEventListener("keydown", handleEsc)
    }
  }, [isOpen, setIsOpen])

  return [isOpen, setIsOpen, content, setContent]
}

export default useModal
