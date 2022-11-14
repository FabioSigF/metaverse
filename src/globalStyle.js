import { createGlobalStyle } from "styled-components";

export const cc = {
  body: `#024ADD`,
  pri: `#01a3f4`,
  lpri: `#00d8ff`,
  pGradiant: `linear-gradient(90deg,#024add 0,#01a3f4 50%,#024add 100%)`,
  sec: `#feeb1a`,
  txt: `rgba(255,255,255,.8)`,
  tt: `#fff`,
  dtxt: `#000`,
  dtt: `#000`,
}

export const fs = {
  nm: `16px`,
  
}

export const ff = {
  ttff: `'Heebo',sans-serif`,
  txtff: `'Nunito',sans-serif`
}

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: ${fs.body};
    font-family: ${ff.txtff};
    background-color: ${cc.body};
    color: ${cc.txt};
  }
  button,
  input {
    background: none;
    border: none;
  }
  button {
    cursor: pointer;
    font-family: ${ff.ttff};
  }
  ul, li {
    list-style: none;
  }

  input::placeholder,
  textarea::placeholder {
    font-family: ${ff.txtff};
    color: ${cc.txt};
  }

  input:focus,
  textarea:focus{
    outline: none;
  }

  a {
    text-decoration: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6
  {
    font-family: ${ff.ttff};
  }
`