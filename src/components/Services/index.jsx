'use client'
import { useState } from 'react';
import Image from 'next/image';
import servicesData from './servicedata';



const Services = () => {
    const [activeId, setActiveId] = useState(null);
  
    const handleToggle = (id) => {
      setActiveId((prevActiveId) => (prevActiveId === id ? null : id));
    };
  
    return (
      <section>
        <div className="service-area ptb-120">
          <div className="container">
            <div className="section-title">
              <span className="sub-title two bg-color-9edd05 rounded-pill">
                OUR SERVICES
              </span>
              <h2>Most Easiest Way To Manage Your Finances</h2>
            </div>
            <div className="faq-content">
              <div className="accordion" id="accordionFAQ">
                {servicesData.map((service, index) => (
                  <div className="accordion-item" key={index}>
                    <button
                      className={`accordion-button ${activeId === service.id ? '' : 'collapsed'}`}
                      type="button"
                      onClick={() => handleToggle(service.id)}
                      aria-expanded={activeId === service.id}
                      aria-controls={service.id}
                    >
                      <i className={service.iconClass}></i> {service.title}
                    </button>
                    <div
                      id={service.id}
                      className={`accordion-collapse collapse ${activeId === service.id ? 'show' : ''}`}
                      data-bs-parent="#accordionFAQ"
                    >
                      <div className="accordion-body">
                        <div className="row g-4 align-items-center">
                          <div className="col-lg-6 col-md-12">
                            <div className="info">
                              <p>{service.description}</p>
                              <ul>
                                {service.listItems.map((item, i) => (
                                  <li key={i}>
                                    <i className="ri-check-line"></i>
                                    {item}
                                  </li>
                                ))}
                              </ul>
                              <a href="service-details.html" className="read-more">
                                Read More <i className="ri-arrow-right-up-line"></i>
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-12">
                            <div className="service-image">
                              <Image
                                className="radius-30"
                                src={service.imageSrc}
                                alt="image"
                                width={586}
                                height={270}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  

export default Services;
