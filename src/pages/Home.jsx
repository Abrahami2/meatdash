// src/pages/Home.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba',
      alt: 'Premium cuts of steak',
      title: 'Premium Dry-Aged Ribeye'
    },
    {
      image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f',
      alt: 'Eco-friendly meat delivery packaging',
      title: 'Sustainable Packaging'
    },
    {
      image: 'https://images.unsplash.com/photo-1514986888952-8cd320577b68',
      alt: 'Happy chef preparing our premium meat',
      title: 'Chef-Approved Quality'
    }
  ];

  const featuredProducts = [
    {
      id: 1,
      name: 'Dry-Aged Ribeye',
      price: 49.99,
      image: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976',
      description: 'Perfectly marbled and aged for exceptional flavor.'
    },
    {
      id: 2,
      name: 'Heritage Pork Chops',
      price: 29.99,
      image: 'https://images.unsplash.com/photo-1560781290-7dc94c0f8f4f',
      description: 'From heritage breeds raised with care for exceptional taste.'
    },
    {
      id: 3,
      name: 'Organic Free-Range Chicken',
      price: 24.99,
      image: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781',
      description: 'Pasture-raised chicken with no antibiotics or hormones.'
    },
    {
      id: 4,
      name: 'New Zealand Rack of Lamb',
      price: 39.99,
      image: 'https://images.unsplash.com/photo-1602470521006-aaea8b2f370d',
      description: 'Tender, grass-fed lamb from the pristine meadows of New Zealand.'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="home">
      <section className="hero">
        <div className="slider">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="slide-content">
                <h2>{slide.title}</h2>
              </div>
            </div>
          ))}
          <div className="slider-navigation">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              ></span>
            ))}
          </div>
        </div>
        <div className="hero-content">
          <h1>Premium Meat, Delivered to Your Doorstep</h1>
          <p>Ethically Sourced. Uncompromising Quality. Effortless Convenience.</p>
          <div className="cta-buttons">
            <Link to="/products" className="btn primary">Shop Now</Link>
            <Link to="/products#subscription" className="btn secondary">Explore Subscription Plans</Link>
          </div>
        </div>
      </section>

      {/* Rest of the Home component content */}
      {/* (Feature sections, product carousel, etc.) */}
    </div>
  );
}

export default Home;