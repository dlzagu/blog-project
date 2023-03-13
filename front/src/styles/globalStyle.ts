import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle` 
  ${reset} 

    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
        
        
    }
    h1,h2,h3 {
      font-family:'NanumSquareNeo-bold';
    }

    h4,h5{
      font-family:'NanumSquareNeo-Regular';
    }


    html{
        font-size: 62.5%; 
    }

    body{
        font-family: 'NanumSquareNeo-Regular';
        background-color: #F7F7F7;
        font-size:1.6rem;
        background-size: cover;
        background-position: center center;
        background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
          url( ||
            "https://user-images.githubusercontent.com/59393359/74718667-0adb8a80-5276-11ea-8bc3-0e36c67cf28a.jpg"});
    }

    input, textarea { 
      -moz-user-select: auto;
      -webkit-user-select: auto;
      -ms-user-select: auto;
      user-select: auto;
    }
    
    input:focus {
      outline: none;
    }

    button {
      border: none;
      background: none;
      padding: 0;
      cursor: pointer;
    }
`;

export default GlobalStyles;
