import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectAllCategory } from "../features/category/categorySlice";
import { useParams, useNavigate } from 'react-router-dom'
import Layout from './layout/Layout';
import { useDeleteProductMutation, useGetAllItemsShopQuery, useUpdateProductMutation } from '../features/product/productSlice'
const EditProduct = () => {

    const { productId } = useParams()
    const navigate = useNavigate()

    const [updateData, setUpdateData] = useState(false)

    const { product, isLoading, isSuccess } = useGetAllItemsShopQuery('getAllItemsShop', {
        selectFromResult: ({ data, isLoading, isSuccess }) => ({
            product: data?.entities[productId], isLoading, isSuccess
        }),
    });

    const [updateProduct] = useUpdateProductMutation()


    const [deletePost] = useDeleteProductMutation()

    const onDeleteProduct = async () => {
        try {
            await deletePost({ id: product?.id }).unwrap()
            navigate('/products')

        } catch (err) {
            console.error('Failed to delete the product', err)
        }
    }




    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const [category, setCategory] = useState('')

    const canSave = [title, price, description, image, category].every(Boolean) && !isLoading;

    useEffect(() => {
        if (isSuccess) {
            setTitle(product?.title)
            setPrice(product?.price)
            setDescription(product?.description)
            setImage(product?.image)
            setCategory(product?.category)
        }

    }, [isSuccess,
        product?.title,
        product?.price,
        product?.description,
        product?.image,
        product?.category])


    const onTitleChange = e => { setTitle(e.target.value); setUpdateData(true) }
    const onDescriptionChange = e => { setDescription(e.target.value); setUpdateData(true) }
    const onCategoryChange = e => { setCategory(e.target.value); setUpdateData(true) }


    const onPriceChange = (e) => {
        const inputPrice = e.target.value;
        setUpdateData(true)
        const numericPrice = parseFloat(inputPrice);


        if (!isNaN(numericPrice)) {
            setPrice(numericPrice);
        } else {
            console.error('Invalid price input');
        }
    };

    const onImageChange = e => { setImage(e.target.value); setUpdateData(true) }
    const categoryState = useSelector(selectAllCategory)





    const categoryStateOptions = categoryState.map(category => (
        <option key={category} value={category.id}>
            {category}
        </option>
    ))

    const onUpdateCLick = async () => {
        try {
            await updateProduct({ id: product?.id, title, price, image, description, category })
            alert('product updated')
            setUpdateData(false)
            navigate(`/products/${productId}`)
        }
        catch (err) {
            console.error('Failed to update the product', err)
        }
    }






    return (
        <Layout>
            <h2 className="text-center text-2xl ">Edit Product</h2>
            <form className="grid grid-cols-2 md:grid-cols-1 rounded gap-x-20 gap-y-8  p-10 mt-6">


                <div className="flex flex-col gap-6">
                    <label htmlFor="title" className="font-bold text-md text-orange">Product Title:</label>
                    <input
                        className="h-6 border-b text-xs bg-transparent border-gray-800 px-3 focus:outline-none"
                        type="text"
                        id="postTitle"
                        name="postTitle"
                        value={title}
                        onChange={onTitleChange}
                    />
                </div>
                <div className="flex flex-col gap-6">
                    <label htmlFor="title" className="font-bold text-md text-orange">Product Price:</label>
                    <input
                        className="h-6 border-b text-xs bg-transparent border-gray-800 px-3 focus:outline-none"
                        type="number"
                        id="postTitle"
                        name="postTitle"
                        value={price}
                        onChange={onPriceChange}
                    />
                </div>
                <div className="flex flex-col gap-6">
                    <label htmlFor="title" className="font-bold text-md text-orange">Product Image:</label>
                    <input
                        className="h-6 border-b text-xs bg-transparent border-gray-800 px-3 focus:outline-none"
                        type="text"
                        id="postTitle"
                        name="postTitle"
                        value={image}
                        onChange={onImageChange}
                    />
                </div>
                <div className="flex flex-col gap-6">
                    <label htmlFor="postAuthor" className="font-bold text-lg" >Category:</label>
                    <select
                        className="border border-gray-400 h-8 text-sm px-3 w-48 focus:outline-none "
                        id="postAuthor"
                        value={category}
                        onChange={onCategoryChange}>
                        <option value=""></option>
                        {categoryStateOptions}
                    </select>
                </div>
                <div className="flex flex-col gap-6">
                    <label htmlFor="postContent" className="font-bold text-md text-orange">Description:</label>
                    <textarea
                        className="h-20 border text-xs md:h-28 bg-transparent rounded-lg py-2 border-gray-800 px-3 focus:outline-none"
                        name="postContent"
                        id="postContent"
                        value={description}
                        onChange={onDescriptionChange}
                    />
                </div>




                <button
                    className="bg-orange text-lg text-white h-10 rounded-sm disabled:bg-gray-200"
                    type="button"
                    onClick={onUpdateCLick}
                    disabled={!updateData || !canSave}
                > {isLoading ? 'Updating...' : 'Update'}
                </button>
                <button
                    type="button"
                    className="bg-orange text-lg text-white h-10 rounded-sm disabled:bg-gray-200"
                    onClick={onDeleteProduct}>Delete</button>
            </form>




        </Layout>
    )
}

export default EditProduct