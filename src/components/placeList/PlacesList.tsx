import React from 'react';
import DescribePlaceComponent from '../describePlace/DescribePlaceComponent';
import './PlacesList.css';

interface PlaceData {
    id: string | number;
    imageUrl: string;
    title: string;
    description: string;
    address: string;
    alt?: string;
}

interface PlacesListProps {
    title: string;
    places: PlaceData[];
}

const PlacesList: React.FC<PlacesListProps> = ({ title, places }) => {
    return (
        <div className="places-list-container">
            <h1 className="places-list-title">{title}</h1>
            <div className="places-list-scroll">
                {places.map((place) => (
                    <DescribePlaceComponent
                        key={place.id}
                        imageUrl={place.imageUrl}
                        title={place.title}
                        description={place.description}
                        address={place.address}
                        alt={place.alt}
                    />
                ))}
            </div>
        </div>
    );
};

export default PlacesList;