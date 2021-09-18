import { useState } from "react"

export const useOpenContent = () => {
  const [openContent, setOpenContent] = useState(false);

  const handleOpenContent = () => {
    setOpenContent(!openContent)
  }

  return { openContent, handleOpenContent }
}