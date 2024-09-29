import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle"
import React from "react"
function App({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div><ModeToggle /></div>
      {children}
    </ThemeProvider>
  );
}

export default App

