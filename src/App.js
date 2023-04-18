import React, { useState } from 'react';

const App =() => {

  const[inputList, setInputList] = useState("");
  const[item, setItem] = useState([]);

  const itemEvent =(event)=>{
    setInputList(event.target.value);
  };

  const listOfItem =()=>{
    setItem((oldItem)=>{
      return[...oldItem, inputList];
    });
  };

  return(
    <>
    <div className='main-div'>
      <div className='center'>
        <br/>
        <h1>ToDo List</h1>
        <br/>
        <input type="text" placeholder="Add a Items" value={inputList} onChange={itemEvent}/>
        <button onClick={listOfItem}> + </button> 

        <ol>
          {/*<li> {inputList} </li>*/}
           {item.map((itemval) => {
             return <li>{itemval}</li>
           })};
          </ol>
      </div>
    </div>
    </>
  )
}
export default App;