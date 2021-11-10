import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>

          <Route exact path="/" element={
            <Home></Home>
          } />

          <Route path="home" element={
            <Home></Home>
          } />

          <Route path="*" element={
            <NotFound></NotFound>
          } />

        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
