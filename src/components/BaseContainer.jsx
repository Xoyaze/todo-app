import React, { useState } from 'react'
import TopPart from './TopPart'
import BottomPart from './BottomPart'

const BaseContainer = () => {

  const [todoList, setTodoList] = useState([]);

  const [newTask, setNewTask] = useState('');

  const handleInput = (e) => {
    setNewTask(e.target.value);
  }

  const handleAddTask = (e) => {
    e.preventDefault();

    if(newTask.trim() == ''){
      alert("Type a task first");
      return;
    }

    const newTodo = {
      task: newTask,
      completed: false,
      id: todoList.length == 0 ? 1 : todoList[todoList.length - 1].id + 1 
    }
    
    setTodoList([...todoList, newTodo]);  
    setNewTask('');
  } 

  const handleCompletedTask = (id) => {
    setTodoList(todoList.map(todo => todo.id == id ? {...todo, completed: !todo.completed} : todo));
  }

  const handleDeleteTask = (id) => {
    setTodoList(todoList.map(todo => todo.id === id ? {...todo, task: 'Deleting...'} : todo))
    setTimeout(() => {
      setTodoList(todoList.filter(todo => todo.id !== id));
    }, 200)
  }

  return (
    <div className='h-screen w-full bg-black flex justify-center items-center'>

        <div className='h-[85%] w-[90%] bg-theme-800 text-white flex flex-col items-center rounded-3xl'>
            <TopPart handleInput={handleInput} handleAddTask={handleAddTask} inputValue={newTask}/>
            <BottomPart todoList={todoList} handleCompletedTask={handleCompletedTask} handleDeleteTask={handleDeleteTask}/>
        </div>

    </div>
  )
}

export default BaseContainer
