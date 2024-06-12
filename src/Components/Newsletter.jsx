import React, { useState, useRef } from "react";
import nlBg from "../Assets/Images/BG.png";
import nlBg2 from "../Assets/Images/newsLetterRightDiv.png";
import { Toaster, toast } from "react-hot-toast";
import { FaWhatsapp } from "react-icons/fa";
import qrCode from '../Assets/Images/whatsAppQR.svg'
import curlLine from '../Assets/Images/curlLine.png'


const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbw2EYgABa9JHHyH1b1Ylrc-bxYtnhMGHgDzMPm7B-nXdQvfoZajvcxqhwdiwVINTkcp/exec";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const clearForm = document.forms["submit-to-google-sheet"];

    if (email.trim() === "") {
      toast.error("Please fill out the form!");
    } else {
      try {
        const response = await fetch(scriptURL, {
          method: "POST",
          body: new FormData(e.target),
        });

        if (response.ok) {
          toast.success("Subscribe successfully!");
          setEmail("");
          clearForm.reset();
          // You can update the UI or perform other actions upon success.
        } else {
          console.error("Error!", response);
          // Handle errors here.
        }
      } catch (error) {
        console.error("Error!", error.message);
        // Handle network or other errors here.
        toast.error("Something went wrong please try again later");
      }
    }
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <section
        className="newsletter container"
      >
        <div className="row mainRow">
          <div className="col-sm-12 col-md-12 col-lg-7 newsLetterLeftDiv"
            style={{
              background: `url(${nlBg.src})`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}>
            <div className="newsletterText">
              <span className="nlTitle">Newsletter</span>
              <span className="nlText">
                Stay up to date with our latest offers and our products.
              </span>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-12 input">
              <form name="submit-to-google-sheet" onSubmit={handleSubmit}>
                <div className="main_input">
                  <input
                    type="email"
                    name="Email"
                    placeholder="Your Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button type="submit" value="Send" className="subsBtn" onSubmit={handleSubmit}>
                    Subscribe
                  </button>
                </div>
              </form>
              <span id="msg"></span>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-5 newsLetterRightDiv"
            style={{
              background: `url(${nlBg2.src})`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}>
            <div className="newsletterText">
              <span className="nlTitle">Join WhatsApp Channel</span>
            </div>
            <div className="row mt-4">
              <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                <div className="btnContainer">
                  <a href="https://whatsapp.com/channel/0029VaFfBBP2ER6eCc3E8y0M" target="_blank"><button> <FaWhatsapp /> Click To Follow</button></a>
                  <span>Scan QR code for contact</span>
                  <img src={curlLine.src} alt="curlLine" />
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-6 qrCodeWrapper">
                <img src={qrCode.src} alt="whatsAppQRCode" />
              </div>
            </div>
          </div>

          {/* <div className="col-sm-12 col-md-12 col-lg-6">
            <form name="submit-to-google-sheet" onSubmit={handleSubmit}>
              <div className="row inputFields">
                <span className="col-sm-12 col-md-12 col-lg-12 input">
                  <input
                    type="text"
                    name="Name"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </span>
              </div>
            </form>
            <span id="msg"></span>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Newsletter;
