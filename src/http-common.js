import axios from "axios";

export default axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "http://localhost:3000/"
      : "https://taques.herokuapp.com/",
  headers: {
    "Content-type": "application/json"
  }
});
