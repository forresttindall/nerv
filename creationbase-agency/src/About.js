import React, { useEffect } from 'react';
import './About.css';
import { 
  UserFocus, 
  Shapes 
} from "@phosphor-icons/react";


const About = () => {


  return (
    <div className="about-container" id="about">
      <div className="about-content">
        <span className="about-eyebrow">About Us</span>
        <h1 className="about-title">
          Service that puts <span className="gradient" id="pop">your needs</span> first.
        </h1>
        <p className="about-description">
          At Creationbase, we build brands and websites differently. Starting with you—the client—we create 
          solutions that make a real impact for your business online.
        </p>
        
        <div className="about-grid">
          <div className="about-card">
            <div className="card-header">
              <UserFocus 
                size={24} 
                weight="duotone" 
                style={{
                  fill: 'url(#gradient)',
                  color: 'url(#gradient)'
                }}
              />
              <h3 className="card-title">Built For You</h3>
            </div>
            <p>
              Every design starts with understanding your needs. We create websites and brands that make 
              your business shine, attract more customers, and reflect your unique vision.
            </p>
          </div>
          
          <div className="about-card">
            <div className="card-header">
              <Shapes 
                size={24} 
                weight="duotone" 
                style={{
                  fill: 'url(#gradient)',
                  color: 'url(#gradient)'
                }}
              />
              <h3 className="card-title">Shaped By You</h3>
            </div>
            <p>
              Your feedback shapes our direction. We build web experiences we're proud to showcase, 
              enhancing how you connect with your audience and grow your business.
            </p>
          </div>
        </div>
      </div>

      <svg width="0" height="0">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f09433" />
            <stop offset="20%" stopColor="#e6683c" />
            <stop offset="40%" stopColor="#dc2743" />
            <stop offset="60%" stopColor="#cc2366" />
            <stop offset="80%" stopColor="#bc1888" />
            <stop offset="100%" stopColor="#7b3fff" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default About;