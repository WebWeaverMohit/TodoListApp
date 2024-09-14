import React, { useContext } from 'react'
import { Taskscontext } from '../context/Taskscontext'

const Show = () => {
    const {tasks, settasks} = useContext(Taskscontext)
    const completehandler = (e, i) => {
        const copytasks = [...tasks]
        copytasks[i].completed = !copytasks[i].completed
        settasks(copytasks)
    }

    const deletehandler = (e, i) => {
        const copytasks = [...tasks]
        copytasks.splice(i, 1)
        settasks(copytasks)
    }

    let rendertasks = (
        <h1 className='mt-10 text-2xl text-center font-bold text-orange-600'>NO PENDING TASKS</h1>
    )

    if (tasks.length > 0) {
        rendertasks = tasks.map((task, index) => (
            <div key={index} className="list mb-2 h-16 w-80 px-5 border flex items-center justify-between rounded-lg">
                <div className="left flex items-center justify-center gap-6">
                    <div onClick={(e) => completehandler(e, index)} className={`${task.completed ? "bg-green-600" : ""} smallcircle h-8 w-8 bg-red-100 rounded-full`}></div>
                    <h2 className={`${task.completed ? "line-through" : ""} text-2xl`}>{task.title}</h2>
                </div>
                <div className="buttons flex items-center gap-3 justify-center bg-zinc-500 px-2 py-2 rounded-lg">
                    <i onClick={(e) => deletehandler(e, index)} className="ri-delete-bin-line text-xl"></i>
                </div>
            </div>
        ))
    }

    return (
        <div>
            <div className="lists h-96">
                {rendertasks}
            </div>
        </div>
    )
}

export default Show