'use client'
import React from 'react'
import CommonTextDiv from '../CommonTextDiv'
import Image from 'next/image'
import saleImg from '../../../Assets/Images/sale_banner.png'

const HeroSect = () => {
    return (
        <section className='heroSect commonMT'>
            <div className='container'>
                <div className="row commonRowGap">

                    <div className="col-12">
                        <div className='commonTextDiv flexColumnCenter'>
                            <p>
                                Ready - To - Use Application & Website With 50% Discount
                            </p>
                            <h1>
                                BLOOM THIS <span>SPRING!</span> 🌸
                                BUILD APP & WEB 10X FASTER WITH READY-TO-USE SOURCE CODES
                                <span> SAVE $999 IN MARCH MEGA SALE!</span>
                            </h1>
                        </div>
                    </div>

                    <div className="col-12 flexCenter">
                        <Image src={saleImg} height={0} width={0} alt='saleImg' style={{ borderRadius: '16px' }} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSect