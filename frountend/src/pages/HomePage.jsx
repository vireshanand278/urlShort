import React from 'react'
import UrlForm from '../components/UrlForm.jsx'
const HomePage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-5">
      <div className="w-full max-w-lg rounded-xl bg-white p-8 shadow-md sm:p-10">

        {/* Heading */}
        <h1 className="mb-3 text-center text-3xl font-bold text-gray-900">
          URL Shortener
        </h1>

        <p className="mb-8 text-center text-sm text-gray-500">
          Make your long URLs short and shareable.
        </p>

        <UrlForm/>
      </div>
    </div>
  )
}

export default HomePage