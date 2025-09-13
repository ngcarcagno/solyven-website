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
    --color-bg-gradient: linear-gradient(135deg, #181818 0%, #1f1f1f 30%, #2f2f2f 70%, #4a4a4a 100%);
    --color-bg-solid: #333333;
    --color-text-primary: #FFFFFF;
    --color-text-secondary: #333333;

    /* Font variables */
    --font-base: 'Montserrat Medium', sans-serif; /* body, paragraphs, default UI */
    --font-title: 'ArchivoBlack', serif; /* large titles and headers */
    --font-subtitle: 'Montserrat Regular', sans-serif; /* subtitles and smaller headings */
    --font-button: 'Montserrat Medium', sans-serif; /* buttons and CTAs */

    /* Text size variables - PROPORTIONAL SCALING (always same ratios) */
    --size-base: 1rem; /* Base size for proportional calculations */
    --size-h1: 2.5em; /* Reduced from 3em for better proportion */
    --size-h1-sm: 2.2em; /* Reduced from 2.6em */
    --size-h1-xs: 1.9em; /* Reduced from 2.2em */
    --size-body: 1.1em; /* Reduced from 1.2em for better readability */
    --size-header-nav: 0.95em; /* Slightly smaller for better header proportion */
    --size-min-title: 0.85em; /* Reduced from 0.9em */
    --size-min-para: 0.75em; /* Reduced from 0.8em */

    /* Header layout - PROPORTIONAL (scales with root font-size) */
    --header-height: 4em; /* Always 4x the root font size */
    
    /* Content block layout - PROPORTIONAL */
    --content-min-height: 100vh;
    --content-padding: 6em 2em 5em; /* Reduced vertical padding for better mobile */
    --content-padding-mobile: 3em 1.5em 3em; /* Reduced mobile padding */
    --content-wrapper-max-width: min(90vw, 36em); /* Slightly wider max-width */
    
    /* Glassy UI variables - PROPORTIONAL SCALING */
    --glass-bg: linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.008));
    --glass-bg-v2: rgba(255, 255, 255, 0.15);
    --glass-border: rgba(255,255,255,0.12);
    --glass-border-v2: 1px solid rgba(255, 255, 255, 0.2);
    --glass-blur: 0.625em; /* Proportional blur (10px at 16px root) */
    --glass-blur-v2: 0.625em;
    --glass-shadow: 0 0.875em 2.125em rgba(0,0,0,0.65); /* Proportional shadows */
    --glass-shadow-v2: 0 0.5em 2em rgba(0, 0, 0, 0.1);
    --glass-radius: 0.75em; /* Proportional border radius */
    
    /* Touch targets - proportional with minimum */
    --min-touch-target: max(2.75em, 44px); /* Proportional but never smaller than 44px */
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
        background: var(--color-bg-gradient);
        color: var(--color-text-secondary);
    overflow-x: hidden;
    /* Let the body be the primary scroll container so footer scrolls naturally */
    overflow-y: auto;
    /* Enable scroll snapping for full-height sections */
    scroll-snap-type: y mandatory;
    
    /* PROPORTIONAL SCALING - Root font size scales with viewport */
    font-size: clamp(12px, 1.5vw, 16px); /* Reduced range for better mobile adaptation */
    
    /* Zoom optimization */
    -webkit-text-size-adjust: 100%; /* Prevents text scaling on iOS zoom */
    -ms-text-size-adjust: 100%; /* Prevents text scaling on Windows */
    text-size-adjust: 100%; /* Standard property */
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
                text-transform: uppercase;
                color: var(--color-text-primary);
                font-size: var(--size-h1); /* Proportional to root font-size */
                line-height: 1.2; /* Fixed ratio - always proportional */
        }

    p {
        color: var(--color-text-primary);
        font-size: var(--size-body); /* Proportional to root font-size */
        line-height: 1.4; /* Fixed ratio - always proportional */
    }

    h1 {
        font-weight: 600;
    }
    
    *:focus {
        outline: none;
    }
    
    /* Zoom-responsive optimization for all elements */
    * {
        /* Prevent text inflation on mobile browsers */
        -webkit-text-size-adjust: none;
        -moz-text-size-adjust: none;
        -ms-text-size-adjust: none;
        text-size-adjust: none;
    }
    
    /* Smooth scaling for images and media */
    img, video, iframe {
        max-width: 100%;
        height: auto;
        object-fit: cover;
    }
    
    /* Ensure smooth font rendering at all zoom levels */
    * {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeLegibility;
    }

    .about-block-image svg {
        text-align: center;
    }

    .ant-drawer-body {
        display: flex;
        flex-direction: column;
        text-align: left;
        padding-top: 1.5rem;
        background: var(--glass-bg) !important;
        backdrop-filter: blur(var(--glass-blur));
        -webkit-backdrop-filter: blur(var(--glass-blur));
        border: var(--glass-border-v2);
        color: var(--color-text-primary);
    }

    .ant-drawer-content-wrapper {
        width: 300px !important;
        background: transparent !important;
    }

    .ant-drawer-content {
        background: var(--glass-bg) !important;
        backdrop-filter: blur(var(--glass-blur-v2));
        -webkit-backdrop-filter: blur(var(--glass-blur-v2));
        border-left: var(--glass-border-v2);
        box-shadow: var(--glass-shadow-v2);
    }

    .ant-drawer-mask {
        background: rgba(0, 0, 0, 0.4) !important;
        backdrop-filter: blur(4px);
        -webkit-backdrop-filter: blur(4px);
    }

    /* Drawer menu items styling */
    .ant-drawer-body .ant-col {
        color: var(--color-text-primary) !important;
    }

    .ant-drawer-body span {
        color: var(--color-text-primary) !important;
    }

    .ant-drawer-body a {
        color: var(--color-text-primary) !important;
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

    /* Estilos para el Drawer moderno del Header */
    .modern-drawer .ant-drawer-content-wrapper {
        background: linear-gradient(
            135deg,
            rgba(15, 15, 15, 0.75) 0%,
            rgba(20, 20, 20, 0.65) 100%
        ) !important;
        backdrop-filter: blur(20px) !important;
        -webkit-backdrop-filter: blur(20px) !important;
        border-left: 1px solid rgba(0, 53, 122, 0.25) !important;
        box-shadow: 
            -8px 0 32px rgba(0, 0, 0, 0.4),
            inset 1px 0 0 rgba(255, 255, 255, 0.05),
            0 0 20px rgba(0, 53, 122, 0.1) !important;
    }

    .modern-drawer .ant-drawer-body {
        background: transparent !important;
        padding: 2rem !important;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .modern-drawer .ant-drawer-content {
        background: transparent !important;
    }

    /* Mask con blur matching */
    .modern-drawer .ant-drawer-mask {
        background: rgba(0, 0, 0, 0.3) !important;
        backdrop-filter: blur(8px) !important;
        -webkit-backdrop-filter: blur(8px) !important;
    }

    /* RESPONSIVE FONT SIZE OPTIMIZATION */
    /* Extra small mobile devices */
    @media screen and (max-width: 375px) {
        body {
            font-size: clamp(11px, 4vw, 14px);
        }
    }

    /* Small mobile devices */
    @media screen and (max-width: 480px) {
        body {
            font-size: clamp(12px, 3.5vw, 15px);
        }
    }

    /* Large mobile devices / small tablets */
    @media screen and (max-width: 768px) {
        body {
            font-size: clamp(13px, 2.5vw, 16px);
        }
    }

    /* Tablets */
    @media screen and (max-width: 1024px) {
        body {
            font-size: clamp(14px, 2vw, 17px);
        }
    }

    /* Large screens - prevent text from getting too big */
    @media screen and (min-width: 1400px) {
        body {
            font-size: clamp(15px, 1.2vw, 18px);
        }
    }
        `;
