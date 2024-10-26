import Image from 'next/image'
import React from 'react'

const Pricing = () => {
  return (
 <section>
       <div className="pricing-area ptb-120">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title two bg-color-9edd05 rounded-pill">PRICING PLAN</span>
                    <h2>Choose The Best Plans Which For You</h2>
                </div>
                <div className="pricing-bg bg-color-edf1ee radius-30">
                    <div className="row">
                        <div className="col-xl-4">
                            <div className="choose-btn">
                                <h3>Choose Your Plan</h3>
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">
                                            <span><i className="ri-check-line"></i> Yearly Billing</span>
                                            Save 25% - 30 days money back
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">
                                            <span><i className="ri-check-line"></i> Monthly Billing</span>
                                            Save 25% - 30 days money back
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">
                                            <span><i className="ri-check-line"></i> Weekly Billing</span>
                                            Save 25% - 30 days money back
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-8">
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex="0">
                                    <div className="row g-4 justify-content-center" data-cues="slideInUp" data-duration="800">
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="pricing-card bg-color-ffffff radius-30">
                                                <div className="title position-relative">
                                                    <h3>Premium Plan</h3>
                                                    <h4>$160/ <span>Yearly</span></h4>
                                                    <Image className="about-image-2" src="/images/about/about-image-2.png" alt="image" width={100} height={64}/>
                                                </div>
                    
                                                <div className="pricing-card-body">
                                                    <ul className="check">
                                                        <li>
                                                            <i className="ri-check-line"></i>
                                                            Global Corporate Cards
                                                        </li>
                                                        <li>
                                                            <i className="ri-check-line"></i>
                                                            Business Account And Bill Pay
                                                        </li>
                                                        <li>
                                                            <i className="ri-check-line"></i>
                                                            Real-Time Spend Reporting
                                                        </li>
                                                        <li>
                                                            <i className="ri-check-line"></i>
                                                            Billing In 50+ Countries
                                                        </li>
                                                        <li>
                                                            <i className="ri-check-line"></i>
                                                            Dedicated Support For Admins
                                                        </li>
                                                    </ul>
                        
                                                    <a href="contact.html" className="default-btn two w-100 text-center">Get Started <i className="ri-arrow-right-up-line"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="pricing-card bg-color-ffffff radius-30">
                                                <div className="title position-relative">
                                                    <h3>Enterprise Plan</h3>
                                                    <h4>$180/ <span>Per Month</span></h4>
                                                    <Image className="about-image-2" src="/images/about/about-image-2.png" alt="image" width={100} height={64}/>
                                                </div>
                    
                                                <div className="pricing-card-body">
                                                    <ul className="check">
                                                        <li>
                                                            <i className="ri-check-line"></i>
                                                            Up To 10 Team Members
                                                        </li>
                                                        <li>
                                                            <i className="ri-check-line"></i>
                                                            Unlimited Usage
                                                        </li>
                                                        <li>
                                                            <i className="ri-check-line"></i>
                                                            Unlimited Drive Storage
                                                        </li>
                                                        <li>
                                                            <i className="ri-check-line"></i>
                                                            Concierge Help Center
                                                        </li>
                                                        <li>
                                                            <i className="ri-check-line"></i>
                                                            Custom AI Brand Models
                                                        </li>
                                                    </ul>
                        
                                                    <a href="contact.html" className="default-btn two w-100 text-center">Get Started <i className="ri-arrow-right-up-line"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex="0">
                                    <div className="row g-4 justify-content-center" data-cues="slideInUp" data-duration="800">
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="pricing-card bg-color-ffffff radius-30">
                                                <div className="title position-relative">
                                                    <h3>Premium Plan</h3>
                                                    <h4>$147/ <span>Per Month</span></h4>
                                                    <Image className="about-image-2" src="/images/about/about-image-2.png" alt="image" width={100} height={64}/>
                                                </div>
                    
                                                <div className="pricing-card-body">
                                                    <ul className="check">
                                                        <li>
                                                            <i className="ri-check-line"></i>
                                                            Global Corporate Cards
                                                        </li>
                                                        <li>
                                                            <i className="ri-check-line"></i>
                                                            Business Account And Bill Pay
                                                        </li>
                                                        <li>
                                                            <i className="ri-check-line"></i>
                                                            Real-Time Spend Reporting
                                                        </li>
                                                        <li>
                                                            <i className="ri-check-line"></i>
                                                            Billing In 50+ Countries
                                                        </li>
                                                        <li>
                                                            <i className="ri-check-line"></i>
                                                            Dedicated Support For Admins
                                                        </li>
                                                    </ul>
                        
                                                    <a href="contact.html" className="default-btn two w-100 text-center">Get Started <i className="ri-arrow-right-up-line"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="pricing-card bg-color-ffffff radius-30">
                                                <div className="title position-relative">
                                                    <h3>Enterprise Plan</h3>
                                                    <h4>$152/ <span>Per Month</span></h4>
                                                    <Image className="about-image-2" src="/images/about/about-image-2.png" alt="image" width={100} height={64} />
                                                </div>
                    
                                                <div className="pricing-card-body">
                                                    <ul className="check">
                                                        <li>
                                                            <i className="ri-check-line"></i>
                                                            Up To 10 Team Members
                                                        </li>
                                                        <li>
                                                            <i className="ri-check-line"></i>
                                                            Unlimited Usage
                                                        </li>
                                                        <li>
                                                            <i className="ri-check-line"></i>
                                                            Unlimited Drive Storage
                                                        </li>
                                                        <li>
                                                            <i className="ri-check-line"></i>
                                                            Concierge Help Center
                                                        </li>
                                                        <li>
                                                            <i className="ri-check-line"></i>
                                                            Custom AI Brand Models
                                                        </li>
                                                    </ul>
                        
                                                    <a href="contact.html" className="default-btn two w-100 text-center">Get Started <i className="ri-arrow-right-up-line"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabIndex="0">
                                    <div className="row g-4 justify-content-center" data-cues="slideInUp" data-duration="800">
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="pricing-card bg-color-ffffff radius-30">
                                                <div className="title position-relative">
                                                    <h3>Premium Plan</h3>
                                                    <h4>$116/ <span>Weekly</span></h4>
                                                    <Image className="about-image-2" src="/images/about/about-image-2.png" alt="image"  width={100} height={64}/>
                                                </div>
                    
                                                <div className="pricing-card-body">
                                                    <ul className="check">
                                                        <li>
                                                            <i className="ri-check-line"></i>
                                                            Global Corporate Cards
                                                        </li>
                                                        <li>
                                                            <i className="ri-check-line"></i>
                                                            Business Account And Bill Pay
                                                        </li>
                                                        <li>
                                                            <i className="ri-check-line"></i>
                                                            Real-Time Spend Reporting
                                                        </li>
                                                        <li>
                                                            <i className="ri-check-line"></i>
                                                            Billing In 50+ Countries
                                                        </li>
                                                        <li>
                                                            <i className="ri-check-line"></i>
                                                            Dedicated Support For Admins
                                                        </li>
                                                    </ul>
                        
                                                    <a href="contact.html" className="default-btn two w-100 text-center">Get Started <i className="ri-arrow-right-up-line"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="pricing-card bg-color-ffffff radius-30">
                                                <div className="title position-relative">
                                                    <h3>Enterprise Plan</h3>
                                                    <h4>$126/ <span>Weekly</span></h4>
                                                    <Image className="about-image-2" src="/images/about/about-image-2.png" alt="image" width={100} height={64}/>
                                                </div>
                    
                                                <div className="pricing-card-body">
                                                    <ul className="check">
                                                        <li>
                                                            <i className="ri-check-line"></i>
                                                            Up To 10 Team Members
                                                        </li>
                                                        <li>
                                                            <i className="ri-check-line"></i>
                                                            Unlimited Usage
                                                        </li>
                                                        <li>
                                                            <i className="ri-check-line"></i>
                                                            Unlimited Drive Storage
                                                        </li>
                                                        <li>
                                                            <i className="ri-check-line"></i>
                                                            Concierge Help Center
                                                        </li>
                                                        <li>
                                                            <i className="ri-check-line"></i>
                                                            Custom AI Brand Models
                                                        </li>
                                                    </ul>
                        
                                                    <a href="contact.html" className="default-btn two w-100 text-center">Get Started <i className="ri-arrow-right-up-line"></i></a>
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
        </div>
 </section>
)
}

export default Pricing