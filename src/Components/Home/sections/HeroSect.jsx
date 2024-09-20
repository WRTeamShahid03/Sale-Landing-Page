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
                        <CommonTextDiv heroSect={true} blueText={'SEPTEMBER SUPER SALE'} title={'BUILD APP & WEB 10X FASTER WITH DONE FOR YOU APP & WEB SOURCE CODES AND SAVE $999 IN SEPTEMBER SUPER SALE'} desc={'Attention App & Web Developer’s'} />
                    </div>

                    <div className="col-12 flexCenter">
                        <Image src={saleImg} height={0} width={0} alt='saleImg' style={{borderRadius:'16px'}}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSect