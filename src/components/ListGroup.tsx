import { useState } from "react";

function ListGroup() {
  let items = ["Nairobi", "Nakuru", "Iten", "Machakos", "Tala"];
  let selectedIndex = 0;

//   Hook
  const arr = useState (-1);
  arr[0] //Variable(selectedIndex)
  arr[1] // updater function


  return (
    <>
      <h1>List of Items</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={ selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
            key={item}
            onClick={() => { selectedIndex = index; }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
