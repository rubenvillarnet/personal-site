import { createGlobalStyle } from 'styled-components';
import MontserratRegular from '../public/static/fonts/Montserrat-Regular.ttf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Montserrat-Regular";
    src: url('${MontserratRegular}');
    font-weight: normal;
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
    color: ${({ theme }) => theme.colors.text};
    font-family: 'Montserrat-Regular';
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
`;

export default GlobalStyle;
