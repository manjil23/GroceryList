import { useState } from "react";
import "./App.css";

//questions to ask
// if we have duplicates then it is deleting everything. How to to same thing with keys?
//Check line number 59

function App() {
  //managing user inputs
  const [userInput, setUserInput] = useState("");
  //total user inputs
  const [total, setTotal] = useState([]);
  //handling checkbox events
  const [isChecked, setIsChecked] = useState([]);

  //function to handleCheckbox changes
  function handleCheckBoxChange(e, todoListValue) {
    if (isChecked.includes(todoListValue)) {
      console.log(`targetvalue`, e.target.value);
      console.log(`todo`, todoListValue);
      // if we are taking out the value it will filter
      const newArray = isChecked.filter((value) => value !== todoListValue);
      setIsChecked(newArray);
    } else {
      //if we are adding it will spread plus add the new value
      setIsChecked([...isChecked, todoListValue]);
    }
  }

  return (
    <div className="groceryList">
      <h4>Grocery List</h4>
      <input
        type="text"
        className="inputtext"
        //this will listen to changes, we need to pass the event to look for change
        onChange={(e) => {
          setUserInput(e.target.value);
        }}
      />

      <button
        className="addItembtn"
        //this will listen to onclick, we are not passing any event from onclick
        onClick={() => {
          setTotal([...total, userInput]);
        }}
      >
        Add Item
      </button>

      {/* looping through items */}
      <ul className="itemList">
        {total.map((item, i) => {
          return (
            <li key={i}>
              <div>
                <input
                  //id should not be items??
                  id={item}
                  name="todo-list"
                  type="checkbox"
                  value={item}
                  onChange={(e) => {
                    handleCheckBoxChange(e, item);
                  }}
                />
                <label className="label" htmlFor={item}>
                  {isChecked.includes(item) ? <del>{item}</del> : item}
                </label>
              </div>
              {/* Deleting items */}
              <button
                onClick={() => {
                  setTotal(total.filter((e) => e !== item));
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
