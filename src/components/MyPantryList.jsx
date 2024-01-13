import React, { useState } from "react";

  /* 
    The `MyPantryList` component receives two props:
    - foodList: A object that contains information for stored food
    - onDelete: A function called when delete button is clicked
  */
const MyPantryList = ({ foodList, onDelete }) => {
  //state for selected elements and sorting
  const [selectedItems, setSelectedItems] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  //edit the checkbox
  const handleCheckboxChange = (itemId) => {
    if (selectedItems.includes(itemId)) {
      setSelectedItems(selectedItems.filter((id) => id !== itemId));
    } else {
      setSelectedItems([...selectedItems, itemId]);
    }
  };
//deletes selected items
  const handleDelete = () => {
    onDelete(selectedItems);
    setSelectedItems([]);
  };
//checks if food is expired
  const isExpired = (bestBeforeDate) => {
    const today = new Date();
    const expirationDate = new Date(bestBeforeDate);
    return today > expirationDate;
  };

  //calls the sorting function
  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  //sorts the list
  const sortedList = () => {
    let list = [...foodList];
    if (sortConfig.key !== null) {
      list.sort((a, b) => {
        if (sortConfig.key === 'bestBefore') {
          // sorts after date, if the click is done in the column "bestBefore"
          const dateA = new Date(a.bestBefore);
          const dateB = new Date(b.bestBefore);
  
          if (dateA < dateB) {
            return sortConfig.direction === 'asc' ? -1 : 1;
          }
          if (dateA > dateB) {
            return sortConfig.direction === 'asc' ? 1 : -1;
          }
        } else if (sortConfig.key !== 'amount' && sortConfig.key !== 'id') {
          // if it's not about 'amount', 'id' or 'bestBefore'does the usual comparison
          if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === 'asc' ? -1 : 1;
          }
          if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === 'asc' ? 1 : -1;
          }
        } else {
          // for 'amount' and 'id', does the numeric copmarison
          const numA = parseFloat(a[sortConfig.key]);
          const numB = parseFloat(b[sortConfig.key]);
  
          if (numA < numB) {
            return sortConfig.direction === 'asc' ? -1 : 1;
          }
          if (numA > numB) {
            return sortConfig.direction === 'asc' ? 1 : -1;
          }
        }
        return 0;
      });
    }
    return list;
  };
  
// list of the column-headlines of the table/ list
  const columnHeaders = ["id", "name", "amount", "unit", "categorie", "bestBefore", "actions"];

  //return value of the components (returns list/ table with sorting function including the dleete button)
  return (
    <div className="card-container">
      <table>
        <thead>
          <tr>
            {/*column-headlines with sorting function*/}
            {columnHeaders.map((header, index) => (
              <th key={index} onClick={() => requestSort(header)}>
                {header}
                {sortConfig.key === header && (
                  <span>{sortConfig.direction === 'asc' ? ' ▲' : ' ▼'}</span>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/*list of the entered food*/}
          {sortedList().map((foodItem) => (
            <tr key={foodItem.id}>
              <td>{foodItem.id}</td>
              <td>{foodItem.name}</td>
              <td>{foodItem.amount}</td>
              <td>{foodItem.unit}</td>
              <td>{foodItem.categorie}</td>
              <td style={{ color: isExpired(foodItem.bestBefore) ? 'red' : 'black' }}>
                {foodItem.bestBefore}
                {isExpired(foodItem.bestBefore) && <span> - expired</span>}
              </td>
              <td>
                {/* checkbox, to check one line/ one element*/}
                <input type="checkbox" onChange={() => handleCheckboxChange(foodItem.id)} checked={selectedItems.includes(foodItem.id)}
                />
              </td>
            </tr> 
          ))}
        </tbody>
      </table>
      <div className="input-container3">
      <div className="buttons">
        {/* button deletes checked/ selected elements*/}
        <button className="deleteb" onClick={handleDelete}>Delete Selected</button>
      </div>
    </div>
    </div>
  );
};

export default MyPantryList;
