import React from 'react'
import './style.css'

function Todo() {
    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src="./todo.svg" alt="todo_logo" />
                        <figcaption>Add Your List Here</figcaption>
                    </figure>
                    <div className="addItems">
                        <input type="text" placeholder=' ✍️ Add Items' className='form-conyrol' />
                        <i class="fa fa-plus add-btn"></i>
                    </div>
                    <div className="showItems">
                        <div className="eachItem">
                            <h3>Apple</h3>
                            <div className="todo-btn">
                                <i class="far fa-edit"></i>
                                <i class="far fa-trash-alt"></i>
                            </div>
                        </div>
                    </div>
                    <div className="showItems">
                        <button className="btn effect04" data-sm-link-text="Remove All"><span>CHECK LIST</span> </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo
