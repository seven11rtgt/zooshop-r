import { useContext } from 'react'
import axios from 'axios'
import style from './favourites.module.css'
import FavCard from './favCard/FavCard'
import { AppContext } from "../../App"

const Favourites = (props) => {

  const context = useContext(AppContext)

  const onAddToCart = (objCart) => {
    axios.post('http://localhost:3001/cart', objCart)
    context.setCartItems([...context.cartItems, objCart])
  }

  const onRemoveFav = (id) => {
      axios.delete(`http://localhost:3001/favourites/${id}`)
      context.setFavItems(prev => prev.filter(item => Number(item.id) !== Number(id)))
  }

  return(
    <div className={style.productsSection}>

      <h2>Избранные товары</h2>

      <div className={style.products}>
        {
          context.favItems.map((item, index) => {
            return(
              <FavCard 
              key={index}
              {...item}

              onPlus = { cartObj => onAddToCart(cartObj) }
              onFav = { favObj => onRemoveFav(favObj) }
            />
            )
          })
        }
      </div>
  </div>
)
}

export default Favourites