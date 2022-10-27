import axios from 'axios'
import SearchBlock from '../searchBlock/searchBlock'
import Card from './card/Card'
import style from './products.module.css'

const Products = (props) => {

    const onAddToCart = async (objCart) => {
      try{
        if (props.cartItems.find(item => Number(item.id) === Number(objCart.id))) {
          axios.delete(`https://6354294be64783fa82807083.mockapi.io/cart/${objCart.id}`)
          props.setCartItems(currentItems => currentItems.filter(item => Number(item.id) !== Number(objCart.id)))
          return
        }

        const { data } = await axios.post('https://6354294be64783fa82807083.mockapi.io/cart', objCart)
        props.setCartItems([...props.cartItems, data])
      }
      catch{

      }
    }

    const onAddFavProducts = async (objFav) => {
      try{
        if ( props.favItems.find(obj => Number(obj.id) === Number(objFav.id)) ) {
          axios.delete(`https://6354294be64783fa82807083.mockapi.io/favourites/${objFav.id}`)
          return
        }

        const { data } = await axios.post('https://6354294be64783fa82807083.mockapi.io/favourites', objFav)
        props.setFavItems([...props.favItems, data])
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
              .map(
                item => {
                  return(
                    <Card 
                      key={item.id}
                      id={item.id}
                      title={item.title} 
                      description={item.description} 
                      price={item.price} 
                      img={item.img} 
                      plusImg='/img/plus.png'
                      checkImg='/img/check.png'
                      onPlus = { cartObj => onAddToCart(cartObj) }
                      onFav = { favObj => onAddFavProducts(favObj) }
                    />
                  )
                }
              )
            }
          </div>
      </div>
    )
}

export default Products