import React from 'react'

const Container = ({dataPoint,setDataPoint,children}) => {

  return (
    <div>
      <div className="relative min-h-screen md:flex">
      <div 
        className="sidebar bg-blue-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
          <span className="text-center text-2xl font-extrabold py-2.5 px-4 ">Sextant</span>
         <nav>
          <a 
            href="/" 
            onClick={(e)=>{
              e.preventDefault();
              return(
                setDataPoint(1)
              )
            }}
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-green-500 hover:text-white ">
            IP Address
          </a>
          <a 
            href="/" 
            onClick={(e)=>{
              e.preventDefault();
              return(
                setDataPoint(2)
              )
            }}
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-green-500 hover:text-white">
            DataPoint 2
          </a>
          <a href="/"
            onClick={(e)=>{
              e.preventDefault();
              return(
                setDataPoint(3)
              )
            }}
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-green-500 hover:text-white ">
            DataPoint 3
          </a>
          <a 
            href="/" 
            onClick={(e)=>{
              e.preventDefault();
              return(
                setDataPoint(4)
              )
            }}
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-green-500 hover:text-white ">
            DataPoint 4
          </a>
          </nav>
        
        </div>

        <div class="flex-1 p-10 text-2xl font-bold">
           {children}
        </div>

      </div>
    </div>
  )
}

export default Container