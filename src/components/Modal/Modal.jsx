import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';

const modalDiv = document.querySelector('#modal-root');
function Modal({ url, onClose }) {
  const keyPressHandler = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };
  const backDropClickHandle = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };
  useEffect(() => {
    window.addEventListener('keydown', keyPressHandler);
    return () => window.removeEventListener('keydown', keyPressHandler);
  });

  return createPortal(
    <div className="Overlay" onClick={backDropClickHandle}>
      <div className="Modal">
        <img src={url} alt="large img" />
      </div>
    </div>,
    modalDiv,
  );
}

Modal.propTypes = {
  onClick: PropTypes.func.isRequired,
  scr: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
export default Modal;
