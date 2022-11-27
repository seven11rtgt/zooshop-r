import { useEffect, useState, createContext } from 'react'
import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
import './App.css';
import Cart from './Components/cart/Cart'
import Header from './Components/header/Header'
import Home from './Components/Home'
import Footer from './Components/footer/Footer'
import Favourites from './Components/favourites/Favourites'

export const AppContext = createContext({})

function App() {
  // стейт для хранения товаров на главной странице
  const [products, setProducts] = useState([])
  // стейт состояния корзины (открыто/закрыто)
  const [isOpenCart, setCartOpen] = useState(false)
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
      async function axiosData() {
        /* загрузка с бэка...
        каталога товаров для отрисовки главной страницы
        http://localhost:3001/propducts - для локального json-сервера */
        const productsData = await axios.get('https://6354294be64783fa82807083.mockapi.io/products')
        // товаров, добавленых в корзину
        const cartData = await axios.get('https://6354294be64783fa82807083.mockapi.io/cart')
        // товаров, добавленных в избранное
        const favData = await axios.get('https://6354294be64783fa82807083.mockapi.io/favourites')

  
        setCartItems(cartData.data)
        setFavItems(favData.data)
        setProducts(productsData.data)
      }
      axiosData()

    }, []
  )

  const onRemoveCartItem = (myId, id) => {
    axios.delete(`https://6354294be64783fa82807083.mockapi.io/cart/${id}`)
    setCartItems(prev => prev.filter(item => item.myId !== myId))
  }

  const hasThisItemInCart = (myId) => {
    return cartItems.some(objCart => objCart.myId === myId)
  }

  const hasThisItemInFavs = (myId) => {
    return favItems.some(objFavorite => objFavorite.myId === myId)
  }

  return (
    <AppContext.Provider value = {{ 
      products, 
      setProducts,
      cartItems,
      setCartItems, 
      favItems,
      setFavItems,
      hasThisItemInCart,
      hasThisItemInFavs
    }}>

    <div className="App">

      { isOpenCart ?
        <Cart 
            closeCart={ ()=> setCartOpen(false) } 
            onRemoveCartItem={ onRemoveCartItem }
            totalSum={      
              cartItems.reduce((total, obj) => total + obj.price, 0)
            }
        /> 
        : null 
      }

      <Header 
        openCart={ () => setCartOpen(true) } 
        cartItems={ cartItems } 
      />

      <Routes>
        <Route path='/zooshop-r/favourites' element={
          <Favourites /> }
        />

        <Route path='/zooshop-r/' element={
          <Home 
            search={ search }
            setSearch={ setSearch }
          /> } 
        />

      </Routes>

      <Footer />
    </div>

    </AppContext.Provider>
  )
}

export default App