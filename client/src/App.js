import { useState, useEffect, createContext } from 'react';
import { BrowserRouter as Router  } from 'react-router-dom'
import { GlobalStyle } from './Theme/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import { purpleTheme, darkTheme } from './Theme/Themes'
import { SiteContainer } from './ComponentStyles/SiteContainer.style'
import { ContentContainer } from './ComponentStyles/ContentContainer.style';
import { StyledHeader } from './ComponentStyles/Header.style'

export const themeContext = createContext("purple");


function App() {


  const [ theme, setTheme ] = useState("purple")

  const themeToggler = () => {
    if ( theme === "purple" ) {
      setTheme("dark")
    } else {
      setTheme("purple")
      }
  }

  return (
    <>
    <GlobalStyle/>
    <Router>
    <ThemeProvider theme={theme === "purple" ? purpleTheme : darkTheme}>
      <SiteContainer>
        <ContentContainer>
        <StyledHeader cb={themeToggler}/>
        </ContentContainer>
      </SiteContainer>
    </ThemeProvider>
    </Router>
    </>
  );
}

export default App;
