import { NativeBaseProvider, extendTheme } from "native-base"
import Home from "./screens/Home"
import React from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient()

export default function Native() {
  const theme = extendTheme({
    colors: {
      green: "#BFCC94",
      white: "#F0F4EF",
      pink: "#E6AACE",
      blue: "#344966",
      black: "#0D1821",
      primary: { 600: "#344966", 700: "#E6AACE", 800: "#0D1821" },
      singletons: {
        darkText: "#F0F4EF",
        lightText: "#0D1821",
      },
      config: {
        // Changing initialColorMode to 'dark'
        initialColorMode: "dark",
      },
    },
  })

  return (
    <NativeBaseProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    </NativeBaseProvider>
  )
}
