import React, { useState, useEffect } from "react";

  const MyMealSchedule = ({ dishSaved }) => {
    
  const [mealPlan, setMealPlan] = useState(Array(7).fill(null).map(() => ({ title: "", link: "" })));

  /*
  useEffect(() => {
    setMealPlan(dishSaved);
      }
, [dishSaved]);
*/

  const handleTitleChange = (index, title) => {
    console.log(dishSaved);
    setMealPlan((prevMealPlan) => {
      const updatedPlan = [...prevMealPlan];
      updatedPlan[index] = { ...updatedPlan[index], title };
      return updatedPlan;
    });
  };

  const handleLinkChange = (index, link) => {
    setMealPlan((prevMealPlan) => {
      const updatedPlan = [...prevMealPlan];
      updatedPlan[index] = { ...updatedPlan[index], link };
      return updatedPlan;
    });
  };

  return (
    <div className="MyMealSchedule">
      <table>
        <thead>
          <tr>
            <th>Day</th>
            <th>Recipe Title</th>
            <th>Recipe Link</th>
          </tr>
        </thead>
        <tbody>
          {mealPlan.map((meal, index) => (
            <tr key={index}>
              <td>{`Day ${index + 1}`}</td>
              <td>
                <input
                  type="text"
                  value={meal.title}
                  onChange={(e) => handleTitleChange(index, e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={meal.link}
                  onChange={(e) => handleLinkChange(index, e.target.value)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyMealSchedule;