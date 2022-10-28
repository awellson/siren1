import React, { useState } from 'react';
import { useForm } from 'react-hook-form'
import ProgressBar from 'react-bootstrap/ProgressBar';
import Stepper from '../stepper';

import iconBird from '../../svg/modal-bird.svg'
import iconCancel from '../../svg/modal-cancel.svg'
import iconLock from '../../svg/lock.svg'

import './modal-form.css'

const steps = [0, 1];

const ModalForm = ({ onFinish }) => {
  const [step, setStep] = useState(steps[0]);
  const { register, handleSubmit } = useForm();
  const onSubmit = () => alert('wrong username or password');


  return (
    <div className="modalFrom">
      <div className="modalForm__progressbar">
        <ProgressBar now={(100 / steps.length) * (step + 1)} variant="success" />
      </div>

      <Stepper step={step}>
        <div>
          <div className="modalForm__title">Are you homeowner or authrized to make property changes?</div>
          <div className="modalForm__action">
            <div className="modalForm__decide">
              <img src={iconBird} alt="icon" />
              <div className="modalForm__decide_yes">Yes</div>
            </div>
            <div className="modalForm__decide">
              <img src={iconCancel} alt="icon" />
              <div className="modalForm__decide_no">No</div>
            </div>
          </div>
          <button
            onClick={() => {
              setStep((prevStep) => prevStep + 1);
            }}
            className="button modalForm__button"
          >
            Next
          </button>
        </div>
        <div>
          <div className="modalForm__title">Who should I prepare this estimate for?</div>
          <div className="modalForm__sub_title">Your choice: <b>Yes</b></div>
          <form className="modalForm__form" onSubmit={handleSubmit(onSubmit)}>
            <input className="input modalForm__input" id="fullName" {...register("fullName")} type="text" placeholder="Full name" />
            <input className="input modalForm__input" id="email" {...register("email")} type="email" placeholder="Email address" />
          

          {/* onClick={onFinish} was left for validation */}
          <button onClick={onSubmit} className="button modalForm__button">
            Submit
          </button>
          </form>
          <div className="modalForm__info">
            <img src={iconLock} alt="lock"/>
            <span className="modalForm__info_text">Safe, Secure and Confidential</span>
          </div>
        </div>
      </Stepper>
    </div>
  );
};

export default ModalForm;
