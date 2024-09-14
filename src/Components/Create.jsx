import React, { useContext, useState } from 'react'
import {Taskscontext} from '../context/Taskscontext'

const Create = () => {
    const [title, settitle] = useState("")
    const {tasks, settasks} = useContext(Taskscontext)
    const taskhandler = (e) =>{
        e.preventDefault()
        const newtasks = { title, completed: false}
        const copytasks = [...tasks]
        copytasks.push(newtasks)
        settasks(copytasks)
        settitle("")
      }
    return (
        <div>
            <form onSubmit={taskhandler} className="form mb-4">
                <input onChange={(e) => settitle(e.target.value)} type="text" value={title} placeholder='Write Your Task....' className="input text-white rounded-lg bg-zinc-800 px-4 py-2 text-lg" />
                <button className="button bg-red-500 px-4 py-2 ml-2 text-lg text-black rounded-lg">Add</button>
            </form>
        </div>
    )
}

export default Create