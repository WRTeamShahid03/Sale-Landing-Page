import React, { useState } from 'react'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

import img1 from '../../../Assets/Images/counterImg1.png'
import img2 from '../../../Assets/Images/counterImg2.png'
import img3 from '../../../Assets/Images/counterImg3.png'
import img4 from '../../../Assets/Images/counterImg4.png'


const Counter = () => {

    const [counter, setCounter] = useState(false)

    return (
        <ScrollTrigger onEnter={() => setCounter(true)}>
            <div id="counter" className='container commonBorder commonMT'>
                <div className="countWrapper">

                    <div className="row">

                        <div className="col-6 col-md-6 col-lg-3">
                            <div className="countCard">
                                <div className="fcardImg">
                                    <img src={img1.src} alt="" />
                                </div>
                                <div className="countContent">
                                    {counter && <span className='countNum'>+<CountUp start={0} end={1990} duration={2} delay={0} /></span>}

                                    <span className='countText'>
                                        Ratings
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="col-6 col-md-6 col-lg-3">
                            <div className="countCard">
                                <div className="fcardImg">
                                    <img src={img2.src} alt="" />
                                </div>
                                <div className="countContent">
                                    {counter && <span className='countNum'>+<CountUp start={0} end={18000} duration={2} delay={0} /></span>}

                                    <span className='countText'>
                                      Sales
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="col-6 col-md-6 col-lg-3">
                            <div className="countCard">
                                <div className="fcardImg">
                                    <img src={img3.src} alt="" />
                                </div>
                                <div className="countContent">
                                    {counter && <span className='countNum'>+<CountUp start={0} end={25} duration={2} delay={0} /></span>}
                                    <span className='countText'>
                                    Products
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="col-6 col-md-6 col-lg-3">
                            <div className="countCard">
                                <div className="fcardImg">
                                    <img src={img4.src} alt="" />
                                </div>
                                <div className="countContent">
                                    {counter && <span className='countNum'>+<CountUp start={0} end={15} duration={2} delay={0} />K</span>}
                                    <span className='countText'>
                                        Happy Client
                                    </span>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </ScrollTrigger>
    )
}

export default Counter
