import Image from 'next/image'
import React from 'react'
import img1 from '../../../Assets/Images/buyingImg1.webp'
import img2 from '../../../Assets/Images/buyingImg2.webp'
import checkIcon from '../../../Assets/Images/check-mark.svg'
import { useRouter } from 'next/router'

const BuyingBundleSect = () => {
    const router = useRouter()

    const handleScroll = (e, sectionId) => {
        e.preventDefault()
        const element = document.querySelector(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
            // Update URL without reload
            window.history.pushState({}, '', sectionId)
        }
    }

    const cardsData = [
        {
            id: 0,
            title: 'Buying Bundle',
            img: img1,
            link: '#bundle',
            list: [
                {
                    id: 0,
                    list: '11 Premium Source Codes',
                },
                {
                    id: 1,
                    list: '10% Discount on Installation Services',
                },
                {
                    id: 2,
                    list: 'Prioritised Support',
                },
                {
                    id: 3,
                    list: 'Save $440 on Installation Services',
                },
            ]
        },
        {
            id: 1,
            title: 'Buying Code individually',
            img: img2,
            link: '#products',
            list: [
                {
                    id: 0,
                    list: 'Select From 21 Products',
                },
                {
                    id: 1,
                    list: 'No Installation Discount',
                },
                {
                    id: 2,
                    list: 'Normal Support',
                },
                {
                    id: 3,
                    list: 'No Saving on Installation Services',
                },
            ]
        },
    ]

    return (
        <section className='buyingBundlesSect mb-5'>
            <div className="container">
                <div className="row">
                    {cardsData.map((data) => (
                        <div className="col-lg-6" key={data.id}>
                            <div className="buyingCard">
                                <div className='titleWrapper'>
                                    <h3 className='title'>{data.title}</h3>
                                </div>
                                <div className='d-flex align-items-center justify-content-center'>
                                    <Image src={data.img} alt='img' width={0} height={0} className='buyingImg'/>
                                </div>
                                <div className='listWrapper'>
                                    {data.list.map((item) => (
                                        <div className='d-flex align-items-center gap-3' key={item.id}>
                                            <span>
                                                <Image src={checkIcon} alt='checkIcon' className='checkIcon' width={0} height={0} />
                                            </span>
                                            <span className='list'>{item.list}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className='btnWrapper w-full'>
                                    <a
                                        href={data.link}
                                        onClick={(e) => handleScroll(e, data.link)}
                                        className='browseBtn w-full'
                                    >
                                        {data.title === 'Buying Bundle' ? 'Get Bundle Now!' : 'Browse Products'}
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default BuyingBundleSect