// components/Carousel.tsx

import { FC } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styles from './carousel.module.css';

const Carousel: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles['slider-wrapper']}>
        <button id="prev-slide" className={`${styles['slide-button']} material-symbols-rounded`}>
         <FaChevronLeft/>
        </button>
        {/* <ul className={styles['image-list']}>
          <img className={styles['image-item']} src="assets/images/img-1.jpg" alt="img-1" />
          <img className={styles['image-item']} src="images/img-2.jpg" alt="img-2" />
          <img className={styles['image-item']} src="images/img-3.jpg" alt="img-3" />
          <img className={styles['image-item']} src="images/img-4.jpg" alt="img-4" />
          <img className={styles['image-item']} src="images/img-5.jpg" alt="img-5" />
          <img className={styles['image-item']} src="images/img-6.jpg" alt="img-6" />
          <img className={styles['image-item']} src="images/img-7.jpg" alt="img-7" />
          <img className={styles['image-item']} src="images/img-8.jpg" alt="img-8" />
          <img className={styles['image-item']} src="images/img-9.jpg" alt="img-9" />
          <img className={styles['image-item']} src="images/img-10.jpg" alt="img-10" />
        </ul> */}
        <button id="next-slide" className={`${styles['slide-button']} material-symbols-rounded`}>
          {/* <FaChevronRight/> */}
        </button>
      </div>
      <div className={styles['slider-scrollbar']}>
        <div className={styles['scrollbar-track']}>
          <div className={styles['scrollbar-thumb']}></div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
