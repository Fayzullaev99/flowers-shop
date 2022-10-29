import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Category from './pages/Category';
import Favorite from './pages/Favorite';
import Home from "./pages/Home/";
function App() {
  return (
    <Router>
      <div className='app'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favorite' element={<Favorite />} />
        <Route path='/category/:productPage' element={<Category />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
