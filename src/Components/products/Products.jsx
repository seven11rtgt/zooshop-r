import axios from 'axios'
import SearchBlock from '../searchBlock/searchBlock'
import Card from './card/Card'
import style from './products.module.css'

const Products = (props) => {

  const onAddToCart = async (objCart) => {
    try{
      const findCartItem = props.cartItems.find(cartItem => cartItem.id === objCart.id)
      
      if (findCartItem) {
        axios.delete(`http://localhost:3001/cart/${findCartItem.id}`)

        props.setCartItems(prev => prev.filter(cartItem => cartItem.id !== objCart.id))

      } else {
        const { data } = await axios.post('http://localhost:3001/cart', objCart)

        props.setCartItems([...props.cartItems, data])
      }
    }
    catch{
      alert('Не удалось добавить товар в корзину')
    }
  }

  const onAddToFavs = async (objFav) => {
    try{
      const findFavItem = props.favItems.find(favItem => favItem.id === objFav.id)

      if (findFavItem) {
        axios.delete(`http://localhost:3001/favourites/${findFavItem.id}`)

        props.setFavItems(prev => prev.filter(favItems => favItems.id !== objFav.id))

      } else {
        const { data } = await axios.post('http://localhost:3001/favourites', objFav)

        props.setFavItems([...props.favItems, data])
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
            props.products
            .filter(item => item.title.toLowerCase().includes(props.search.toLowerCase()))
            .map((obj, index) => {
              return(
                <Card 
                  key={index}
                  {...obj}

                  onPlus = { cartObj => onAddToCart(cartObj) }
                  onFav = { favObj => onAddToFavs(favObj) }
                />
              )}
            )
          }
        </div>
    </div>
  )
}

export default Products