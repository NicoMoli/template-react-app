import { store } from "../src/store/store"
import { Provider } from "react-redux"
import { ChakraProvider } from "@chakra-ui/react"
import theme from "./styles/chakra/globalTheme"
import Router from "./router/Router"

function App() {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Router />
      </ChakraProvider>
    </Provider>
  )
}

export default App
