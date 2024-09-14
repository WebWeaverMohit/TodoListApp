import { createContext, useState } from 'react'

export const Taskscontext = createContext(null)

const TasksContext = (props) => {
    const [tasks, settasks] = useState([])
  return (
    <Taskscontext.Provider value={{tasks, settasks}}>
      {props.children}
    </Taskscontext.Provider>
  )
}

export default TasksContext