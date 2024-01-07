import React from "react";

function Searchbar() {
  return (
    <div className="relative">
      <input
        type="text"
        className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-full focus:outline-none focus:bg-white focus:text-gray-900"
        placeholder="Search..."
      />
      <button className="absolute right-0 px-4 py-2 text-white rounded-full focus:outline-none focus:bg-purple-700">
        <svg
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            d="M22 22L15.5 15.5M15.5 15.5C17.1569 14.1569 18 12.3431 18 10.5C18 6.91015 15.0899 4 11.5 4C7.91015 4 5 6.91015 5 10.5C5 14.0899 7.91015 17 11.5 17C13.3431 17 15.1569 16.1569 16.5 14.5L22 20"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}

export default Searchbar;
