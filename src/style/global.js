import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}
*:focus {
  outline: 0;
}
html,body,#root {
  height: 100%;
  max-width: 1500px ;
  width: 100% ;
  
 
}
body {
  -webkit-font-smoothing: antialiased;
 
}
body,input,button {
  font: 14px 'Roboto', sans-serif;
  background: #ffff 0% 0% no-repeat padding-box;
}
a {
  text-decoration: none;
}
ul {
  list-style: none;
}
li {
  font: 14px 'Roboto', sans-serif;
}
button {
  cursor: pointer;
}

`;