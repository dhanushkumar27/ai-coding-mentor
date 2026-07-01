import {useState} from 'react'

import MainLayout from "../../layouts/MainLayout"
import EditorPanel from "../../components/editor/EditorPanel.jsx"
import AnalysisPanel from "../../components/analysis/AnalysisPanel.jsx";

const Home = () => {
  const [analysisResult, setAnalysisResult] = useState(null);

const [loading, setLoading] = useState(false);

const [error, setError] = useState("");

  return (
    <MainLayout>
      <div className="row">
        <div className="col-lg-5">
          <EditorPanel onAnalysisComplete={setAnalysisResult}
           setLoading={setLoading}
          setError={setError}/>
        </div>

        <div className="col-lg-7">
          <AnalysisPanel
              analysisResult={analysisResult}
              loading={loading}
              error={error}
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;