import React from 'react';
import { useNavigate } from 'react-router-dom';

const NewsletterLink = () => {
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        navigate('/');
        setTimeout(() => {
            const newsletter = document.getElementById('newsletter');
            if (newsletter) {
                newsletter.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    return (
        <a href="/" onClick={handleClick} className="clearfeed-button">
            Join the Waitlist
        </a>
    );
};

export default NewsletterLink; 