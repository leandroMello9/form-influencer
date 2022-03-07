import axios from "axios";
const app = axios.create({
  baseURL: "http://localhost:3333",
  headers: {
    "App-token": "eaeasda7511s3#@!#$$",
  },
});
const appGlobal = axios.create({
  baseURL: "https://api.dev.vieco.com.br/auth/v1"
})
export {
  app,
  appGlobal

}
