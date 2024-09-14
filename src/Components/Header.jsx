import React from 'react'

const Header = (props) => {
    const { tasks } = props;
  return (
    <div><div className="hero px-6 w-96 mb-4 text-center border border-white flex items-center justify-between py-10 rounded-lg">
    <div className="text text-left">
      <h1 className='text-4xl font-bold'>LET'S TODO</h1>
      <h4 className='text-lg'>Keep doing things</h4>
    </div>
    <div className="circle rounded-full px-4 py-4 w-20 h-20 bg-red-500 flex items-center justify-center">
      <h1 className='text-3xl font-bold text-black'>{tasks.filter(task => task.completed).length}/{tasks.length}</h1>
    </div>
  </div></div>
  )
}

export default Header