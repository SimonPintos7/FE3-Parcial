const Card = ({object, onClick}) => {
  
  return (
    
      <div className="card">
        <h2>{object.name}</h2>
        <span>{object.username}</span>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage onClick={addFav()}*/}
        <button onClick={() => onClick(object)} className="favButton">Add fav</button>
    </div>
    
  );
};

export default Card;