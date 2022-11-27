import CartItem from "./cartItem/cartItem"
import style from "./cart.module.css"

const  Cart = (props) => {
    return(
        <div className={style.overlay}>
            <div className={style.cart}>

                <div className={style.titleBlock}>
                    <h2>Корзина</h2>
                    <button className={style.closeBtn} onClick={ props.closeCart } >X</button>
                </div>
                
                {
                    props.cartItems.length ?   
                    <div className={style.cartList}>
                        {
                            props.cartItems.map((item, index) => {
                                return(
                                    <CartItem 
                                        key={index}
                                        id={item.id}
                                        title={item.title} 
                                        price={item.price} 
                                        img={item.img}
                                        onRemoveCartItem={ props.onRemoveCartItem }
                                    />
                                )
                            })
                        }
                    </div> 
                    : <h2>Ваша корзина пуста</h2>
                }

                <div className={style.totalPrice}>
                    Итог : 
                    <span className={style.totalPriceSum}>
                        {props.totalSum} руб.
                    </span>
                </div>

                
                <button className={style.orderBtn}>Заказать</button>

            </div>
        </div>
    )
}

export default Cart