import { createGlobalStyle } from "styled-components";

export const Styles = createGlobalStyle`

     @font-face {
        font-family: "ArchivoBlack";
        src: url("${process.env.PUBLIC_URL}/fonts/ArchivoBlack-Regular.ttf") format("truetype");
        font-style: normal;
    }

     @font-face {
        font-family: "Montserrat Medium";
        src: url("${process.env.PUBLIC_URL}/fonts/Montserrat-Medium.ttf") format("truetype");
        font-style: normal;
    }

     @font-face {
        font-family: "Montserrat Regular";
        src: url("${process.env.PUBLIC_URL}/fonts/Montserrat-Regular.ttf") format("truetype");
        font-style: normal;
    }

    :root {
    --color-primary: #5F0807;
    --color-secondary: #F75800;
    --color-detail: #00357a;
    --color-bg: linear-gradient(135deg, #181818 0%, #1f1f1f 30%, #2f2f2f 70%, #4a4a4a 100%);
    --color-text-primary: #FFFFFF;
    --color-text-secondary: #333333;

    /* Font variables */
    --font-base: 'Montserrat Medium', sans-serif; /* body, paragraphs, default UI */
    --font-title: 'ArchivoBlack', serif; /* large titles and headers */
    --font-subtitle: 'Montserrat Regular', sans-serif; /* subtitles and smaller headings */
    --font-button: 'Montserrat Medium', sans-serif; /* buttons and CTAs */

    /* Text size variables (easy global control) */
    --size-h1: 48px; /* a bit smaller than before */
    --size-h1-sm: 42px;
    --size-h1-xs: 32px;
    --size-body: 19px;
    --size-min-title: 14px;
    --size-min-para: 12px;

    /* Content block layout */
    --content-min-height: 100vh;
    --content-padding: 10rem 1rem 8rem;
    --content-padding-mobile: 4rem 1rem 4rem;
    --content-wrapper-max-width: 540px;
    
    /* Glassy UI variables (shared) */
    --glass-bg: linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.008));
    --glass-border: rgba(255,255,255,0.12);
    --glass-blur: 10px;
    --glass-shadow: 0 14px 34px rgba(0,0,0,0.65);
    --glass-radius: 24px;
    }

    body,
    html,
    a {
        font-family: var(--font-base);
    }

    body {
        margin:0;
        padding:0;
        border: 0;
        outline: 0;
        background: var(--color-bg);
        color: var(--color-text-secondary);
    overflow-x: hidden;
    /* Let the body be the primary scroll container so footer scrolls naturally */
    overflow-y: auto;
    /* Enable scroll snapping for full-height sections */
    scroll-snap-type: y mandatory;
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
                font-family: var(--font-title);
                color: var(--color-text-primary);
                font-size: var(--size-h1);
                line-height: 1.18;

                @media only screen and (max-width: 890px) {
                    font-size: var(--size-h1-sm);
                }
      
                @media only screen and (max-width: 414px) {
                    font-size: var(--size-h1-xs);
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
    /* SVG icons: use currentColor so CSS controls fill/stroke via color property */
    .svg-icon {
        color: var(--color-text-primary);
        display: inline-block;
        vertical-align: middle;
    }

    /* In case an <img> or inline <svg> exists with explicit svg-icon class */
    img.svg-icon {
        filter: none; /* reset any previous filters */
    }

    /* Hover/focus/active states for links and interactive elements containing SVGs */
    a:hover .svg-icon,
    a:focus .svg-icon,
    a:active .svg-icon,
    .svg-icon:hover,
    .svg-icon:active,
    .svg-icon:focus {
        color: var(--color-secondary);
    }
        `;
