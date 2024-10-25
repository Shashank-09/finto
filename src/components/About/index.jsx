"use client";
import Image from "next/image";
import React from "react";
import AboutCard from "../AboutCard";
// import './'
const About = () => {
  return (
    <>
    <section>
        {/* About first component */}
    <div>
        <div className="about-area bg-color-0c3a30 ptb-120 overflow-hidden">
          <div className="container">
            <div className="row align-items-center">
              <div
                className="col-lg-6 col-md-12"
                data-cues="slideInDown"
                data-duration="800"
              >
                <div className="about-us-content position-relative">
                  <div className="section-heading">
                    <span className="sub-title two bg-color-9edd05 rounded-pill">
                      ABOUT FINTO
                    </span>
                    <h2 className="text-white">Your Right Path To Smart Financial Decisions</h2>
                    <p className="text-white">
                      With a robust suite of products ranging from digital
                      banking and payment processing to wealth management and
                      blockchain applications we empower our clients
                    </p>
                  </div>

                  <ul className="check">
                    <li>
                      <i className="ri-check-line"></i>
                      Pay Bills On Time Without Missing A Beat
                    </li>
                    <li>
                      <i className="ri-check-line"></i>
                      Create And Send Invoices In Seconds
                    </li>
                    <li>
                      <i className="ri-check-line"></i>
                      Control Your Cash Flow On Demand
                    </li>
                  </ul>

                  <a href="about.html" className="default-btn mt-5">
                    Learn About <i className="ri-arrow-right-up-line"></i>
                  </a>
                </div>
              </div>
              <div
                className="col-lg-6 col-md-12"
                data-cues="slideInUp"
                data-duration="800"
              >
                <div className="about-image position-relative">
                  <Image
                    className="radius-30"
                    src="/images/about/about-image-4.jpg"
                    width={600}
                    height={710}
                    alt="image"
                  />
                  <Image
                    className="about-image-5 radius-20 bounce left: -110px; bottom: 170px; position: absolute;"
                    src="/images/about/about-image-5.jpg"
                    width={223}
                    height={189}
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutCard/>
    </section>
    </>
  );
};

export default About;

{
  /* <div classNameName="about-area two ptb-120">
<div classNameName="container">
    <div classNameName="row align-items-center">
        <div classNameName="col-lg-6 col-md-12" data-cues="slideInDown" data-duration="800">
            <div classNameName="about-us-content position-relative">
                <div classNameName="section-heading">
                    <span classNameName="sub-title two bg-color-9edd05 rounded-pill">ABOUT FINTO</span>
                    <h2>Your Right Path To Smart Financial Decisions</h2>
                    <p>With a robust suite of products ranging from digital banking and payment processing to wealth management and blockchain applications we empower our clients</p>
                </div>

                <ul classNameName="check">
                    <li>
                        <i classNameName="ri-check-line"></i>
                        Pay Bills On Time Without Missing A Beat
                    </li>
                    <li>
                        <i classNameName="ri-check-line"></i>
                        Create And Send Invoices In Seconds
                    </li>
                    <li>
                        <i classNameName="ri-check-line"></i>
                        Control Your Cash Flow On Demand
                    </li>
                </ul>

                <a href="about.html" classNameName="default-btn mt-5">Learn About <i classNameName="ri-arrow-right-up-line"></i></a>
            </div>
        </div>
        <div classNameName="col-lg-6 col-md-12" data-cues="slideInUp" data-duration="800">
            <div className="about-image position-relative">
                <Image className="radius-30" src="assets/images/about/about-image-4.jpg" alt="image">
                <Image className="about-image-5 radius-20 bounce" src="assets/images/about/about-image-5.jpg" alt="image">
            </div>
        </div>
    </div>
</div>
</div> */
}
