import "./App.scss";
import Header from "./components/Header/Header";
import Browse from "./pages/Browse/Browse";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/following" element={<Browse />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/category/:categoryId" element={<Browse />} />
          <Route path="/channel/:channelId" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
