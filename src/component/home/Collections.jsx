import React from 'react'
import { FaChevronRight } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import hotCollection from '../../img/collection/hot-collections.png'
import sunglass from '../../img/collection/sunglass-collections.jpg'
import shoe from '../../img/collection/shoe-collections.jpeg'
import makeUp from '../../img/collection/makeUp-collections.jpeg'
const Collections = () => {
    return (
        <div className='mt-32 -mb-32 sm:mb-9'>

            {/* section1 */}
            <div className="flex w-full justify-between xs:flex-col-reverse xs:gap-16">
                <div className="">
                    <div className=" flex flex-col  items-center relative">
                        <div className=' bg-hot-collection' />
                        <img src={hotCollection} alt="" className='mr-7 mt-3 w-hotCollection object-contain  h-hotCollection' />
                    </div>
                    <div className="text-center mt-5  ">
                        <h4 className='collection-header'>Women's Hot Collections</h4>
                        <button className='explore-button'>
                            Explore Now <FaArrowRight />
                        </button>
                    </div>
                </div>
                <div className="text-right ml-auto w-96 xs:w-auto">
                    <h3 className='font-extrabold text-black text-2xl  mb-3'>
                        New Collections of <span className='text-orange'>Komerce</span>
                    </h3>
                    <p className='text-slate-400 text-sm leading-relaxed mb-6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Fuga quasi odio facere earum harum! Odit quisquam quasi,
                        voluptates repudiandae similique</p>
                    <div className="">
                        <button className=' ml-auto text-sm flex items-center justify-center text-white h-9 gap-2 bg-orange w-32 rounded-full'>New Collections<FaChevronRight /></button>
                    </div>
                </div>
            </div>


            {/* section2 */}
            <div className="-translate-y-48 relative z-40 sm:translate-y-0 xs:mt-16">
                <div className="flex justify-end ">
                    <div className="flex flex-col">
                        <img src={sunglass} alt="" className='w-80 object-contain clip-collections' />
                        <div className="text-center mt-5  ">
                            <h4 className='collection-header'>Sunglasses Collections</h4>
                            <button className='explore-button'>
                                Explore Now <FaArrowRight />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* section3 */}
            <div className="-translate-y-60 sm:translate-y-0 xs:mt-16">
                <div className="flex  w-full justify-between items-end xs:flex-col xs:gap-16 ">
                    <div className="flex flex-col items-center">
                        <img src={shoe} alt="" className='w-80 object-contain clip-collections' />
                        <div className="text-center mt-5  ">
                            <h4 className='collection-header'>Sunglasses Collections</h4>
                            <button className='explore-button'>
                                Explore Now <FaArrowRight />
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <div className="flex flex-col">
                            <img src={makeUp} alt="" className='w-80 object-contain clip-collections' />
                            <div className="text-center mt-5  ">
                                <h4 className='collection-header'>Sunglasses Collections</h4>
                                <button className='explore-button'>
                                    Explore Now <FaArrowRight />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Collections