


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  /*
  

const App = () => {
  const [favs, setFavs] = useState(
    JSON.parse(localStorage.getItem('bookFavs') || '[]')
  )

  const addToFavs = (book) => {
    let newFavs
    if (favs.some((fav) => fav.id === book.id)) {
      newFavs = favs.filter((fav) => fav.id !== book.id)
    } else {
      newFavs = [...favs, book]
    }
    setFavs(newFavs)
    localStorage.setItem('bookFavs', JSON.stringify(newFavs))
  }

  return (
    <>
      <h1>Fav books</h1>
      {favs.length > 0 ? <BookList books={favs} /> : undefined}
      <hr />
      <h1>All books</h1>
      <BookList books={data} onClick={addToFavs} />
    </>
  )
}

export default App
*/ 
  return (
    <div>
      <form>
      </form>
    </div>
  );
};

export default Form;

/*const BookList = (props) => {
  return (
    <div className='flex'>
      {props.books.map((book) => {
        return (
          <div
            key={book.id}
            className='card'
            onClick={() => props.onClick?.(book)}
          >
            {book.nombre}
          </div>
        )
      })}
    </div>
  )
} */