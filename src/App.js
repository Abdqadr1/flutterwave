import {BrowserRouter, Routes,  Route} from "react-router-dom"
import './App.css';
import Home from './components/home';
import NavBar from "./components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import BlogFull from "./components/blogfull";

function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogFull />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
