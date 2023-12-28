import React from 'react'
import { Link } from 'react-router-dom';
const CartExcerpt = (
    { dispatch,
        cartItem,
        addToCart,
        deleteItemFromCart,
        decreaseItemFromCart
    }) => {




    return (
        <>
            <h2 className='text-2xl text-primary font-semibold mt-6'>My Cart <span className='text-orange'> {cartItem.length} Products</span>  </h2>
            <div className="mx-auto my-10 grid gap-12">
                <table className='bg-gray-50 ' >
                    <thead className='text-center border-b-4 border-primary h-20 text-sm text-primary'>
                        <tr className='uppercase'>
                            <th className='sm:hidden'></th>
                            <th className='text-left sm:text-center'>Product</th>
                            <th  >Price</th>
                            <th className='sm:px-10'>QTY</th>
                            <th>Total</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            cartItem.map(cart => {
                                const totalPrice = (cart.quantity * cart.price).toFixed(2);
                                return (

                                    <tr className='h-48 md:h-60' key={cart.id}>
                                        <td className='sm:hidden'>
                                            <Link to={`/products/${cart.id}`}>
                                                <div className="w-28 h-28">
                                                    <img src={cart.image} alt="" className='w-full object-contain h-full' />
                                                </div>
                                            </Link>
                                        </td>
                                        <td className=' sm:flex sm:flex-col sm:justify-between gap-8 sm:items-center'>
                                            <div className="w-28 h-28 sm:h-full hidden sm:block">
                                                <img src={cart.image} alt="" className='w-full object-contain h-full' />
                                            </div>
                                            <Link to={`/products/${cart.id}`}>
                                                <p className='text-sm'>{cart.title}</p>
                                            </Link>
                                        </td>
                                        <td className=' text-center'>
                                            <p><span>$</span> {cart.price}</p>
                                        </td>
                                        <td>
                                            <div className="">
                                                <div className="flex items-center justify-center gap-2 md:flex-col">
                                                    <button
                                                        className='bg-slate-100 w-10 h-10 '
                                                        onClick={() => { dispatch(decreaseItemFromCart(cart)) }}>-
                                                    </button>
                                                    <p className='bg-orange text-sm text-white w-10 h-10 flex items-center justify-center border border-slate-300'>{cart.quantity}</p>
                                                    <button
                                                        className='bg-slate-100 w-10 h-10 '
                                                        onClick={() => { dispatch(addToCart(cart)) }}>+
                                                    </button>
                                                    <div className="p-6 items-center justify-center md:flex hidden md:p-0">
                                                        <button
                                                            className='bg-slate-300 w-10 h-10 text-white'
                                                            onClick={() => { dispatch(deleteItemFromCart(cart)) }}>X</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className='text-center font-semibold'>
                                            <p> <span>$</span> {totalPrice}</p>
                                        </td>
                                        <td>
                                            <div className="p-6 flex items-center justify-center md:hidden">
                                                <button
                                                    className='bg-slate-300 w-10 h-10 text-white'
                                                    onClick={() => { dispatch(deleteItemFromCart(cart)) }}>X</button>
                                            </div>
                                        </td>


                                    </tr>

                                )

                            })
                        }

                    </tbody>


                </table>
            </div>
        </>
    )
}

export default CartExcerpt