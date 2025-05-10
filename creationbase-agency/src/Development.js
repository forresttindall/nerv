import React from 'react';
import { Link } from 'react-router-dom';
import './Development.css';

const Development = () => {
    // Use process.env.PUBLIC_URL to reference files in the public folder
    const developmentImage = process.env.PUBLIC_URL + '/Images/arrowleaf.JPG';
    
    return (
        <section className="development-section" id="development">
            <div className="development-content">
                <div className="development-text">
                    <span className="eyebrow">Web Development</span>
                    <h1 className="headline">Custom websites that convert visitors <span className="gradient">into customers</span></h1>
                    
                    <div className="feature-preview">
                        <p>We build user-focused web experiences that drive action. Every element is strategically designed to engage your audience and guide them toward conversion.</p>
                    </div>

                    <div className="cta-group">
                        <Link to="/contact" className="development-button">
                            Learn More
                            <span className="button-arrow">→</span>
                        </Link>
                    </div>
                </div>

                <div className="development-image">
                    <img src={developmentImage} alt="Web Development Services" />
                </div>
            </div>
        </section>
    );
};

export default Development;