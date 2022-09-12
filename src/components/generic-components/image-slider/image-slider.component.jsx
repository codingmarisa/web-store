import { useState } from 'react';
import './image-slider.styles.css';

function ImageSlider({ slides }) {
  const { items } = slides;
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousSlide = () => {
    if (currentIndex === 0) {
      setCurrentIndex(items.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const nextSlide = () => {
    if (currentIndex === items.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="image-slider-container">
      <div
        className="slider-div"
        style={{
          backgroundImage: `url(${items[currentIndex].image})`,
        }}
      />
      <div className="slider-arrow left-arrow" onClick={previousSlide}>
        {'<'}
      </div>
      <div className="slider-arrow right-arrow" onClick={nextSlide}>
        {'>'}
      </div>
      <div className="slider-dots-container">
        {items.slice(0, 5).map((item, itemIndex) => (
          <div
            className="slider-dot"
            key={'slide' + itemIndex}
            onClick={() => goToSlide(itemIndex)}
          >
            +
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
