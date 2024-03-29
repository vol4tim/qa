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
  async options() {
    const res = await api.get("/api/form-options");
    return res.data;
  },
  async modules() {
    const res = await api.get("/static/additional_modules.json");
    return res.data;
  },
  async send(data) {
    await api.post("/api/form-handler", data);
  },
  async update(data) {
    await api.post("/api/state-update", data);
  }
};
