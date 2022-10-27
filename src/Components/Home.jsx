import Products from './products/Products'
import PromoSection from './promoSection/PromoSection'
import AboutUs from './aboutUs/AboutUs'

const Home = (props) => {
  return(
    <>
      <Products 
        products={ props.products }
        cartItems={ props.cartItems }
        setCartItems={ props.setCartItems }
        search={ props.search }
        setSearch={ props.setSearch }
        favItems={ props.favItems }
        setFavItems= { props.setFavItems }
      />
      <PromoSection />
      <AboutUs />
    </>
  )
}

export default Home