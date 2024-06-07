import React from "react";
import envatoimg from "@/Assets/Images/envato.svg";
import codecanimg from "@/Assets/Images/codecanyon.svg";
import authorimg from "@/Assets/Images/author.svg";
import eliteimg from "@/Assets/Images/elite-author.svg";
import weekimg from "@/Assets/Images/week.svg";
const Sponsors = () => {
  return (
    <>
      <div className="icon-labels-container">
        <div className="icon-label">
          <img src={envatoimg.src} alt="Envato" />
          <span>Envato</span>
        </div>
        <div className="icon-label">
          <img src={codecanimg.src} alt="Codecanyon" />
          <span>Codecanyon</span>
        </div>
        <div className="icon-label">
          <img src={eliteimg.src} alt="Elite Author" />
          <span>Elite Author</span>
        </div>
        <div className="icon-label">
          <img src={authorimg.src} alt="Exclusive Author" />
          <span>Exclusive Author</span>
        </div>
        <div className="icon-label">
          <img src={weekimg.src} alt="Week" />
          <span>Week</span>
        </div>
      </div>
    </>
  );
};

export default Sponsors;
