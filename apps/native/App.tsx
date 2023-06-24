import { NativeBaseProvider } from "native-base";
import Home from "./screens/Home";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function Native() {
  return (
    <NativeBaseProvider>
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    </NativeBaseProvider>
  );
}
