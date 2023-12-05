import React, { useState } from "react";
import MyPantryInput from "./MyPantryInput";
import MyPantryList from "./MyPantryList";

export default function MyPantry() {
  const [foodList, setFoodList] = useState(JSON.parse(localStorage.getItem("foodList")) || []);
  const [showList, setShowList] = useState(false);
  const [newEntry, setNewEntry] = useState({ name: "", amount: "", unit: "", bestBefore: "" });

  const handleInputText = (value, property) => {
    setNewEntry((prevEntry) => ({ ...prevEntry, [property]: value.trim() }));
  };

  const saveInput = () => {
    
    // Validierung: Überprüfen, ob Name oder Menge fehlen
    const missingFields = [];

    if (!newEntry.name || !newEntry.name.trim()) {
      missingFields.push("Name");
    }

    if (!newEntry.amount || !newEntry.amount.trim()) {
      missingFields.push("Menge");
    }

    if (missingFields.length > 0) {
      alert(`Bitte füllen Sie folgende Felder aus: ${missingFields.join(", ")}`);
      return; // Beenden Sie die Funktion, wenn die Validierung nicht bestanden ist.
    }

    const entryToSave = {
      id: getAvailableId(foodList),
      name: newEntry.name.trim(),
      amount: newEntry.amount.trim(),
      unit: newEntry.unit,
      bestBefore: formatBestBefore(newEntry.bestBefore),
    };

    setFoodList((prevList) => [...prevList, entryToSave]);

    const updatedList = [...foodList, entryToSave].map((item, index) => ({ ...item, id: index + 1 }));
    localStorage.setItem("foodList", JSON.stringify(updatedList));
  };

  const showFoodList = () => {
    setShowList(true);
  };

  const clearFoodList = () => {
    setFoodList([]);
    setShowList(false);
    localStorage.removeItem("foodList");
  };

  const onDelete = (selectedItems) => {
    setFoodList((prevList) => prevList.filter((item) => !selectedItems.includes(item.id)));
  };

  const getAvailableId = (list) => {
    const existingIds = list.map((item) => item.id);
    let newId = 1;

    while (existingIds.includes(newId)) {
      newId++;
    }

    return newId;
  };

  const formatBestBefore = (dateString) => {
    const options = { day: "numeric", month: "long", year: "numeric" };
    const formattedDate = new Date(dateString).toLocaleDateString("en-EN", options);
    return formattedDate;
  };

  // ... (der Rest des Codes bleibt unverändert)

  return (
    <div className="Food">
      <h1>My Pantry</h1>
      <br />
      <h4>enter your stored food here</h4>
      <MyPantryInput
        onTypingName={(value) => handleInputText(value, "name")}
        onTypingAmount={(value) => handleInputText(value, "amount")}
        onTypingUnit={(value) => handleInputText(value, "unit")}
        onTypingDate={(value) => handleInputText(value, "bestBefore")}
        newEntry={newEntry} // Übergeben Sie die aktuellen Werte an das Eingabefeld
      />
      <div className="buttons">
        <button onClick={saveInput}>Save Entry</button>
        <button onClick={showFoodList}>Show List</button>
        <button onClick={clearFoodList}>Clear Entry</button>
        {showList && <MyPantryList foodList={foodList} onDelete={onDelete} />}
      </div>
    </div>
  );
}