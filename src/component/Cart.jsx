import React, { useEffect, useState } from 'react'
import CartExcerpt from './CartExcerpt'
import { useSelector, useDispatch } from 'react-redux'
import Layout from './layout/Layout'
import { Link, useNavigate } from 'react-router-dom'
import emptyCartImg from '../img/cartEmpty.jpg'
import {
    selectCart,
    addToCart,
    deleteItemFromCart,
    decreaseItemFromCart,
    clearCart,
    purchaseCart,
    getTotals,
    selectQuantityCart,
    selectTotalCart,
    shipingType,
    selectTypeShipping
} from '../features/cart/cartSlice'

const Cart = () => {

    const cartItem = useSelector(selectCart)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const TotalCart = useSelector(selectTotalCart)
    const TotalCartFormat = TotalCart.toFixed(2)

    const TotalQuantity = useSelector(selectQuantityCart)


    const shippingType = useSelector(selectTypeShipping)

    const [selectedShipping, setSelectedShipping] = useState('free');


    const selectPremium = () => {
        dispatch(shipingType(9.9))
        setSelectedShipping('cost')

    }
    const selectNormal = () => {
        dispatch(shipingType(0))
        setSelectedShipping('free')
    }


    useEffect(() => {
        dispatch(getTotals())

    }, [dispatch, cartItem, selectPremium, selectNormal, shippingType])


    const formatShippingType = shippingType >= 1 ? "$" + shippingType : "Free"


    const emptyCart = (
        <div className='flex justify-center items-center flex-col'>

            <img src={emptyCartImg} alt="" className='w-2/5' />
            <div className="text-center">
                <p className='text-slate-400 mb-9'>Their is no products you want?</p>
                <button className='uppercase text-white bg-orange w-40 h-9 rounded text-xs'>
                    <Link to="/products">
                        Go to Shop
                    </Link>
                </button>
            </div>

        </div>
    )


    const handlePurchase = () => {
        dispatch(purchaseCart())
        navigate('/cart/summary')
    }

    return (
        <Layout>
            {cartItem.length >= 1 ?
                <>
                    <CartExcerpt
                        dispatch={dispatch}
                        cartItem={cartItem}
                        addToCart={addToCart}
                        deleteItemFromCart={deleteItemFromCart}
                        decreaseItemFromCart={decreaseItemFromCart}
                    />
                    <div className="box-shadow-cart rounded-xl px-6 py-8">
                        < div className="flex justify-between  sm:flex-col">
                            {/* left */}
                            <div className="">
                                <h5 className='text-xl font-bold text-yellow mb-6'>Choose shipping mode:</h5>

                                <div className={` ${selectedShipping === 'free' ? 'shipActive' : ''}`}>
                                    <input
                                        type="radio"
                                        id="free"
                                        name="shiping"
                                        defaultChecked={selectedShipping === 'free'}
                                        className={`mr-3 `}
                                        onChange={selectNormal} />
                                    <label htmlFor="">Ship pickup (in 20 day) + Free</label>
                                </div>
                                <div className={` mt-3 ${selectedShipping === 'cost' ? 'shipActive' : ''}`}>
                                    <input
                                        type="radio"
                                        id="cost"
                                        name="shiping"
                                        className={`mr-3`}
                                        onChange={selectPremium} />
                                    <label htmlFor="">Ship pickup (Delivery 2-4 day) + $9.90</label>
                                </div>


                            </div>
                            {/* right */}
                            <div className="w-80 sm:mt-8 sm:w-full">
                                <div className="flex justify-between items-center mb-2">
                                    <p className='text-slate-400'>Total items</p>
                                    <p className='text-lg font-semibold'>{TotalQuantity}</p>
                                </div>
                                <div className="flex justify-between items-center mb-2">
                                    <p className='text-slate-400'>Shipping Cost is </p>
                                    <p className='text-lg font-semibold'>{formatShippingType}</p>
                                </div>
                                <div className="flex justify-between items-center mb-2">
                                    <p className='text-slate-400'>Summary Price</p>
                                    <p className='text-lg font-semibold'>{TotalCartFormat}</p>
                                </div>

                            </div>

                        </div>
                        <div className="mt-6 flex justify-between sm:flex-col">
                            <button
                                className='bg-slate-200 uppercase hover:brightness-95 w-40  sm:w-full h-12 text-white rounded text-sm tracking-widest '
                                onClick={() => { dispatch(clearCart()) }}>Clear Cart</button>
                            <button
                                className='bg-orange uppercase w-80 hover:brightness-95 h-12 sm:mt-6 sm:w-full text-white rounded text-sm tracking-widest '
                                onClick={handlePurchase}>Purchase</button>
                        </div>
                    </div>
                </>
                : emptyCart
            }


        </Layout >
    )
}

export default Cart