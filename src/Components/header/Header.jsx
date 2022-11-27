import style from './header.module.css'
import { Link } from 'react-router-dom'

const Header = (props) => {
  return(
    <header>
      <h1 className={style.logo}>Корма для собак и кошек <br/>
          <span className={style.logoMax}>BISCO</span>
      </h1>

      <nav>
        <Link to='/zooshop-r/'>
          <button className={style.navItem} >ГЛАВНАЯ</button>
        </Link>

        <Link to='/zooshop-r/favourites'>
          <button className={style.navItem} >ИЗБРАННОЕ</button>
        </Link>

        <button className={style.navItem} onClick={props.openCart}>КОРЗИНА</button>
      </nav>
    </header>
  )
}

export default Header