import { useEffect, useState } from 'react'
import './App.css';
import Header from './Components/header/Header'
import PromoSection from './Components/promo-section/PromoSection'
import Footer from './Components/footer/Footer'
import AboutUs from './Components/aboutUs/AboutUs'
import Products from './Components/products/Products'
import Cart from './Components/cart/Cart'


function App() {
  // стейт для хранения товаров на главной странице
  const [products, setProducts] = useState([])
  // стейт состояния корзины
  const [cartOpened, setCartOpened] = useState(false)
  // стейт для хранения товаров в корзине
  const [cartProducts, setCartProducts] = useState([])
  // стейт для поиска
  const [search, setSearch] = useState('')

  useEffect(
    () => {
      fetch("https://6354294be64783fa82807083.mockapi.io/products")
      .then( response => response.json())
      .then( myJson => setProducts(myJson))
    }, []
  )


  return (
    <div className="App">

      { cartOpened ? <Cart cartProducts={ cartProducts } closeCart={ ()=> setCartOpened(false)} /> : null }
      
      <Header openCart={ () => setCartOpened(true) } />
      <Products 
        products={ products } 
        cartProducts={ cartProducts } 
        search={ search }
        setCartProducts={ setCartProducts }
        setSearch={ setSearch }
      />
      <PromoSection />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
