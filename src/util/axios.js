import axios from "axios";
const app = axios.create({
  baseURL: process.env.REACT_APP_LOCAL_API,
  headers: {
    "App-token": process.env.REACT_APP_TOKEN_API + "$$",
  },
});
const appGlobal = axios.create({
  baseURL: process.env.REACT_APP_GLOBAL_API,
  // headers: {
  //   "App-token": process.env.REACT_APP_TOKEN_API + "$$",
  // },
})
export {
  app,
  appGlobal

}
