import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    min-height: 100%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    // background: linear-gradient(211deg, rgba(75,20,20,1) 0%, rgba(224,171,173,1) 39%, rgba(216,163,165,1) 57%, rgba(253,215,215,1) 73%, rgba(255,255,255,1) 100%) no-repeat fixed;

    background-image: url(https://e0.pxfuel.com/wallpapers/686/271/desktop-wallpaper-nature-berries-plant-macro-rowan.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

h1,
h2,
h3,
h4,
h5,
h6,
p {
	margin: 0;
}

ul {
	margin: 0;
	padding: 0;
	list-style: none;
}

img {
	display: block;
	max-width: 100%;
	height: auto;
}

a {
text-decoration: none;
}

`;