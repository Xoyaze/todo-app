
const TopPart = (props) => {

  return (
    <div className='h-[25%] w-full bg-orange-500 rounded-t-3xl text-imported'>
        <form action="" className='h-full w-full flex justify-center items-center'>
            <input onChange={(e) => props.handleInput(e)} value={props.inputValue} type="text" placeholder='Enter a task to add' className='h-[45%] w-[60%] mr-12 bg-theme-800 p-4  rounded-2xl focus:outline-none focus:border focus:border-white border border-theme-100 text-2xl placeholder:text-theme-100' />
            <button onClick={(e) => props.handleAddTask(e)} className='h-[45%] w-[20%] bg-theme-800 border-theme-100 rounded-2xl border hover:border-white active:border-black active:w-[20.5%] transition-all duration-150 text-xl'>Add Task</button>
        </form>
    </div>
  )
}

export default TopPart
