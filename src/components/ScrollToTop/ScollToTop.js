import React, { useEffect, useState } from 'react';
import './ScrollToTop.css';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

export default function ScrollToTop() {

    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scorlled upto given distance
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
  
    // Set the top cordinate to 0
    // make scrolling smooth
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };
  
    useEffect(() => {
      window.addEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <div className="scroll-to-top">
          {
            isVisible && 
            (
                <div onClick={scrollToTop}>
                    <Fab size="small" aria-label="scroll back to top" style={{ backgroundColor: "#1976d2", color: "#ffffff" }}>
                      <KeyboardArrowUpIcon />
                    </Fab>
                </div>
            )
          }
        </div>
    );
}