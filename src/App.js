import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import GlobalStyles from "./components/styles/Global";
import Main from "./components/Main";

const theme = {
  colors: {
    header: 'hsl(10, 79%, 65%)',
    headerColor: 'hsl(33, 100%, 98%)',
    heading: 'hsl(25, 47%, 15%)',
    chartText: 'hsl(28, 10%, 53%)',
    bodyBackground: 'hsl(27, 66%, 92%)',
    chartBackground: 'hsl(33, 100%, 98%)',
    percentage: 'hsl(25, 47%, 15%)',
    chartBarColor: 'hsl(10, 79%, 65%)',
    currentBar: 'hsl(186, 34%, 60%)',
    currentBarHover: 'hsl(186, 34%, 60%, 70%)',
    chartBarHover: 'hsla(10, 79%, 65%, 70%)'
  },

  fontSize: {
    normal: '1rem',
    big: '1.75rem',
    bigger: '2.625rem'
  },

  fontWeight: {
    regular: 400,
    bold: 700
  },

  flex: {
    direction: 'column',
    justifyContent: 'space-between',
  }

}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Main />
      </> 
    </ThemeProvider>
  );
}

export default App;
