import { useEffect, useState } from 'react'
import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
import './App.css';
import Header from './Components/header/Header'
import PromoSection from './Components/promoSection/PromoSection'
import Footer from './Components/footer/Footer'
import AboutUs from './Components/aboutUs/AboutUs'
import Products from './Components/products/Products'
import Cart from './Components/cart/Cart'


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

      {/* <Routes>
        <Route path='/favourites' />
        <Route path='/test/:number' />
      </Routes > */}
      
      <Header openCart={ () => setCartOpened(true) } />
      <Products 
        products={ products }
        cartItems={ cartItems }
        setCartItems={ setCartItems }
        search={ search }
        setSearch={ setSearch }
        favItems={ favItems }
        setFavItems= { setFavItems }
      />
      <PromoSection />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;