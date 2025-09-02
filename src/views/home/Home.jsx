// pages/Home.jsx
import React from "react";
import HeroBanner from "../../components/home/HeroBanner";
import CategoryGrid from "../../components/home/CategoryGrid";
import ProductGrid from "../../components/home/ProductGrid";

const Home = () => {
  return (
    <>
      {/* <main className="bg-gray-50 min-h-screen">
        <HeroBanner />
        <CategoryGrid />
        <ProductGrid />
    </main> */}

      <div className="w-full">
        {/* 🔹 Navbar */}
        <header className="bg-white shadow sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-indigo-600">ShopEase</h1>
            <nav className="space-x-6 hidden md:block">
              <a href="#" className="text-gray-600 hover:text-indigo-600">
                Home
              </a>
              <a href="#" className="text-gray-600 hover:text-indigo-600">
                Shop
              </a>
              <a href="#" className="text-gray-600 hover:text-indigo-600">
                Deals
              </a>
              <a href="#" className="text-gray-600 hover:text-indigo-600">
                Contact
              </a>
            </nav>
            <div className="flex space-x-4">
              <button className="relative">
                🛒
                <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full px-1">
                  3
                </span>
              </button>
              <button>👤</button>
            </div>
          </div>
        </header>

        {/* 🔹 Hero Banner */}
        <section className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-center py-24 px-6">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 animate-slide-down">
            Discover the Best Deals
          </h2>
          <p className="text-lg mb-6">
            Trendy products, unbeatable prices, and fast delivery at your
            fingertips.
          </p>
          <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold shadow hover:scale-105 transition">
            Shop Now
          </button>
        </section>

        {/* 🔹 Categories */}
        <section className="max-w-7xl mx-auto py-16 px-6">
          <h3 className="text-2xl font-bold text-center mb-10">
            Shop by Categories
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {["Electronics", "Fashion", "Home & Kitchen", "Sports"].map(
              (cat, i) => (
                <div
                  key={i}
                  className="bg-gray-100 rounded-xl shadow hover:shadow-lg p-6 text-center hover:scale-105 transition"
                >
                  <img
                    src={`https://source.unsplash.com/200x200/?${cat}`}
                    alt={cat}
                    className="mx-auto mb-3 rounded"
                  />
                  <h4 className="font-semibold">{cat}</h4>
                </div>
              )
            )}
          </div>
        </section>

        {/* 🔹 Featured Products */}
        <section className="bg-gray-50 py-16 px-6">
          <h3 className="text-2xl font-bold text-center mb-10">
            Featured Products
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-md hover:shadow-lg p-4 hover:scale-105 transition"
              >
                <img
                  src={`https://source.unsplash.com/300x300/?product,${i}`}
                  alt="Product"
                  className="rounded mb-4"
                />
                <h4 className="font-semibold">Product {i + 1}</h4>
                <p className="text-gray-600">$ {(i + 1) * 10}</p>
                <button className="w-full mt-3 bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* 🔹 Special Offer */}
        <section className="bg-indigo-600 text-white py-16 px-6 text-center">
          <h3 className="text-3xl font-bold mb-4">Limited Time Offer</h3>
          <p className="mb-6">
            Get up to 50% off on selected items. Don’t miss out!
          </p>
          <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:scale-105 transition">
            Shop Deals
          </button>
        </section>

        {/* 🔹 Testimonials */}
        <section className="max-w-7xl mx-auto py-16 px-6">
          <h3 className="text-2xl font-bold text-center mb-10">
            What Our Customers Say
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Great products!",
              "Amazing delivery speed!",
              "Best online store ever!",
            ].map((review, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition"
              >
                <p className="text-gray-600 mb-4">“{review}”</p>
                <div className="flex items-center space-x-3">
                  <img
                    src={`https://randomuser.me/api/portraits/${
                      i % 2 === 0 ? "men" : "women"
                    }/${i + 20}.jpg`}
                    alt="Customer"
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold">Customer {i + 1}</h4>
                    <p className="text-sm text-gray-500">Verified Buyer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 🔹 Newsletter */}
        <section className="bg-gray-100 py-16 px-6 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Subscribe to our Newsletter
          </h3>
          <p className="text-gray-600 mb-6">
            Get updates on the latest products and offers.
          </p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 p-3 rounded-l-lg border border-gray-300 outline-none"
            />
            <button className="bg-indigo-600 text-white px-6 rounded-r-lg hover:bg-indigo-700">
              Subscribe
            </button>
          </div>
        </section>

        {/* 🔹 Footer */}
        <footer className="bg-black text-gray-400 text-center py-8 mt-10">
          <p>© {new Date().getFullYear()} ShopEase. All rights reserved.</p>
          <div className="mt-4 space-x-6">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white">
              Contact
            </a>
          </div>
        </footer>
      </div>

      {/* <div className="w-full">
        <section className="bg-gradient-to-r from-amber-700 to-amber-500 text-white py-20 px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Discover Your Next Favorite Coffee Store
          </h1>
          <p className="max-w-2xl mx-auto mb-6 text-lg">
            Explore unique flavors and fresh brews curated by our coffee
            experts.
          </p>
          <button className="bg-white text-amber-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100">
            Get Started
          </button>
        </section>

        <section className="py-16 px-8 grid md:grid-cols-3 gap-8 bg-black text-white text-center">
          {[
            { title: "Fresh Beans", desc: "Sourced from the best farms." },
            { title: "Expert Roasting", desc: "Perfectly roasted daily." },
            { title: "Worldwide Delivery", desc: "Fresh to your doorstep." },
          ].map((f, i) => (
            <div key={i} className="bg-neutral-900 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-400">{f.desc}</p>
            </div>
          ))}
        </section>

        <section className="py-16 px-8 grid md:grid-cols-2 gap-10 items-center">
          <img
            src="https://source.unsplash.com/500x350/?coffee"
            alt="Coffee shop"
            className="rounded-2xl shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <p className="text-gray-600 text-lg">
              We bring people together through coffee. From bean selection to
              roasting and brewing, every step is crafted with passion.
            </p>
          </div>
        </section>

        <section className="py-16 px-8 bg-sky-100 text-center">
          <h2 className="text-3xl font-bold mb-8">Our Team</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
              >
                <img
                  src={`https://randomuser.me/api/portraits/${
                    i % 2 === 0 ? "men" : "women"
                  }/${i + 20}.jpg`}
                  alt="Team member"
                  className="w-24 h-24 mx-auto rounded-full mb-3 object-cover"
                />
                <h4 className="font-semibold">John Doe</h4>
                <p className="text-sm text-gray-500">Barista</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 px-8 bg-black text-white">
          <h2 className="text-3xl font-bold mb-8 text-center">FAQs</h2>
          <div className="max-w-2xl mx-auto space-y-6">
            {[
              {
                q: "What is your return policy?",
                a: "You can return within 30 days.",
              },
              {
                q: "Do you offer support?",
                a: "Yes, 24/7 customer support available.",
              },
              {
                q: "How do I track my order?",
                a: "You will receive a tracking email.",
              },
            ].map((faq, i) => (
              <div key={i} className="bg-neutral-900 rounded-xl p-6 shadow-md">
                <h4 className="font-semibold">{faq.q}</h4>
                <p className="text-gray-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 px-8 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-4">
              Have questions? Reach out to us for any queries or feedback.
            </p>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg border border-gray-300"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg border border-gray-300"
              />
              <textarea
                placeholder="Message"
                rows="4"
                className="w-full p-3 rounded-lg border border-gray-300"
              />
              <button className="bg-amber-700 text-white px-6 py-3 rounded-lg hover:bg-amber-800">
                Send
              </button>
            </form>
          </div>
          <div>
            <iframe
              title="map"
              src="https://maps.google.com/maps?q=New%20Delhi&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-80 rounded-lg shadow-md"
            ></iframe>
          </div>
        </section>

        <footer className="bg-black text-gray-400 text-center py-6">
          <p className="text-sm">
            © {new Date().getFullYear()} Company Name. All rights reserved.
          </p>
        </footer>
      </div> */}
    </>
  );
};

export default Home;
