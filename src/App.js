import { Routes, Route } from "react-router-dom";
import './App.scss';

import Home from './pages/Home';
import Buy from './pages/Buy';
import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer';
import { Toaster } from "react-hot-toast";

function App() {

  return (
    <>
      <Toaster toastOptions={{
          style: {
            fontFamily: 'ARCO',
            backgroundColor: '#fcceeb',
            padding: '10px',
            color: "black",
          },
        }}/>
      <div className={"App"}>
        <Header/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/buy" element={<Buy/>} />
          </Routes>
        <Footer/>
      </div>
    </>
  );
}

export default App;
