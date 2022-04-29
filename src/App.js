import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import NotFound from './component/NotFound/NotFound';
import Products from './component/Products/Products';
import Orders from './component/Orders/Orders';
import Register from './component/Register/Register';
import RequireAuth from './component/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/orders' element={
          <RequireAuth>
            <Orders></Orders>
          </RequireAuth>
        }></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
