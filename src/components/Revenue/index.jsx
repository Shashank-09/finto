import Image from 'next/image'
import React from 'react'

const Revenue = () => {
  return (
    <section>
         <div className="revenue-area pb-120 bg-color-edf1ee overflow-hidden">
            <div className="container-fluid side-padding">
                <div className="row g-4" data-cues="slideInUp" data-duration="800">
                    <div className="col-lg-8 col-md-7">
                        <div className="revenue-image position-relative">
                            <Image className="radius-30" src="/images/hero/hero-image-1.jpg" alt="image" height={502} width={1074}/>
                            <div className="paly-content">
                                <a data-fslightbox="two" href="https://www.youtube.com/watch?v=Y7cpCDlRfV0" className="popup-btn">
                                    <i className="flaticon-play-buttton"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-5">
                        <div className="revenue-card bg-color-9edd05 radius-30">
                            <h3>Grow Your Revenue</h3>
                            <p>Manage and bill customers as you see fit <span></span> with Finto Billing</p>
                            <Image className="app-image-4" src="/images/app/app-image-4.png" alt="image" height={280} width={355}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Revenue