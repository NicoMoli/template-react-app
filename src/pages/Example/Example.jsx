import React from "react"
import { useColorMode, Button } from "@chakra-ui/react"

const Example = () => {
  const { toggleColorMode } = useColorMode()

  return (
    <div>
      <h1>Example PAGE! You can replace this page for your feature!</h1>
      <Button size="sm" onClick={toggleColorMode}>
        Toggle Mode
      </Button>
    </div>
  )
}

export default Example
