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
`;

export default GlobalStyle;
