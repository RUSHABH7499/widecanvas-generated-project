import React, { useState } from 'react'
import { FaFilter, FaHeart } from 'react-icons/fa'

const SAMPLE_PROPERTIES = [
  {
    id: 1,
    title: "Modern Downtown Apartment",
    price: 2500,
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    image: "https://via.placeholder.com/350x250"
  },
  {
    id: 2,
    title: "Cozy Suburban House",
    price: 1800,
    bedrooms: 3,
    bathrooms: 2,
    area: 1500,
    image: "https://via.placeholder.com/350x250"
  }
]

function Search() {
  const [properties, setProperties] = useState(SAMPLE_PROPERTIES)
  const [filters, setFilters] = useState({
    minPrice: 0,
    maxPrice: 10000,
    bedrooms: 0,
    bathrooms: 0
  })

  return (
    <div className="flex">
      {/* Filters Sidebar */}
      <aside className="w-64 bg-white p-6 shadow-md">
        <h2 className="text-xl font-bold mb-6 flex items-center">
          <FaFilter className="mr-2" /> Filters
        </h2>
        
        <div className="space-y-4">
          <div>
            <label className="block mb-2">Price Range</label>
            <div className="flex space-x-2">
              <input 
                type="number" 
                placeholder="Min" 
                className="input-field w-24" 
                value={filters.minPrice}
                onChange={(e) => setFilters({...filters, minPrice: e.target.value})}
              />
              <input 
                type="number" 
                placeholder="Max" 
                className="input-field w-24" 
                value={filters.maxPrice}
                onChange={(e) => setFilters({...filters, maxPrice: e.target.value})}
              />
            </div>
          </div>

          <div>
            <label className="block mb-2">Bedrooms</label>
            <select 
              className="input-field"
              value={filters.bedrooms}
              onChange={(e) => setFilters({...filters, bedrooms: e.target.value})}
            >
              <option value={0}>Any</option>
              <option value={1}>1+</option>
              <option value={2}>2+</option>
              <option value={3}>3+</option>
            </select>
          </div>

          <div>
            <label className="block mb-2">Bathrooms</label>
            <select 
              className="input-field"
              value={filters.bathrooms}
              onChange={(e) => setFilters({...filters, bathrooms: e.target.value})}
            >
              <option value={0}>Any</option>
              <option value={1}>1+</option>
              <option value={2}>2+</option>
            </select>
          </div>
        </div>
      </aside>

      {/* Properties Grid */}
      <main className="flex-grow p-6">
        <div className="grid grid-cols-3 gap-6">
          {properties.map(property => (
            <div key={property.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img 
                src={property.image} 
                alt={property.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-bold">{property.title}</h3>
                  <button className="text-red-500 hover:text-red-700">
                    <FaHeart />
                  </button>
                </div>
                <p className="text-mavani-blue font-semibold">${property.price}/month</p>
                <div className="mt-2 text-mavani-gray">
                  {property.bedrooms} Beds • {property.bathrooms} Baths • {property.area} sq ft
                </div>
                <button className="btn-primary w-full mt-4 py-2 rounded">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default Search
