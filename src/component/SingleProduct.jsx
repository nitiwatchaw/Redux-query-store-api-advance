import React from 'react'
import { useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import { useGetAllItemsShopQuery, } from '../features/product/productSlice'
import LikeProduct from './LikeProduct'
import { useDispatch } from 'react-redux'
import { addToCart, decreaseItemFromCart, selectCart } from '../features/cart/cartSlice'
import { useGetAllItemsQuery } from '../features/api/apiSlice'
import { LiaStarSolid } from 'react-icons/lia';
import Layout from './layout/Layout'


const SingleProduct = () => {

    const { productId } = useParams()
    const dispatch = useDispatch()

    const cartItem = useSelector(selectCart)


    const { product, isLoading } = useGetAllItemsShopQuery('getAllItemsShop', {
        selectFromResult: ({ data }) => ({
            product: data?.entities[productId],
        }),
    });

    const { data } = useGetAllItemsQuery()


    if (isLoading) return <p>Loading...</p>

    if (!product) {
        return (
            <section>
                <h2>Post not found!</h2>
            </section>
        )
    }

    const onAddCart = () => {
        dispatch(addToCart(product))

    }

    const relatedProducts = data?.filter((e) => e?.category === product?.category && e?.id !== product?.id);




    const productQty = cartItem.filter(item => item.id == productId)
        .map(item => <div key={item.id}>{item.quantity}</div>);

    const qty = productQty.length >= 1 ? productQty : 0


    return (
        <Layout>
            <div className="grid grid-cols-2 gap-6">

                <div className="order-2">
                    <div className="text-rose-500 tracking-widest text-xs mb-6">
                        <h3>RECENT PRODUCTS</h3>
                    </div>

                    <h4 className='text-3xl font-bold text-primary mb-9'>{product.title}</h4>

                    <div className="mb-6">
                        <h5 className='font-bold mb-2'>Details:</h5>
                        <p className='text-slate-400 text-sm'>{product.description}</p>
                    </div>
                    <div className="mb-6">
                        <h5 className='font-bold mb-2'>Category:</h5>
                        <p className='text-slate-400 text-sm'>{product.category}</p>
                    </div>

                    <div className="flex gap-6 mb-6">
                        <p className='font-bold text-primary'><span>$</span> {product.price}</p>
                        <p className='font-semi line-through text-gray-200'><span>$</span> {product.price}</p>
                    </div>

                    <div className="flex items-center gap-6 mb-10">
                        <div className="flex text-orange">
                            <LiaStarSolid />
                            <LiaStarSolid />
                            <LiaStarSolid />
                            <LiaStarSolid />
                            <LiaStarSolid />
                        </div>
                        <p className='text-xs font-semibold'>3 Reviews</p>
                    </div>

                    <div className="flex items-center gap-10 mb-10">
                        <p className='text-sm'>Quantity:</p>
                        <div className="flex items-center">
                            <button onClick={() => { dispatch(decreaseItemFromCart(product)) }} className='border w-10 h-10 text-xl leading-4'>-</button>
                            <div className='border w-12 h-10 text-xs flex items-center justify-center'>
                                {qty}
                            </div>
                            <button onClick={onAddCart} className='border w-10 h-10 text-xl leading-6'>+</button>
                        </div>
                    </div>

                    <div className="flex  gap-10">
                        <button className='uppercase text-orange border border-orange w-48 h-10 text-xs' onClick={onAddCart}>Add to Cart</button>
                        <Link to={`/products/edit/${product.id}`}
                            className='uppercase text-white border border-orange w-48 h-10 text-xs flex justify-center items-center bg-orange'
                        >Edit</Link>
                    </div>

                </div>

                <div className="flex items-center justify-center relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 bottom-3 text-2xl border border-gray-100 flex items-center rounded-md justify-center w-10 h-10">
                        <LikeProduct product={product} />
                    </div>
                    <img src={product.image} alt="" className='w-96 h-96 object-contain' />
                </div>
            </div>

            <div className="text-center mt-20">
                <h2 className='font-bold text-xl mb-10'>Relate product</h2>
                <div className="grid grid-cols-3 gap-6">
                    {
                        relatedProducts?.map(e => {
                            return (

                                <Link key={e.id} to={`/products/${e.id}`} className='border p-5  flex justify-between flex-col gap-6'>
                                    <div className="flex items-center justify-center h-full">
                                        <img src={e.image} alt="" width={200} />
                                    </div>
                                    <div className="text-left">
                                        <p className='mb-2'> {e.title}</p>
                                        <p className='text-xs'><span>$</span> {e.price}</p>
                                    </div>

                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </Layout >
    )
}

export default SingleProduct