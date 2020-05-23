import { createGlobalStyle } from 'styled-components/macro';

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after { 
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
`;
