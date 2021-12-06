import React, { Suspense } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { appPublicRoutes, appPrivateRoutes } from "./routes"
import { PrivatesRoutes } from "./components/PrivatesRoutes"

const Router = () => {
  return (
    <Suspense fallback={<div>Loading routes...</div>}>
      <BrowserRouter>
        <Routes>
          {appPublicRoutes.map((route) => (
            <Route
              key={route.name}
              path={route.path}
              element={<route.component />}
            />
          ))}
          {appPrivateRoutes.map((route) => (
            <Route
              key={route.name}
              path={route.path}
              element={
                <PrivatesRoutes isPrivateRoute={route.auth}>
                  <route.component />
                </PrivatesRoutes>
              }
            />
          ))}
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There is nothing here! Please, check URL!</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default Router
