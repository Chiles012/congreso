import React, { useState, useEffect, useRef } from "react";
import { ArrowRightSquareFill , ArrowLeftSquareFill} from 'react-bootstrap-icons';
interface Props {
  images: string[];
  autoScrollInterval?: number;
}

const ImageCarousel: React.FC<Props> = ({ images, autoScrollInterval = 0 }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const intervalId = useRef<NodeJS.Timeout | null>(null);

  const handlePrevClick = () => {
    if (currentImageIndex === 0) {
      setCurrentImageIndex(images.length - 5);
    } else {
      setCurrentImageIndex(currentImageIndex - 1);
    }
    clearInterval(intervalId.current!);
  };

  const handleNextClick = () => {
    if (currentImageIndex === images.length - 5 ) {
      setCurrentImageIndex(0);
    } else {
      setCurrentImageIndex(currentImageIndex + 1);
    }
    clearInterval(intervalId.current!);
  };

  useEffect(() => {
    if (autoScrollInterval > 0) {
      intervalId.current = setInterval(() => {
        handleNextClick();
      }, autoScrollInterval);
    }
    return () => {
      clearInterval(intervalId.current!);
    };
  }, [autoScrollInterval, handleNextClick]);

  const renderImages = () => {
    return images.slice(currentImageIndex, currentImageIndex + 5).map((image, index) => (
      <img key={index} src={image} alt="carousel"  className="card_box" />
    ));
  };

  return (
    <div className="carrousel-content">
      <h2 className="carrousel-title">Cursos Anteriores</h2>
      <div>
      <button className="carrousel-button" onClick={handlePrevClick}><ArrowLeftSquareFill/></button>
      </div>
     
      <div className="carrousel-cards">
        {renderImages()}
      </div>
      <button className="carrousel-button-1" onClick={handleNextClick}><ArrowRightSquareFill/></button>
    </div>
  );
};

export default ImageCarousel;
