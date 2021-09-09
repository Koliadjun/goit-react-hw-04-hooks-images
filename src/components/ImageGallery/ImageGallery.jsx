import Loader from 'react-loader-spinner';
import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Button from '../Button/Button';
import { toast } from 'react-toastify';

const BASE_URL =
  'https://pixabay.com/api/?key=21859893-eed1f1d786560e2667ad1f26b&image_type=photo&orientation=horizontal';
const STATUS = {
  idle: 'idle',
  pending: 'pending',
  rejected: 'rejected',
  resolved: 'resolved',
};
const options = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};
function ImageGallery({ searchQuery, onClick }) {
  const [images, setImage] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage] = useState(12);
  const [status, setStatus] = useState(STATUS.idle);

  const fetchCallBack = useCallback(
    (page = 1) => {
      setStatus(STATUS.pending);
      return fetch(
        `${BASE_URL}&q=${searchQuery}&per_page=${perPage}&page=${page}`,
      )
        .then(r => r.json())
        .then(data => {
          if (data.hits.length === 0) {
            throw new Error(`Немає фото за пошуковим запитом "${searchQuery}"`);
          } else {
            return data;
          }
        });
    },
    [perPage, searchQuery],
  );

  useEffect(() => {
    if (searchQuery !== '') {
      fetchCallBack()
        .then(data => {
          setImage([...data.hits]);
          setPage(1);
          setStatus(STATUS.resolved);
        })
        .catch(errorCatch => {
          setStatus(STATUS.rejected);
          toast.error(`${errorCatch.message}`, options);
        });
    }
  }, [searchQuery, fetchCallBack]);

  useEffect(() => {
    if (page > 1) {
      fetchCallBack(page)
        .then(data => {
          setImage(prevState => {
            return [...prevState, ...data.hits];
          });
          setStatus(STATUS.resolved);
        })
        .then(() => {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
        })
        .catch(errorCatch => {
          setStatus(STATUS.rejected);
          toast.error(`${errorCatch.message}`, options);
        });
    }
  }, [page, searchQuery, fetchCallBack]);

  const loadMoreClickHandler = () => {
    setPage(prevState => prevState + 1);
  };

  if (status === STATUS.idle) {
    return <h2 className={'title'}>Введіть пошуковий запит</h2>;
  }
  if (status === STATUS.pending) {
    return (
      <div className="loaderWrapper">
        <Loader type="ThreeDots" color="#00BFFF" height={100} width={100} />
      </div>
    );
  }
  if (status === STATUS.rejected) {
    setTimeout(() => {
      setStatus(STATUS.idle);
    }, 5000);
    return <></>;
  }
  if (status === STATUS.resolved) {
    return (
      <>
        <ul className="ImageGallery">
          {images.map(image => (
            <ImageGalleryItem
              key={image.id}
              src={image.webformatURL}
              largeImg={image.largeImageURL}
              onClick={onClick}
            />
          ))}
        </ul>
        <div className="buttonWrapper">
          <Button onClick={loadMoreClickHandler}>Load more</Button>
        </div>
      </>
    );
  }
}

ImageGallery.propTypes = { searchQuery: PropTypes.string };
export default ImageGallery;
