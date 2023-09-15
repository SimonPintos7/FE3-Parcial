
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const storedArray = localStorage.getItem('dentistaFavs') || '[]';
  const parsedArray = JSON.parse(storedArray);

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        <div>
          {parsedArray.map(object => (<Card object={object} key={object.id}/>))
          }
        </div>
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </>
  );
};

export default Favs;