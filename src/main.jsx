import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TasksContext from './context/Taskscontext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <TasksContext>
    <App />
  </TasksContext>
)
