
import './App.css'
import ShopPage from './component/ShopPage'
import Hero from './component/home/Hero'
import Header from './component/Header'
import AddProduct from './component/AddProduct'
import SingleProduct from './component/SingleProduct'
import EditProduct from './component/EditProduct'
import Cart from './component/Cart'
import Jewelery from './component/categoryProduct/jewery/Jewelery'
import Electronics from './component/categoryProduct/electronics/Electronics'
import MenCloth from './component/categoryProduct/men-cloth/MenCloth'
import WomenCloth from './component/categoryProduct/women-cloth/WomenCloth'
import AllProduct from './component/categoryProduct/all/AllProduct'
import { Route, Routes, Navigate } from 'react-router-dom'
import Layout from './component/layout/Layout'
import Home from './component/home/Home'
import Summer from './component/Summer'
import LikeProduct from './component/categoryProduct/like/LikeProduct'
import SummaryCart from './component/SummaryCart'
function App() {


  return (
    <>
      <Layout >

        <Header />

      </Layout>

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/summer' element={<Summer />} />

        <Route path='/products' element={<ShopPage />} />


        <Route path='/products/all' element={<AllProduct />} />
        <Route path='/products/jewelery' element={<Jewelery />} />
        <Route path='/products/electronics' element={<Electronics />} />
        <Route path='/products/men-clothing' element={<MenCloth />} />
        <Route path='/products/women-clothing' element={<WomenCloth />} />
        <Route path='/products/like' element={<LikeProduct />} />

        <Route path='/addProduct' element={<AddProduct />} />
        <Route path='/products/:productId' element={<SingleProduct />} />
        <Route path='/products/edit/:productId' element={<EditProduct />} />

        <Route path='/cart' element={<Cart />} />
        <Route path='/cart/summary' element={<SummaryCart />} />
        <Route path='*' element={<Navigate to='/' replace />}></Route>

      </Routes>


    </>
  )
}

export default App
