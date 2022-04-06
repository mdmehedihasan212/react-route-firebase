import { Route, Routes } from 'react-router-dom';
import './App.css';
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import app from './firebase.init';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import OrderReview from './components/OrderReview/OrderReview';
import Register from './components/Register/Register';


const auth = getAuth(app);

function App() {

  const provider = new GoogleAuthProvider();

  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path='/shop' element={<Shop></Shop>}>Shop</Route>
        <Route path='/order-review' element={<OrderReview></OrderReview>}></Route>
      </Routes>
    </div>
  );
}

export default App;
