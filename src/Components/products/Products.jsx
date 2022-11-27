import axios from 'axios'
import { useContext } from 'react'
import { AppContext } from '../../App'
import SearchBlock from '../searchBlock/searchBlock'
import Card from './card/Card'
import style from './products.module.css'


const Products = (props) => {

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

  const onAddToFavs = async (objFav) => {
    try{
      const findFavItem = context.favItems.find(favItem => favItem.myId === objFav.myId)

      if (findFavItem) {
        axios.delete(`https://6354294be64783fa82807083.mockapi.io/favourites/${findFavItem.id}`)

        context.setFavItems(prev => prev.filter(favItems => favItems.myId !== objFav.myId))

      } else {
        const { data } = await axios.post('https://6354294be64783fa82807083.mockapi.io/favourites', objFav)

        context.setFavItems([...props.favItems, data])
      }
    }
    catch{
      alert('Не удалось добавить товар в избранное :(')
    }
  }

  const onSearchInput = (e) => {
    props.setSearch(e.target.value)
  }

  return(
    <div className={style.productsSection}>
        <SearchBlock filter={ onSearchInput } />

        <h2>{ props.search ? `Поиск по запросу: ${props.search}` : 'Все товары' }</h2>

        <div className={style.products}>
          {
            context.products
            .filter(item => item.title.toLowerCase().includes(props.search.toLowerCase()))
            .map((obj, index) => {
              return(
                <Card 
                  key={index}
                  {...obj}

                  onPlus = { onAddToCart }
                  onFav = { onAddToFavs }
                />
              )}
            )
          }
        </div>
    </div>
  )
}

export default Products