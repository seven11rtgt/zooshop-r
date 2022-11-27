import Social from "./social/Social"
import MainFooterContent from "./mainContent/MainFooterContent"
import style from "./footer.module.css"

const Footer = () => {
  return(
    <footer>
      <div className={style.logo}>
        <img src="/zooshop-r/img/koshka.png" alt="logo-koshka" />
      </div>

      <div className={style.footerContent}>
        <Social/>
        <MainFooterContent/>
      </div>
    </footer>
  )
}

export default Footer