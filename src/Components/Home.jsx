import Products from './products/Products'
import PromoSection from './promoSection/PromoSection'
import AboutUs from './aboutUs/AboutUs'
import TestSlider from "./TestSlider"

const Home = (props) => {
  return(
    <>
      {/* <TestSlider /> */}
      <Products 
        products={ props.products }
        cartItems={ props.cartItems }
        setCartItems={ props.setCartItems }
        favItems={ props.favItems }
        setFavItems= { props.setFavItems }
        search={ props.search }
        setSearch={ props.setSearch }
      />
      <PromoSection />
      <AboutUs />
    </>
  )
}

export default Home