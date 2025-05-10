import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const useScrollToSection = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId, path = '/') => {
    if (location.pathname !== path) {
      // If we're not on the target page, navigate there first
      navigate(path);
      // Set a flag in sessionStorage to scroll after navigation
      sessionStorage.setItem('scrollTo', sectionId);
    } else {
      // If we're already on the page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    // Check if we need to scroll after navigation
    const scrollTo = sessionStorage.getItem('scrollTo');
    if (scrollTo) {
      sessionStorage.removeItem('scrollTo');
      setTimeout(() => {
        const element = document.getElementById(scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Small delay to ensure the page has rendered
    }
  }, [location]);

  return scrollToSection;
}; 