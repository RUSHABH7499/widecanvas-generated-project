import React from 'react'
import { FaSearch } from 'react-icons/fa'

function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-6 text-mavani-blue">Find Your Perfect Home</h1>
      
      <div className="max-w-xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <form className="space-y-4">
          <div>
            <label htmlFor="location" className="block mb-2">Location</label>
            <div className="flex">
              <input 
                type="text" 
                id="location" 
                placeholder="City, Neighborhood" 
                className="input-field flex-grow mr-2" 
              />
              <button type="submit" className="btn-primary px-4 py-2 rounded flex items-center">
                <FaSearch className="mr-2" /> Search
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="property-type" className="block mb-2">Property Type</label>
              <select id="property-type" className="input-field">
                <option>Any</option>
                <option>Apartment</option>
                <option>House</option>
                <option>Condo</option>
              </select>
            </div>
            <div>
              <label htmlFor="price-range" className="block mb-2">Price Range</label>
              <select id="price-range" className="input-field">
                <option>Any</option>
                <option>$500 - $1000</option>
                <option>$1000 - $2000</option>
                <option>$2000+</option>
              </select>
            </div>
          </div>
        </form>
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-6 text-mavani-blue">Popular Locations</h2>
        <div className="grid grid-cols-3 gap-6">
          {['New York', 'San Francisco', 'Los Angeles'].map(city => (
            <div key={city} className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2">{city}</h3>
              <p className="text-mavani-gray">Explore rental properties</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
