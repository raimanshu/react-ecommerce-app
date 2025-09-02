import React from 'react';
import CategoryCard from '../../components/category/CategoryCard';

const fakeItems = [
    {
        title: 'JavaScript',
        image: 'https://source.unsplash.com/400x300/?javascript',
        description: 'Explore JS articles and tutorials.',
    },
    {
        title: 'React',
        image: 'https://source.unsplash.com/400x300/?react',
        description: 'Learn React framework concepts.',
    },
    {
        title: 'Tailwind CSS',
        image: 'https://source.unsplash.com/400x300/?tailwind',
        description: 'Style with Tailwind utilities.',
    },
    {
        title: 'Node.js',
        image: 'https://source.unsplash.com/400x300/?nodejs',
        description: 'Server-side JS with Node.',
    },
];

const CategoryPage = () => {
    const categoryName = "Frontend Development";

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">{categoryName}</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {fakeItems.map((item, idx) => (
                        <CategoryCard
                            key={idx}
                            title={item.title}
                            image={item.image}
                            description={item.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CategoryPage;
