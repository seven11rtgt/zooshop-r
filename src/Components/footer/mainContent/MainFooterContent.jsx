import style from './mainFooterContent.module.css'

const MainFooterContent = () => {
  return(
    <div className={style.footerCols}>
      <div className="col">
        <h3>Каталог</h3>

        <ul>
          <li><a href="#"  title="Товары для кошек">Товары для кошек</a></li>
          
          <li><a href="#"  title="Товары для собак">Товары для собак</a></li>
          
          <li><a href="#"  title="Защита от блох и клещей">Защита от блох и клещей</a></li>
          
          <li><a href="#"  title="Выбор корма по породе">Выбор корма по породе</a></li>
          
          <li><a href="#"  title="Выбор корма по заболеваниям">Выбор корма по заболеваниям</a></li>
        </ul>
      </div>

      <div className="col">
        <h3>Компания</h3>

        <ul>
          <li ><a href="#" title="Новости">Новости</a></li>
          
          <li ><a href="#" title="О нас">О нас</a></li>
        </ul>
      </div>
    </div>
  )
}

export default MainFooterContent