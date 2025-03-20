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
                            BLOOM THIS <span>SPRING!</span> 🌸<br />
                            FLAT <span>50%</span> Discount on Premium Source Codes!
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