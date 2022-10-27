import { useEffect, useState } from 'react'
import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
import './App.css';
import Cart from './Components/cart/Cart'
import Header from './Components/header/Header'
import Home from './Components/Home'
import Footer from './Components/footer/Footer'
import Favourites from './Components/favourites/Favourites'



function App() {
  // стейт для хранения товаров на главной странице
  const [products, setProducts] = useState([])
  // стейт состояния корзины (открыто/закрыто)
  const [cartOpened, setCartOpened] = useState(false)
  // стейт для хранения товаров в корзине
  const [cartItems, setCartItems] = useState([])
  // стейт для поиска
  const [search, setSearch] = useState('')
  // стейт для хранения избранных товаров
  const [favItems, setFavItems] = useState([])

  useEffect(
    /* () => {
      fetch("https://6354294be64783fa82807083.mockapi.io/products")
      .then( response => response.json())
      .then( myJson => setProducts(myJson))
    }, [] */

    () => {
      // загружаем с бэка каталог товаров для отрисовки на фронте (главная сайта)
      axios.get('https://6354294be64783fa82807083.mockapi.io/products')
      .then(res => setProducts(res.data))
      // загружаем с бэка товары, добавленые в корзину, для отрисовки на фронте (корзина)
      axios.get('https://6354294be64783fa82807083.mockapi.io/cart')
      .then(res => setCartItems(res.data))
      // загружаем с бэка товары, добавленные в избранное, для отрисовки на фронте
      axios.get('https://6354294be64783fa82807083.mockapi.io/favourites')
      .then(res => setFavItems(res.data))
    }, []
  )


  return (
    <div className="App">

      { cartOpened 
        ? <Cart 
            cartItems={ cartItems }
            setCartItems={ setCartItems }
            closeCart={ ()=> setCartOpened(false) } 
          /> 
        : null }

      <Header openCart={ () => setCartOpened(true) } />

      <Routes>
        <Route path='/favourites' element={
          <Favourites 
            favItems={ favItems }
            setFavItems={ setFavItems }
            cartItems={ cartItems }
            setCartItems={ setCartItems }
          />
        } />

        <Route path='/' element={
          <Home 
            products={ products }
            cartItems={ cartItems }
            setCartItems={ setCartItems }
            search={ search }
            setSearch={ setSearch }
            favItems={ favItems }
            setFavItems= { setFavItems }
          />
        } />

      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;