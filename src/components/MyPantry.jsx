import React, { useState } from "react";
import MyPantryInput from "./MyPantryInput";
import MyPantryList from "./MyPantryList";


export default function MyPantry() {
  // Konstante, die die Liste der gespeicherten Lebensmittel darstellt, gespeichert wird lokal
  const [foodList, setFoodList] = useState(JSON.parse(localStorage.getItem("foodList")) || []);
  // Konstante, die dafür zuständig ist, die Liste anzuzeigen oder nicht
  const [showList, setShowList] = useState(false);
 //Konstante, die zuständig dafür ist, neue Einträge aufzunehmen
  const [newEntry, setNewEntry] = useState({ name: "", amount: "", unit: "", categorie: "", bestBefore: "" });
//Konstante, aktualisiert den newEntry Zustand, wenn der Benutzer etwas eingibt
  const handleInputText = (value, property) => {
    setNewEntry((prevEntry) => ({ ...prevEntry, [property]: value.trim() }));
  };
// Konstante, die den neuen Eintrag des Benutzers speichert
  const saveInput = () => {
    
    //Konstante, die zuständig ist für die Überprüfung, ob Name oder Menge fehlen
    const missingFields = [];
// if Abfrage, die prüft, ob ein Name eingegeben wurde und als Ausgabe Name liefert
    if (!newEntry.name || !newEntry.name.trim()) {
      missingFields.push("Name");
    }
 // if Abfrage, die prüft, ob eine Menge eingegeben wurde und als Ausgabe Menge liefert
    if (!newEntry.amount || !newEntry.amount.trim()) {
      missingFields.push("Menge");
    }
//if Abfrage, die prüft, ob die Länge der Eingabe größer als 0 ist und bei nicht Eingabe eine Info ausgibt
    if (missingFields.length > 0) {
      alert(`Bitte füllen Sie folgende Felder aus: ${missingFields.join(", ")}`);
      return; // Beendet die Funktion, wenn die Validierung nicht bestanden ist.
    }
// Konstante, die ein neues Element enthält, das der Liste zugeführt wird
    const entryToSave = {
      id: getAvailableId(foodList),
      name: newEntry.name.trim(),
      amount: newEntry.amount.trim(),
      unit: newEntry.unit,
      categorie: newEntry.categorie,
      bestBefore: formatBestBefore(newEntry.bestBefore),
    };
//Erstellt eine neue Liste und fügt die bisherigen Liste hinzu plus den neuen entryToSave Datensatz
    setFoodList((prevList) => [...prevList, entryToSave]);

//Erstellt eine neue Liste und fügt die bisherigen Liste hinzu plus den neuen entryToSave Datensatz und speichert diese lokal
    const updatedList = [...foodList, entryToSave].map((item, index) => ({ ...item, id: index + 1 }));
    localStorage.setItem("foodList", JSON.stringify(updatedList));
  };
//sorgt für die Aktivierung (macht diese Sichtbar) der showFoodList Konstante, setzt sie auf true
  const showFoodList = () => {
    setShowList(true);
  };
//löscht die gesamte Liste, setzt anstatt der Einträge ein leeres Array ein
  const clearFoodList = () => {
    setFoodList([]);
    setShowList(false);
    localStorage.removeItem("foodList");
  };
//löscht ausgewählte Einträge (zeilenweise) aus der List
  const onDelete = (selectedItems) => {
    setFoodList((prevList) => prevList.filter((item) => !selectedItems.includes(item.id)));
  };
//erstellt eine neue verfügbare ID für ein neu erstelltes Element
  const getAvailableId = (list) => {
    const existingIds = list.map((item) => item.id);
    let newId = 1;
//sucht die vorhandene Lsite der IDs durch nach nicht vorhandenen IDs, setzt die neue ID immer einen höher, als die letzte vorhandene
    while (existingIds.includes(newId)) {
      newId++;
    }
// gibt die erstellte ID zurück
    return newId;
  };
//Formatiert das Datum in die englische Form Monat, Tag, Jahr
  const formatBestBefore = (dateString) => {
    const options = { day: "numeric", month: "long", year: "numeric" };
    const formattedDate = new Date(dateString).toLocaleDateString("en-EN", options);
    return formattedDate;
  };

//
  return (
    // Liefert die Funktionalität für die Eingabeelemente 
    // und Buttons, um in der Tabelle Eingaben zu speichern,
    // die Liste (Tabelle) anzuzeigen und die Liste zu löschen 
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