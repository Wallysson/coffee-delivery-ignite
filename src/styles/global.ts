import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: 0;
  }

  body {
    background: ${props => props.theme.background};
    color: ${props => props.theme['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
  }

  ul {
    list-style: none;
}

  img {
    max-width: 100%;
}

a {
  text-decoration: none;
}

button {
  cursor: pointer;
}
`