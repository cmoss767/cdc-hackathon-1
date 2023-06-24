import axios from "axios";

export default axios.create({
  baseURL: "https://727c-2603-3008-b54-20a0-cc1a-2e8a-b34-69d6.ngrok-free.app",
  headers: {
    "Content-type": "application/json",
  },
});
