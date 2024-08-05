import React from "react";
import offerShape from "../Assets/Images/Offer Shape.svg";
import saleImg from "../Assets/Images/Image.png";
import saleImgBack from "../Assets/Images/Back.png";
import evanto from "../Assets/Images/evanto.png";
import megaimg from "@/Assets/Images/mega.png"
import responsiveimg from "@/Assets/Images/mid-year-sale.png"

const MegaSale = () => {
  return (
    <>
      {/* <div className="saleEndingText">
                <span className='normalText'>YEAR&apos;S LAST CHANCE!!! <span className='highlightText'>SALE END SOOON......</span></span>
            </div>

      <div className="commonMT megaSaleMt">
        <div className="megaSale row">
          <div className="col-sm-12 col-md-12 col-lg-9">
            <div className="saleLeftDiv">
              <span className="evanto">
                <span></span>{" "}
                <span> Ready-Made Business Solutions with 50% Discount</span>{" "}
              </span>
              <span className="saleHeadline">Biggest Sale of the Year </span> 
              <span className='offerWrapper'>
                                <span className='offerShape'><img src={offerShape.src} alt="" /></span>
                                <span className='offerShapeText'>50% <br /> OFF</span>
                            </span>
              <span className="saleHeadline midLineSaleText">Sale</span>
              <span className="desc">
                Grab Unbelievable Discounts on Premium App and Web Codes{" "}
                <span> App & Website Offer!</span>
              </span>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-3">
            <div className="saleRightDiv">
              <img src="" alt="wrteam sale" />
            </div>
          </div>
        </div>

      </div> */}
      <div className="newmega">
        <img src={megaimg.src} className="main-img" alt="sale"/>
        <img src={responsiveimg.src} className="responsive-img" alt="sale"/>
      </div>
    </>
  );
};

export default MegaSale;
