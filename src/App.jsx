import React, { useState } from 'react';
import Header from './Components/Header';
import Create from './Components/Create';
import Show from './Components/Show';

const App = () => {
  
  return (
    <div className=" flex justify-center">
      <div className="main h-[100vh] w-full bg-black text-white flex flex-col justify-center items-center"> {/* Center vertically */}
        <Header />
        <Create />
        <Show />
      </div>
    </div>
  );
};

export default App;