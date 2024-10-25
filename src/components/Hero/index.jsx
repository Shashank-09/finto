import Image from 'next/image'
import React from 'react'

const Hreo = () => {
  return (
    <section>
        <div className="banner-area bg-color-edf1ee position-relative overflow-hidden">
            <div className="container">
                <div className="banner-content" data-cues="slideInUp" data-duration="800">
                    <span className="sub-t">FINANCIAL SERVICES</span>
                    <h1>Empowering Financial Futures With Innovation</h1>
                    <p className="mb-5">We are at the forefront of revolutionizing the financial landscape through cutting edge fintech solutions our mission is to bridge the gap between traditional banking and modern technology offering innovative.</p>

                    <div className="banner-btn">
                        <a href="about-us.html" className="default-btn two me-4">Know About Us <i className="ri-arrow-right-up-line"></i></a>
                        <a href="contact.html" className="default-btn three">Contact Us <i className="ri-arrow-right-up-line"></i></a>
                    </div>
                </div>
            </div>

            <div className="mission-card bg-color-ffffff radius-20">
                <Image className="rounded-circle" src="/images/user/user-image-6.png" alt="image" height={20} width={30} />
                <ul>
                    <li>
                        <i className="flaticon-star-2"></i>
                        <i className="flaticon-star-2"></i>
                        <i className="flaticon-star-2"></i>
                        <i className="flaticon-star-2"></i>
                        <i className="flaticon-star-2"></i>
                    </li>
                </ul>
                <p>Our mission is to bridge the gap between traditional banking</p>
            </div>

            <div className="mission-card two bg-color-ffffff radius-20">
                <Image className="rounded-circle" src="/images/user/user-image-7.png" alt="image" height={20} width={30}/>
                <ul>
                    <li>
                        <i className="flaticon-star-2"></i>
                        <i className="flaticon-star-2"></i>
                        <i className="flaticon-star-2"></i>
                        <i className="flaticon-star-2"></i>
                        <i className="flaticon-star-2"></i>
                    </li>
                </ul>
                <p>With a robust suite of products ranging from digital banking</p>
            </div>

            <div className="shape-image">
                <Image className="hero-shape-1 moveHorizontal_reverse" src="/images/shape/hero-shape-1.png" alt="image" height={78} width={92}/>
                <Image className="hero-shape-2 rotate" src="/images/shape/hero-shape-2.png" alt="image" height={69} width={69}/>
            </div>
        </div>
    </section>
  )
}

export default Hreo;