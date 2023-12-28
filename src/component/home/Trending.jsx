import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Data from '../data/Data_Trend.json'
import { BsCart3 } from "react-icons/bs";
import { LiaStarSolid } from "react-icons/lia";
const Trending = () => {

    const [active, isActive] = useState('all')

    const handleClick = (id) => {
        isActive(id)
    }

    

    // เอาไว้เปลี่ยนข้อมู,ในการกดเมนู
    const activeData = Data[active] || []


    return (
        <div>

            {/* header */}
            <div className="text-center">
                <h3 className='text-2xl font-bold text-orange'>Trending <span className='text-primary'>Products</span></h3>
                <ul className='flex justify-center gap-6 mt-6 text-sm text-slate-400'>
                    <li
                        onClick={() => { handleClick('all') }}
                        className={`${active === 'all' ? 'link_active' : null} link-trend`}>
                        <Link className='block h-full'>All</Link>
                    </li>
                    <li
                        onClick={() => { handleClick('fashion') }}
                        className={` h-12 ${active === 'fashion' ? 'link_active' : null} link-trend`}>
                        <Link className='block h-full'>Fashion</Link>
                    </li>
                    <li
                        onClick={() => { handleClick('diaper') }}
                        className={` h-12 ${active === 'diaper' ? 'link_active' : null} link-trend`}   >
                        <Link className='block h-full'>Diapers</Link>
                    </li>
                    <li
                        onClick={() => { handleClick('hot-sale') }}
                        className={` h-12 ${active === 'hot-sale' ? 'link_active' : null} link-trend`}>
                        <Link className='block h-full'>Hot Sale</Link>
                    </li>
                    <li
                        onClick={() => { handleClick('shoes') }}
                        className={` h-12 ${active === 'shoes' ? 'link_active' : null} link-trend`}  >
                        <Link className='block h-full'>Shoes</Link>
                    </li>
                    <li
                        onClick={() => { handleClick('accessories') }}
                        className={` h-12 ${active === 'accessories' ? 'link_active' : null} link-trend`}>
                        <Link className='block h-full'>Accessories</Link>
                    </li>
                </ul>
            </div>

            {/* content */}
            <div className="">
                <div className="grid grid-trending-product justify-center items-center gap-6 mt-3 p-6 max-w-layout mx-auto">
                    {activeData.map(item => {
                        const itemFormat = (item.price).toFixed(2)
                        return (
                            <div key={item.id} className='w-full'>
                                <Link className="">
                                    <img src={item.img} alt="" className='w-full !h-80 object-cover ' />
                                </Link>
                                <div className="mt-3 flex">
                                    <div className="flex flex-col justify-between grow">
                                        <p className='text-primary font-semibold text-sm'>{item.title}</p>
                                        <div className="flex items-center gap-6">
                                            <p className='text-slate-500 text-sm'><span>$</span> {itemFormat}</p>
                                            <div className="flex text-yellow">
                                                <LiaStarSolid />
                                                <LiaStarSolid />
                                                <LiaStarSolid />
                                                <LiaStarSolid />
                                                <LiaStarSolid />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-orange ">
                                        <Link className='text-white text-md w-10 h-10 flex items-center justify-center'><BsCart3 /></Link>
                                    </div>
                                </div>

                            </div>
                        )
                    })}
                </div>
            </div>
        </div >
    )
}

export default Trending