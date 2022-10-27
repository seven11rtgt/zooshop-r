import style from './header.module.css'

const Header = (props) => {
  return(
    <header>
      <h1 className={style.logo}>Корма для собак и кошек <br/> <span className={style.logoMax}>BISCO</span></h1>
      <nav>
        <button className={style.navItem} >КАТАЛОГ</button>
        <button className={style.navItem} >ИЗБРАННОЕ</button>
        <button className={style.navItem} onClick={props.openCart}>КОРЗИНА</button>
      </nav>
    </header>
  )
}

export default Header