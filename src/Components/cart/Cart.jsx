import CartItem from "./cartItem/cartItem"
import style from "./cart.module.css"

/* let sum = prodList
    .map(item => +item.price.replace(/\s/, ''))
    .reduce((acc, curr) => acc + curr, 0) */

// добавляем удаленные ранее пробелы в сумму
//let sumBeautified = sum.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
let sumBeautified = 0

const Cart = (props) => {
    return(
        <div className={style.overlay}>
            <div className={style.cart}>
            <div className={style.title_block}>
                <h2>Корзина</h2>
                <button className={style.close_btn} onClick={ props.closeCart } >X</button>
            </div>
            
            <div className={style.cart_list}>
                {
                    props.cartProducts.map(
                        item => {
                            return(
                                <CartItem 
                                    key={item.id}
                                    title={item.title} 
                                    price={item.price} 
                                    img={item.img} 
                                />
                            )
                        }
                    )
                }
            </div>

            <div className={style.total_price}>
                <p className={style.total_price_text}>Итог: </p>
                <p className={style.total_price_summ}>
                    {sumBeautified} руб.
                </p>
                <button>Заказать</button>
            </div>

            </div>
        </div>
    )
}

export default Cart