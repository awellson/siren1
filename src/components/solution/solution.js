import React from 'react';
import lifeTime from '../../svg/lifetime.svg';
import modernHouse from '../../svg/modern-house.svg';
import savings from '../../svg/savings.svg';
import rating from '../../svg/rating.svg';

import './solution.css';

const Solution = () => {
  return (
    <div className="solution">
      <div className="container solution_container">
        <div className="solution__holder">
          <img src={lifeTime} alt="lifeTime" />
          <p className="solution__info">Lifetime warranty with 100% no-clog guarantee</p>
        </div>
        <div className="solution__holder">
          <img src={modernHouse} alt="modernHouse" />
          <p className="solution__info">Fits most homes</p>
        </div>
        <div className="solution__holder">
          <img src={savings} alt="savings" />
          <p className="solution__info">Installs over existing gutters saving you thousands</p>
        </div>
        <div className="solution__holder">
          <img src={rating} alt="rating" />
          <div className="solution__info">
            <div className="rating">
              <span>☆</span>
              <span>☆</span>
              <span>☆</span>
              <span>☆</span>
              <span>☆</span>
            </div>
            Сustomer rating
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution;
