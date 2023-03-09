import { useState } from 'react'

export default function Task ({ task, handleEdit }) {
    const [ isEditClicked, setIsEditClicked ] = useState(false)
    const [editedTask, setEditedTask] = useState(task.description);


  const handleEditClick = () => {
    setIsEditClicked(!isEditClicked);
    if (isEditClicked) {
      handleEdit(task.id, editedTask);
      localStorage.setItem(
        "tasks",
        JSON.stringify(
            // ...todos, 
            task
        )
      )
    }
  };

    const handleEditInput = (e) => {
        setEditedTask(e.target.value)
    }

    return (
        <div>
        {isEditClicked ? (
            <input onChange={handleEditInput} value={editedTask} />    
        ) : (
            <div>{task.description}</div>
        )}
            <div>
                <div onClick={handleEditClick}>{isEditClicked ? "Save" : "Edit"}</div>
            </div>
        </div>
    )
}

