// import axios from "axios";

// const API_URL = axios.create({
//   baseURL: "http://localhost:5001/api",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// export default API_URL;

import axios from "axios";

const API_URL = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default API_URL;