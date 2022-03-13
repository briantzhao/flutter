import "./App.scss";
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Browse from './pages/Browse/Browse'
import {BrowserRouter as Router, Routes, Route} from react-router-dom

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/following" element={<Browse/>}/>
          <Route path="/browse" element={<Browse />}/>
          <Route path="/category/:categoryId" element={<Browse/>}/>
          <Route path="/channel/:channelId" element={<Home channelId={channelId}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
