import { useState } from 'react';
import { Switch, Route } from 'react-router';
import Header from './components/Header'
import Footer from './components/Footer'
import MyAccount from './components/MyAccount'
import Checkout from './components/Checkout'
import './index.css'

import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'
import UsersPage from "./pages/UsersPage"
import ProductsPage from './pages/ProductsPage'
import OrdersPage from './pages/OrdersPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ShippingPage from './pages/ShippingPage'
import PaymentPage from './pages/PaymentPage'



function App() {

  const [cards, setCards] = useState(
    [
        { id:1, name:'Nike air max', img:"https://c4.wallpaperflare.com/wallpaper/823/957/135/nike-photo-backgrounds-wallpaper-preview.jpg" },
        { id:2, name:'Samsung Tv', img:"https://i.pinimg.com/originals/db/e5/6d/dbe56dacc14397721c2f17e15a6c09cf.jpg" },
        { id:3, name:'Iphone 11', img:"https://www.pngitem.com/pimgs/m/145-1453218_iphone-11-pro-max-hd-png-download.png" },
        { id:4, name:'Iphone 11', img:"https://www.pngitem.com/pimgs/m/145-1453218_iphone-11-pro-max-hd-png-download.png" },
    ]
  )

  return (
    <div className="App" >
      <Header/>
      <Switch>
        {/* <Route exact path="/" render={ (props) => <Feed cards={cards}/>} /> */}
        <Route exact path="/" render={ (props) => <HomePage cards={cards}/>} />
        <Route path="/product/:id" component={ProductPage} />
        <Route path='/login' component={LoginPage}/>
        <Route path='/register' component={RegisterPage}/>
        <Route path='/profile' component={MyAccount}/>
        <Route path='/checkout' component={Checkout}/>
        <Route path='/users' component={UsersPage}/>
        <Route path='/products' component={ProductsPage}/>
        <Route path='/orders' component={OrdersPage}/>
        <Route path='/shipping' component={ShippingPage}/>
        <Route path='/payment' component={PaymentPage}/>
        <Route path='/myCart/:id?' render={ (props) => <CartPage cards={cards}/>} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
