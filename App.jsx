import React, { useState } from "react";
import ToDoList from "./ToDoList";

const App = () =>{

    const[inputList,setInputList]=useState("");
    const[Items,setItems]=useState([]);

    const itemEvents =(event)=>{
        setInputList(event.target.value);
    };

    const listOfItems =()=>{
        setItems((Items)=>{
            return [...Items,inputList];
        })
        setInputList("");    
    };

    const deleteItems = (id) =>{
        setItems((oldItems)=>{
            return oldItems.filter((arrElem,index)=>{
                return index!==id;
            });
        });
    };
    
    return (
        <>
            <div className="main_div">
            <div className="center_div">
            <br/>
            <h1> ToDo List</h1>
            <br/>
            <input type="text" value={inputList} 
            placeholder="Add a Items" 
            onChange={itemEvents}/>
            <button onClick={listOfItems}> + </button>

            <ol>
                {
                    Items.map((itemval,index)=>{
                        return <ToDoList key={index} id={index} 
                        text={itemval} onSelect={deleteItems} />;
                    })
                }
            </ol>
            </div>
            </div>
        </>
    )
};

export default App;