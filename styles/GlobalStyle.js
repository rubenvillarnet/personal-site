import { createGlobalStyle } from 'styled-components';
import MontserratRegular from '../public/static/fonts/Montserrat-Regular.ttf';
import MontserratLight from '../public/static/fonts/Montserrat-Light.ttf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Montserrat";
    src: url('${MontserratRegular}');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: "Montserrat";
    src: url('${MontserratLight}');
    font-weight: 300;
    font-style: normal;
  }

  * {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
  }

  html {
    color: ${({ theme }) => theme.colors.primary};
    font-family: 'Montserrat';
    font-weight: 400;
  }

  ul {
    padding: 0;
    margin: 0;
    li {
      list-style: none;
    }
  }

  h1, h2, h3, h4, h5, h6{
    margin: 0;
  }

  p {
    margin: 0;
  }

  button{
    color: inherit;
    font-family: inherit;
    &:focus{
      outline: none;
    }
  }
  a{
    color: inherit;
    text-decoration: inherit;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px ${({ theme }) =>
      theme.colors.background} inset;
    box-shadow: 0 0 0px 1000px ${({ theme }) => theme.colors.background} inset;
    -webkit-text-fill-color: ${({ theme }) => theme.colors.primary} !important;
  }

  .container{
    width: 75rem;
    max-width: 80%;
    margin: auto;
  }

`;

export default GlobalStyle;
