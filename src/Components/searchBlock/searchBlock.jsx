import style from "./searchBlock.module.css"

const SearchBlock = (props) => {
  return (
    <div className={style.search}>
      <div className={style.searchBlock}>
        <img src='/zooshop-r/img/search.png' alt='search' />
        <input placeholder='Поиск по товарам' onChange={ props.filter } />
      </div>
    </div>
  )
}

export default SearchBlock