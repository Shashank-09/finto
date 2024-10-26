import Image from 'next/image'
import React from 'react'

const Services = () => {

  return (
    <section>
           <div className="service-area ptb-120">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title two bg-color-9edd05 rounded-pill">OUR SERVICES</span>
                    <h2>Most Easiest Way To Manage Your Finances</h2>
                </div>
                <div className="faq-content">
                    <div className="accordion" id="accordionFAQ">
                        <div className="accordion-item">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                <i className="flaticon-browser-1"></i> Mobile Transactions
                            </button>
                            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionFAQ">
                                <div className="accordion-body">
                                    <div className="row g-4 align-items-center">
                                        <div className="col-lg-6 col-md-12">
                                            <div className="info">
                                                <p>Our commitment to security efficiency and customer satisfaction ensures that you can trust us with your most important financial needs join us at and experience a new era of banking and finance where cutting.</p>
                                                <ul>
                                                    <li>
                                                        <i className="ri-check-line"></i>
                                                        Explore The Future Of Digital Wallets
                                                    </li>
                                                    <li>
                                                        <i className="ri-check-line"></i>
                                                        Secure Transaction Management
                                                    </li>
                                                    <li>
                                                        <i className="ri-check-line"></i>
                                                        Make Your Payment Transfer Very Easily
                                                    </li>
                                                </ul>
                                                <a href="service-details.html" className="read-more">Read More <i className="ri-arrow-right-up-line"></i></a>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12">
                                            <div className="service-image">
                                                <Image className="radius-30" src="/images/service/service-image-8.jpg" alt="image"  
                                                width={586}
                                                height={270} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item two">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSunam" aria-expanded="false" aria-controls="collapseSunam">
                                <i className="flaticon-laptop-3"></i> Digital Wallet
                            </button>
                            <div id="collapseSunam" className="accordion-collapse collapse" data-bs-parent="#accordionFAQ">
                                <div className="accordion-body">
                                    <div className="row g-4 align-items-center">
                                        <div className="col-lg-6 col-md-12">
                                            <div className="info">
                                                <p>Our commitment to security efficiency and customer satisfaction ensures that you can trust us with your most important financial needs join us at and experience a new era of banking and finance where cutting.</p>
                                                <ul>
                                                    <li>
                                                        <i className="ri-check-line"></i>
                                                        Explore The Future Of Digital Wallets
                                                    </li>
                                                    <li>
                                                        <i className="ri-check-line"></i>
                                                        Secure Transaction Management
                                                    </li>
                                                    <li>
                                                        <i className="ri-check-line"></i>
                                                        Make Your Payment Transfer Very Easily
                                                    </li>
                                                </ul>
                                                <a href="service-details.html" className="read-more">Read More <i className="ri-arrow-right-up-line"></i></a>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12">
                                            <div className="service-image">
                                                <Image className="radius-30" src="/images/service/service-image-12.jpg" alt="image"  width={586}
                                                height={270} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item three">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDinaj" aria-expanded="false" aria-controls="collapseDinaj">
                                <i className="flaticon-businessman-5"></i> Online Banking
                            </button>
                            <div id="collapseDinaj" className="accordion-collapse collapse" data-bs-parent="#accordionFAQ">
                                <div className="accordion-body">
                                    <div className="row g-4 align-items-center">
                                        <div className="col-lg-6 col-md-12">
                                            <div className="info">
                                                <p>Our commitment to security efficiency and customer satisfaction ensures that you can trust us with your most important financial needs join us at and experience a new era of banking and finance where cutting.</p>
                                                <ul>
                                                    <li>
                                                        <i className="ri-check-line"></i>
                                                        Explore The Future Of Digital Wallets
                                                    </li>
                                                    <li>
                                                        <i className="ri-check-line"></i>
                                                        Secure Transaction Management
                                                    </li>
                                                    <li>
                                                        <i className="ri-check-line"></i>
                                                        Make Your Payment Transfer Very Easily
                                                    </li>
                                                </ul>
                                                <a href="service-details.html" className="read-more">Read More <i className="ri-arrow-right-up-line"></i></a>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12">
                                            <div className="service-image">
                                                <Image className="radius-30" src="/images/service/service-image-13.jpg" alt="image"  width={586}
                                                height={270} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services