import axios from "axios";


const apiClient = axios.create({
  baseURL: "http://ip-api.com/json",
  headers: {
    "Content-Type": "application/json",
  },
});