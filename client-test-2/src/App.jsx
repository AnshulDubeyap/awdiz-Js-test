import Step1 from "./pages/Step-1";
import Step2 from "./pages/Step-2";
import Step3 from "./pages/Step-3";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/Step-1" element={<Step1 />} />
      <Route path="/Step-2" element={<Step2 />} />
      <Route path="/Step-3" element={<Step3 />} />
    </Routes>
  );
}

export default App;
