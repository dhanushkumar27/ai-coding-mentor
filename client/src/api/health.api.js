import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api/v1";

export const getHealthStatus = async () => {
  const response = await axios.get(`${API_BASE_URL}/health`);

  return response.data;
};