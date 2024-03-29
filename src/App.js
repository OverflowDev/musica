import { useEffect } from "react";

import { useLocation,BrowserRouter as Router, Routes, Route
} from "react-router-dom";

import Collection from "./components/Collection";
// import { PlaylistProvider } from "./components/context/PlaylistContext";
import Home from "./components/Home";
import Play from "./components/Play";
import Radio from "./components/Radio";
import Video from "./components/Video";
import Profile from "./components/Profile";
import Album from "./components/album/Album";

import Navbar from './layouts/Navbar'
// import Sidebar from "./layouts/Sidebar";
import NotFound from "./components/pages/NotFound";
import { PlaylistProvider } from "./context/PlaylistContext";

function App() {

  // let location = useLocation()

  return (
    <PlaylistProvider>
      <div className="text-gray-400 font-quicksand ">
        <Router>
          {/* {window.location.pathname !== '/album' ?  <Navbar /> : null} */}
            {/* <Navbar /> */}

          <div className="">
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/collection" exact element={<Collection />} />
              <Route path="/radio" exact element={<Radio />} />
              <Route path="/videos" exact element={<Video />} />
              <Route path="/profile" exact element={<Profile />} />
              <Route path="/album/:id" exact element={<Album />} />
              <Route path="/*" exact element={<NotFound />} />
            </Routes>
          </div>

          <Play />

        </Router>
      </div>
    </PlaylistProvider>
  );
}

export default App;
