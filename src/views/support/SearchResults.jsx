import React, { useState, useEffect } from 'react';
import SearchResultCard from '../../components/widgets/SearchResultCard';

const fakeResults = [
    { title: 'React Guide', description: 'Learn the basics of React.js' },
    { title: 'Tailwind Tutorial', description: 'Styling with Tailwind CSS' },
    { title: 'Routing in React', description: 'Using React Router effectively' },
];

const SearchResults = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSearch = () => {
        setLoading(true);
        // Simulate search delay
        setTimeout(() => {
            const filtered = fakeResults.filter(item =>
                item.title.toLowerCase().includes(query.toLowerCase())
            );
            setResults(filtered);
            setLoading(false);
        }, 1000);
    };

    useEffect(() => {
        if (query.length === 0) setResults([]);
    }, [query]);

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-3xl mx-auto">
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full p-3 rounded border focus:outline-none focus:ring focus:ring-blue-300 mb-4"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                />
                <button
                    onClick={handleSearch}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                    Search
                </button>

                <div className="mt-6 space-y-4">
                    {loading && <p>Loading...</p>}
                    {!loading && results.length === 0 && query !== '' && (
                        <p className="text-gray-600">No results found for "{query}".</p>
                    )}
                    {!loading &&
                        results.map((item, idx) => (
                            <SearchResultCard key={idx} title={item.title} description={item.description} />
                        ))}
                </div>
            </div>
        </div>
    );
};

export default SearchResults;
