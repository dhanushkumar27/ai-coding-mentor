import './App.css'

import { useEffect } from "react";
import { getHealthStatus } from "./api/health.api";

function App() {
  useEffect(() => {
    const fetchHealth = async () => {
      try {
        const data = await getHealthStatus();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchHealth();
  }, []);

  return (
    <h1>AI Coding Mentor</h1>
  );
}

export default App;


