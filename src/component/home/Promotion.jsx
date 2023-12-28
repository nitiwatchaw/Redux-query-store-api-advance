import React from 'react'
import { PiPaperPlaneTilt } from "react-icons/pi";
import { AiOutlineDashboard } from "react-icons/ai";
import { SlEarphonesAlt } from "react-icons/sl";
const Promotion = () => {
    return (
        <div className='mt-32 grid grid-cols-3 gap-10 sm:grid-cols-1'>
            <div className="bg-superSoftGreen promotion">
                <div className="  bg-green absolute  icon">
                    <PiPaperPlaneTilt />
                </div>
                <div className="">
                    <h3 className='text'>Free Shipping</h3>
                    <p className='text-slate-400 text-sm'>lorem Ipsum is simply dummy text of the printing and industry </p>
                </div>
            </div>
            <div className="bg-superSoftYellow promotion">
                <div className="bg-yellow absolute  icon">
                    <AiOutlineDashboard />
                </div>
                <div className="">
                    <h3 className='text'>14 Days Easy Return</h3>
                    <p className='text-slate-400 text-sm'>lorem Ipsum is simply dummy text of the printing and industry </p>
                </div>
            </div>
            <div className="bg-superSoftBlue promotion">
                <div className=" bg-darkBlue absolute  icon">
                    <SlEarphonesAlt />
                </div>
                <div className="">
                    <h3 className='text'>24/7 Customer Support</h3>
                    <p className='text-slate-400 text-sm'>lorem Ipsum is simply dummy text of the printing and industry </p>
                </div>
            </div>


        </div>
    )
}

export default Promotion