import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import file
import Navbar from './components/Navbar/navbar';
import Home from './components/page/Home';
import PopOver from './components/PopOver';

function App() {
  return (
    <>
      {/* <Navbar /> */}
      {/* <Home /> */}
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <PopOver />
      </BrowserRouter>
    </>
  );
}

export default App;
