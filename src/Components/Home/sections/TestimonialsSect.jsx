import React from 'react'
import CommonTextDiv from '../CommonTextDiv'
import Image from 'next/image'
import user from '../../../Assets/Images/envato.png'
import { FaStar } from 'react-icons/fa'

const TestimonialsSect = () => {

    const data = [
        {
            id: 0,
            name: "Bronzemoontr",
            review: "One thing that has always impressed me is how consistently you create top-notch products on CodeCanyon! I've been following your work for over 5-6 years now, and every product you release is simply outstanding.",
            userImg: user,
            rating: "(4.5)",
            rateFor: 'For Code Quality'
        },
        {
            id: 1,
            name: "Awwsalah",
            review: "WRTeam best team to work with, with good quality services, i will recommended to everyone whom is interested to buy this type of applications.",
            userImg: user,
            rating: "(4.5)",
            rateFor: 'For Customer Support'
        },
        {
            id: 2,
            name: "Praneetha",
            review: "Excellent Support and very good team , the app is developed very very well and i must say a big thanks for the team who made everything easy and good, Thank you again for the work and support.",
            userImg: user,
            rating: "(4.5)",
            rateFor: 'For Customer Support'
        },
        {
            id: 3,
            name: "Hatalabdallah",
            review: "I really love your support team, you have done me well, i recommend any person for this 100%.",
            userImg: user,
            rating: "(5)",
            rateFor: 'For Customer Support'
        },
        {
            id: 4,
            name: "Tesfayedebebe",
            review: "Great customer support with quick responses. I'm thoroughly satisfied with their app and customer service. Keep up the good work!",
            userImg: user,
            rating: "(5)",
            rateFor: 'For Customer Support'
        },
        {
            id: 5,
            name: "Electrobox",
            review: "Very high-quality support that does its best to solve all problems, even after their working hours, everything else is also high-quality, recommendation for their products. A very high quality team.",
            userImg: user,
            rating: "(5)",
            rateFor: 'For Customer Support'
        },
    ];


    return (
        <section className='testimonialSect container commonMT'>
            <div className="row commonRowGap">
                <div className="col-12">
                    <CommonTextDiv blueText={'Real Feedback from Happy Customers'} title={'Here’s What People Are Saying – Real Feedback from Happy Customers'} desc={``} />
                </div>
                <div className="col-12">
                    <div className="row commonRowGap">
                        {
                            data.map((item) => {
                                return <div className="col-12 col-md-6 col-lg-4" key={item.id}>
                                    <div className="card">
                                        <div className="userDetailsWrapper">
                                            <div className='userInfo flexCenter gap-3'>
                                                <Image src={item.userImg} height={48} width={48} alt='user-Profile' />
                                                <div className='d-flex flex-column'>
                                                    <span>{item.name}</span>
                                                    <span>{item.rateFor}</span>
                                                </div>
                                            </div>
                                            <div className='ratings d-flex align-items-end justify-content-end gap-2'>
                                                <span><FaStar /></span>
                                                <span>{item.rating}</span>
                                            </div>
                                        </div>
                                        <div className='commentDiv'>
                                            <p>{item.review} </p>
                                        </div>
                                    </div>
                                </div>
                            })
                        }

                    </div>
                </div>
            </div>
        </section>
    )
}

export default TestimonialsSect