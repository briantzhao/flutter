import logo from "./logo.svg";
import "./App.scss";
import {BrowserRouter as Router, Routes, Route} from react-router-dom

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/following" element={<Favorites/>}/>
          <Route path="/browse" element={<Browse />}/>
          <Route path="/category/:categoryId" element={<Browse/>}/>
          <Route path="/channel/:channelId" element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
