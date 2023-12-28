import React, { useState, useRef, useEffect } from 'react'
import { FaChevronRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import deal from '../../img/deals/deal.jpg'
import InTrax from '../../img/sponser/Intrax.png'
import AirBnb from '../../img/sponser/AirBnb.png'
import Amazon from '../../img/sponser/Amazon.png'
import Slack from '../../img/sponser/Slack.png'
import Spotify from '../../img/sponser/Spotify.png'
const Deal = () => {

    const [timeDays, setTimeDays] = useState('00')
    const [timeHours, setTimeHours] = useState('00')
    const [timeMinutes, setTimeMinutes] = useState('00')
    const [timeSeconds, setTimeSeconds] = useState('00')


    let interval = useRef();

    const startTimer = () => {
        const countdownDate = new Date('March 20, 2024 00:00:00').getTime()

        interval = setInterval(() => {
            const now = new Date().getTime()
            const distance = countdownDate - now

            const days = Math.floor(distance / (1000 * 60 * 60 * 24))
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)))
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
            const seconds = Math.floor((distance % (1000 * 60)) / 1000)


            if (distance < 0) {
                // stop timer
                clearInterval(interval.current)

            } else {
                // update timer
                setTimeDays(days);
                setTimeHours(hours);
                setTimeMinutes(minutes);
                setTimeSeconds(seconds);
            }

        }, 1000)
    }
    useEffect(() => {
        startTimer()
        return () => {
            clearInterval(interval.current)
        }
    }, [])


    return (
        <div>
            <div className="grid grid-cols-[1fr,400px] justify-between mt-24 sm:grid-cols-1 sm:gap-10">
                {/* left */}
                <div className="mt-12">
                    <h3 className='text-orange font-bold text-2xl'>
                        Deal Of <span className='text-primary'>This Month</span>
                    </h3>
                    <div className="flex items-center gap-4 text-orange mt-8">
                        <div className="time-stamp ">
                            <div className="wrap-text ">
                                <h5 className=''>{timeDays}</h5>
                                <p className=''>Days</p>
                            </div>
                        </div>
                        <div className="time-stamp ">
                            <div className="wrap-text ">
                                <h5 className=''>{timeHours}</h5>
                                <p className=''>Hours</p>
                            </div>
                        </div>
                        <div className="time-stamp ">
                            <div className="wrap-text ">
                                <h5 className=''>{timeMinutes}</h5>
                                <p className=''>Minutes</p>
                            </div>
                        </div>
                        <div className="time-stamp ">
                            <div className="wrap-text ">
                                <h5 className=''>{timeSeconds}</h5>
                                <p className=''>Seconds</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10">
                        <button className=' mr-auto text-xs flex items-center justify-center text-white h-9 gap-2 bg-orange w-28 rounded-full'>Shop Now<FaChevronRight /></button>
                    </div>
                </div>
                {/* right */}
                <div className="flex justify-end">

                    <img src={deal} alt="" className='clip-collections object-contain' />

                </div>
            </div>


            {/*  sponser */}

            <div className="overflow-hidden">
                <div className="grid grid-sponser !justify-between gap-y-16  items-center  mt-28">
                    <Link className="w-24 ">
                        <img src={InTrax} alt="" className='img-sponse' />
                    </Link>
                    <Link className="w-24">
                        <img src={Spotify} alt="" className='img-sponse grayscale-0 opacity-100' />
                    </Link>
                    <Link className="w-24">
                        <img src={Slack} alt="" className='img-sponse' />
                    </Link>
                    <Link className="w-24">
                        <img src={Amazon} alt="" className='img-sponse' />
                    </Link>
                    <Link className="w-24">
                        <img src={AirBnb} alt="" className='img-sponse' />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Deal