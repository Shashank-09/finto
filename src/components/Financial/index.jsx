import Image from 'next/image'
import React from 'react'

const Financial = () => {
  return (
    <section>
          <div className="financial-area bg-color-edf1ee ptb-120 overflow-hidden">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title two bg-color-9edd05 rounded-pill">FINANCIAL GOALS</span>
                    <h2>Leveraging Technology For Secure & Banking</h2>
                </div>
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-5 col-md-12" data-cues="slideInRight" data-duration="800">
                        <div className="financial-image position-relative">
                            <Image className="radius-30" src="/images/about/about-image-8.jpg" alt="image" height={600} width={655} />

                            <div className="financial-card bg-color-ffffff radius-20 moveHorizontal">
                                <div className="flex-warp d-flex align-items-center justify-content-between mb-2">
                                    <h2><b>-</b>$100</h2>
                                    <span>$123.000</span>
                                </div>
                                <p>Excepteur sint occaecat cupidatat non proident.</p>
                                <div className="date">Aug 01, 2024</div>
                            </div>

                            <div className="single-financial bg-color-ffffff radius-20 moveHorizontal_reverse">
                                <div className="flex-warp d-flex align-items-center justify-content-between">
                                    <div className="me-4">
                                        <Image src="/images/svg/report.svg" alt="image" width={29} height={20} />
                                    </div>
                                    <div className="me-4">
                                        <p>7 days report</p>
                                        <p className="mb-0">Total balance</p>
                                    </div>
                                    <div className="me-4">
                                        <h3><b>+</b>$325</h3>
                                        <h3 className="mb-0">$123.000</h3>
                                    </div>
                                    <div className="">
                                        <span className="date">Aug 08 <span></span> 2024</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-7 col-md-12" data-cues="slideInLeft" data-duration="800">
                        <div className="financial-content">
                            <ul>
                                <li>
                                    <i className="flaticon-laptop-2"></i>
                                    <h3>Revenue & Finance</h3>
                                    <p>Our commitment to security transparency and customer centricity ensures that every transaction is no.</p>
                                </li>
                                <li>
                                    <i className="flaticon-payment-method-2"></i>
                                    <h3>Global Payments</h3>
                                    <p>Our commitment to security transparency and customer centricity ensures that every transaction is no.</p>
                                </li>
                                <li>
                                    <i className="flaticon-grow-up"></i>
                                    <h3>Bank As A Service</h3>
                                    <p>Our commitment to security transparency and customer centricity ensures that every transaction is no.</p>
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

export default Financial