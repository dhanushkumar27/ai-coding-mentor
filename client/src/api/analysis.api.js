import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api/v1",
});

const analyzeCode = async (payload) => {
  const response = await api.post("/analysis", payload);

  return response.data;
};

export default analyzeCode