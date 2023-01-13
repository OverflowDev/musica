import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Collection from "./components/Collection";
import Home from "./components/Home";
import Play from "./components/Play";

import Navbar from './layouts/Navbar'
import Sidebar from "./layouts/Sidebar";

function App() {
  return (
    <div className="text-gray-400 font-quicksand ">
      <Router>
          <Navbar />
          
        <div className="px-6 md:px-10">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/collection" element={<Collection />} />
          </Routes>
        </div>

        <Play />

      </Router>
    </div>
  );
}

export default App;
