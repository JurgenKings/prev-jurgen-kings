"use client"
import React, { createContext, useContext, useState, useEffect } from "react"

interface ThemeContextType {
  isDarkMode: boolean;
  toggleIsDarkMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true)

  useEffect(() => {
    const savedMode = localStorage.getItem("isDarkMode") === "true"
    setIsDarkMode(savedMode)
  }, [])

  const toggleIsDarkMode = () => {
    setIsDarkMode(prevMode => {
      const newMode = !prevMode
      localStorage.setItem("isDarkMode", newMode.toString())
      return newMode
    })
  }

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleIsDarkMode }}>
      <div className={isDarkMode ? "dark" : ""}>
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme deve ser usado dentro de un ThemeProvider")
  }
  return context
}
