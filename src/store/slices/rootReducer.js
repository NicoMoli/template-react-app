import { combineReducers } from "@reduxjs/toolkit"

import exampleReducer from "./example/example"

export default combineReducers({
  example: exampleReducer,
})
