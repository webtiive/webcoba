import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import file
import Navbar from './components/Navbar/navbar';
import Home from './components/page/Home';

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
      </BrowserRouter>
    </>
  );
}

export default App;
