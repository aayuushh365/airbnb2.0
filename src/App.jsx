import React from 'react'
import Navbar from '../Components/Navbar'
import Filters from '../Components/Filters'
import Rentals from '../Components/Rentals'

function App() {
  return (
    <div style={{marginLeft: "2rem" , marginRight:"2rem"}}>
      {/* Navbar */}
      <Navbar />
      {/* Filters */}
      <Filters />
      {/* Rentals */}
      <Rentals />
      {/* Footer */}
    </div>
  )
}
export default App
