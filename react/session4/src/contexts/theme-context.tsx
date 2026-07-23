import { createContext, useContext, useState, type ReactNode } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

// We initialize with null because the context has no value until it is
// provided by ThemeProvider. This helps catch mistakes if a component
// tries to use the context outside the provider.
const ThemeContext = createContext<ThemeContextType | null>(null)

interface ThemeProviderProps {
  children: ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>('light')

  function toggleTheme(): void {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext)

  // Throwing an error makes it obvious that the hook is being used
  // outside ThemeProvider instead of silently returning an invalid value.
  if (!context) {
    throw new Error('useTheme must be used inside ThemeProvider')
  }

  return context
}