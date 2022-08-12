import { useState } from "react"

const AddTodo = (props) => {
    const [addName, setAddName] = useState('')
    const handleOnchangeInput = (event) => {
        setAddName(event.target.value)
    }
    const handleAdd = () => {
       props.addTodo({
        id: Math.floor(Math.random() * 101),
        name: addName
       })
       setAddName('')
    }
 
   
    
    return (
        <div className="add-todo">
                <input type="text" value={addName} onChange={(event) => {handleOnchangeInput(event)}} />
                <button onClick={() => {handleAdd()}}>Them</button>
            </div>
    )
}

export default AddTodo