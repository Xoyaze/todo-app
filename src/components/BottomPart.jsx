import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrash, faXmark } from '@fortawesome/free-solid-svg-icons';

const BottomPart = (props) => {
  return (
    <div className='h-[75%] w-full bg-theme-800 rounded-b-3xl custom-scroll'>
      <ul className='h-full w-full rounded-b-3xl flex flex-col gap-y-5 items-center '>
        <li className='w-[96%] flex text-4xl  mt-10'>
          <div className='h-full w-[70%] flex justify-start items-center text-orange-500'>
            <h1>Your Tasks</h1>
          </div>
          <div className='h-full w-[15%] flex justify-center items-center text-green-500'>
            <h1>Status</h1>
          </div>
          <div className='h-full w-[15%] flex justify-center items-center text-red-500'>
            <h1>Delete</h1>
          </div>
        </li>


        {props.todoList.map(todo => (
          <li key={todo.id} className='w-[95%] flex text-3xl mt-5 '>
            <div className='w-[70%] flex justify-start items-center text-white'>
              {todo.completed ? (<h1 className='text-green-500 line-through transition-all duration-100'>{todo.task}</h1>) : (<h1>{todo.task}</h1>)}
            </div>
            <div className='w-[15%] flex justify-center items-center text-green-500 select-none'>
              {todo.completed ? (
                <FontAwesomeIcon onClick={() => props.handleCompletedTask(todo.id)} icon={faXmark} className='cursor-pointer hover:text-green-600 active:text-green-400 custom-animation transition-hover duration-200'/>
              ) : (
                <FontAwesomeIcon onClick={() => props.handleCompletedTask(todo.id)} icon={faCheck} className='cursor-pointer hover:text-green-600 active:text-green-400 custom-animation transition-hover duration-200'/>
              )}
            </div>
            <div className='w-[15%] flex justify-center items-center text-red-500 select-none'>
            <FontAwesomeIcon onClick={() => props.handleDeleteTask(todo.id)} icon={faTrash} className='cursor-pointer hover:text-red-600 custom-animation'/>
            </div>
        </li>
        ))}



      </ul>

      
    </div>
  )
}

export default BottomPart
