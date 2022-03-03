import axios from "axios";
const app = axios.create({
  baseURL: "http://localhost:3333",
  headers: {
    "App-token": "eaeasda7511s3#@!#$$",
  },
});
export default app;
