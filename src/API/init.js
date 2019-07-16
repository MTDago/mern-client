import axios from "axios";

const api = axios.create({
  baseURL:
  "http://localhost:5000",
    // process.env.NODE_ENV === "production" ? "https://mern-server-deployment.herokuapp.com/" : "http://localhost:5000",
  headers: { "Content-Type": "application/json" },
  proxy: false
});


export default { api };