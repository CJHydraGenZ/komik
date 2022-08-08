import React from 'react'
import { useState } from 'react'

const Dashboard = () => {

  const [open, setOpen] = useState(true)
  return (
    <div className='flex'>
      <div className={`${open ? 'w-72' : 'w-20'} duration-300 h-screen bg-slate-500 relative`}>
        <button className={`absolute cursor-pointer rounded-full right-3 top-9 border-2 border-slate-400 ${!open && 'rotate-180'}`}

          onClick={() => setOpen(!open)}> c </button>
      </div>
      <div className="p-7 text-2xl font-semibold flex-1 h-screen">
        <h1>Home Page</h1>
      </div>

    </div>
  )
}

export default Dashboard


Dashboard.getLayout = function PageLayout(page) {
  return (
    <>
      {page}
    </>
  )
}