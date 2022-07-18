import { fontFamily } from '@mui/system';
import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import Button, { FancyButton, SubmitButton, DarkButton} from './buttons/Button';
import ItemList from './ItemList';

const theme = {
  dark: {
    primary: "#000",
    text: "#fff",
  },
  light: {
    primary: "#fff",
    text: "#000",
  },
  alternative: {
    primary: "#fff",
    text: "#000",
  },
  fontFamily: "Montserrate",
}

const GlobalStyle = createGlobalStyle`
  button {
    font-family: ${(props) => props.theme.fontFamily};
  }
`


const ItemListContainer = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
        <ItemList/>
        <Button type='submit'>Simple button</Button>
        <Button variant="outlined">Simple outlined button</Button>
        <FancyButton variant="outlined" as="a">FancyButton</FancyButton>
        <SubmitButton>SubmitButton</SubmitButton>
        <DarkButton>DarkButton</DarkButton>
    </ThemeProvider>
  )
}

export default ItemListContainer