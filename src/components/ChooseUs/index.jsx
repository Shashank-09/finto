import Image from 'next/image'
import React from 'react'

const ChooseUs = () => {
  return (
    <div className="choose-us-area ptb-120 overflow-hidden">
            <div className="container">
                <div className="about-top mb-5">
                    <div className="row align-items-center">
                        <div className="col-lg-7 col-md-7">
                            <div className="section-heading mb-0">
                                <span className="sub-title two bg-color-9edd05 rounded-pill">WHY CHOOSE US</span>
                                <h2 className="mb-0">Commitment To Exceptional Services And Solutions</h2>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-5">
                            <div className="content">
                                <p>By integrating advanced technology with financial expertise we provide a comprehensive suite of services that cater to both individuals and businesses</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <div className="choose-items position-relative">
                            <div className="swiper choose-slide">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="innovation">
                                            <span>Innovation</span>
                                            <h2>Passionate For Your Financial Support Here</h2>
                                            <p>From digital banking and seamless payment processing to sophisticated investment tools and personalized financial management our offerings are designed.</p>
                                            <p>With a robust suite of products ranging from digital banking and payment processing to wealth management and blockchain applications we empower our clients to navigate the complexities of the financial world with ease and confidence.</p>
                                            <a href="contact.html" className="default-btn">Contact Us <i className="ri-arrow-right-up-line"></i></a>
                                        </div>
                                    </div>
                                    {/* <div className="swiper-slide">
                                        <div className="innovation">
                                            <span>Brainchild</span>
                                            <h2>Financial For Your Passionate Support Here</h2>
                                            <p>From digital banking and seamless payment processing to sophisticated investment tools and personalized financial management our offerings are designed.</p>
                                            <p>With a robust suite of products ranging from digital banking and payment processing to wealth management and blockchain applications we empower our clients to navigate the complexities of the financial world with ease and confidence.</p>
                                            <a href="contact.html" className="default-btn">Contact Us <i className="ri-arrow-right-up-line"></i></a>
                                        </div>
                                    </div> */}
                                    {/* <div className="swiper-slide">
                                        <div className="innovation">
                                            <span>Designing</span>
                                            <h2>Commitment To Exceptional Services And Solutions</h2>
                                            <p>From digital banking and seamless payment processing to sophisticated investment tools and personalized financial management our offerings are designed.</p>
                                            <p>With a robust suite of products ranging from digital banking and payment processing to wealth management and blockchain applications we empower our clients to navigate the complexities of the financial world with ease and confidence.</p>
                                            <a href="contact.html" className="default-btn">Contact Us <i className="ri-arrow-right-up-line"></i></a>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                            <div className="pagination-btn">
                                <div className="choose-pagination"></div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6" data-cues="slideInRight" data-duration="800">
                        <div className="choose-us-image position-relative">
                            <Image className="radius-30" src="/images/about/about-image-6.jpg" height={465} width={543} alt="image"/>
                            <Image className="about-image-7 radius-20" src="/images/about/about-image-7.jpg" height={173} width={173} alt="image"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ChooseUs
