import React from 'react'
import CommonTextDiv from '../CommonTextDiv'
import img from '../../../Assets/Images/grabBundleImg.png'
import { FaCheckCircle } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

const GrabBundleSect = () => {

    const list = [
        {
            id: 0,
            text: 'School Management SaaS (Flutter App + Laravel Admin)',
            worth: '49',
            cutPrice: '99',
        },
        {
            id: 1,
            text: 'Classified Marketplace (Flutter App + Next.js Website + Laravel Admin Panel)',
            worth: '29',
            cutPrice: '59',
        },
        {
            id: 2,
            text: 'Single Vendor Food Ordering App (Flutter App + Next.js Website + CodeIgniter Admin Panel)',
            worth: '17',
            cutPrice: '59',
        },
        {
            id: 3,
            text: 'Real Estate App + Web (Flutter App + Next.js Website + Laravel Admin Panel)',
            worth: '34',
            cutPrice: '69',
        },
        {
            id: 4,
            text: 'Multi-Vendor Handyman App + Web (Flutter App + Next.js Website + CodeIgniter Admin Panel)',
            worth: '34',
            cutPrice: '69',
        },
        {
            id: 5,
            text: 'Multi-Vendor Food Ordering App (Flutter App + CodeIgniter Admin Panel)',
            worth: '17',
            cutPrice: '59',
        },
        {
            id: 6,
            text: 'Trivia Quiz Game Website (Next.js Website + CodeIgniter Admin Panel)',
            worth: '19',
            cutPrice: '39',
        },
        {
            id: 7,
            text: 'Multi-Vendor eCommerce App (Flutter App + CodeIgniter Admin Panel)',
            worth: '34',
            cutPrice: '69',
        },
        {
            id: 8,
            text: 'Trivia Quiz Game App (Flutter App + CodeIgniter Admin Panel)',
            worth: '34',
            cutPrice: '69',
        },
        {
            id: 9,
            text: 'News App + Web (Flutter App + Next.js Website + Laravel Admin Panel)',
            worth: '17',
            cutPrice: '59',
        },
        {
            id: 10,
            text: 'Single-Vendor eCommerce App (Flutter App + CodeIgniter Admin Panel)',
            worth: '24',
            cutPrice: '49',
        },
    ];
    
    const totalWorth = list.reduce((total, item) => total + parseFloat(item.worth), 0);
    const totalCutPrice = list.reduce((total, item) => total + parseFloat(item.cutPrice), 0);
    const savings = totalCutPrice - totalWorth; 



    return (
        <section className='grabBundlesSect container commonMT' id='bundle'>
            <div className="row commonRowGap">
                {/* <div className="col-12">
                    <CommonTextDiv title={'Get Our 11 Highly Demanded Done For You App & Web Source Codes Together for an Unbeatable Deal'} desc={''} />
                </div> */}
                <div className="col-12">
                    <div className="card grabBundleCard commonMT">
                        <div className="upperDiv">
                            <div>
                                <Image src={img} height={0} width={0} alt='bundlesImg' />
                            </div>
                            <div>
                                <span className='mainTitle'>Check Out Everything You’ll Get When You
                                    Grab the Bundle Today!</span>
                            </div>
                        </div>

                        <div className="middleDiv">

                            {
                                list.map((item) => {
                                    return <div key={item.id} className='listDiv'>
                                        <div className='d-flex gap-2 gap-md-3 align-items-center listInnerDiv'>
                                            <span>
                                                <FaCheckCircle />
                                            </span>
                                            <span className='name'>{item.text}</span>
                                        </div>
                                        <div>
                                            <span className='price'>value : ${item.worth}</span>
                                            <span className='price cutPrice'>${item.cutPrice}</span>
                                        </div>
                                    </div>
                                })
                            }
                        </div>

                        <div className="bottomDiv">
                        <h3>Total Value : ${totalCutPrice}</h3>
                        <h3>Save : ${savings}</h3>
                        </div>

                        <div className="buyBtnDiv">

                            <div>
                                <Link href="https://1.envato.market/jrNoMa" target="_blank" className='ifBuyBtn'>If You Buy Now<span>${totalWorth}</span></Link>
                            </div>

                            {/* <CommonBtnComp /> */}
                        </div>



                    </div>
                </div>
            </div>
        </section>
    )
}

export default GrabBundleSect