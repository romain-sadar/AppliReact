import logo from "./logo.svg";
import "./style/App.css";
import axios from "axios";
import { Feed } from "./components/Feed";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";

function App() {
  const users = useSelector((state) => state.users);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feed" element={<Feed />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
