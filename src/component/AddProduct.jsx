import React, { useState } from 'react'
import { selectAllCategory } from "../features/category/categorySlice";
import { useSelector } from 'react-redux';
import Layout from './layout/Layout';
import { useNavigate } from 'react-router-dom';
import { useAddNewProductMutation } from '../features/product/productSlice';
const AddProduct = () => {


    const [addNewProduct, { isLoading }] = useAddNewProductMutation()

    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const [category, setCategory] = useState('')


    const navigate = useNavigate()

    const onTitleChange = e => setTitle(e.target.value)
    const onDescriptionChange = e => setDescription(e.target.value)
    const onCategoryChange = e => setCategory(e.target.value)

    const onPriceChange = (e) => {
        const inputPrice = e.target.value;

        const numericPrice = parseFloat(inputPrice);


        if (!isNaN(numericPrice)) {
            setPrice(numericPrice);
        } else {

            console.error('Invalid price input');
        }
    };

    const onImageChange = e => setImage(e.target.value)

    const categoryState = useSelector(selectAllCategory)

    const categoryStateOptions = categoryState.map(category => (
        <option key={category} value={category.id}>
            {category}
        </option>
    ))

    const canSave = [title, price, description, image, category].every(Boolean) && !isLoading;


    const onSavePostClicked = async () => {
        if (canSave) {
            try {
                await addNewProduct({ title, price, description, image, category }).unwrap()
                setTitle('')
                setPrice('')
                setDescription('')
                setImage('')
                setCategory('')
                navigate('/products')
            }
            catch (err) {
                console.error('Failed to add the Product', err);
            }
        }
    }


    return (
        <Layout>
            <h2 className="text-center font-bold  text-lg  uppercase text-primary">Add Product</h2>
            <form className="grid grid-cols-2 md:grid-cols-1 rounded gap-x-20 gap-y-8  p-10 mt-6">

                <div className="flex flex-col gap-4">
                    <label htmlFor="product-title" className="font-bold text-md text-orange">Product Title</label>
                    <input
                        className="h-6 border-b text-xs bg-transparent border-gray-800 px-3 focus:outline-none"
                        type="text"
                        id="product-title"
                        name="product-title"
                        value={title}
                        onChange={onTitleChange}
                    />
                </div>
                <div className="flex flex-col gap-4">
                    <label htmlFor="product-price" className="font-bold text-md text-orange">Product Price</label>
                    <input
                        className="h-6 border-b text-xs bg-transparent border-gray-800 px-3 focus:outline-none"
                        type="number"
                        id="product-price"
                        name="product-price"
                        value={price}
                        onChange={onPriceChange}
                    />
                </div>

                <div className="flex flex-col gap-6">
                    <label htmlFor="product-image" className="font-bold text-md text-orange">Product Image</label>
                    <input
                        className="h-6 border-b text-xs bg-transparent border-gray-800 px-3 focus:outline-none"
                        type="text"
                        id="product-image"
                        name="product-image"
                        value={image}
                        onChange={onImageChange}
                    />
                </div>
                <div className="flex flex-col gap-6">
                    <label htmlFor="product category" className="font-bold text-md text-orange" >Category</label>
                    <select
                        className="border border-gray-400 h-8 text-sm px-3 w-48 focus:outline-none "
                        id="product category"
                        value={category}
                        onChange={onCategoryChange}>
                        <option value=""></option>
                        {categoryStateOptions}
                    </select>
                </div>
                <div className="flex flex-col gap-6">
                    <label htmlFor="product description" className="font-bold text-md text-orange">Description</label>
                    <textarea
                        className="h-20 border text-xs md:h-28 bg-transparent rounded-lg py-2 border-gray-800 px-3 focus:outline-none"
                        name="product description"
                        id="product description"
                        value={description}
                        onChange={onDescriptionChange}
                    />
                </div>


                <button
                    className="bg-orange text-lg text-white h-10 rounded-sm disabled:bg-gray-200"
                    onClick={onSavePostClicked}
                    type="button"
                    disabled={!canSave}
                > {isLoading ? 'Adding Product...' : 'Add Product'}</button>
            </form>
        </Layout>
    )
}

export default AddProduct