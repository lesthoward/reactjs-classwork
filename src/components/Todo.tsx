import React, {useState} from 'react'
interface TodoInterface {
    text: string,
    isDone: boolean
}


const Todo:React.FC = () => {
    const [todos, setTodo] = useState<TodoInterface[]>([{text: 'Do my homework', isDone: false}])
    const [newTodo, setNewTodo] = useState<string>('')
    const addTodo = (e: any) => {
        e.preventDefault()
        const newTodoArr:[TodoInterface] = [{text: newTodo, isDone: false}]
        setTodo(prevTodo => [...prevTodo, ...newTodoArr ])
    }

    const handleCheck = (e: any) => {
        const todoArr = [...todos]
        console.log(e.target.textContent)
        todoArr.forEach(todo => {
            if(e.target.textContent.includes(todo.text)) {
                if(todo.isDone) {
                    todo.isDone = false
                } else {

                    todo.isDone = true
                }
            }
        })
        setTodo(todoArr)
    }
    return <>
        <h3>TODO LIST</h3>
        <form onSubmit={(e) => addTodo(e)}>
            <input type="text" onChange={(e) => setNewTodo(e.target.value)}/>
            <button>Add</button>
        </form>
        <div>
            <ul>
                {
                    todos.map(todo => {
                        const statusText = todo.isDone ? 'completed' : 'incomplete'
                        return <li key={Math.random()} onClick={(e) => handleCheck(e)}>Desc: {todo.text} |  Status: {statusText} </li>
                    }) 
                }
            </ul>
        </div>
    </>
} 

export default Todo