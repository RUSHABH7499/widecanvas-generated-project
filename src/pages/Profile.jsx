import React, { useState } from 'react'
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa'

function Profile() {
  const [savedProperties, setSavedProperties] = useState([
    {
      id: 1,
      title: "Modern Downtown Apartment",
      price: 2500,
      image: "https://via.placeholder.com/350x250"
    }
  ])

  const [listedProperties, setListedProperties] = useState([])

  return (
    <div className="grid grid-cols-2 gap-8">
      {/* Saved Properties */}
      <section className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-mavani-blue">Saved Properties</h2>
        {savedProperties.length === 0 ? (
          <p className="text-mavani-gray">No saved properties</p>
        ) : (
          savedProperties.map(property => (
            <div key={property.id} className="flex items-center mb-4 pb-4 border-b">
              <img 
                src={property.image} 
                alt={property.title} 
                className="w-24 h-16 object-cover rounded mr-4" 
              />
              <div className="flex-grow">
                <h3 className="font-bold">{property.title}</h3>
                <p className="text-mavani-blue">${property.price}/month</p>
              </div>
              <button className="text-red-500 hover:text-red-700 ml-4">
                <FaTrash />
              </button>
            </div>
          ))
        )}
      </section>

      {/* Listed Properties */}
      <section className="bg-white shadow-md rounded-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-mavani-blue">My Listings</h2>
          <button className="btn-primary flex items-center px-4 py-2 rounded">
            <FaPlus className="mr-2" /> Add Listing
          </button>
        </div>
        
        {listedProperties.length === 0 ? (
          <p className="text-mavani-gray">No properties listed</p>
        ) : (
          listedProperties.map(property => (
            <div key={property.id} className="flex items-center mb-4 pb-4 border-b">
              <img 
                src={property.image} 
                alt={property.title} 
                className="w-24 h-16 object-cover rounded mr-4" 
              />
              <div className="flex-grow">
                <h3 className="font-bold">{property.title}</h3>
                <p className="text-mavani-blue">${property.price}/month</p>
              </div>
              <div className="space-x-2">
                <button className="text-blue-500 hover:text-blue-700">
                  <FaEdit />
                </button>
                <button className="text-red-500 hover:text-red-700">
                  <FaTrash />
                </button>
              </div>
            </div>
          ))
        )}
      </section>
    </div>
  )
}

export default Profile
