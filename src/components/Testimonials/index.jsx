import Image from 'next/image'
import React from 'react'

const Testimonials = () => {
  return (
    <div className="testimonials-area bg-color-edf1ee ptb-120 overflow-hidden">
    <div className="container">
        <div className="about-top mb-5">
            <div className="row align-items-center" data-cues="slideInLeft" data-duration="800">
                <div className="col-lg-5 col-md-7">
                    <div className="section-heading mb-0">
                        <span className="sub-title">TESTIMONIALS</span>
                        <h2 className="mb-0">Hear What Our Clients Say About Us</h2>
                    </div>
                </div>
                <div className="col-lg-7 col-md-5">
                    <div className="content">
                        <p>By integrating advanced technology with financial expertise we provide a comprehensive suite of services that cater to both individuals and businesses</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-6 col-md-6" data-cues="slideInUp" data-duration="800">
                <div className="testimonials-image bg-color-9edd05 radius-30 position-relative">
                    <Image className="about-image-3" src="/images/about/about-image-3.png" width={196} height={303} alt="image"/>

                    {/* <Image className="feature-shape-1 rotate" src="/images/shape/feature-shape-1.png" alt="image"/> */}
                    {/* <Image className="feature-shape-2 rotate" src="/images/shape/feature-shape-1.png" alt="image"/> */}
                </div>
            </div>
            <div className="col-lg-6 col-md-6">
                <div className="testimonials-content" data-cues="slideInUp" data-duration="800">
                    <div className="testimonials-card bg-color-ffffff radius-30 border-bx mb-4">
                        <ul>
                            <li>
                                <i className="flaticon-star-2"></i>
                                <i className="flaticon-star-2"></i>
                                <i className="flaticon-star-2"></i>
                                <i className="flaticon-star-2"></i>
                                <i className="flaticon-star-2"></i>
                            </li>
                        </ul>
                        <p>“We are at the forefront of revolutionizing the financial landscape through cutting fintech solutions Our mission is to bridge the gap between traditional banking and modern technology, offering innovative and seamless financial services that cater to the evolving needs of individuals.”</p>

                        <div className="flex-warp d-flex align-items-center justify-content-between">
                            <div className="d-flex gap-4 align-items-center">
                                <Image className="user-image-4 rounded-circle" src="/images/user/user-image-4.jpg" width={90} height={90} alt="image"/>
                                <div>
                                    <h3>Steven H. Britten</h3>
                                    <span>CEO & Founder</span>
                                </div>
                            </div>
                            {/* <Image className="right-quote" src="/images/svg/right-quote.svg" alt="image"/> */}
                        </div>
                    </div>

                    <div className="testimonials-card bg-color-ffffff radius-30 border-bx">
                        <ul>
                            <li>
                                <i className="flaticon-star-2"></i>
                                <i className="flaticon-star-2"></i>
                                <i className="flaticon-star-2"></i>
                                <i className="flaticon-star-2"></i>
                                <i className="flaticon-star-2"></i>
                            </li>
                        </ul>
                        <p>“We are at the forefront of revolutionizing the financial landscape through cutting fintech solutions Our mission is to bridge the gap between traditional banking and modern technology, offering innovative and seamless financial services that cater to the evolving needs of individuals.”</p>

                        <div className="flex-warp d-flex align-items-center justify-content-between">
                            <div className="d-flex gap-4 align-items-center">
                                {/* <Image className="user-image-4 rounded-circle" src="/images/user/user-image-5.jpg" alt="image"/> */}
                                <div>
                                    <h3>Kevin M. Rueda</h3>
                                    <span>Businessman</span>
                                </div>
                            </div>
                            {/* <Image className="right-quote" src="/images/svg/right-quote.svg" alt="image"/> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Testimonials
