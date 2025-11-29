import { createContext, useContext } from "react";

// Another syntax to create context
// in this technique we are adding a default obj. containing both var and methods here.

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
})

// added a theme provider as well to wrap the context.
export const ThemeProvider = ThemeContext.Provider

// a custom hook viz. a function in itself.
export default function useTheme(){
    return useContext(ThemeContext)
}
