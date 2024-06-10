import React from "react";
import envatoimg from "@/Assets/Images/envato.svg";
import codecanimg from "@/Assets/Images/codecanyon.svg";
import authorimg from "@/Assets/Images/author.svg";
import eliteimg from "@/Assets/Images/elite-author.svg";
import weekimg from "@/Assets/Images/week.svg";
import years from '@/Assets/Images/years.png'
import team from '@/Assets/Images/team.png'
import { BsSendDashFill } from "react-icons/bs";

const Sponsors = () => {

  const sponsorsData = [
    {
      id: 0,
      img: envatoimg,
      text: 'Envato',
    },
    {
      id: 1,
      img: codecanimg,
      text: 'Codecanyon',
    },
    {
      id: 2,
      img: eliteimg,
      text: 'Elite Author',
    },
    {
      id: 3,
      img: authorimg,
      text: 'Exclusive Author',
    },
    {
      id: 4,
      img: weekimg,
      text: 'Weekly Top Seller',
    },
    {
      id: 5,
      img: years,
      text: '7+ Years',
    },
    {
      id: 6,
      img: team,
      text: 'Creative Team',
    },
  ]

  return (
    <div className="marquee-container">
      <div className="marquee">
        <div className="marquee-content">
          {sponsorsData.map((ele) => {
            return (
              <div className="icon-label" key={ele.id}>
                <img src={ele.img.src} alt={ele.text} />
                <span>{ele.text}</span>
              </div>
            );
          })}
        </div>
        <div className="marquee-content">
          {sponsorsData.map((ele) => {
            return (
              <div className="icon-label" key={`${ele.id}-clone`}>
                <img src={ele.img.src} alt={ele.text} />
                <span>{ele.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
