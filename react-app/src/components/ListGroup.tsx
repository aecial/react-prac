function ListGroup() {
  let items = ["Capas", "Concepcion", "Bamban", "San Vicente", "Cristo Rey"];
  items = [];
  return (
    <>
      <h2>Lezgoooo!</h2>
      <ul className="list-group">

        { items.length === 0 && <p>No item found</p>};
        {items.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
