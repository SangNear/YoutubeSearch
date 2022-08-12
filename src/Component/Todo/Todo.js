import { useState, useEffect } from "react"
import AddTodo from "./AddTodo"
import "./Todo.scss"
const Todo = () => {
    const [todoName, setTodoName] = useState([
        {id: 1, name: 'Doing homework'},
        {id: 2, name: 'Doing homework 2'},
        {id: 3, name: 'Doing homework 3'},
        {id: 4, name: 'Doing homework 4'}
    ]      
    )
    const addTodo = (name) => {
        setTodoName([...todoName, name])
    }
    const handleDelete = (todo) => {
        let curr = todoName
        curr = curr.filter((item) => {
            return item.id !== todo.id
        })
        setTodoName(curr)
        
    }
    
  
    return (
        <div className="todo-container">
            
            <AddTodo
            addTodo = {addTodo}
            />
            <div className="todo-list">
                {todoName && todoName.map((item) => {
                    return (
                        <div className="todo-item" key={item.id}>
                            {item.id} - {item.name} <span onClick={() => {handleDelete(item)}} style={{color: 'red', cursor: 'pointer'}}>X</span>
                        </div>

                    )
                })}
            </div>
        </div>
    )
}
export default Todo