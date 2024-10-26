import Image from 'next/image'
import React from 'react'
import '../Partner/swiper-bundle.min.css'

const Partner = () => {
  return (
    <section>
                <div className="partner-area two bg-color-edf1ee pb-120 overflow-hidden">
            <div className="container-fluid side-padding">
                <div className="title">
                    <p>USED BY THE WORLD'S MOST INNOVATIVE COMPANIES</p>
                </div>
                <div className="partner-items">
                    <div className="swiper partner-two-slide">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="partner-logo">
                                    <Image src="/images/partner/partner-logo-6.png" alt="image" width={155} height={46}/>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="partner-logo">
                                    <Image src="/images/partner/partner-logo-7.png" alt="image" width={155} height={46}/>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="partner-logo">
                                    <Image src="/images/partner/partner-logo-8.png" alt="image" width={155} height={46}/>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="partner-logo">
                                    <Image src="/images/partner/partner-logo-9.png" alt="image" width={155} height={46}/>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="partner-logo">
                                    <Image src="/images/partner/partner-logo-10.png" alt="image" width={155} height={46}/>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="partner-logo">
                                    <Image src="/images/partner/partner-logo-11.png" alt="image" width={155} height={46}/>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="partner-logo">
                                    <Image src="/images/partner/partner-logo-6.png" alt="image" width={155} height={46}/>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="partner-logo">
                                    <Image src="/images/partner/partner-logo-7.png" alt="image"width={155} height={46}/>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="partner-logo">
                                    <Image src="/images/partner/partner-logo-8.png" alt="image" width={155} height={46}/>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="partner-logo">
                                    <Image src="/images/partner/partner-logo-9.png" alt="image" width={155} height={46}/>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="partner-logo">
                                    <Image src="/images/partner/partner-logo-10.png" alt="image" width={155} height={46}/>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="partner-logo">
                                    <Image src="/images/partner/partner-logo-11.png" alt="image" width={155} height={46}/>
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

export default Partner