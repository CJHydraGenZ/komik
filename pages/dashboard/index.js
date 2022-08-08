import React from 'react'

const Dashboard = () => {
  return (
    <div className='flex'>
      <div className={`w-72 h-screen bg-slate-500`}>Sidebar</div>
      <div className="p-7 text-2xl font-semibold">
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