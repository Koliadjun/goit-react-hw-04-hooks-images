import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import React, { useState } from 'react';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Modal from './components/Modal/Modal';
import { ToastContainer } from 'react-toastify';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [url, setUrl] = useState('');

  const onSubmitHandler = searchQuery => {
    setSearchQuery(searchQuery);
  };
  const onCloseHandler = url => {
    setShowModal(showModal => !showModal);
    setUrl(url);
  };

  return (
    <>
      <Searchbar onSubmit={onSubmitHandler} />
      <ImageGallery searchQuery={searchQuery} onClick={onCloseHandler} />
      {showModal && <Modal url={url} onClose={onCloseHandler} />}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
