import { createContext, useEffect, useState } from "react"

export const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
})

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light")
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }

  useEffect(() => {
    const html = document.documentElement
    if (theme === "light") {
      html.classList.remove("dark")
    } else {
      html.classList.add("dark")
    }
  }, [theme])

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
