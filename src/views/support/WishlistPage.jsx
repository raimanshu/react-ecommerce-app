import React, { useState } from 'react';
import WishlistItem from '../../components/widgets/WishlistItem';

const initialWishlist = [
    {
        id: 1,
        title: 'Wireless Headphones',
        price: 89.99,
        image: 'https://source.unsplash.com/160x160/?headphones',
    },
    {
        id: 2,
        title: 'Smartwatch',
        price: 199.99,
        image: 'https://source.unsplash.com/160x160/?smartwatch',
    },
    {
        id: 3,
        title: 'Gaming Mouse',
        price: 59.99,
        image: 'https://source.unsplash.com/160x160/?mouse',
    },
];

const WishlistPage = () => {
    const [wishlist, setWishlist] = useState(initialWishlist);

    const handleRemove = (id) => {
        setWishlist(wishlist.filter((item) => item.id !== id));
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">My Wishlist</h1>

                {wishlist.length === 0 ? (
                    <p className="text-gray-600 text-center mt-10">Your wishlist is empty.</p>
                ) : (
                    <div className="space-y-4">
                        {wishlist.map((item) => (
                            <WishlistItem
                                key={item.id}
                                title={item.title}
                                price={item.price}
                                image={item.image}
                                onRemove={() => handleRemove(item.id)}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default WishlistPage;
