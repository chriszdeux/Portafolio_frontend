import { useState } from "react"

export const useOpenContent = (  ) => {
  const [openContent, setOpenContent] = useState(false);
  const [data, setData] = useState()
  const handleOpenContent = () => {
    // setData( dataInitial )
    setOpenContent(!openContent)
  }

  return { openContent, handleOpenContent, data }
}