import { createGlobalStyle } from 'styled-components';
import Reset from './reset';

const GlobalStyle = createGlobalStyle`
  ${Reset}

  * {
    box-sizing: border-box;
     font-family: 'Pretendard', sans-serif;
  }

  :root {
    --min-width: 370px;
    --max-width: 490px;
  }

  html,
  body {
    font-size: 62.5%;
    font-family: 'Pretendard', sans-serif;
    scrollbar-width: none;
    margin: 0;
    padding: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    scroll-behavior: smooth;
  }

  a {
    text-decoration: none;
  }

  select {
    background: #fff;
  }

  #root {
    width: 100%;
    min-width: var(--min-width);
    max-width: var(--max-width);
    min-height: 100dvh;
    background-color: #fff;
    margin: 0 auto;
  }

  @media (min-width: 430px) {
    #root {
      max-width: var(--max-width);
      box-shadow: 0 0 2px rgba(0, 0, 0, 0.4);
    }
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;

export default GlobalStyle;
