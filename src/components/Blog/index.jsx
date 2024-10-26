import Image from 'next/image'
import React from 'react'

const Blog = () => {
  return (
    <section>
            <div className="blog-area bg-color-edf1ee ptb-120 overflow-hidden">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title two bg-color-9edd05 rounded-pill">LATEST bLOG</span>
                    <h2>Smart Tools For Creative Financial Planning</h2>
                </div>
                <div className="row g-4 align-items-center justify-content-center" data-cues="slideInUp" data-duration="800">
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="single-blog-card bg-color-ffffff radius-30 border-bx">
                            <a href="blog-details.html" className="d-block">
                                <Image className="radius-20" src="/images/blog/blog-image-5.jpg" alt="image" width={354} height={226}/>
                            </a>
                            <div className="single-blog-body">
                                <ul>
                                    <li><i className="ri-calendar-2-line"></i> Aug 06, 2024</li>
                                    <li><i className="ri-message-2-line"></i> No Comment</li>
                                </ul>
                                <h3>
                                    <a href="blog-details.html">How To Easily Understand Your Insurance Contract</a>
                                </h3>
                                <p>With a robust suite of products ranging from digital banking and payment processing</p>
                                <a href="#" className="read-more">Read More <i className="ri-arrow-right-up-line"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="single-blog-card bg-color-ffffff radius-30 border-bx">
                            <a href="blog-details.html" className="d-block">
                                <Image className="radius-20" src="/images/blog/blog-image-6.jpg" alt="image" width={354} height={226} />
                            </a>
                            <div className="single-blog-body">
                                <ul>
                                    <li><i className="ri-calendar-2-line"></i> Aug 07, 2024</li>
                                    <li><i className="ri-message-2-line"></i> No Comment</li>
                                </ul>
                                <h3>
                                    <a href="blog-details.html">Wages And Benefits Growth Deals Yet Another Blow</a>
                                </h3>
                                <p>With a robust suite of products ranging from digital banking and payment processing</p>
                                <a href="#" className="read-more">Read More <i className="ri-arrow-right-up-line"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="single-blog-card bg-color-ffffff radius-30 border-bx">
                            <a href="blog-details.html" className="d-block">
                                <Image className="radius-20" src="/images/blog/blog-image-7.jpg" alt="image" width={354} height={226}/>
                            </a>
                            <div className="single-blog-body">
                                <ul>
                                    <li><i className="ri-calendar-2-line"></i> Aug 08, 2024</li>
                                    <li><i className="ri-message-2-line"></i> No Comment</li>
                                </ul>
                                <h3>
                                    <a href="blog-details.html">Unwinding EEUR Issuance And Boosting</a>
                                </h3>
                                <p>With a robust suite of products ranging from digital banking and payment processing</p>
                                <a href="#" className="read-more">Read More <i className="ri-arrow-right-up-line"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Blog