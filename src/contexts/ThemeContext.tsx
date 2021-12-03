import React from "react";

type ThemeContextType = {
    theme: string;
    setTheme: (theme: string)=> void;
}

const ThemeContext = React.createContext<ThemeContextType|undefined>(undefined);


export default ThemeContext;