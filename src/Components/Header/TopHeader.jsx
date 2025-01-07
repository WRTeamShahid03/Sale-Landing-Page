'use client'
import React, { useState, useEffect } from 'react';
import Countdown from 'react-countdown';
import { FaArrowRight } from "react-icons/fa6";
import Link from 'next/link';

const TopHeader = () => {
  const [headerTop, setHeaderTop] = useState(0);
  const [scroll, setScroll] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [showTopHeader, setShowTopHeader] = useState(false);

  // Calculate target time only once when component mounts
  const targetTime = new Date(new Date().getFullYear(), 0, 8, 18, 30, 0);

  useEffect(() => {
    setIsClient(true);
    
    // Check if we should show the header
    const now = new Date();
    setShowTopHeader(targetTime > now);

    // Setup scroll listener
    const nav = document.querySelector(".nav");
    if (nav) {
      setHeaderTop(nav.offsetTop);
    }

    const handleScroll = () => {
      setScroll(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handler for countdown completion
  const handleCountdownComplete = () => {
    setShowTopHeader(false);
  };

  // Renderer for the countdown
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // When countdown is complete, return null (component will be hidden by parent)
      return null;
    }

    return (
      <div className="countdown-container">
        <div className="countdown-box">
          <span className='countTimer'>{days}</span>
          <span className="countdown-label">Days</span>
        </div>
        :
        <div className="countdown-box">
          <span className='countTimer'>{hours}</span>
          <span className="countdown-label">Hours</span>
        </div>
        :
        <div className="countdown-box">
          <span className='countTimer'>{minutes}</span>
          <span className="countdown-label">Minutes</span>
        </div>
        :
        <div className="countdown-box">
          <span className='countTimer'>{seconds}</span>
          <span className="countdown-label">Seconds</span>
        </div>
      </div>
    );
  };

  if (!showTopHeader) return null;

  return (
    <div className={`topHeader ${scroll > headerTop ? "sticky" : ""}`}>
      <div>
        <span>
          <span className='fw-bold'>
          The sale is extended, but only for a limited time. Don't miss last chance
          </span>
        </span>
      </div>

      <div className="countdownDiv">
        {isClient && (
          <Countdown
            date={targetTime}
            onComplete={handleCountdownComplete}
            renderer={renderer}
            suppressHydrationWarning={true}
          />
        )}
      </div>
    </div>
  );
};

export default TopHeader;