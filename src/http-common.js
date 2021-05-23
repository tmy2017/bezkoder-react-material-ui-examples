import axios from "axios";

export default axios.create({
  baseURL: "https://6jozz.sse.codesandbox.io/api",
  headers: {
    "Content-type": "application/json"
  }
});
