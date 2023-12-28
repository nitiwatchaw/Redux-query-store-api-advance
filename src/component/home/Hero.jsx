import React, { useState, useEffect } from 'react'
import line from '../../img/graphic-line.png'
import girl from '../../img/e-commerce-girl.png'
import { FaChevronRight } from "react-icons/fa6";
import visa from '../../img/visa.png';
import masterCard from '../../img/masterCard.png'
import paypal from '../../img/paypal.png'
import { FaCheck } from "react-icons/fa6";
import { BsShieldCheck } from "react-icons/bs";
import like from '../../img/customer rating/like.png'
import hearth from '../../img/customer rating/hearth.png'
import laught from '../../img/customer rating/laught.png'
import sad from '../../img/customer rating/sad.png'
import angry from '../../img/customer rating/angry.png'
import { paymentMethod } from '../../hook/localstorage';
const Hero = () => {

    //localstorage for active method 
    const { activeButton, handleClick } = paymentMethod();


    const isActive = <div className=" -top-2 -right-2 absolute bg-green text-white rounded-full w-4 h-4 text-xs flex items-center justify-center text-check">
        <FaCheck />
    </div>

    const decoration = <img src={line} alt="" className='w-20 absolute -left-28 -top-8 ' />
    const bgDecoration = <div className="gradientBG -z-10  absolute -left-16 top-0 w-44 h-44 rounded-full  " />
    const bgcircleBlue = <div className='absolute bg-blue w-12 h-12 rounded-full top-0 left-1/4 lg:left-7 ' />
    const bgGreen = <div className='absolute bg-green w-4 h-4 rounded-full !top-52 left-icon-green  lg:left-7' />
    const bgYellow = <div className='absolute bg-yellow w-5 h-5 rounded-full !top-40 right-icon-yellow  lg:right-7' />
    const bgSoftGreen = (
        <div className="absolute right-icon-green top-8 bg-white lg:right-7">
            <div className="box-shadow-text p-2">
                <p className='text-primary text-xs font-bold '>100% Secure Payment</p>
            </div>
            <div className=' absolute -top-4 -right-4 w-7 h-7 rounded-full  bg-softGreenicon  flex items-center justify-center' >
                <BsShieldCheck className='text-white text-xs' />
            </div>
        </div>
    )

    const signRate = (
        <div className='bg-white border border-1 absolute top-5 left-sign-rate  w-36 p-3 h-24 rounded-lg lg:left-9 xs:left-0 xs:top-16'>
            <p className='text-xs font-bold text-primary'>Customer Ratings</p>
            <div className="mt-2 flex flex-col gap-2">
                <div className=" bg-slate-100 w-full h-1 rounded-full" />
                <div className=" bg-slate-100 w-16 h-1 rounded-full" />
            </div>
            <div className="flex items-center justify-between mt-2">
                <img src={like} alt="" className='w-5 h-5 object-contain' />
                <img src={hearth} alt="" className='w-7 h-7 object-contain' />
                <img src={laught} alt="" className='w-5 h-5 object-contain' />
                <img src={sad} alt="" className='w-5 h-5 object-contain' />
                <img src={angry} alt="" className='w-5 h-5 object-contain' />
            </div>
        </div>
    )

    return (
        <div className='relative mt-14 '>
            {decoration}
            {bgDecoration}
            {/* left */}
            <div className="grid grid-cols-[450px,1fr] justify-between sm:grid-cols-1">
                <div className="flex flex-col mt-16 sm:order-2">
                    <h3 className='text-orange font-semibold text-sm mb-1' >Women's Summer Fashion</h3>
                    <h2 className='font-bold leading-tight text-5xl text-primary mb-4'>2021 Collections For Women</h2>
                    <p className='text-sm text-slate-400  leading-relaxed   mb-6'>Phasellus vel elit efficitur, gravida libero sit amet, scelerisque mauris.
                        Vivamus ornare augue lorem at vulputate.</p>
                    <button className='text-sm flex items-center justify-center text-white h-10 gap-2 bg-orange w-32 rounded-full'>Shop Now <FaChevronRight /></button>

                    <div className="mt-14">
                        <p className='font-bold text-primary'>Easy Payment Method</p>
                        <div className="flex gap-6 mt-6">
                            <button
                                onClick={() => handleClick('visa')}
                                className={`payment-icon relative  ${activeButton === 'visa' ? 'active' : null}`}>
                                {activeButton === 'visa' ? isActive : null}
                                <img src={visa} alt="" className='w-full h-full object-contain ' />
                            </button>
                            <button
                                onClick={() => handleClick('masterCard')}
                                className={`payment-icon relative ${activeButton === 'masterCard' ? 'active' : null}`}>
                                {activeButton === 'masterCard' ? isActive : null}
                                <img src={masterCard} alt="" className='w-full h-full object-contain ' />
                            </button>
                            <button
                                onClick={() => handleClick('paypal')}
                                className={`payment-icon relative ${activeButton === 'paypal' ? 'active' : null}`}>
                                {activeButton === 'paypal' ? isActive : null}
                                <img src={paypal} alt="" className='w-full h-full object-contain ' />
                            </button>
                        </div>

                    </div>
                </div>
                {/* right */}
                <div className=" relative flex items-end">
                    {bgcircleBlue}
                    {bgGreen}
                    {bgYellow}
                    {bgSoftGreen}
                    {signRate}
                    <div className="bg-hero items-end xs:mt-40">
                        <div className="bg-content" />
                        <img src={girl} alt="" className=' max-w-xl w-full lg:!w-96  ml-48 lg:ml-0 object-contain ' />
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Hero