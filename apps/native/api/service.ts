import axios from "axios";

export default axios.create({
  baseURL: "https://576c-2603-3008-b54-20a0-410-701-b9f2-4417.ngrok-free.app",
  headers: {
    "Content-type": "application/json",
  },
});
