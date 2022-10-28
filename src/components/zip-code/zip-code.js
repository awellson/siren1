import React, { useState } from 'react';
import Modal from '../modal';

import './zip-code.css';
import ModalForm from '../modal-form';

export const ZipCode = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((prevState) => !prevState);
  };

  return (
    <div className="zipCode">
      <div className="zipCode__title">What is your ZIP Code?</div>
      <input className="input" id="zip" name="zip" type="text" placeholder="Enter ZIP Code" pattern="[0-9]*" />
      <div className="zipCode__hint">Free, no-obligation estimates.</div>
      <button id="button_zip" onClick={toggleModal} className="button zipCode__button">
        Get estimate
      </button>

      <Modal show={showModal} onClose={toggleModal}>
        {/* onFinish={toggleModal} was left for validation */}
        <ModalForm />
      </Modal>
    </div>
  );
};

export default ZipCode;
