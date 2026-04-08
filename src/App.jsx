import Home from "./routes/Home";
import Button from "./components/Social";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gallery from "./routes/Gallery.jsx";

const App = () => {
  return (
    <div className="container-fluid p-4">
      <Router basename="/cuve-page.github.io">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>

        <div className="fixed-bottom d-flex justify-content-end p-3">
          <Button />
        </div>
      </Router>
    </div>
  );
};

export default App;