import React, { useState } from "react";

const MyPantryList = ({ foodList, onDelete }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  const handleCheckboxChange = (itemId) => {
    if (selectedItems.includes(itemId)) {
      setSelectedItems(selectedItems.filter((id) => id !== itemId));
    } else {
      setSelectedItems([...selectedItems, itemId]);
    }
  };

  const handleDelete = () => {
    onDelete(selectedItems);
    setSelectedItems([]);
  };

  const isExpired = (bestBeforeDate) => {
    const today = new Date();
    const expirationDate = new Date(bestBeforeDate);
    return today > expirationDate;
  };

  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const sortedList = () => {
    let list = [...foodList];
    if (sortConfig.key !== null) {
      list.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }
    return list;
  };

  const columnHeaders = ["id", "name", "amount", "unit", "categorie", "bestBefore", "actions"];

  return (
    <div className="card-container" style={{ marginBottom: "20px"}}>
      <table>
        <thead>
          <tr>
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
          {sortedList().map((foodItem) => (
            <tr key={foodItem.id}>
              <td>{foodItem.id}</td>
              <td>{foodItem.name}</td>
              <td>{foodItem.amount}</td>
              <td>{foodItem.unit}</td>
              <td>{foodItem.categorie}</td>
              <td style={{ color: isExpired(foodItem.bestBefore) ? 'red' : 'black' }}>
                {foodItem.bestBefore}
                {isExpired(foodItem.bestBefore) && <span> - abgelaufen</span>}
              </td>
              <td>
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange(foodItem.id)}
                  checked={selectedItems.includes(foodItem.id)}
                />
              </td>
            </tr> 
          ))}
        </tbody>
      </table>
      <div className="buttons">
        <button className="deleteb" onClick={handleDelete}>Delete Selected</button>
      </div>
    </div>
  );
};

export default MyPantryList;
