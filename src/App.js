import { useState } from "react"
import './App.css';
import Task from './components/Task';

const tasks = [
  {
    id: 1,
    description: "Wash car",
  },
  {
    id: 2,
    description: "Buy groceries",
  },
  {
    id: 3,
    description: "Pay water bill",
  },
  {
    id: 4,
    description: "Walk dog",
  },
];



function App() {
  const [todos, setTodos] = useState(tasks)
  const [inputValue, setInputValue] = useState("Add task here...");

  const handleEdit = (taskId, editedTask) => {
    const editedArray = todos.map((todo) => {
      if (todo.id !== taskId) {
        return todo
      } else {
        return {
          id: taskId,
          description: editedTask
        }
      }
    })
    setTodos(editedArray)
  }


  return (
    <>
      <div>NavBar</div>
      <div className="App">
        <h1>ToDo List</h1>
        <form onSubmit={()=>console.log("woohoo")}>
          <input
            type='text'
            name='task'
            id='user-input'
            value={inputValue}
            onChange={()=>console.log("woohoo")}
          />
          <input type='button' value='Add Task' />
        </form>
        <div>
          {todos.map((task, index) => (
            <Task 
              key={index}
              task={task}
              handleEdit={handleEdit}
            />
          ))}
        </div>
    </div>
    </>
  );
}

export default App;
