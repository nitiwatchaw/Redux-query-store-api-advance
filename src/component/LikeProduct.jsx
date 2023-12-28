import React from 'react';
import { useAddLikeMutation } from '../features/product/productSlice';
import { FcLikePlaceholder } from "react-icons/fc";
import { FcLike } from "react-icons/fc";
const LikeProduct = ({ product }) => {
    const [addLike] = useAddLikeMutation();

    const handleClick = () => {
        // Toggle the like status when the button is clicked
        addLike({ productId: product.id, like: !product.like });

    };


    return (
        <button onClick={handleClick}>
            {product?.like ? <FcLike /> : <FcLikePlaceholder />}
        </button>
    );
};

export default LikeProduct;