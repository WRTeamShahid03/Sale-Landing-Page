import React from 'react'
import Newsletter from '../Newsletter'
// import AnimatedText from '../AnimatedText'
import dynamic from 'next/dynamic'
const AnimatedText = dynamic(() => import('../AnimatedText'), { ssr: false })

const Footer = () => {
    return (
        <>
            <footer>
                <Newsletter />
                <span className='cpyRight'>Copyright © 2024 WRTeam | Powered by WRTeam</span>

                <AnimatedText />
            </footer>
        </>
    )
}

export default Footer
