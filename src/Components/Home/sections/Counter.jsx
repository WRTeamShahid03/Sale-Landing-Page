import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

import img1 from "../../../Assets/Images/counterImg1.svg";
import img2 from "../../../Assets/Images/counterImg2.svg";
import img3 from "../../../Assets/Images/counterImg3.svg";
import img4 from "../../../Assets/Images/counterImg4.svg";
import img5 from "../../../Assets/Images/counterImg5.svg";
import img6 from "../../../Assets/Images/counterImg6.svg";

const Counter = () => {
  const [counter, setCounter] = useState(false);

  return (
    <ScrollTrigger onEnter={() => setCounter(true)}>
      <div id="counter" className="container commonBorder commonMT">
        <div className="countWrapper">
          <div className="row">
            <div className="col-6 col-md-6 col-lg-3">
              <div className="countCard">
                <div className="fcardImg">
                  <img src={img1.src} alt="icon" />
                </div>
                <div className="countContent">
                  {counter && (
                    <div className="d-flex align-items-center gap-2">
                      {" "}
                      <span className="countNum">
                        <CountUp start={0} end={2000} duration={2} delay={0} />{" "}
                      </span>
                      <span className="plus">+</span>
                    </div>
                  )}

                  <span className="countText">Ratings</span>
                </div>
              </div>
            </div>

            <div className="col-6 col-md-6 col-lg-3">
              <div className="countCard">
                <div className="fcardImg">
                  <img src={img2.src} alt="icon" />
                </div>
                <div className="countContent">
                  {counter && (
                    <div className="d-flex align-items-center gap-2">
                      {" "}
                      <span className="countNum">
                        <CountUp start={0} end={19000} duration={2} delay={0} />{" "}
                      </span>
                      <span className="plus">+</span>
                    </div>
                  )}

                  <span className="countText">Sales</span>
                </div>
              </div>
            </div>

            <div className="col-6 col-md-6 col-lg-3">
              <div className="countCard">
                <div className="fcardImg">
                  <img src={img3.src} alt="icon" />
                </div>
                <div className="countContent">
                  {counter && (
                    <div className="d-flex align-items-center gap-2">
                      {" "}
                      <span className="countNum">
                        <CountUp start={0} end={20} duration={2} delay={0} />{" "}
                      </span>
                      <span className="plus">+</span>
                    </div>
                  )}
                  <span className="countText">Products</span>
                </div>
              </div>
            </div>
            {/* 
                        <div className="col-6 col-md-6 col-lg-3">
                            <div className="countCard">
                                <div className="fcardImg">
                                    <img src={img5.src} alt="icon" />
                                </div>
                                <div className="countContent">
                                    <span className='countNum'>Elite Author</span>
                                    <span className='countText'>
                                        On Envato
                                    </span>
                                    
                                </div>
                            </div>
                        </div> */}
            <div className="col-6 col-md-6 col-lg-3">
              <div className="countCard">
                <div className="fcardImg">
                  <img src={img6.src} alt="icon" />
                </div>
                <div className="countContent">
                  {/* {counter && <div className='d-flex align-items-center gap-2'> <span className='countNum'><CountUp start={0} end={15} duration={2} delay={0} />K </span><span className='plus'>+</span></div>} */}
                  <div className='d-flex align-items-center gap-2'>
                  <span className='countNum'>Elite Author</span>
                  </div>
                  <span className="countText">on Envato</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default Counter;
