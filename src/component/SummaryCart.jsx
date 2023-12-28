import React, { useEffect } from 'react'
import Layout from './layout/Layout'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
    selectSummaryCart,
    selectCart,
    selectTotalCartSummary,
    getTotals, endProcess,
    selectTypeShipping
} from '../features/cart/cartSlice'

const SummaryCart = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const cartItems = useSelector(selectCart)
    const summaryCart = useSelector(selectSummaryCart)
    const TotalCart = useSelector(selectTotalCartSummary)
    const shippingType = useSelector(selectTypeShipping)

    
    const handleEndProcess = () => {
        dispatch(endProcess())
        navigate('/')
    }

    useEffect(() => {
        dispatch(getTotals())
    }, [dispatch, cartItems])

    const TotalCartFormat = TotalCart.toFixed(2)
    return (
        <Layout>
            <div className='p-6'>
                <h2 className='text-2xl font-bold text-center my-10'>Summary</h2>
                <div className="bg-slate-100 w-full p-6">
                    <table className='w-full'>
                        <thead>
                            <tr>
                                <th>
                                    Name
                                </th>
                                <th className='xs:px-3'>
                                    Price
                                </th>
                                <th className='xs:px-4'>
                                    QTY
                                </th>
                                <th>
                                    Total
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {summaryCart.map((cart, i) => {

                                const totalPrice = (cart.quantity * cart.price).toFixed(2);

                                return (
                                    <tr key={i} className='h-12 text-sm'>
                                        <td>{cart.title}</td>
                                        <td className='text-center'>{cart.price}</td>
                                        <td className='text-center'>{cart.quantity}</td>
                                        <td className='text-center'>{totalPrice} $</td>
                                    </tr>
                                )
                            })}
                            <tr>
                                <td >
                                    <p className='xs:hidden'>Shipping Cost</p>
                                </td>
                                <td></td>
                                <td></td>
                                <td className='text-center text-slate-400 xs:hidden'> {shippingType == 0 ? 'Free' : `${shippingType} $`}</td>
                            </tr>
                            <tr className=" h-16 xs:mt-6 xs:flex">
                                <td className='font-bold'>
                                    <p className='xs:hidden'>Total Price</p>
                                    <div className="hidden xs:flex flex-col gap-2">
                                        <p>Total Price</p>
                                        <p className='!font-normal underline underline-offset-2 hidden xs:block'>{TotalCartFormat} $</p>
                                    </div>
                                </td>
                                <td></td>
                                <td></td>
                                <td className='text-center underline underline-offset-2 xs:hidden'>{TotalCartFormat} $</td>
                            </tr>
                        </tbody>

                    </table>

                </div>
                <div className='mt-10  w-full flex justify-center'>
                    <button onClick={handleEndProcess} className='bg-orange text-white w-40 h-10 rounded hover:bg-slate-400' >
                        Quit
                    </button>
                </div>
            </div>

        </Layout>
    )
}

export default SummaryCart