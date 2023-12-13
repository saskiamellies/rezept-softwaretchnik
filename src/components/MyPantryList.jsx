import React, { useState } from "react";

const MyPantryList = ({ foodList, onDelete }) => {
  const [selectedItems, setSelectedItems] = useState([]);

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

  if (foodList.length === 0) {
    return null; // Wenn die Liste leer ist, nichts anzeigen
  }

  const columnHeaders = ["ID", "Name", "Amount", "Unit", "Categorie", "Best Before Date", "Actions"];

  return (
    <div className="card-container" style={{ marginBottom: "20px"}}>
      <table>
        <thead>
          <tr>
            {columnHeaders.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {foodList.map((foodItem) => (
            <tr key={foodItem.id}>
              <td>{foodItem.id}</td>
              <td>{foodItem.name}</td>
              <td>{foodItem.amount}</td>
              <td>{foodItem.unit}</td>
              <td>{foodItem.categorie}</td>
              <td>{foodItem.bestBefore}</td>
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
       <button class="deleteB" onClick={handleDelete}>Delete Selected</button>
      {selectedItems.length > 0 && (
        <div>
         
        </div>
      )}
    </div>
  );
};

export default MyPantryList;