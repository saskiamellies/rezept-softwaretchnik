import React, { useState } from "react";
//Komponente für die Anzeige der MyPantryList
const MyPantryList = ({ foodList, onDelete }) => {
  //der State für ausgewählte/ selected Elemente und Sortierung
  const [selectedItems, setSelectedItems] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  //hiermit wird die Checkbox-Änderung bearbeitet
  const handleCheckboxChange = (itemId) => {
    if (selectedItems.includes(itemId)) {
      setSelectedItems(selectedItems.filter((id) => id !== itemId));
    } else {
      setSelectedItems([...selectedItems, itemId]);
    }
  };
//löscht ausgewählte Elemente
  const handleDelete = () => {
    onDelete(selectedItems);
    setSelectedItems([]);
  };
//Funktion, die prüft, ob Lebensmittel über dem Verfallsdatum liegt
  const isExpired = (bestBeforeDate) => {
    const today = new Date();
    const expirationDate = new Date(bestBeforeDate);
    return today > expirationDate;
  };

  //Funktion, die die Sortierung anfordert
  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  //Funktion, die die Liste sortiert
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
// Liste der Spaltenüberschriften der Tabelle/ Liste
  const columnHeaders = ["id", "name", "amount", "unit", "categorie", "bestBefore", "actions"];

  //Rückgabewert der Komponente (gibt die Liste/ Tabelle mit Sortierfunktion aus inklusive delete Button)
  return (
    <div className="card-container">
      <table>
        <thead>
          <tr>
            {/*Spaltenüberschriften mit Sortierfunktion*/}
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
          {/*Liste der eingegebenen Lebensmittel*/}
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
                {/* Checkbox, zur Auswahl einer Zeile/ eines eingegebenen Elements*/}
                <input type="checkbox" onChange={() => handleCheckboxChange(foodItem.id)} checked={selectedItems.includes(foodItem.id)}
                />
              </td>
            </tr> 
          ))}
        </tbody>
      </table>
      <div className="input-container3">
      <div className="buttons">
        {/* Button zum löschen ausgewählter Elemente*/}
        <button className="deleteb" onClick={handleDelete}>Delete Selected</button>
      </div>
    </div>
    </div>
  );
};

export default MyPantryList;
