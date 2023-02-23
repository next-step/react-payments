import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

body,html {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
 
  background-color: #e5e5e5;

}
*{
  box-sizing: border-box;
}

`;
export default GlobalStyle;
