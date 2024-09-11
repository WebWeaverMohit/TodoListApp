import React, { useState } from 'react';

const App = () => {
  const [title, settitle] = useState("")
  const [tasks, settasks] = useState([])

  const taskhandler = (e) =>{
    e.preventDefault()
    const newtasks = { title, completed: false}
    const copytasks = [...tasks]
    copytasks.push(newtasks)
    settasks(copytasks)
    settitle("")
  }

  const completehandler = (e, i) =>{
    const copytasks = [...tasks]
    copytasks[i].completed =!copytasks[i].completed
    settasks(copytasks)
  }

  const deletehandler = (e, i) =>{
    const copytasks = [...tasks]
    copytasks.splice(i, 1)
    settasks(copytasks)
  }

  let rendertasks = (
    <h1 className='mt-10 text-2xl text-center font-bold text-orange-600'>NO PENDING TASKS</h1>
  )

  if(tasks.length > 0) {
    rendertasks = tasks.map((task, index)=> (
      <div key={index} className="list mb-2 h-16 w-80 px-5 border flex items-center justify-between rounded-lg">
          <div className="left flex items-center justify-center gap-6">
            <div onClick={(e)=> completehandler(e, index)} className={`${task.completed ? "bg-green-400" : "border"} smallcircle h-8 w-8 bg-red-100 rounded-full`}></div>
            <h2 className={`${task.completed ? "line-through" : ""} text-2xl`}>{task.title}</h2>  
          </div>
          <div className="buttons flex items-center gap-3 justify-center bg-zinc-500 px-2 py-2 rounded-lg">
            <i onClick={(e) => deletehandler(e, index)} className="ri-delete-bin-line text-xl"></i>
          </div>
        </div>
    ))
  }

  return (
    <div className=" flex justify-center">
      <div className="main h-[100vh] w-full bg-black text-white flex flex-col justify-center items-center"> {/* Center vertically */}
        <div className="hero px-6 w-96 mb-4 text-center border border-white flex items-center justify-between py-10 rounded-lg">
          <div className="text text-left">
            <h1 className='text-4xl font-bold'>LET'S TODO</h1>
            <h4 className='text-lg'>Keep doing things</h4>
          </div>
          <div className="circle rounded-full px-4 py-4 w-20 h-20 bg-red-500 flex items-center justify-center">
            <h1 className='text-3xl font-bold text-black'>{tasks.filter(task => task.completed).length}/{tasks.length}</h1>
          </div>
        </div>
        <form onSubmit={taskhandler} className="form mb-4">
          <input onChange={(e)=> settitle(e.target.value)} type="text" value={title} placeholder='Write Your Task....' className="input text-white rounded-lg bg-zinc-800 px-4 py-2 text-lg" />
          <button className="button bg-red-500 px-4 py-2 ml-2 text-lg text-black rounded-lg">Add</button>
        </form>
        <div className="lists h-96">
        {rendertasks}
        </div>
      </div>
    </div>
  );
};

export default App;