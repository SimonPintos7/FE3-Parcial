import { useState, useEffect } from 'react';
import Card from '../Components/Card'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

export default function Home(){

  const [vetor, setVetor] = useState([]);
  const getData = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users')
    
    const convert = await data.json();
    setVetor(convert)
  }
  useEffect(() => {
    getData();
    });
  
    const [favs, setFavs] = useState(
      JSON.parse(localStorage.getItem('Favs') || '[]')
    )
  
    const addToFavs = (dentista) => {
      
      let newFavs
      if (favs.some((fav) => fav.id === dentista.id)) {
        newFavs = favs.filter((fav) => fav.id !== dentista.id)
      } else {
        newFavs = [...favs, dentista]
      }
      setFavs(newFavs)
      localStorage.setItem('Favs', JSON.stringify(newFavs))
    }

  return (
    <main className="" >
      <h1>Dentists</h1>
      <div className='card-grid'>
      <div>
            {vetor.map(object => (<Card object={object} key={object.id} onClick={addToFavs}></Card>))}
        </div>
        
      </div>
    </main>
  )
}

