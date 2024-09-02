import React from 'react'
import Nav from '../component/Nav'
import Footer from '../component/Footer';

function Catalog() {
  const shifts = [
    {
      name: "Morning Shift",
      timing: "6:00 AM - 11:00 PM",
      hours: 5,
      charge: "Rs 300",
    },
    {
      name: "Afternoon Shift",
      timing: "11:00 AM - 5:00 PM",
      hours: 6,
      charge: "Rs 500",
    },
    {
      name: "Evening Shift",
      timing: "5:00 PM - 10:00 AM",
      hours: 5,
      charge: "400",
    },
    {
      name: "All Shift",
      timing: "6:00 AM - 10:00 PM",
      hours: 16,
      charge: "1100",
    },
  ];
  return (
    <div>
      <Nav/>
      <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">JK Library Time Table</h1>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {shifts.map((shift, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4">{shift.name}</h2>
            <p className="text-lg mb-2"><strong>Timing:</strong> {shift.timing}</p>
            <p className="text-lg mb-2"><strong>Hours:</strong> {shift.hours} hours</p>
            <p className="text-lg"><strong>Charge:</strong> {shift.charge}</p>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Catalog
