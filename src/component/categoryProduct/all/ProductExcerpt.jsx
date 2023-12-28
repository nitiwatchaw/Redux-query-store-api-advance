import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useGetAllItemsShopQuery } from '../../../features/product/productSlice';
import LikeProduct from '../../LikeProduct';
import { LiaStarSolid } from 'react-icons/lia';
import { BsCart3 } from "react-icons/bs";
const ProductExcerpt = ({ productId }) => {



    const { product, isLoading } = useGetAllItemsShopQuery('getAllItemsShop', {
        selectFromResult: ({ data }) => ({
            product: data?.entities[productId],
        }),
    });

    return (
        <>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <div key={product?.id} className='!w-full relative pt-5 p-2 '>
                    <div className="absolute z-10 top-0">
                        <LikeProduct product={product}/>
                    </div>
                    <Link className="flex justify-center">
                        <img src={product?.image} alt="" className='w-40 h-40 object-contain ' />
                    </Link>
                    <div className="mt-3 flex items-center gap-4 bg-slate-100 p-2">
                        <div className="flex flex-col justify-between grow gap-2">
                            <p className='text-primary font-semibold text-sm'>{product?.title}</p>
                            <div className="flex items-center gap-6">
                                <p className='text-slate-500 text-xs'><span>$</span> {product?.price}</p>
                                <div className="flex text-yellow">
                                    <LiaStarSolid />
                                    <LiaStarSolid />
                                    <LiaStarSolid />
                                    <LiaStarSolid />
                                    <LiaStarSolid />
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <Link to={`/products/${product?.id}`} className='text-white bg-orange text-md w-10 h-10 flex items-center justify-center'><BsCart3 /></Link>
                        </div>
                    </div>

                </div>
            )}
        </>
    );
};

export default ProductExcerpt;