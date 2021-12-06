import { extendTheme } from "@chakra-ui/react"

// Version 1: Using objects
const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: "gray.300",
        color: "black",
      },
    },
  },
})

export default theme
