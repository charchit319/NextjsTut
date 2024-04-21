import React from 'react'

const Gallerypage = () => {
  return (
    <div className=''>
        <div className='mt-4 ml-6 items-center'>
            <h1 className=''>Gallery</h1>
            <div className='flex flex-wrap mt-4 ml-1 items-center overflow-y-aut'>
                <div className="max-w-xs mr-5 mt-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#"><img className="rounded-t-lg" src="/static/joshua-hanson-e616t35Vbeg-unsplash.jpg" alt="" /></a>
                        <div className="p-5">
                            <a href="#"> <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Image informations</h5></a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">metadata</p>
                            <div className='flex flex-col items-center'>
                            <h1 className="inline-flex items-center px-3 py-2 ml-7 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                Prize
                            </h1>
                            <button type="button" className="text-white  ml-10 mt-2 bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                                Delete
                            </button>
                            <button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" className="text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center
                             dark:bg-blue-600 dark:hover:bg-blue-700 ml-9 dark:focus:ring-blue-800" type="button">
                                Associate POD
                                <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                                </svg>
                            </button>


                            <div id="dropdownHover" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
                                  <li>
                                    <h1 className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</h1>
                                  </li>
                                  <li>
                                    <h1 className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</h1>
                                  </li>
                                  <li>
                                    <h1 className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</h1>
                                  </li>
                                  <li>
                                    <h1 className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</h1>
                                  </li>
                                </ul>
                            </div> 
                            </div>   
                        </div>
                </div>
                <div className="max-w-xs mr-5 mt-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#"><img className="rounded-t-lg" src="/static/joshua-hanson-e616t35Vbeg-unsplash.jpg" alt="" /></a>
                        <div className="p-5">
                            <a href="#"> <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Image informations</h5></a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">metadata</p>
                            <div className='flex flex-col items-center'>
                            <h1 className="inline-flex items-center px-3 py-2 ml-7 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                Prize
                            </h1>
                            <button type="button" className="text-white  ml-10 mt-2 bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                                Delete
                            </button>
                            <button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" className="text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center
                             dark:bg-blue-600 dark:hover:bg-blue-700 ml-9 dark:focus:ring-blue-800" type="button">
                                Associate POD
                                <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                                </svg>
                            </button>


                            <div id="dropdownHover" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
                                  <li>
                                    <h1 className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</h1>
                                  </li>
                                  <li>
                                    <h1 className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</h1>
                                  </li>
                                  <li>
                                    <h1 className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</h1>
                                  </li>
                                  <li>
                                    <h1 className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</h1>
                                  </li>
                                </ul>
                            </div> 
                            </div>   
                        </div>
                </div>
                <div className="max-w-xs mr-5 mt-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#"><img className="rounded-t-lg" src="/static/joshua-hanson-e616t35Vbeg-unsplash.jpg" alt="" /></a>
                        <div className="p-5">
                            <a href="#"> <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Image informations</h5></a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">metadata</p>
                            <div className='flex flex-col items-center'>
                            <h1 className="inline-flex items-center px-3 py-2 ml-7 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                Prize
                            </h1>
                            <button type="button" className="text-white  ml-10 mt-2 bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                                Delete
                            </button>
                            <button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" className="text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center
                             dark:bg-blue-600 dark:hover:bg-blue-700 ml-9 dark:focus:ring-blue-800" type="button">
                                Associate POD
                                <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                                </svg>
                            </button>


                            <div id="dropdownHover" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
                                  <li>
                                    <h1 className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</h1>
                                  </li>
                                  <li>
                                    <h1 className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</h1>
                                  </li>
                                  <li>
                                    <h1 className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</h1>
                                  </li>
                                  <li>
                                    <h1 className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</h1>
                                  </li>
                                </ul>
                            </div> 
                            </div>   
                        </div>
                </div>
                <div className="max-w-xs mr-5 mt-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#"><img className="rounded-t-lg" src="/static/joshua-hanson-e616t35Vbeg-unsplash.jpg" alt="" /></a>
                        <div className="p-5">
                            <a href="#"> <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Image informations</h5></a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">metadata</p>
                            <div className='flex flex-col items-center'>
                            <h1 className="inline-flex items-center px-3 py-2 ml-7 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                Prize
                            </h1>
                            <button type="button" className="text-white  ml-10 mt-2 bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                                Delete
                            </button>
                            <button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" className="text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center
                             dark:bg-blue-600 dark:hover:bg-blue-700 ml-9 dark:focus:ring-blue-800" type="button">
                                Associate POD
                                <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                                </svg>
                            </button>


                            <div id="dropdownHover" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
                                  <li>
                                    <h1 className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</h1>
                                  </li>
                                  <li>
                                    <h1 className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</h1>
                                  </li>
                                  <li>
                                    <h1 className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</h1>
                                  </li>
                                  <li>
                                    <h1 className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</h1>
                                  </li>
                                </ul>
                            </div>
                             
                            </div>   
                        </div>
                </div>
                <div className="max-w-xs mr-5 mt-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#"><img className="rounded-t-lg" src="/static/joshua-hanson-e616t35Vbeg-unsplash.jpg" alt="" /></a>
                        <div className="p-5">
                            <a href="#"> <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Image informations</h5></a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">metadata</p>
                            <div className='flex flex-col items-center'>
                            <h1 className="inline-flex items-center px-3 py-2 ml-7 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                Prize
                            </h1>
                            <button type="button" className="text-white  ml-10 mt-2 bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                                Delete
                            </button>
                            <button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" className="text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center
                             dark:bg-blue-600 dark:hover:bg-blue-700 ml-9 dark:focus:ring-blue-800" type="button">
                                Associate POD
                                <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                                </svg>
                            </button>


                            <div id="dropdownHover" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
                                  <li>
                                    <h1 className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</h1>
                                  </li>
                                  <li>
                                    <h1 className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</h1>
                                  </li>
                                  <li>
                                    <h1 className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</h1>
                                  </li>
                                  <li>
                                    <h1 className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</h1>
                                  </li>
                                </ul>
                            </div> 
                            </div>   
                        </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Gallerypage
