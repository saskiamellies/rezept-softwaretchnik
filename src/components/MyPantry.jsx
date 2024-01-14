import React, { useState } from "react";
import MyPantryInput from "./MyPantryInput";
import MyPantryList from "./MyPantryList";


export default function MyPantry() {
   
  const [foodList, setFoodList] = useState(JSON.parse(localStorage.getItem("foodList")) || []);
  const [showList, setShowList] = useState(false);
  const [newEntry, setNewEntry] = useState({ name: "", amount: "", unit: "", categorie: "", bestBefore: "" });

  const handleInputText = (value, property) => {
    setNewEntry((prevEntry) => ({ ...prevEntry, [property]: value.trim() }));
  };

   //saves new entry from the user
  const saveInput = () => { 
    const missingFields = [];

    if (!newEntry.name || !newEntry.name.trim()) {
      missingFields.push("Name");
    }

  // checks if an amount is filled in into the amount field and returns Amount, if field is empty
    if (!newEntry.amount || !newEntry.amount.trim()) {
      missingFields.push("Amount");
    }

//checks if length of the filled in input is not 0 and returns alert if it is 0
    if (missingFields.length > 0) {
      alert(`Please fill in the following fields: ${missingFields.join(", ")}`);
      return; // ends the function, if validation is not passed
    }

    // includes a new element, which will be added to the list
    const entryToSave = {
      id: getAvailableId(foodList),
      name: newEntry.name.trim(),
      amount: newEntry.amount.trim(),
      unit: newEntry.unit,
      categorie: newEntry.categorie,
      bestBefore: formatBestBefore(newEntry.bestBefore),
    };

    //creates a new list, which includes the previous list and adds a new entry
    setFoodList((prevList) => [...prevList, entryToSave]);

    //creates a new list, which includes the previous list and adds a new entry and saves it to local storage
    const updatedList = [...foodList, entryToSave].map((item, index) => ({ ...item, id: index + 1 }));
    localStorage.setItem("foodList", JSON.stringify(updatedList));
  };

//activates the showFoodList 
  const showFoodList = () => {
    setShowList(true);
  };

//clears the whole list
  const clearFoodList = () => {
    setFoodList([]);
    setShowList(false);
    localStorage.removeItem("foodList");
  };

//deletes selected elements (select through checkbox check)
  const onDelete = (selectedItems) => {
    setFoodList((prevList) => prevList.filter((item) => !selectedItems.includes(item.id)));
  };
  
//creates a new ID for a new entry
  const getAvailableId = (list) => {
    const existingIds = list.map((item) => item.id);
    let newId = 1;
    while (existingIds.includes(newId)) {
      newId++;
    }
    return newId;
  };

//formats the date into the english format day-month-year 
  const formatBestBefore = (dateString) => {
    const options = { day: "numeric", month: "long", year: "numeric" };
    const formattedDate = new Date(dateString).toLocaleDateString("en-EN", options);
    return formattedDate;
  };

  return (
    // returns functionality of input elements and buttons for the input of the values into the list
    <div className="food">
      <div className="inputArea">      
      <h3>enter your stored food here:</h3>
      <MyPantryInput
        onTypingName={(value) => handleInputText(value, "name")}
        onTypingAmount={(value) => handleInputText(value, "amount")}
        onTypingUnit={(value) => handleInputText(value, "unit")}
        onTypingCategorie={(value) => handleInputText(value, "categorie")}
        onTypingDate={(value) => handleInputText(value, "bestBefore")}
        newEntry={newEntry}/>
     
      <div className="buttons">
        
        <button onClick= {saveInput}>Save Entry</button>
        <button onClick={showFoodList}>Show List</button>
        <button onClick={clearFoodList}>Clear List</button>
        </div>
        </div>
        {showList && <MyPantryList foodList={foodList} onDelete={onDelete} />}
    </div>
    
  );
}