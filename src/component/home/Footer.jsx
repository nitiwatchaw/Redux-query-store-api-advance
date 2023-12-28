import React from 'react'
import { FaArrowRight } from "react-icons/fa";
const Footer = () => {
    return (
        <div className='bg-orange mt-16'>
            <div className="py-14 text-center">
                <h3 className='text-white font-bold tracking-title'>NEWSLETTER!</h3>
                <div className="bg-white rounded-full w-max mx-auto py-2 px-12 mt-4 relative ">
                    <p className='
                  text-sletter before:content[""] after:context[""]'>
                        NEWSLETTER AND GET DISCOUNT 25% OFF
                    </p>
                </div>

                <div className="w-search mx-auto mt-16 xs:w-5/6 xs:mb-20">
                    <div className=" relative ">
                        <input
                            className='border-b-2 h-12 w-full text-white bg-orange placeholder:text-xs placeholder:text-white focus:outline-none'
                            placeholder='Please email address here ..'
                            type="search" />
                        <button className='text-white flex items-center text-xs gap-2 absolute right-0 top-4 xs:left-0 xs:top-20'>
                            Subcribe Now <span className="bg-white text-orange rounded-full text-check w-3 h-3 flex justify-center items-center"><FaArrowRight /></span>
                        </button>
                    </div>

                </div>
            </div>


        </div >
    )
}

export default Footer