import axios from "axios";
import { API } from "@/config";

const api = axios.create({
  baseURL: API
});

export default {
  async state() {
    const res = await api.get("/api/state");
    return res.data;
  },
  async card() {
    await api.get("/api/card");
  },
  async send(data) {
    await api.post("/api/form-handler", data);
  }
};
