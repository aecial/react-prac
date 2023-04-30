import { useState } from "react";

function ListGroup() {
  let items = ["Capas", "Concepcion", "Bamban", "San Vicente", "Cristo Rey"];
  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // Event Handler
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h2>Lezgoooo!</h2>
      <ul className="list-group">
        {items.length === 0 && <p>No item found</p>};
        {items.map((item, index) => (
          <li
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
