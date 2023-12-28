import React from 'react'
import Layout from './layout/Layout'
import SummerImage from '../img/summer/summer.jpg'
import dec1 from '../img/summer/dec1.png'
import dec2 from '../img/summer/dec2.png'
import dec3 from '../img/summer/dec3.png'
import dec4 from '../img/summer/dec4.png'
import dec5 from '../img/summer/dec5.png'
import dec6 from '../img/summer/dec6.png'
import dec7 from '../img/summer/dec7.png'
import dec8 from '../img/summer/dec8.png'
import dec9 from '../img/summer/dec9.png'
import img1 from '../img/summer/dressSummer.jpg'
import img2 from '../img/summer/jewelrySummer.jpg'
import img3 from '../img/summer/summer.jpg'

const Summer = () => {

    const decSumer = (
        <div><img src={dec1} alt="" className='xs:hidden absolute z-30  w-16 dec-1' /></div>
    )
    const decSumer6 = (
        <div><img src={dec6} alt="" className='sm:hidden absolute z-30  w-28 dec-6' /></div>
    )
    const decSumer4 = (
        <div><img src={dec4} alt="" className='sm:hidden absolute   w-20 dec-4' /></div>
    )
    const decSumer5 = (
        <div><img src={dec5} alt="" className='sm:hidden absolute  z-30 w-12 dec-5' /></div>
    )
    const decSumer8 = (
        <div><img src={dec8} alt="" className='sm:hidden absolute  z-30 !opacity-40 w-36 dec-8' /></div>
    )
    return (
        <Layout>

            <div className='pb-40'>

                <div className="w-full bg-orange summer-gradient relative ">
                    {decSumer4}
                    {decSumer6}
                    {decSumer5}
                    {decSumer8}
                    <div className="eee relative  w-imgSummer xs:!w-3/4">
                        {decSumer}
                        <img src={SummerImage} alt="" className='object-cover w-full relative' />
                    </div>
                    <div className="summer-cover" />
                    <div className="text-right !w-2/4 absolute z-30  text-white summer-head-text transform  xs:!top-1/4 xs:right-10">
                        <h2 className=' text-4xl sm:text-2xl'>SUMMER POP</h2>
                        <p className="mt-4 text-lg sm:text-sm">
                            A platform where you can find everthing to fit attire
                            for summer From beautiful jewelry to clothed to light your mood
                        </p>
                        <button className='border border-white w-56 h-10 text-3xl mt-4 sm:text-lg xs:w-44'>READ MORE</button>
                    </div>

                </div>
                <div className="pt-28 text-center">
                    <h3 className='font-bold text-2xl'>WHO ARE WEE</h3>
                    <div className="mt-16">
                        <p className='font-semibold text-xl'>We know what you may need for competing your summer outfit.
                            We have all those fabrics you may want of the scorhing summer season.
                            So what are you waiting fo visti our website now and grab your favourites.

                        </p>
                    </div>
                </div>

                <div className=" !justify-center flex flex-wrap gap-x-12 gap-y-28 mt-40">
                    <div className="border-4 border-pink-500  !w-80 h-80">
                        <img src={img1} className='w-full h-full object-cover' alt="" />
                        <button className="!rounded-full border-2 w-full h-14 text-pink-500 mt-8 border-pink-500  ">DRESSES</button>
                    </div>
                    <div className="border-4 border-pink-500  !w-80 h-80">
                        <img src={img2} className='w-full h-full object-cover' alt="" />
                        <button className="!rounded-full border-2 w-full h-14 text-pink-500 mt-8 border-pink-500  ">JEWELRY</button>
                    </div>
                    <div className="border-4 border-pink-500  !w-80 h-80">
                        <img src={img3} className='w-full h-full object-cover' alt="" />
                        <button className="!rounded-full border-2 w-full h-14 text-pink-500 mt-8 border-pink-500  ">ACCESSORIES</button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Summer