import React, { createContext, useState } from "react";

const ThemeContext = createContext();

function ThemeProvider(props) {
  const [ nightMode, setNightMode ] = useState(false);
  const handleTheme = () => {
    setNightMode(!nightMode);
  }

  return(
    <ThemeContext.Provider value={{nightMode, handleTheme}}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeProvider }
