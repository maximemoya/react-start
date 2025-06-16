import React, { useState } from 'react';
import DescribePlaceComponent from '../describePlace/DescribePlaceComponent';
import './PlaceCarousel.css';

interface PlaceData {
    id: number;
    imageUrl: string;
    title: string;
    description: string;
    address: string;
    addressLink?: string;
    alt?: string;
}

interface PlaceCarouselProps {
    places: PlaceData[];
}

const PlaceCarousel: React.FC<PlaceCarouselProps> = ({ places }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? places.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === places.length - 1 ? 0 : prevIndex + 1
        );
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    if (!places || places.length === 0) {
        return <div className="carousel-empty">No places to display</div>;
    }

    return (
        <div className="carousel-container">
            <button
                className="carousel-btn carousel-btn-prev"
                onClick={goToPrevious}
                aria-label="Previous place"
            >
                &#8249;
            </button>

            <div className="carousel-content">
                <DescribePlaceComponent
                    key={places[currentIndex].id}
                    imageUrl={places[currentIndex].imageUrl}
                    title={places[currentIndex].title}
                    description={places[currentIndex].description}
                    address={places[currentIndex].address}
                    addressLink={places[currentIndex].addressLink}
                    alt={places[currentIndex].alt}
                />
            </div>

            <button
                className="carousel-btn carousel-btn-next"
                onClick={goToNext}
                aria-label="Next place"
            >
                &#8250;
            </button>

            <div className="carousel-indicators">
                {places.map((_, index) => (
                    <button
                        key={index}
                        className={`indicator ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default PlaceCarousel;