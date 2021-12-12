import React from "react"
import { ErrorBoundary as GCErrorBoundary } from "react-error-boundary"

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div>
      <p>Something went wrong!</p>
      <p>{error.message}</p>
      <button onClick={resetErrorBoundary}>Try again...</button>
    </div>
  )
}

export const ErrorBoundary = ({ children }) => (
  <GCErrorBoundary
    FallbackComponent={ErrorFallback}
    onReset={() => {
      // Here we should reset the state of the app
    }}
    onError={() => {
      // Here we could log the error to a third party provider
    }}
  >
    {children}
  </GCErrorBoundary>
)
