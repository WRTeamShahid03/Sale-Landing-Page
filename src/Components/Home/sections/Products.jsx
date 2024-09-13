import React, { useEffect, useState } from 'react'
import CommonTextDiv from '../CommonTextDiv'
import Image from 'next/image'

import img from '../../../Assets/Images/products-logos/ebroker.svg'
import ebroker from '../../../Assets/Images/products-logos/ebroker.svg'
import edemand from '../../../Assets/Images/products-logos/eDemand_app.svg'
import eliteApp from '../../../Assets/Images/products-logos/elitequiz_app.svg'
import eliteWeb from '../../../Assets/Images/products-logos/elitequiz_web.svg'
import eshopMulti from '../../../Assets/Images/products-logos/eShop multi app.svg'
import eschoolSaas from '../../../Assets/Images/products-logos/eShcool_saas_Version.svg'
import erestroMulti from '../../../Assets/Images/products-logos/erestro_multi_vendor.svg'
import news from '../../../Assets/Images/products-logos/news app.svg'
import egrocer from '../../../Assets/Images/products-logos/eGrocer.svg'
import primeWeb from '../../../Assets/Images/products-logos/primeweb.svg'
import erestroSingle from '../../../Assets/Images/products-logos/eRestro_single_vendor_app.svg'
import smartKit from '../../../Assets/Images/products-logos/Smartkit pro.svg'
import eshopSingleApp from '../../../Assets/Images/products-logos/eShop multi app.svg'
import eshopSingleWeb from '../../../Assets/Images/products-logos/eShop single web 1.svg'
import quizAndro from '../../../Assets/Images/products-logos/Online quiz android.svg'

import Link from 'next/link';
import { LuShoppingCart } from "react-icons/lu";
import { LuArrowUpCircle,LuArrowDownCircle } from "react-icons/lu";
import { HiOutlineArrowCircleUp } from "react-icons/hi";

const Products = () => {

    const [viewMore, setViewMore] = useState(false)

    const products = [
        {
            id: 0,
            title: "eBroker",
            desc: "Real estate business solution",
            img: ebroker,
            link: "https://1.envato.market/k0Ye23",
            price: '69',
            salePrice: '34'
        },
        {
            id: 1,
            title: "eDemand",
            desc: "On-Demand service business solution",
            img: edemand,
            link: "https://1.envato.market/q4YJ6j",
            price: '69',
            salePrice: '34'
        },
        {
            id: 2,
            title: "Elite Quiz App",
            desc: "Trivia quiz game",
            img: eliteApp,
            link: 'https://1.envato.market/Vm7E3a',
            price: '69',
            salePrice: '34'
        },
        {
            id: 3,
            title: "eShop Multi-vendor",
            desc: "Multivendor e-commerce solution",
            img: eshopMulti,
            link: "https://1.envato.market/Qy7odM",
            price: '69',
            salePrice: '34'
        },
        {
            id: 4,
            title: "eSchool-Saas",
            desc: "School management solution",
            img: eschoolSaas,
            // link: "https://1.envato.market/babzGx"
            link: "https://1.envato.market/9g0Rd0",
            price: '99',
            salePrice: '49'
        },
        {
            id: 5,
            title: "eRestro",
            desc: "Multi restaurant flutter app",
            img: erestroMulti,
            link: "https://1.envato.market/QyPrNA"
        },
        {
            id: 6,
            title: "News",
            desc: "News application + website",
            img: news,
            link: 'https://1.envato.market/rQYZN5',
            price: '59',
            salePrice: '29'
        },
        {
            id: 7,
            title: "eGrocer",
            desc: "Grocery business solution",
            img: egrocer,
            link: 'https://1.envato.market/jrYk6v',
            price: '69',
            salePrice: '34'
        },
        {
            id: 8,
            title: "Prime Web",
            desc: "App To Web Converter",
            img: primeWeb,
            link: 'https://1.envato.market/y2g3m2'
        },
        {
            id: 9,
            title: "Elite Quiz Web",
            desc: "Trivia quiz game",
            img: eliteWeb,
            link: 'https://1.envato.market/LXaGzo'
        },
        {
            id: 10,
            title: "eRestro Single",
            desc: "Food Delivery Business",
            img: erestroSingle,
            link: 'https://1.envato.market/5go609',
            price: '59',
            salePrice: '29'
        },
        {
            id: 11,
            title: "Smart Kit Pro",
            desc: "Biggest UI Flutter kit",
            img: smartKit,
            link: 'https://1.envato.market/KjKLZx'
        },
        {
            id: 12,
            title: "eShop Single App",
            desc: "Single Vendor e-commerce Solution",
            img: eshopSingleApp,
            link: 'https://1.envato.market/VmaeNE'
        },
        {
            id: 13,
            title: "eShop Single Web",
            desc: "Single Vendor e-commerce Solution",
            img: eshopSingleWeb,
            link: 'https://1.envato.market/QyPrb3'
        },
        {
            id: 13,
            title: "eShop Store Manager",
            desc: "Single Vendor e-commerce Solution",
            img: img,
            link: 'https://1.envato.market/21kqdQ'
        },
        {
            id: 14,
            title: "Quiz Online Android ",
            desc: "Online Quiz App",
            img: quizAndro,
            link: 'https://1.envato.market/NkBVLV'
        },
    ];

    useEffect(() => {

    }, [viewMore])


    return (

        <section className='productsSect mb-5'>
            <div className="container">
                <div className="row commonRowGap">
                    <div className="col-xl-6">
                        <CommonTextDiv blueText={'27 Awesome Products'} title={'Browse Through Our Collection of 27 Awesome Products Designed for Your Next Project!'} desc={`Find everything you need to make your project a success and get inspired along the way.`} />
                    </div>

                    <div className="col-xl-6">
                        <div className={`row commonRowGap cardRow ${viewMore ? 'viewMore' : 'viewLess'}`}>
                            {
                                products.map((item) => {
                                    return <div className="col-12 col-sm-6 col-lg-4" key={item.id}>
                                        <div className="card flexColumnCenter text-center justify-content-center align-items-center">
                                            <div>
                                                <Image src={item.img} height={0} width={0} alt='productImg' />
                                            </div>
                                            <div>
                                                <span className='name'>{item.title}</span>
                                            </div>
                                            <div>
                                                <span className='desc'>{item.desc}</span>
                                            </div>

                                            <Link href={item.link}>

                                                <button className='flexCenter gap-1 buyBtn'>
                                                    <span className='icon flexCenter'><LuShoppingCart /></span>
                                                    <span className='salePrice'>${item.salePrice}</span>
                                                    <span className='price'>${item.price}</span>
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                })
                            }

                        </div>
                        <div className="col-12 flexCenter mt-5">
                            {viewMore ?
                                <button className='viewAllBtn' onClick={() => setViewMore(false)}>View Less <LuArrowUpCircle /></button>
                                :
                                <button className='viewAllBtn' onClick={() => setViewMore(true)}>View All <LuArrowDownCircle /></button>
                            }
                        </div>

                    </div>

                </div>
            </div>

        </section>
    )
}

export default Products