import React from 'react'
import allProductBundleImg from '../Assets/Images/allProductBundle.jpg'
import Link from 'next/link'
const AllProducts = () => {
    return (
        <>
            <div className="allProductWrapper commonMT">
                <Link href='https://1.envato.market/R5NJe2' target='_blank'>
                    <img src={allProductBundleImg.src} alt="" />
                </Link>
            </div>
        </>
    )
}

export default AllProducts
