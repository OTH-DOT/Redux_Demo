import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavBar from './components/AppNavBar';
import { Route, Routes } from 'react-router-dom';
import Products from './components/Products';
import Cart from './components/Cart';


function App() {

  return (
    <>
      <AppNavBar />
      <Routes>
        <Route path='' element={<Products />} ></Route>
        <Route path='/cart' element={<Cart />} ></Route>
      </Routes>
    </>
  )
}

export default App
