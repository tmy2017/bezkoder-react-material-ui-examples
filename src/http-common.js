import axios from "axios";

export default axios.create({
  //https://codesandbox.io/s/node-express-mongodb--bezkoder-6jozz?file=/package.json
  // baseURL: "https://6jozz.sse.codesandbox.io/api",
  //now vecel deploy working! zz-_20-_y21-0523-2007
  baseURL: "https://csb-6nfgg-qugkak562-tklendaircraft.vercel.app/api/",
  headers: {
    "Content-type": "application/json"
  }
});
