import React, { useState } from 'react'
import './style.css'

function Todo() {
    const [inputData, setInputData] = useState("");
    const [items, setItems] = useState([]);
    const onChange = (e) => {
        setInputData(e.target.value)
    }
    const addItem = () => {
        if (!inputData) {
            alert('pleasse fill the data');
        } else {
            const myNewInputData = {
                id: new Date().getTime().toString(),
                name: inputData
            }
            setItems([...items, myNewInputData])
            setInputData("")
        }
    }
    const deleteItem = (index) => {
        const updatedItems = items.filter((item) => {
            return item.id !== index;
        });
        setItems(updatedItems);
    }
    const removeAll = () => {
        setItems([]);
    }
    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src="./todo.svg" alt="todo_logo" />
                        <figcaption>Add Your List Here</figcaption>
                    </figure>
                    <div className="addItems">
                        <input
                            type="text"
                            placeholder=' ✍️ Add Items'
                            className='form-conyrol'
                            value={inputData}
                            onChange={onChange} />
                        <i className="fa fa-plus add-btn" onClick={addItem}></i>
                    </div>
                    <div className="showItems">
                        {items.map((item) => {
                            return (
                                <div className="eachItem" key={item.id}>
                                    <h3>{item.name}</h3>
                                    <div className="todo-btn">
                                        <i className="far fa-edit"></i>
                                        <i className="far fa-trash-alt" onClick={() => deleteItem(item.id)}></i>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                    <div className="showItems">
                        <button
                            className="btn effect04"
                            data-sm-link-text="Remove All"
                            onClick={removeAll} >
                            <span>CHECK LIST</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo
