import React from "react";

const ListGroup = props => {
  const {
    items,
    onItemSelect,
    valueProperty,
    textProperty,
    selectedItem
  } = props;
  return (
    <ul className="list-group">
      {/* <li className="list-group-item">All Genres</li> */}
      {items.map(item => (
        <li
          key={item[valueProperty]}
          onClick={() => onItemSelect(item)}
          className={
            item === selectedItem ? "list-group-item active" : "list-group-item"
          }
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};
ListGroup.defaultProps = {
  valueProperty: "_id",
  textProperty: "name"
};

export default ListGroup;
