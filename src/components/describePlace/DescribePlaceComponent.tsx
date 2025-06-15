import React from 'react';
import './DescribePlaceComponent.css';

interface DescribePlaceProps {
  imageUrl: string;
  title: string;
  description: string;
  address: string;
  alt?: string;
}

const DescribePlaceComponent: React.FC<DescribePlaceProps> = ({
  imageUrl,
  title,
  description,
  address,
  alt
}) => {
  return (
    <div className="info-card">
      <div className="image-container">
        <img
          src={imageUrl}
          alt={alt || title}
          className="card-image"
        />
      </div>
      <div className="content-container">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <p className="card-address">{address}</p>
      </div>
    </div>
  );
};

export default DescribePlaceComponent;