import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCart } from '../features/cart/cartSlice'
import icon from '../img/icon.webp'
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";
import { AiOutlineMenuFold } from "react-icons/ai";
import { clickOutSide } from '../hook/localstorage'
const Header = () => {


    const cartItems = useSelector(selectCart)

    const { isOpen, handleOpen, menuRef } = clickOutSide()


    useEffect(() => {
        const handleWindowResize = () => {
            if (window.innerWidth > 624) {
                menuRef.current.classList.remove('transition', 'duration-300', 'ease-in-out');
            } else {
                menuRef.current.classList.add('transition', 'duration-300', 'ease-in-out');
            }
        };
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    })

    const blackbg = <div className={`blackBG transition duration-300 ease-in-out ${isOpen ? '' : 'opacity-0 hidden'}`}></div>

    return (
        <nav className='flex items-center justify-between h-28 xs:relative xs:gap-6'>
            <Link to="/" className='xs:grow'>
                <div className="flex gap-1 items-center">
                    <div className="w-11 ">

                        <img src={icon} alt="" />
                    </div>
                    <p className='text-primary text-xl font-extrabold'>Kommerce</p>
                </div>

            </Link>
            <ul className={`
            flex items-center justify-center gap-10  xs:w-60
            xs:fixed xs:bg-white xs:flex-col xs:border xs:z-50 xs:left-0 xs:top-0 xs:h-full
            xs:text-left xs:justify-start xs:px-10 xs:py-16 xs:opacity-0 xs:-translate-x-96 
            transition duration-300 ease-in-out   ${isOpen ? "open" : null}`

            } ref={menuRef}>
                <li className='xs:w-full'>
                    <Link className='text-primary font-semibold' to='/'>Home</Link>
                </li>
                <li className='xs:w-full'>
                    <Link className='text-primary font-semibold' to='/products'>Product </Link>
                </li>
                <li className='xs:w-full'>
                    <Link className='text-primary font-semibold' to='/addProduct'>Add Product</Link>
                </li>
                <li className='relative xs:w-full '>
                    <Link className='text-primary font-semibold ' to='/summer'>Summer </Link>
                    <div className=" noti  absolute bg-yellow w-8 -right-7 -top-5 rounded-full h-noti flex items-center justify-center xs:right-0">
                        <p className='text-cartNumber text-white'>New</p>
                    </div>
                </li>
                <li className='xs:w-full'>
                    <Link className='text-primary font-semibold' to='/cart'>Cart </Link>
                </li>
            </ul>
            <div className="box-shadow  h-8 px-2 md:px-0 md:rounded-full flex items-center relative">
                <div className=" border-r-2 md:border-none border-slate-100  flex items-center md:hidden">
                    <Link className="text-lg text-primary w-6 flex justify-end ">
                        <IoSearchOutline />
                    </Link>
                    <input
                        type="search"
                        placeholder='Search Here...'
                        className='focus:outline-none placeholder:text-placeSearch placeholder:text-primary pl-2 w-24'

                    />
                </div>
                <div className="w-8 flex justify-end md:justify-center">
                    <Link to='/cart' className='text-xl text-primary'> <IoCartOutline /></Link>

                </div>
                <div className="absolute flex items-center justify-center -top-2 -right-2 text-white bg-orange rounded-full w-4 h-4 text-cartNumber">
                    <p>{cartItems.length}</p>
                </div>

            </div>
            <button onClick={handleOpen} className="hidden xs:block text-lg">
                <AiOutlineMenuFold />
            </button>


            {blackbg}
        </nav>
    )
}

export default Header