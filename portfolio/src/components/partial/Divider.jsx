import React, { useEffect, useRef } from 'react';
import './Divider.css';

const Divider = () => {
  const dividerRef = useRef(null);

  useEffect(() => {
    const divider = dividerRef.current;
    if (!divider) return;

    const handleMouseOver = () => {
      const shapes = divider.querySelectorAll('.geometric-shape');
      shapes.forEach(shape => {
        const randomX = Math.random() * 20 - 10;
        const randomY = Math.random() * 20 - 10;
        const randomRotate = Math.random() * 45 - 22.5;
        
        shape.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomRotate}deg)`;
      });
    };

    const handleMouseOut = () => {
      const shapes = divider.querySelectorAll('.geometric-shape');
      shapes.forEach(shape => {
        if (shape.classList.contains('shape-2')) {
          shape.style.transform = 'rotate(45deg)';
        } else {
          shape.style.transform = 'none';
        }
      });
    };

    divider.addEventListener('mouseover', handleMouseOver);
    divider.addEventListener('mouseout', handleMouseOut);

    return () => {
      divider.removeEventListener('mouseover', handleMouseOver);
      divider.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <div className="geometric-divider" ref={dividerRef}>
      <div className="divider-container">
        <div className="divider-line"></div>
        <div className="digital-line"></div>
        <div className="geometric-shape shape-1"></div>
        <div className="geometric-shape shape-2"></div>
        <div className="geometric-shape shape-3"></div>
        <div className="geometric-shape shape-4"></div>
        <div className="binary binary-1">01011001</div>
        <div className="binary binary-2">10100110</div>
        <div className="dots-grid">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
        <div className="particle"></div>
      </div>
    </div>
  );
};

export default Divider;
