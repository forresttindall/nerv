import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import { blastConfetti } from './utils/confetti';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    emailjs.sendForm(
      'service_9z4q1rg',
      'template_l2zhyqf',
      form.current,
      'ZpTIIyS2dofg5_9Ux',
      {
        reply_to: form.current.user_email.value
      }
    )
      .then((result) => {
        setSubmitStatus('success');
        form.current.reset();
        blastConfetti();
      }, (error) => {
        setSubmitStatus('error');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="contact-container" id="contact">
      <div className="contact-content">
        <span className="contact-eyebrow">Contact Us</span>
        <h1 className="contact-title">
          Let's Build <span className="gradient">Something Great</span> Together
        </h1>
        <p className="contact-description">
          Have a project in mind? We'd love to hear about it. Share your ideas and let's 
          explore how we can create something extraordinary for you.
        </p>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="form-input"
          />
          
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="form-input"
          />
          
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="form-input"
          />
          
          <textarea
            name="message"
            placeholder="Tell us about your project"
            required
            className="form-input form-textarea"
          />

          <button 
            type="submit" 
            className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
            <span className="button-arrow">→</span>
          </button>

          {submitStatus === 'success' && (
            <div className="status-message success">
              Message sent successfully! We'll get back to you soon.
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="status-message error">
              Oops! Something went wrong. Please try again.
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
