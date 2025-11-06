import React from 'react'

function Card({ name, title, img }) {
  return (
    <div className="flex flex-col items-center justify-center bg-white shadow-lg rounded-2xl p-6 w-64 hover:scale-105 transition-transform duration-300">
      <img
        src={img}
        alt={name}
        className="rounded-full border-4 border-blue-500 mb-4 h-24 w-24 object-cover"
      />
      <h1 className="text-xl font-semibold text-gray-800">{name}</h1>
      <h3 className="text-gray-500 text-sm">{title}</h3>
    </div>
  )
}

export default Card
