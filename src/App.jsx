import Home from "./routes/Home";
import Button from "./components/Social";
import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";
import Gallery from "./routes/Gallery.jsx";
import Sesiones from "./routes/Sesiones.jsx";

const App = () => {
  return (
    <div className="container-fluid p-4">
      
      <Router basename="/cuve-page.github.io">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/sesiones" element={<Sesiones />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        <div className="fixed-bottom d-flex justify-content-end p-3">
          <Button />
        </div>
      </Router>
    </div>
  );
};

export default App;