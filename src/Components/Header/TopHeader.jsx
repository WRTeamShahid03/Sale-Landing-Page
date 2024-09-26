'use client'
import React, { useState, useEffect } from 'react';
import Countdown from 'react-countdown';
import { FaArrowRight } from "react-icons/fa6";
import Link from 'next/link';
import Image from 'next/image';
import saleGif from '../../Assets/Images/saleGifBig.gif'

const TopHeader = () => {

  const [headerTop, setHeaderTop] = useState(0);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {

    const nav = typeof document !== 'undefined' && document.querySelector(".nav");
    setHeaderTop(nav.offsetTop);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])


  const [targetTime, setTargetTime] = useState(getTargetTime());
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  function getTargetTime() {
    const today = new Date();
    const targetDate = new Date(today.getFullYear(), today.getMonth(), 28, 19, 30, 0); // 28th, 7:30 PM
    return targetDate;
  }

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  function calculateTimeRemaining() {
    const now = new Date();
    const timeDifference = targetTime - now;
    if (timeDifference >= 0) {
      // Countdown is over
      return {
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00',
      };
    }

    const days = Math.max(0, Math.floor(timeDifference / (1000 * 60 * 60 * 24))).toString().padStart(2, '0');
    const hours = Math.max(0, Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).toString().padStart(2, '0');
    const minutes = Math.max(0, Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))).toString().padStart(2, '0');
    const seconds = Math.max(0, Math.floor((timeDifference % (1000 * 60)) / 1000)).toString().padStart(2, '0');

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  if (targetTime <= new Date()) {
    // Countdown is over, render appropriate message
    return (<div className='countdownOver commonMT'>

    </div>)
  }

  return (
    <div className={`'topHeader ${scroll > headerTop ? "sticky " : ""} topHeader`}>
      <div>
        <Image src={saleGif} height={0} width={0} alt='saleGif' className='saleGif' />
      </div>
      <div>
        <span className='fw-bold'> ⏳ Time's flying—grab your deal before it's gone!</span>
      </div>

      <div className="countdownDiv">
        {isClient && (
          <Countdown
            date={targetTime}
            suppressHydrationWarning={true}
            renderer={({ days, hours, minutes, seconds }) => (
              <div className="countdown-container">
                <div className="countdown-box">
                  <span className='countTimer'> {days} </span>
                  <span className="countdown-label">Days</span>
                </div>
                :
                <div className="countdown-box">
                  <span className='countTimer'> {hours} </span>
                  <span className="countdown-label">Hours</span>
                </div>
                :
                <div className="countdown-box">
                  <span className='countTimer'> {minutes} </span>
                  <span className="countdown-label">Minutes</span>
                </div>
                :
                <div className="countdown-box">
                  <span className='countTimer'> {seconds} </span>
                  <span className="countdown-label">Seconds</span>
                </div>
              </div>
            )}
          />
        )}
      </div>

      {/* <div>
        <Link href='https://www.wrteam.in/super-september-sale?utm_source=web&utm_medium=web_strip&utm_campaign=super_sepetember_sale' target='_blank' title='Buy Now'>
          <button>Buy Now <FaArrowRight /></button>
        </Link>
      </div> */}
      <div>
        <Image src={saleGif} height={0} width={0} alt='saleGif' className='saleGif rightGif' />
      </div>
    </div>
  );
};

export default TopHeader;
