import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from "./pages/Home/Home"
import { Footer } from './components/Footer/Footer';

function App() {


  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </Router>
    
    </>
  )
}

export default App
