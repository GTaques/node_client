import axios from "axios";

export default axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://taques.herokuapp.com/"
      : "http://localhost:3000/",
  headers: {
    "Content-type": "application/json"
  }
});
