import { createGlobalStyle } from 'styled-components';
import colors from './colors';

export const LightGlobalStyle = createGlobalStyle`

body {

  background-color: ${colors.white};
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  color: ${colors.body};
}

ul,
ol {
  margin: 0;
  padding-left: 0;
  color: ${colors.body};
}

button {
  cursor: pointer;
}

a {
  color: ${colors.body};
}

img {
  display: block;
  height: auto;
  max-width: 100%;

  width: 100%;
}

address {
  font-style: normal;
}

a {
  text-decoration: none;
}

li {
  list-style: none;
  padding: 0;
}
    
`;

export const DarkGlobalStyle = createGlobalStyle`

body {
  background-color: ${colors.body};
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  color: ${colors.eliphant};
}

ul,
ol {
  margin: 0;
  padding-left: 0;
  color: ${colors.eliphant};

}

button {
  cursor: pointer;
}

a {
  color: ${colors.eliphant};
}

img {
  display: block;
  height: auto;
  max-width: 100%;

  width: 100%;
}

address {
  font-style: normal;
}

a {
  text-decoration: none;
}

li {
  list-style: none;
  padding: 0;
}
    
`;
