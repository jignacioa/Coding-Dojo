import React, {useState} from 'react';

const TodoList = (props)=>{
    const [newTask, setNewTask] =useState('');
    const [list, setList] =useState([]);

    const clickHandler=(e)=>{
        e.preventDefault();
        const addedTask = {task: newTask, complete: false};
        setList([...list, addedTask]);
        setNewTask('');
    }
    const handleCheck=(idx)=>{
        list[idx].complete = !list[idx].complete
        setList ([...list]);
    }
      
    function deleteTask(idx) {
        const incompleteTasks = list.filter((_, i) =>i !== idx)
        setList(incompleteTasks);
    }
    return (
        <>
        <h1>To Do List</h1>
        <form onSubmit = {clickHandler}>
            <input  onChange={(e) => setNewTask(e.target.value)} value={newTask} />
            <button type='submit'>Add Task</button>
        </form>
        <div>
            {list.map((taskItem, idx) => {
                return(
                    <div key={idx}>
                        {
                            <div >
                                <h4 style={{ textDecoration: taskItem.complete ? 'line-through':'none'}}>{taskItem.task}</h4>
                            </div>
                        }
                        <button onClick = {()=>deleteTask(idx)} >Delete</button>
                        <input type='checkbox' onClick = {(e) => handleCheck(idx)}/> 
                    </div>
                )
            })}
        </div>
        </>
    )
}
export default TodoList