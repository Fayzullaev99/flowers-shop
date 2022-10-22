import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Category from './pages/Category';
import Home from "./pages/Home/";
function App() {
  return (
    <Router>
      <div className='app'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/category/:productPage' element={<Category />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
