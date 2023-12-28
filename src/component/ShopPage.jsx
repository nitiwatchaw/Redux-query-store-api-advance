import React from 'react'
import { Link } from 'react-router-dom'
import Layout from './layout/Layout'

const ShopPage = () => {

    return (
        <Layout>
            <div className='w-full h-40  mt-16 bg-primary box-shadow hover:translate-x-6 transition duration-300 rounded-md  uppercase text-2xl mb-10 '>
                <Link className='w-full h-full flex items-center justify-center text-white '
                    to='/products/all'>All</Link>
            </div>
            <ul className='grid grid-category gap-10 uppercase text-center'>

                <li className='categoery-box bg-softOrange'>
                    <Link to='/products/jewelery ' >
                        <p className='text-orange'>Jewery</p>
                    </Link>
                </li>
                <li className='categoery-box bg-indigo-200'>
                    <Link to='/products/men-clothing'>
                        <p className='text-indigo-700'>Men's clothing</p>
                    </Link>
                </li>
                <li className='categoery-box bg-rose-200'>
                    <Link to='/products/electronics'>
                        <p className='text-rose-700'>Electronics</p>
                    </Link>
                </li>
                <li className='categoery-box bg-emerald-200'>
                    <Link to='/products/women-clothing'>
                        <p className='text-emerald-700'>Women's clothing</p>
                    </Link>
                </li>
          <li className='categoery-box bg-purple-200'>
                    <Link to='/products/like'>
                        <p className='text-purple-700'>Liked Product</p>
                    </Link>
                </li>
            </ul>


        </Layout>
    )
}

export default ShopPage