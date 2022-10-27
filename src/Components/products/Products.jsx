import SearchBlock from '../searchBlock/searchBlock'
import Card from './card/Card'
import style from './products.module.css'

const Products = (props) => {

    const onAddToCart = (obj) => {
      props.setCartProducts([...props.cartProducts, obj])
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
                      title={item.title} 
                      description={item.description} 
                      price={item.price} 
                      img={item.img} 
                      plusImg='/img/plus.png'
                      checkImg='/img/check.png'
                      /* onClickPlus = {
                        () => alert(`Вы добавили в корзину товар "${item.title}" - 1 шт.`)
                      }
                      onClickFav = {
                        () => alert(`Вы добавили товар "${item.title}" в избранное`)
                      } */
                      onPlus = { cartObj => onAddToCart(cartObj) }
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