import { useContext } from 'react'
import axios from 'axios'
import style from './favourites.module.css'
import FavCard from './favCard/FavCard'
import { AppContext } from "../../App"

const Favourites = (props) => {

  const context = useContext(AppContext)

  const onAddToCart = async (objCart) => {
    try{
      const findCartItem = context.cartItems.find(cartItem => cartItem.myId === objCart.myId)
      
      if (findCartItem) {
        axios.delete(`https://6354294be64783fa82807083.mockapi.io/cart/${findCartItem.id}`)

        context.setCartItems(prev => prev.filter(cartItem => cartItem.myId === objCart.myId))

      } else {
        const { data } = await axios.post('https://6354294be64783fa82807083.mockapi.io/cart', objCart)

        context.setCartItems([...props.cartItems, data])
      }
    }
    catch{
      alert('Не удалось добавить товар в корзину')
    }
  }

  const onFavsClick = async (objFav) => {
    try{
      const findFavItem = context.favItems.find(favItem => favItem.myId === objFav.myId)

      if (findFavItem) {
        axios.delete(`https://6354294be64783fa82807083.mockapi.io/favourites/${findFavItem.id}`)

        context.setFavItems(prev => prev.filter(favItems => favItems.myId !== objFav.myId))

      } 
    }
    catch{
      alert('Не удалось добавить товар в избранное :(')
    }
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

                onPlus = { onAddToCart }
                onFav = { onFavsClick }
              />
            )
          })
        }
      </div>
  </div>
)
}

export default Favourites