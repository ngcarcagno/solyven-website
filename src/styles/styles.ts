import { createGlobalStyle } from "styled-components";

export const Styles = createGlobalStyle`

     @font-face {
        font-family: "ArchivoBlack Regular";
        src: url("/fonts/ArchivoBlack-Regular.ttf") format("truetype");
        font-style: normal;
    }

     @font-face {
        font-family: "Montserrat Medium";
        src: url("/fonts/Montserrat-Medium.ttf") format("truetype");
        font-style: normal;
    }

     @font-face {
        font-family: "Montserrat Regular";
        src: url("/fonts/Montserrat-Regular.ttf") format("truetype");
        font-style: normal;
    }

    :root {
      --color-primary: #5F0807;      
      --color-secundary: #CC4E00;       
      --color-detail: #00357a;         
      --color-bg: #000000ff;         
      --color-text-primary: #FFFFFF;
      --color-text-secondary: #333333;
    }

    body,
    html,
    a {
        font-family: 'Montserrat Medium', sans-serif;
    }

    body {
        margin:0;
        padding:0;
        border: 0;
        outline: 0;
        background: var(--color-bg);
        color: var(--color-text-secondary);
        overflow-x: hidden;
    }

    a {
        text-decoration: none;
        outline: none;
        color: var(--color-detail);

        :hover {
            color: var(--color-secondary);
        }
    }

    input,
    textarea {
        border-radius: 4px;
        border: 0;
        background: var(--color-input-bg);
        transition: all 0.3s ease-in-out;  
        outline: none;
        width: 100%;  
        padding: 1rem 1.25rem;

        :focus-within {
            background: none;
            box-shadow: var(--color-primary) 0px 0px 0px 1px;
        }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: 'ArchivoBlack Regular', serif;
        color: var(--color-text-primary);
        font-size: 56px;
        line-height: 1.18;

        @media only screen and (max-width: 890px) {
          font-size: 47px;
        }
      
        @media only screen and (max-width: 414px) {
          font-size: 32px;
        }
    }

    p {
        color: var(--color-text-primary);
        font-size: 21px;        
        line-height: 1.41;
    }

    h1 {
        font-weight: 600;
    }
    
    *:focus {
        outline: none;
    }

    .about-block-image svg {
        text-align: center;
    }

    .ant-drawer-body {
        display: flex;
        flex-direction: column;
        text-align: left;
        padding-top: 1.5rem;
    }

    .ant-drawer-content-wrapper {
        width: 300px !important;
    }
        `;
