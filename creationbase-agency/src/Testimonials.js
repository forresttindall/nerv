import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
    return (
        <section className="testimonials-section" id="testimonials">
            <div className="testimonials-content">
                <span className="testimonials-eyebrow">Client Testimonials</span>
                <h1 className="testimonials-title">
                    What Our <span className="gradient" id="pop">Clients</span> Say
                </h1>

                <div className="testimonialscontainer">
                    <div className="row1">
                        <div className="box">
                            <div className="div1 eachdiv fulllegth">
                                <div className="userdetails">
                                    <div className="imgbox">
                                        <img src="/Images/lori.jpg" alt="Lori Tindall" />
                                    </div>
                                    <div className="detbox">
                                        <p className="name">Lori Tindall</p>
                                        <br />
                                    </div>
                                </div>
                                <div className="review">
                                    <h4><span className="gradient">"FIVE STARS!!!"</span></h4>
                                    <p>"I put off rebranding my business and building out a new website because I just didn't have the time or inclination to do it all myself. Working with Creationbase was easy and fun because they were able to draw information out of me that helped make the design and layout reflect my values. They also built elements into my website that gets it ranked higher in search engines and it gets noticed."</p>
                                </div>
                            </div>
                        </div>

                        <div className="box">
                            <div className="div2 eachdiv fulllegth">
                                <div className="userdetails">
                                    <div className="imgbox">
                                        <img src="/Images/grammie.jpg" alt="Jackie Beauchaine" />
                                    </div>
                                    <div className="detbox">
                                        <p className="name">Jackie Beauchaine</p>
                                    </div>
                                </div>
                                <div className="review">
                                    <h4><span className="gradient">"I couldn't be happier!"</span></h4>
                                    <p>"Creationbase did a fantastic job on my rebrand and website. My website is now ranking higher on Google and is bringing in more business. They really gave my business the look I always wanted!"</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row2">
                        <div>
                            <div className="div4 eachdiv glow">
                                <div className="userdetails">
                                    <div className="imgbox">
                                        <img src="/Images/doug.webp" alt="Douglas Herlocker" />
                                    </div>
                                    <div className="detbox">
                                        <p className="name dark">Douglas Herlocker</p>
                                        <br />
                                    </div>
                                </div>
                                <div className="review dark">
                                    <h4><span className="gradient">"Very pleased with the results!"</span></h4>
                                    <p>"Their quality and attention to detail is among the best and they can work within clients' budget to find the most efficient solution. They helped my business partner with a branding and website package that exceeded expectations."</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="div5 eachdiv glow">
                                <div className="userdetails">
                                    <div className="imgbox">
                                        <img src="/Images/patrick.jpeg" alt="Patrick Abrams" />
                                    </div>
                                    <div className="detbox">
                                        <p className="name">Patrick Abrams</p>
                                        <br />
                                    </div>
                                </div>
                                <div className="review">
                                    <h4><span className="gradient">"5 out of 5 stars!"</span></h4>
                                    <p>"I couldn't be happier with the logos and website Creationbase provided. Our SEO ranking shot up two pages on Google and we are getting significantly more website traffic and more customers. They guided me through the process very well and had data and statistics to back up their recommendations."</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials; 