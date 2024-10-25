import React from 'react'

const AboutCard = () => {
  return (
    <div className="choose-card-area about-choose bg-color-edf1ee ptb-120">
            <div className="container">
                <div className="section-title">
                    <p>DISCOVER POWERFUL FEATURES FOR FINANCIAL SUCCESS</p>
                </div>
                <div className="row g-4 justify-content-center" data-cues="slideInUp" data-duration="800">
                    <div className="col-lg-4 col-md-6">
                        <div className="choose-card bg-color-ffffff radius-30">
                            <i className="flaticon-money-5 rounded-circle"></i>
                            <h3>Financial Solutions</h3>
                            <p className="mb-0">With a robust suite of products ranging from digital banking and payment processing.</p>

                            <span>01</span>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="choose-card bg-color-ffffff radius-30">
                            <i className="flaticon-dollar-symbol-1 rounded-circle"></i>
                            <h3>Expert Guidance</h3>
                            <p className="mb-0">With a robust suite of products ranging from digital banking and payment processing.</p>

                            <span>02</span>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="choose-card bg-color-ffffff radius-30">
                            <i className="flaticon-tablet rounded-circle"></i>
                            <h3>Innovation In Finance</h3>
                            <p className="mb-0">With a robust suite of products ranging from digital banking and payment processing.</p>

                            <span>03</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default AboutCard
