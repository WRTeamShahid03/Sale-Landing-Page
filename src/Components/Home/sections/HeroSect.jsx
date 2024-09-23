'use client'
import React from 'react'
import CommonTextDiv from '../CommonTextDiv'
import Image from 'next/image'
import saleImg from '../../../Assets/Images/sale_banner.jpg'

const HeroSect = () => {
    return (
        <section className='heroSect commonMT'>
            <div className='container'>
                <div className="row commonRowGap">

                    <div className="col-12">
                        <div className='commonTextDiv flexColumnCenter'>
                            <p>
                                Attention App & Web Developer's
                            </p>
                            <h1>
                                BUILD APP & WEB <span>10X FASTER</span> WITH DONE FOR YOU APP & WEB SOURCE CODES AND <span>SAVE $999</span> IN <span>SUPER SEPTEMBER SALE</span>
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