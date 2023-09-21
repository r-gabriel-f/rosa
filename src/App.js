import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import { Girasol } from "./components/Girasol";
import { Rosa } from "./components/Rosa";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Rosa />} />
        <Route path="/girasol" element={<Girasol />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
