import React, { useRef } from 'react';
import './stepper.css';
import { useContainerWidth } from '../../hooks/useContainerWidth';

const Stepper = ({ children, step = 0 }) => {
  const containerRef = useRef(null);
  const count = React.Children.count(children);

  const width = useContainerWidth(containerRef);


  return (
    <div ref={containerRef} className="stepper">
      <div className="stepper__container" style={{ width: `${width * count}px`, left: `-${width * step}px` }}>
        {React.Children.map(children, (child, index) => (
          <div className="stepper__item" style={{ width: `${width}px` }} key={index}>
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stepper;
