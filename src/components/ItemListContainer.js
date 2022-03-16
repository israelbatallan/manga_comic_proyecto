import ItemCount from "./ItemCount"

const ItemListContainer = ({greeting}) => {
  return (
    <>
      <div className="container">
        <h2>{greeting}</h2>
        <ItemCount
          stock={5}
          initial={1}
        />
      </div>
    </>

  )
}
  
  export default ItemListContainer