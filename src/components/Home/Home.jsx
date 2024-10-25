import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='flex justify-center items-center'>
            <div className='py-5'>
                <Link
                    className="bg-yellow-300 text-white font-semibold py-2 px-4 rounded-full shadow hover:bg-blue-100 transition duration-300"
                    to="/add-data"
                >
                    AddEmp
                </Link>

            
            </div>
        </div>
    )
}

export default Home
