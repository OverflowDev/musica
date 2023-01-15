import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Collection from "./components/Collection";
// import { PlaylistProvider } from "./components/context/PlaylistContext";
import Home from "./components/Home";
import Play from "./components/Play";
import Radio from "./components/Radio";
import Video from "./components/Video";
import Profile from "./components/Profile";
import Album from "./components/Album";

import Navbar from './layouts/Navbar'
// import Sidebar from "./layouts/Sidebar";
import NotFound from "./components/pages/NotFound";

function App() {
  return (
    // <PlaylistProvider>
      <div className="text-gray-400 font-quicksand ">
        <Router>
            <Navbar />
            
          <div className="px-6 md:px-10">
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/collection" exact element={<Collection />} />
              <Route path="/radio" exact element={<Radio />} />
              <Route path="/video" exact element={<Video />} />
              <Route path="/profile" exact element={<Profile />} />
              <Route path="/album/:name" exact element={<Album />} />
              <Route path="/*" exact element={<NotFound />} />
            </Routes>
          </div>

          <Play />

        </Router>
      </div>
    // </PlaylistProvider>
  );
}

export default App;
