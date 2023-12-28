import React from 'react'
import Hero from './Hero'
import Promotion from './Promotion'
import Collections from './Collections'
import Trending from './Trending'
import Deal from './Deal'
import Footer from './Footer'
import Layout from '../layout/Layout'
const Home = () => {
    return (
        <>
            <Layout>
                <Hero />
                <Promotion />
                <Collections />
            </Layout>

            <Trending />

            <Layout>
                <Deal />
                <Footer />
            </Layout>
        </>
    )
}

export default Home