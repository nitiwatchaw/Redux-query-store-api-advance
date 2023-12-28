import React from 'react'

const Layout = ({ children }) => {
    return (
        <div className='max-w-layout mx-auto'>
            <div className="px-28 pb-8 md:px-6">
                {children}
            </div>
        </div>
    )
}

export default Layout