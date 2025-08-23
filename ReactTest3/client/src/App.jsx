import { Routes, Route } from "react-router-dom";
import CountdownTimer from "../pages/CountdownTimer";
import ReversedText from "../pages/ReversedText";
import SortedProducts from "../pages/SortedProducts";
import Todo from "../pages/Todo";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CountdownTimer />} />
      <Route path="/reversetext" element={<ReversedText />} />
      <Route path="/sorted" element={<SortedProducts />} />
      <Route path="/todo" element={<Todo />} />
    </Routes>
  );
}

export default App;
