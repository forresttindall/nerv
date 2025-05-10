import React from 'react';
import { Link } from 'react-router-dom';
import './Design.css';

const Design = () => {
    // Use process.env.PUBLIC_URL to reference files in the public folder
    const designImage = process.env.PUBLIC_URL + '/Images/lrk.jpg';
    
    return (
        <section className="design-section" id="design">
            <div className="design-content">
                <div className="design-image">
                    <img src={designImage} alt="Brand Design" />
                </div>

                <div className="design-text">
                    <span className="eyebrow">Brand Design</span>
                    <h1 className="headline">Distinctive brand identity that <span className="gradient" id="pop">resonates</span></h1>
                    
                    <div className="feature-preview">
                        <p>We create compelling visual identities that capture your brand's essence and connect with your audience.</p>
                    </div>

                    <div className="cta-group">
                        <Link to="/contact" className="design-button">
                            Learn More
                            <span className="button-arrow">→</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Design;