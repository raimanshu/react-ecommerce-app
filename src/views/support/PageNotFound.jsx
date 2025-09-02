import React from 'react';
// import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
            <h1 className="text-6xl font-bold text-blue-600">404</h1>
            <h2 className="text-2xl mt-4 text-gray-800">Page Not Found</h2>
            <p className="mt-2 text-gray-600 text-center max-w-md">
                Sorry, the page you are looking for doesn't exist or has been moved.
            </p>
            {/* <Link
                to="/"
                className="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
                Go Home
            </Link> */}
        </div>
    );
};

export default PageNotFound;
