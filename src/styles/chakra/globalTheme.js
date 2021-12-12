import { extendTheme } from "@chakra-ui/react"
import { mode } from '@chakra-ui/theme-tools'

const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        color: mode('black', 'whiteAlpha.900')(props),
        bg: mode('gray.200', 'gray.800')(props),
        lineHeight: 'base',
      },
    }),
  },
})

export default theme
