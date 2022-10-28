import React from 'react'
import ZipCode from '../zip-code';

import icon from '../../svg/form-pig.svg'

import './zip-form.css'

const ZipForm = () => {
    return (
        <div className="zipForm">
            <div className="container zipForm__container">
                <div className="zipForm__info">
                    <img className="zipForm__info_img" src={icon} alt="icon-form" />
                    <span className="zipForm__info_text">You will be surprised how affordable gutter guards are!</span>
                </div>
                <div className="zipForm__title">
                    See How Much Gutter Guards Cost In The XX, XXX Area
                </div>
                <div className="zipForm__content">
                    <ZipCode />
                </div>
            </div>
        </div>
    )
};

export default ZipForm;