import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import Home from './Home/Home';
import Shop from './Shop/Shop';
import { getAuth } from "firebase/auth";
import app from './firebase.init';
import SingIn from './SingIn/SingIn';

const auth = getAuth(app);

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path='/shop' element={<Shop></Shop>}>Shop</Route>
        <Route path='/sing-in' element={<SingIn></SingIn>}></Route>
      </Routes>
    </div>
  );
}

export default App;
