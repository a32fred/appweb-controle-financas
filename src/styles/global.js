import { createGlobalStyle } from "styled-components";

const global = createGlobalStyle`

::root{
  font-size: 62,5%;
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', Sans-Serif;
    background: #F5F3C1;
  }

`; 

export default global