import React from 'react'
import { BsArrowRightCircle } from "react-icons/bs";
import ebroker from '../Assets/Images/products-logos/ebroker.png'
import eDemand from '../Assets/Images/products-logos/edemand.png'
import elite from '../Assets/Images/products-logos/elite.png'
import eshop from '../Assets/Images/products-logos/eshop.png'
import eshool from '../Assets/Images/products-logos/eSchool_Saas.png'
import erestro from '../Assets/Images/products-logos/erestro.png'
import news from '../Assets/Images/products-logos/news.png'
import egrocer from '../Assets/Images/products-logos/egrocer.png'
import primeWeb from '../Assets/Images/primeweb.svg'
import smartPro from '../Assets/Images/Smartkit pro.svg'
import eliteWeb from '../Assets/Images/elitequiz-web.svg'
import eRestroSingle from '../Assets/Images/products-logos/erestroSingleIcon1.svg'
import eshop1 from '../Assets/Images/eshop single app.svg'
import eshop2 from '../Assets/Images/eShop single Web.svg'
import eshop3 from '../Assets/Images/eShop s manager.svg'
import quizAndroid from '../Assets/Images/quizAndroid.svg'
import Link from 'next/link';

const Solution = () => {

    const cardData = [
        {
            id: 0,
            title: "eBroker",
            desc: "Real estate business solution",
            img: ebroker,
            link: "https://1.envato.market/oqe11O"
        },
        {
            id: 1,
            title: "eDemand",
            desc: "On-Demand service business solution",
            img: eDemand,
            link: "https://1.envato.market/KjKLxn"
        },
        {
            id: 2,
            title: "Elite Quiz App",
            desc: "Trivia quiz game",
            img: elite,
            link: 'https://1.envato.market/LXaGzo'
        },
        {
            id: 3,
            title: "eShop Multi-vendor",
            desc: "Multivendor e-commerce solution",
            img: eshop,
            link: "https://1.envato.market/R5PjZN"
        },
        {
            id: 4,
            title: "eSchool-Saas",
            desc: "School management solution",
            img: eshool,
            link: "https://1.envato.market/babzGx"
        },
        // {
        //     id: 5,
        //     title: "eRestro",
        //     desc: "Multi restaurant flutter app",
        //     img: erestro,
        //     link: "https://1.envato.market/QyPrNA"
        // },
        {
            id: 6,
            title: "News",
            desc: "News application + website",
            img: news,
            link: 'https://1.envato.market/rQ4323'
        },
        {
            id: 7,
            title: "eGrocer",
            desc: "Grocery business solution",
            img: egrocer,
            link: 'https://1.envato.market/DK0gQn'
        },
        // {
        //     id: 8,
        //     title: "Prime Web",
        //     desc: "App To Web Converter",
        //     img: primeWeb,
        //     link: 'https://1.envato.market/y2g3m2'
        // },
        // {
        //     id: 9,
        //     title: "Elite Quiz Web",
        //     desc: "Trivia quiz game",
        //     img: eliteWeb,
        //     link: 'https://1.envato.market/LXaGzo'
        // },
        {
            id: 10,
            title: "eRestro Single",
            desc: "Food Delivery Business",
            img: eRestroSingle,
            link: 'https://1.envato.market/3eRoDA'
        },
        // {
        //     id: 11,
        //     title: "Smart Kit Pro",
        //     desc: "Biggest UI Flutter kit",
        //     img: smartPro,
        //     link: 'https://1.envato.market/KjKLZx'
        // },
        // {
        //     id: 12,
        //     title: "eShop Single App",
        //     desc: "Single Vendor e-commerce Solution",
        //     img: eshop1,
        //     link: 'https://1.envato.market/VmaeNE'
        // },
        // {
        //     id: 13,
        //     title: "eShop Single Web",
        //     desc: "Single Vendor e-commerce Solution",
        //     img: eshop2,
        //     link: 'https://1.envato.market/QyPrb3'
        // },
        // {
        //     id: 13,
        //     title: "eShop Store Manager",
        //     desc: "Single Vendor e-commerce Solution",
        //     img: eshop3,
        //     link: 'https://1.envato.market/21kqdQ'
        // },
        // {
        //     id: 14,
        //     title: "Quiz Online Android Quiz Game + Admin Panel",
        //     desc: "Online Quiz App",
        //     img: quizAndroid,
        //     link: 'https://1.envato.market/NkBVLV'
        // },
    ]
    return (
        <>
            <section id="solution" className='commonMT'>
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div className="commonTexts">

                            <h2 className='commonHeadline'>Let End-to-End Solutions Brighten Your Development Adventure!</h2>
                            <span className='commonSpan'>Don&apos;t waste time and money on inefficient app development. Embrace excellence with our End-to-End Solutions, ensuring top-notch quality at an affordable price. Take charge and soar to success!
                                Choose wisely, choose us!</span>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div className="row">
                            {
                                cardData.map((e) => {
                                    return <div className="col-12 col-sm-6 col-md-6 col-lg-3" key={e.id}>
                                        <Link href={e.link} target='_blank'>

                                            <div className="card">
                                                {/* <div className="commonBorder"> */}
                                                    <div className="cardImg">
                                                        <img className="card-img-top" src={e.img.src} alt="Card image cap" />
                                                    </div>
                                                {/* </div> */}
                                                <div className="card-body">
                                                    <h5 className="card-title">{e.title}</h5>
                                                    <p className="card-text">{e.desc}</p>
                                                    <span className='price'>$49 <span className='cuttedPrice'>$59</span> </span>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                })
                            }

                            <div className="commonBorder">
                                <div className="solutionBtn">
                                    <Link href="https://1.envato.market/vNz3zy" target='_blank'>  <span className='btn'>More Products <BsArrowRightCircle /></span> </Link>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Solution
