import './App.scss';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import { useCallback, useState } from 'react';
import Modal from './components/Modal';
import Buy from './pages/Buy';

function App() {

  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(
    () => {
      setOpen(true);
    }, []
  )
  const handleClose = useCallback(
    () => {
      setOpen(false);
    }, []
  )

  return (
    <>
      <Modal open={open} handleOpen={handleOpen} handleClose={handleClose}/>
      <div className={open ? "App-openModal" : "App"}>
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
