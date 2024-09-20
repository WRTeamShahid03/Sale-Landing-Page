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
            worth: '499'
        },
        {
            id: 1,
            text: 'Classified Marketplace (Flutter App + Next.js Website + Laravel Admin Panel)',
            worth: '399'
        },
        {
            id: 2,
            text: 'Single Vendor Food Ordering App (Flutter App + Next.js Website + CodeIgniter Admin Panel)',
            worth: '399'
        },
        {
            id: 3,
            text: 'Real Estate App + Web (Flutter App + Next.js Website + Laravel Admin Panel)',
            worth: '499'
        },
        {
            id: 4,
            text: 'Multi-Vendor Handyman App + Web (Flutter App + Next.js Website + CodeIgniter Admin Panel)',
            worth: '499'
        },
        {
            id: 5,
            text: 'Multi-Vendor Food Ordering App (Flutter App + CodeIgniter Admin Panel)',
            worth: '499'
        },
        {
            id: 6,
            text: 'Trivia Quiz Game Website (Next.js Website + CodeIgniter Admin Panel)',
            worth: '299'
        },
        {
            id: 7,
            text: 'Multi-Vendor eCommerce App (Flutter App + CodeIgniter Admin Panel)',
            worth: '499'
        },
        {
            id: 8,
            text: 'Trivia Quiz Game App (Flutter App + CodeIgniter Admin Panel)',
            worth: '299'
        },
        {
            id: 9,
            text: 'News App + Web (Flutter App + Next.js Website + Laravel Admin Panel)',
            worth: '399'
        },
        {
            id: 10,
            text: 'Single-Vendor eCommerce App (Flutter App + CodeIgniter Admin Panel)',
            worth: '499'
        },
        {
            id: 11,
            text: 'Lifetime Free Updates',
            worth: '999'
        },
        {
            id: 12,
            text: '30-Day Money Back Guarantee*',
            worth: '300'
        },
        {
            id: 13,
            text: 'Complete Documentation',
            worth: '300'
        },
        {
            id: 14,
            text: '30% Discount On Installation Service',
            worth: '400'
        },
        {
            id: 15,
            text: 'Prioritized Customer Support',
            worth: '500'
        },
        {
            id: 16,
            text: 'Error Free Code',
            worth: '500'
        }
    ];


    return (
        <section className='grabBundlesSect container commonMT'>
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
                                        <span className='price'>worth : ${item.worth}</span>
                                    </div>
                                })
                            }
                        </div>

                        <div className="bottomDiv">
                            <h3>Total Value : $7788</h3>
                            <h3>Normal Price : $699</h3>
                        </div>

                        <div className="buyBtnDiv">

                            <div>
                                <Link href="https://1.envato.market/jrNoMa"  target="_blank" className='ifBuyBtn'>If You Buy Now <span>$344</span></Link>
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