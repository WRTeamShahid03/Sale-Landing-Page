"use client";
import React, { useEffect, useState } from "react";
import CommonTextDiv from "../CommonTextDiv";
import Image from "next/image";

import quotesApp from "../../../Assets/Images/products-logos/Quotes app.svg";
import ebroker from "../../../Assets/Images/products-logos/ebroker.svg";
import edemand from "../../../Assets/Images/products-logos/eDemand_app.svg";
import eliteApp from "../../../Assets/Images/products-logos/elitequiz_app.svg";
import eliteWeb from "../../../Assets/Images/products-logos/elitequiz_web.svg";
import eshopMulti from "../../../Assets/Images/products-logos/eShop multi app.svg";
import eschoolSaas from "../../../Assets/Images/products-logos/eShcool_saas_Version.svg";
import eSchool from "../../../Assets/Images/products-logos/eSchool.svg";
import erestroMulti from "../../../Assets/Images/products-logos/erestro_multi_vendor.svg";
import news from "../../../Assets/Images/products-logos/news app.svg";
import egrocer from "../../../Assets/Images/products-logos/eGrocer.svg";
import primeWeb from "../../../Assets/Images/products-logos/primeweb.svg";
import eSpeech from "../../../Assets/Images/products-logos/eSpeech.svg";
import erestroSingle from "../../../Assets/Images/products-logos/eRestro_single_vendor_app.svg";
import smartKit from "../../../Assets/Images/products-logos/Smartkit pro.svg";
import eshopSingleApp from "../../../Assets/Images/products-logos/eShop single app.svg";
import eshopSingleWeb from "../../../Assets/Images/products-logos/eShop single web 1.svg";
import quizAndro from "../../../Assets/Images/products-logos/Online quiz android.svg";
import radioApp from "../../../Assets/Images/products-logos/radio app.svg";
import TicTacToe from "../../../Assets/Images/products-logos/TicTacToe.svg";
import eBook from "../../../Assets/Images/products-logos/Book.svg";
import Qearner from "../../../Assets/Images/products-logos/Qearner.svg";
import eClassify from "../../../Assets/Images/products-logos/eClassify.svg";

import Link from "next/link";
import { LuShoppingCart } from "react-icons/lu";
import { LuArrowUpCircle, LuArrowDownCircle } from "react-icons/lu";
import { HiOutlineArrowCircleUp } from "react-icons/hi";
import { BsBasket3 } from "react-icons/bs";


