import Image from 'next/image'
import React from 'react'
const Header = () => {
  return (
    <section>
            <nav className="navbar main-navbar navbar-expand-lg bg-color-ffffff" id="navbar">
                <div className="container-fluid side-padding position-relative">
                    <a className="navbar-brand logo-brand p-0" href="index-2.html">
                        <Image src="/images/logo.png" alt="image" height={48} width={145} />
                    </a>
                    <a className="navbar-toggler" data-bs-toggle="offcanvas" href="#navbarOffcanvas" role="button"
                        aria-controls="navbarOffcanvas">
                        <span className="burger-menu">
                            <span className="top-bar"></span>
                            <span className="middle-bar"></span>
                            <span className="bottom-bar"></span>
                        </span>
                    </a>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Home
                                </a>

                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="index-2.html">
                                            Home - 1 (Fintech Companies)
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item active" href="index-3.html">
                                            Home - 2 (Business Finance)
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="index-4.html">
                                            Home - 3 (Digital Banking)
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Services
                                </a>

                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="services.html">
                                            Services
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="service-details.html">
                                            Service Details
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Pages
                                </a>

                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="about-us.html">
                                            About Us
                                        </a>
                                    </li>

                                    <li className="nav-item dropdown">
                                        <a className="dropdown-toggle dropdown-item" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Team
                                        </a>
            
                                        <ul className="dropdown-menu">
                                            <li>
                                                <a className="dropdown-item" href="team.html">
                                                    Our Team
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="team-details.html">
                                                    Team Details
                                                </a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li>
                                        <a className="dropdown-item" href="testimonials.html">
                                            Our Testimonials
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="pricing.html">
                                            Pricing Plan
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="faq.html">
                                            FAQ's
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="my-account.html">
                                            My Account
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="privacy-policy.html">
                                            Privacy Policy
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="terms-conditions.html">
                                            Terms & Conditions
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="error-404.html">
                                            Error 404
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Shop
                                </a>

                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="products.html">
                                            Products
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="cart.html">
                                            Cart
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="checkout.html">
                                            Checkout
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="product-details.html">
                                            Product Details
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="wishlist.html">
                                            Wishlist
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Blog
                                </a>

                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="blog.html">
                                            Blog
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="blog-details.html">
                                            Blog Details
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link" href="contact.html">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="others-options">
                        <ul className="d-flex align-items-center ps-0 mb-0 list-unstyled">
                            <li>
                                <button type="button" className="search-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    <i className="ri-search-line"></i> Search
                                </button>
                            </li>
                            <li>
                                <a href="my-account.html" className="search-btn login"><i className="ri-account-circle-line"></i> Log in</a>
                            </li>
                            <li>
                                <a href="contact.html" className="default-btn">Get Started <i className="ri-arrow-right-up-line"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* <!-- Start Mobile Navbar Area --> */}
        <div className="mobile-navbar offcanvas offcanvas-end border-0" data-bs-backdrop="static" tabIndex="-1" id="navbarOffcanvas">
            <div className="offcanvas-header">
                <a href="index-2.html" className="logo d-inline-block">
                    <Image src="/images/white-logo.png" alt="logo" height={10} width={10}/>
                </a>

                <button type="button" className="close-btn bg-transparent position-relative lh-1 p-0 border-0" data-bs-dismiss="offcanvas" aria-label="close">
                    <i className="ri-close-fill"></i>
                </button>
            </div>

            <div className="offcanvas-body">
                <ul className="mobile-menu">
                    <li className="mobile-menu-list active">
                        <a href="javascript:void(0);">
                            Home
                        </a>

                        <ul className="mobile-menu-items">
                            <li>
                                <a className="dropdown-item" href="index-2.html">
                                    Home - 1 Home - 1 (Fintech Companies)
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item active" href="index-3.html">
                                    Home - 2 (Business Finance)
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="index-4.html">
                                    Home - 3 (Digital Banking)
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li className="mobile-menu-list">
                        <a href="javascript:void(0);">
                            Services
                        </a>

                        <ul className="mobile-menu-items">
                            <li>
                                <a className="dropdown-item" href="services.html">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="service-details.html">
                                    Service Details
                                </a>
                            </li>
                        </ul>
                    </li>
                
                    <li className="mobile-menu-list">
                        <a href="javascript:void(0);">
                            Pages
                        </a>

                        <ul className="mobile-menu-items">
                            <li>
                                <a className="dropdown-item" href="about-us.html">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="testimonials.html">
                                    Our Testimonials
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="pricing.html">
                                    Pricing Plan
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="faq.html">
                                    FAQ
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="my-account.html">
                                    My Account
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="privacy-policy.html">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="terms-conditions.html">
                                    Terms & Conditions
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="error-404.html">
                                    Error 404
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li className="mobile-menu-list">
                        <a href="javascript:void(0);">
                            Team
                        </a>

                        <ul className="mobile-menu-items">
                            <li>
                                <a className="dropdown-item" href="team.html">
                                    Our Team
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="team-details.html">
                                    Team Details
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li className="mobile-menu-list">
                        <a href="javascript:void(0);">
                            Shop
                        </a>

                        <ul className="mobile-menu-items">
                            <li>
                                <a className="dropdown-item" href="products.html">
                                    Products
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="cart.html">
                                    Cart
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="checkout.html">
                                    Checkout
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="product-details.html">
                                    Product Details
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="wishlist.html">
                                    Wishlist
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li className="mobile-menu-list">
                        <a href="javascript:void(0);">
                            Blog
                        </a>

                        <ul className="mobile-menu-items">
                            <li>
                                <a className="dropdown-item" href="blog.html">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="blog-details.html">
                                    Blog Details
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li className="mobile-menu-list without-icon">
                        <a href="contact.html" className="nav-link">
                            Contact
                        </a>
                    </li>
                </ul>

                {/* <!-- Others options --> */}
                <div className="others-options">
                    <ul className="d-flex align-items-center ps-0 mb-0 list-unstyled">
                        <li>
                            <button type="button" className="search-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <i className="ri-search-line"></i> Search
                            </button>
                        </li>
                        <li>
                            <a href="my-account.html" className="search-btn login"><i className="ri-account-circle-line"></i> Log in</a>
                        </li>
                        <li>
                            <a href="contact.html" className="default-btn">Get Started <i className="ri-arrow-right-up-line"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        {/* <!-- End Mobile Navbar Area --> */}
    </section>
  )
}

export default Header