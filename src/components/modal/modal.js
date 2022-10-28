import React from 'react';
import PropTypes from 'prop-types';
import './modal.css';

const Modal = ({ show = false, children, onClose = () => {} }) => {
  return (
    <div className="modal" style={{ opacity: show ? 1 : 0, pointerEvents: show ? 'all' : 'none' }}>
      <button title="Close" className="modal__close" onClick={onClose}></button>

      {show && <div className="modal__body">{children}</div>}
    </div>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func,
};

export default Modal;
