// { items: [] heading: string}
// using interface we can define the shape or the interface of an object
import { useState } from "react";
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}
function ListGroup({items, heading, onSelectItem}: Props) {
  
  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // Event Handler
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h2>{heading}</h2>
      <ul className="list-group">
        {items.length === 0 && <p>No item found</p>};
        {items.map((item, index) => (
          <li
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
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
