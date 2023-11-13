import React from "react";
import Router from "./components/Router";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

// Create a client
const queryClient = new QueryClient();
function App() {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  );
}

export default App;
