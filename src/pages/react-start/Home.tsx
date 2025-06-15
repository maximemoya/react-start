import React from 'react';
import DescribePlaceComponent from '../../components/describePlace/DescribePlaceComponent';
import PlacesList from '../../components/placeList/PlacesList';

const samplePlaces = [
    {
        id: 1,
        imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400",
        title: "Elegant Downtown Restaurant",
        description: "Experience fine dining in our sophisticated atmosphere with chef-curated menus featuring locally sourced ingredients and exceptional wine pairings that create unforgettable culinary moments.",
        address: "123 Main Street, Downtown District, Metropolitan City, State 12345. Located in the heart of the business district with valet parking and easy access to public transportation.",
        alt: "Elegant restaurant interior with warm lighting"
    },
    {
        id: 2,
        imageUrl: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400",
        title: "Artisan Coffee House & Bakery",
        description: "Start your day with freshly roasted coffee beans and handcrafted pastries in our cozy environment. Perfect spot for meetings, studying, or simply enjoying quality time with friends.",
        address: "456 Oak Avenue, Arts District, Creative Quarter, State 12345. Situated near galleries and studios with outdoor seating and free WiFi for digital nomads.",
        alt: "Cozy coffee shop with rustic wooden tables"
    },
    {
        id: 3,
        imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400",
        title: "Historic Boutique Hotel",
        description: "Luxury accommodation in a beautifully restored 19th-century building. Our rooms blend classic architecture with modern amenities to provide guests with an extraordinary stay experience.",
        address: "789 Heritage Lane, Old Town Historic District, Heritage City, State 12345. Walking distance to museums, theaters, and shopping with concierge services and spa facilities available.",
        alt: "Historic hotel facade with classic architecture"
    },
    {
        id: 4,
        imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400",
        title: "Trendy Shopping Center",
        description: "Discover the latest fashion trends and unique local brands in our modern shopping destination. From high-end boutiques to artisan crafts, find everything you need under one roof.",
        address: "321 Commerce Boulevard, Shopping District, Retail Park, State 12345. Features over 200 stores, food court, cinema, and covered parking with shuttle service to nearby hotels.",
        alt: "Modern shopping mall interior with natural lighting"
    },
    {
        id: 5,
        imageUrl: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400",
        title: "Waterfront Park & Marina",
        description: "Enjoy scenic views and outdoor activities at our beautiful waterfront location. Perfect for families with playgrounds, walking trails, boat rentals, and seasonal events throughout the year.",
        address: "654 Lakeside Drive, Waterfront District, Marina Bay, State 12345. Open daily with picnic areas, fishing spots, and visitor center offering guided tours and equipment rentals.",
        alt: "Peaceful waterfront park with boats and trees"
    },
    {
        id: 6,
        imageUrl: "https://images.unsplash.com/photo-1574791672136-a3b0dab15071?w=400",
        title: "Contemporary Art Gallery",
        description: "Explore cutting-edge contemporary art from local and international artists. Our rotating exhibitions showcase diverse mediums and thought-provoking installations in a stunning architectural space.",
        address: "987 Cultural Avenue, Museum Quarter, Arts District, State 12345. Open Tuesday through Sunday with guided tours, artist talks, and educational workshops for all ages.",
        alt: "Modern art gallery with white walls and sculptures"
    }
];

const Home: React.FC = () => {
    return (
        <div>
            <PlacesList
                title="Amazing Places to Visit"
                places={samplePlaces}
            />
            <DescribePlaceComponent {...samplePlaces[0]} />
        </div>
    );
};

export default Home;