const Products = () => {
  const [viewMore, setViewMore] = useState(false);

  const products = [
    {
      id: 1,
      title: "eClassify",
      desc: "Classified Marketplace",
      img: eClassify,
      link: "https://1.envato.market/DKYXjG",
      price: "59",
      salePrice: "29",
    },
    {
      id: 2,
      title: "eSchool SaaS",
      desc: "SaaS School management solution",
      img: eschoolSaas,
      link: "https://1.envato.market/9g0Rd0",
      price: "99",
      salePrice: "49",
    },
    {
      id: 3,
      title: "eRestro - Single",
      desc: "Single restaurant management flutter app",
      img: erestroSingle,
      link: "https://1.envato.market/5go609",
      price: "59",
      salePrice: "29",
    },
    {
      id: 4,
      title: "eBroker",
      desc: "Real estate business solution",
      img: ebroker,
      link: "https://1.envato.market/k0Ye23",
      price: "69",
      salePrice: "34",
    },
    {
      id: 5,
      title: "eDemand",
      desc: "On-Demand service business solution",
      img: edemand,
      link: "https://1.envato.market/q4YJ6j",
      price: "69",
      salePrice: "34",
    },
    {
      id: 6,
      title: "eGrocer",
      desc: "Grocery business solution",
      img: egrocer,
      link: "https://1.envato.market/jrYk6v",
      price: "69",
      salePrice: "34",
    },
    {
      id: 7,
      title: "eSchool",
      desc: "School management solution",
      img: eSchool,
      link: "https://1.envato.market/eK3VO6",
      price: "69",
      salePrice: "34",
    },
    {
      id: 8,
      title: "eRestro - Multi",
      desc: "Multi restaurant management flutter app",
      img: erestroMulti,
      link: "https://1.envato.market/B0NWE0",
      price: "59",
      salePrice: "29",
    },
    {
      id: 9,
      title: "Elite Quiz Web",
      desc: "Trivia quiz game website",
      img: eliteWeb,
      link: "https://1.envato.market/WqZjXO",
      price: "39",
      salePrice: "19",
    },
    {
      id: 10,
      title: "eSpeech",
      desc: "Text-to-speech converter",
      img: eSpeech,
      link: "https://1.envato.market/EKLnb9",
      price: "29",
      salePrice: "14",
    },
    {
      id: 11,
      title: "Prime Web",
      desc: "App to website converter",
      img: primeWeb,
      link: "https://1.envato.market/nLqOkR",
      price: "19",
      salePrice: "09",
    },
    {
      id: 12,
      title: "eShop - Multi",
      desc: "Multivendor e-commerce solution",
      img: eshopMulti,
      link: "https://1.envato.market/Qy7odM",
      price: "69",
      salePrice: "34",
    },
    {
      id: 13,
      title: "Smartkit Pro",
      desc: "Biggest UI Flutter kit",
      img: smartKit,
      link: "https://1.envato.market/21oPkM",
      price: "29",
      salePrice: "14",
    },
    {
      id: 14,
      title: "Tic-tac-toe",
      desc: "Tic-tac-toe flutter game app",
      img: TicTacToe,
      link: "https://1.envato.market/R5AxP2",
      price: "19",
      salePrice: "9",
    },
    {
      id: 15,
      title: "Elite Quiz app",
      desc: "Trivia quiz game flutter app",
      img: eliteApp,
      link: "https://1.envato.market/4Pzk5L",
      price: "69",
      salePrice: "34",
    },
    {
      id: 16,
      title: "Qearner",
      desc: "Quiz game with earning system",
      img: Qearner,
      link: "https://1.envato.market/y2aDgB",
      price: "39",
      salePrice: "19",
    },
    {
      id: 17,
      title: "News",
      desc: "News application + website",
      img: news,
      link: "https://1.envato.market/rQYZN5",
      price: "59",
      salePrice: "29",
    },
    {
      id: 19,
      title: "eShop - Store Web - Single",
      desc: "Single Vendor e-commerce Solution",
      img: eshopSingleWeb,
      link: "https://1.envato.market/1rXje6",
      price: "39",
      salePrice: "19",
    },
    {
      id: 20,
      title: "eShop - App - Single",
      desc: "Single Vendor e-commerce Solution",
      img: eshopSingleApp,
      link: "https://1.envato.market/VmJraJ",
      price: "49",
      salePrice: "24",
    },
    {
      id: 21,
      title: "Radio",
      desc: "Online radio app",
      img: radioApp,
      link: "https://1.envato.market/3eB5Py",
      price: "19",
      salePrice: "09",
    },
    {
      id: 22,
      title: "Quiz online Android",
      desc: "Online Quiz App",
      img: quizAndro,
      link: "https://1.envato.market/R5Axy2",
      price: "69",
      salePrice: "34",
    },
  ];

  useEffect(() => {}, [viewMore]);

  return (
    <section className="productsSect commonMT" id="products">
      <div className="container">
        <div className="row commonRowGap">
          <div className="col-xl-5">
            <CommonTextDiv
              blueText={`${products?.length} Awesome Products`}
              title={`Browse Through Our Collection of ${products?.length} Awesome Products Designed for Your Next Project!`}
              desc={`Find everything you need to make your project a success and get inspired along the way.`}
            />
          </div>

          <div className="col-xl-7">
            <div
              className={`row commonRowGap cardRow ${
                viewMore ? "viewMore" : "viewLess"
              }`}
            >
              {products.map((item) => {
                return (
                  <div className="col-6 col-sm-6 col-lg-4" key={item.id}>
                   
                      <div className="card flexColumnCenter text-center justify-content-center align-items-center">
                        <div>
                          <Image
                            src={item.img}
                            height={0}
                            width={0}
                            alt="productImg"
                          />
                        </div>
                        <div>
                          <span className="name">{item.title}</span>
                        </div>
                        <div>
                          <span className="desc">{item.desc}</span>
                        </div>

                        <div className="flexCenter gap-1 buyDetails">
                          <div className="flexColumnStart gap-1">
                            <span className="priceLable">Price</span>
                            <div className="flexCenter gap-1">
                              <span className="salePrice">
                                ${item.salePrice}
                              </span>
                              <span className="price">${item.price}</span>
                            </div>
                          </div>
                          <Link href={item.link} target="_blank">
                          <button className="icon flexCenter buyBtn">
                            <BsBasket3 />
                            <span>Buy now</span>
                          </button>
                          </Link>
                        </div>
                      </div>
                  </div>
                );
              })}
            </div>
            <div className="col-12 flexCenter mt-5">
              {viewMore ? (
                <button
                  className="viewAllBtn"
                  onClick={() => setViewMore(false)}
                >
                  View Less <LuArrowUpCircle />
                </button>
              ) : (
                <button
                  className="viewAllBtn"
                  onClick={() => setViewMore(true)}
                >
                  View All <LuArrowDownCircle />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
