import React from 'react'
import axios from 'axios'
import style from './favourites.module.css'
import FavCard from './favCard/FavCard'

const Favourites = (props) => {

  const onAddToCart = (objCart) => {
    axios.post('https://6354294be64783fa82807083.mockapi.io/cart', objCart)
    props.setCartItems([...props.cartItems, objCart])
  }
 
  const onRemoveFavProducts = (id) => {
    axios.delete(`https://6354294be64783fa82807083.mockapi.io/favourites/${id}`)
    props.setFavItems(currentFavItems => currentFavItems.filter(item => Number(item.id) !== Number(id)))
  }

  return(
    <div className={style.productsSection}>

      <h2>Избранные товары</h2>

      <div className={style.products}>
        {
          props.favItems
          .map(item => {
            return(
              <FavCard 
                key={item.id}
                id={item.id}
                title={item.title} 
                description={item.description} 
                price={item.price} 
                img={item.img} 
                plusImg='/img/plus.png'
                checkImg='/img/check.png'
                onPlus = { cartObj => onAddToCart(cartObj) }
                onRemoveFavProducts = { id => onRemoveFavProducts(id) }
              />
            )
          })
        }
      </div>
  </div>
)
}

export default Favourites