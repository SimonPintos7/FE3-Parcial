import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
/*

const GameDetail = () => {
  // useParams nos permite acceder a los parametros de la url
  // sera un objeto con tantas propiedades como parametros haya en la url
  // en este caso, solo tenemos uno: id
  const params = useParams()
  const [game, setGame] = useState() 

  

  return (
    <div>
      <h1>Game Detail</h1>
      {game && (
        <div>
          <h2>{game.name}</h2>
          <p>{game.achievements?.filter((a) => a.unlocktime).length} - {game.achievements?.length}</p>
        </div>
      )}
    </div>
  )
}

export default GameDetail
 */
const Detail = () => {
  
  const params = useParams()
  const [dentista, setDentista] = useState()
  //const {name, species, image, status} = state.char

  useEffect(() => {
    const getDentista = async () => {
      const dentista = await (await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)).json()
      setDentista(dentista)
    }
    getDentista()
  }, [])

  return (
    <div>
    <h1>deaaaa</h1>
    {dentista && (
      <div>
        <h2>{dentista.name}</h2>
        
      </div>
    )}
  </div>
)
}

export default Detail



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context


  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

 
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
   