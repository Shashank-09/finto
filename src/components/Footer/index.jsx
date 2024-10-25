import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <section>
         <div className="footer-area two bg-color-0c3a30 pt-120">
            <div className="container">
                <div className="newsletter pb-120">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <div className="section-heading mb-0">
                                <span className="sub-title two bg-color-9edd05 rounded-pill">NEWSLETTER</span>
                                <h2 className="text-white">Subscribe Newsletter</h2>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <form className="footer-form position-relative">
                                <input type="email" className="form-control" placeholder="Enter Your Email" />
                                <button type="submit" className="default-btn">Subscribe <i className="ri-arrow-right-up-line"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="row" data-cues="slideInUp" data-duration="800">
                    <div className="col-xl-4 col-md-6">
                        <div className="footer-weight part-one">
                            <a href="index-2.html" className="footer-logo d-block">
                                <Image src="/images/white-logo.png" alt="image" height={45} width={145}/>
                            </a>
                            <p className="text-white">Our mission is to bridge the gap between traditional banking and modern technology and seamless financial services.</p>
                            <ul className="social">
                                <li><span>Follow Us:</span></li>
                                <li>
                                    <a href="https://www.facebook.com/" target="_blank">
                                        <i className="ri-facebook-fill"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.twitter.com/" target="_blank">
                                        <i className="ri-twitter-x-line"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/" target="_blank">
                                        <i className="ri-instagram-line"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/" target="_blank">
                                        <i className="ri-linkedin-fill"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-2 col-md-6">
                        <div className="footer-weight part-two ps-5">
                            <h3 className="text-white">Quick Links</h3>

                            <ul className="service-link">
                                <li>
                                    <a href="terms-conditions.html">Terms & Conditions</a>
                                </li>
                                <li>
                                    <a href="blog.html">Blog & News</a>
                                </li>
                                <li>
                                    <a href="services.html">Mobile App</a>
                                </li>
                                <li>
                                    <a href="services.html">Why Choose Us</a>
                                </li>
                                <li>
                                    <a href="pricing.html">Pricing Plan</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                        <div className="footer-weight part-three ps-5">
                            <h3 className="text-white">Our Services</h3>

                            <ul className="service-link">
                                <li>
                                    <a href="services.html">Mobile Banking</a>
                                </li>
                                <li>
                                    <a href="services.html">Advanced Security</a>
                                </li>
                                <li>
                                    <a href="services.html">Digital Wallet</a>
                                </li>
                                <li>
                                    <a href="services.html">Budgeting Tools</a>
                                </li>
                                <li>
                                    <a href="services.html">Making Transactions</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                        <div className="footer-weight ps-5">
                            <h3 className="text-white">Get In Touch</h3>

                            <ul className="get-touch">
                                <li>
                                    <Image src="/images/svg/map.svg" alt="image"  height={11} width={17}/>
                                    <span className="text-white"><b>Location:</b></span>
                                    <a href="https://www.google.com/maps/search/18+Tanglewood+Lane+Gulfport/@30.4216847,-89.1511032,12z/data=!3m1!4b1?entry=ttu" target="_blank">18 Tanglewood Lane Gulfport</a>
                                </li>
                                <li>
                                    <Image className="phone" src="/images/svg/mail.svg" alt="image"  height={11} width={17}/>
                                    <span className="text-white"><b>Email:</b></span>
                                    <a href="https://templates.hibootstrap.com/cdn-cgi/l/email-protection#8ce4e9e0e0e3cceae5e2f8e3a2efe3e1"><span className="__cf_email__" data-cfemail="ea828f868685aa8c83849e85c4898587">[email&#160;protected]</span></a>
                                </li>
                                <li>
                                    <Image className="phone" src="/images/svg/phone.svg" alt="image"  height={11} width={17}/>
                                    <span className="text-white"><b>Phone:</b></span>
                                    <a href="tel:0018085550148">+001 (808) 5550148</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer