// src/pages/Products.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Products() {
  const [activeCategory, setActiveCategory] = useState('beef');
  
  const productCategories = {
    beef: [
      { id: 1, name: 'Dry-Aged Ribeye', price: 49.99, image: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976', description: 'Perfectly marbled and aged for exceptional flavor.' },
      { id: 2, name: 'Wagyu Striploin', price: 79.99, image: 'https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1', description: 'Exquisitely marbled Japanese-style beef for the ultimate steak experience.' },
      { id: 3, name: 'Grass-Fed Ground Beef', price: 14.99, image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f', description: 'Lean and flavorful ground beef from pasture-raised cattle.' },
    ],
    poultry: [
      { id: 4, name: 'Organic Free-Range Chicken', price: 24.99, image: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781', description: 'Pasture-raised chicken with no antibiotics or hormones.' },
      { id: 5, name: 'Turkey Breast', price: 19.99, image: 'https://images.unsplash.com/photo-1574672280600-4accfa5b6f98', description: 'Juicy, all-natural turkey breast perfect for sandwiches or roasting.' },
    ],
    pork: [
      { id: 6, name: 'Heritage Pork Chops', price: 29.99, image: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55', description: 'From heritage breeds raised with care for exceptional taste.' },
      { id: 7, name: 'Berkshire Bacon', price: 15.99, image: 'https://images.unsplash.com/photo-1529856426070-e610ede5a2fd', description: 'Thick-cut, smoky bacon from premium Berkshire pork.' },
    ],
    lamb: [
      { id: 8, name: 'New Zealand Rack of Lamb', price: 39.99, image: 'https://images.unsplash.com/photo-1534177616072-ef7dc120449d', description: 'Tender, grass-fed lamb from the pristine meadows of New Zealand.' },
      { id: 9, name: 'Ground Lamb', price: 16.99, image: 'https://tillmansmeats.com/cdn/shop/products/144---Ground-Lamb4_1024x1024@2x.jpg?v=1558738667', description: 'Versatile ground lamb for burgers, meatballs, and more.' },
    ]
  };

  const subscriptionPlans = [
    {
      id: 'weekly',
      name: 'Weekly Gourmet Box',
      price: 150,
      description: 'Curated selection of seasonal cuts delivered weekly.',
      features: ['Premium seasonal cuts', 'Chef-created recipe cards', 'Free delivery']
    },
    {
      id: 'monthly',
      name: 'Monthly Bulk Saver',
      price: 500,
      description: 'Discounted bulk orders for households delivered monthly.',
      features: ['Save 10% on all items', 'Customizable selections', 'Free vacuum-sealing']
    },
    {
      id: 'chef',
      name: 'Chef\'s Choice',
      price: null,
      description: 'Customizable plans for restaurants.',
      features: ['Volume discounts', 'Dedicated account manager', 'Flexible delivery schedule']
    }
  ];

  const valueAddedServices = [
    {
      id: 'vacuum',
      name: 'Vacuum-Sealed Packaging',
      price: 5,
      description: 'Ensure maximum freshness and storage life.'
    },
    {
      id: 'express',
      name: 'Express Delivery',
      price: 15,
      description: '2-hour delivery slots to fit your schedule.'
    },
    {
      id: 'custom',
      name: 'Custom Cutting & Trimming',
      price: 0,
      description: 'Complimentary for bulk orders.'
    }
  ];

  return (
    <div className="products-page">
      <section className="product-hero">
        <h1>Our Premium Selections</h1>
        <p>From farm to table, experience the finest cuts available.</p>
      </section>

      <section className="premium-cuts" id="premium-cuts">
        <h2>Premium Cuts</h2>
        <div className="category-tabs">
          <button 
            className={activeCategory === 'beef' ? 'active' : ''} 
            onClick={() => setActiveCategory('beef')}
          >
            Beef
          </button>
          <button 
            className={activeCategory === 'poultry' ? 'active' : ''} 
            onClick={() => setActiveCategory('poultry')}
          >
            Poultry
          </button>
          <button 
            className={activeCategory === 'pork' ? 'active' : ''} 
            onClick={() => setActiveCategory('pork')}
          >
            Pork
          </button>
          <button 
            className={activeCategory === 'lamb' ? 'active' : ''} 
            onClick={() => setActiveCategory('lamb')}
          >
            Lamb
          </button>
        </div>

        <div className="product-grid">
          {productCategories[activeCategory].map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p className="price">${product.price.toFixed(2)}</p>
              <p className="description">{product.description}</p>
              <div className="product-actions">
                <button className="btn primary">Add to Cart</button>
                <button className="btn secondary">Quick View</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="subscription-plans" id="subscription">
        <h2>Subscription Plans</h2>
        <div className="plan-cards">
          {subscriptionPlans.map(plan => (
            <div key={plan.id} className="plan-card">
              <h3>{plan.name}</h3>
              <p className="price">
                {plan.price ? `$${plan.price}/${plan.id === 'weekly' ? 'week' : 'month'}` : 'Contact for pricing'}
              </p>
              <p className="description">{plan.description}</p>
              <ul className="features">
                {plan.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <button className="btn primary">
                {plan.price ? 'Subscribe Now' : 'Contact Us'}
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="value-added-services">
        <h2>Value-Added Services</h2>
        <div className="service-cards">
          {valueAddedServices.map(service => (
            <div key={service.id} className="service-card">
              <h3>{service.name}</h3>
              <p className="price">
                {service.price > 0 ? `$${service.price}` : 'Complimentary*'}
              </p>
              <p className="description">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="business-services">
        <h2>For Businesses</h2>
        <div className="business-info">
          <div className="business-feature">
            <h3>Bulk Order Discounts</h3>
            <p>Save up to 20% on recurring orders.</p>
          </div>
          <div className="business-feature">
            <h3>Dedicated Account Manager</h3>
            <p>Personalized support for hotels and caterers.</p>
          </div>
        </div>
        <div className="business-cta">
          <p>Looking for premium meat solutions for your restaurant or catering business?</p>
          <Link to="/contact" className="btn primary">Contact Our Business Team</Link>
        </div>
      </section>
    </div>
  );
}

export default Products;