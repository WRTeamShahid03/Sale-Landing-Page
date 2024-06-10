import React, { useState } from 'react'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

import happy from '../Assets/Images/Happy Clients.svg'
import lifetime from '../Assets/Images/lifetime.png'
import reconnet from '../Assets/Images/Reconecct 1.svg'
import buyOnce from '../Assets/Images/buyOnce.png'


const Counter = () => {

    const [counter, setCounter] = useState(false)

    return (
        <ScrollTrigger onEnter={() => setCounter(true)}>
            <div id="counter" className='container commonBorder commonMT'>
                <div className="countWrapper">

                    <div className="row">

                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="countCard">
                                <div className="fcardImg">
                                    <img src={lifetime.src} alt="" />
                                </div>
                                <div className="countContent">
                                    {counter && <span className='countNum'>Lifetime</span>}

                                    <span className='countText'>
                                        Lifetime Free Updates
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="countCard">
                                <div className="fcardImg">
                                    <img src={happy.src} alt="" />
                                </div>
                                <div className="countContent">
                                    {counter && <span className='countNum'><CountUp start={0} end={16} duration={2} delay={0} />k+</span>}

                                    <span className='countText'>
                                        Happy Clients
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="countCard">
                                <div className="fcardImg">
                                    <img src={buyOnce.src} alt="" />
                                </div>
                                <div className="countContent">
                                    {counter && <span className='countNum'>Buy Once</span>}
                                    <span className='countText'>
                                      Lifetime Free Updates
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="countCard">
                                <div className="fcardImg">
                                    <img src={reconnet.src} alt="" />
                                </div>
                                <div className="countContent">
                                    {counter && <span className='countNum'><CountUp start={0} end={94} duration={2} delay={0} />%</span>}
                                    <span className='countText'>
                                        Reconnect
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
