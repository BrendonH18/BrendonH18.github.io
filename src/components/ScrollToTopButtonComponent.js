import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

const ScrollToTopButtonComponent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button
      className={`scroll-to-top rounded ${isVisible ? "" : "visually-hidden"}`}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.5s ease-in-out",
      }}
      variant="secondary"
      onClick={scrollToTop}
    >
      <i className="fas fa-angle-up"></i>
    </Button>
  );
};

export default ScrollToTopButtonComponent;
