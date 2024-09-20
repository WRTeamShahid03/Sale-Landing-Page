'use client'
import React from 'react'
import NewsLetter from '../Home/sections/NewsLetter'
import Link from 'next/link'


const Footer = () => {
    return (
        <>
            <footer className=''>
                <NewsLetter />
                {/* <div className='container otherText'>
                    <span className=''>This site is not a part of the Facebook website or Facebook Inc. Additionally, This site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of Meta, Inc.</span>
                </div> */}
                <div className='container cpyRightWrapper d-flex align-items-center justify-content-center'>
                    <span className='cpyRight'>copyright © 2024 WRTeam | Powered by WRTeam</span>
                    {/* <span className='linksDiv'>
                        <Link href='https://www.wrteam.in/terms-of-use/' title='Terms of Use' target='_blank'>Terms of Use</Link> | <Link href={'https://www.wrteam.in/privacy-policy/'} title='Privacy Policy' target='_blank'>Privacy Policy</Link> | <Link href={'https://www.wrteam.in/copyright-and-disclaimer/'} title='Copyright & Disclaimer' target='_blank'>Copyright & Disclaimer</Link> | <Link href='https://www.wrteam.in/refund-policy/' title='Refund Policy' target='_blank'>Refund Policy</Link>
                    </span> */}
                </div>
            </footer>
        </>
    )
}

export default Footer
