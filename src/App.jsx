import { useState } from "react";
import "./App.css";

function App() {
  //managing user inputs
  const [userInput, setUserInput] = useState("");
  //total user inputs
  const [GroceryList, setGroceryList] = useState([]);
  //handling checkbox events
  const [isChecked, setIsChecked] = useState([]);

  //function to handleCheckbox changes
  function handleCheckBoxChange(index) {
    if (isChecked.includes(index)) {
      // if we are taking out the value it will filter
      const newArray = isChecked.filter((value) => value !== index);
      setIsChecked(newArray);
    } else {
      //if we are adding it will spread plus add the new value
      setIsChecked([...isChecked, index]);
    }
  }
  //handle userinput
  function handleInputChange(event) {
    setUserInput(event.target.value);
  }
  //handle addtask
  function handleAddTask() {
    if (userInput.trim() !== "") {
      setGroceryList((g) => [...g, userInput]);
    }
  }
  //delete the current index item
  function deleteGroceryList(index) {
    setGroceryList(GroceryList.filter((e, i) => i !== index));
  }

  return (
    <div className="groceryList">
      <h4>Grocery List</h4>
      <input
        type="text"
        className="inputtext"
        placeholder="What is the grocery list value?"
        //this will listen to changes, we need to pass the event to look for change
        onChange={handleInputChange}
      />
      <button
        className="addItembtn"
        //this will listen to onclick, we are not passing any event from onclick
        onClick={handleAddTask}
      >
        Add Item
      </button>
      {/* looping through items */}
      <ul className="itemList">
        {GroceryList.map((item, index) => {
          return (
            <li key={index}>
              <div>
                <input
                  //id should not be items??
                  id={item}
                  name="todo-list"
                  type="checkbox"
                  value={item}
                  onChange={() => handleCheckBoxChange(index)}
                />
                <label className="label" htmlFor={item}>
                  {isChecked.includes(index) ? <del>{item}</del> : item}
                </label>
              </div>
              {/* Deleting items */}
              <button onClick={() => deleteGroceryList(index)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
