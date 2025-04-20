// src/pages/About.jsx
function About() {
    return (
      <div className="about-page">
        <section className="about-hero">
          <h1>About MeatDash</h1>
          <p>Premium meat delivery with a purpose.</p>
        </section>
  
        <section className="our-story">
          <h2>Our Story</h2>
          <div className="story-content">
            <div className="story-image">
              <img src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c" alt="MeatDash founder" />
            </div>
            <div className="story-text">
              <p>
                MeatDash was founded in 2025 by Abraham Hamitou, a passionate foodie and software 
    engineer studying at Florida Atlantic University. Frustrated by the lack of convenient, 
    high-quality meat delivery options, Abraham combined his technical expertise and love 
    for business to create a solution.
              </p>
              <p>
                What started as a small operation serving a handful of neighborhoods has grown into 
                a trusted service delivering premium cuts to homes and businesses across the city. 
                Our commitment to quality, sustainability, and convenience remains unwavering.
              </p>
            </div>
          </div>
        </section>
  
        <section className="our-values">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-award"></i>
              </div>
              <h3>Quality First</h3>
              <p>Every cut meets rigorous freshness and safety standards.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-leaf"></i>
              </div>
              <h3>Sustainability</h3>
              <p>Zero-waste packaging and partnerships with eco-conscious farms.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-hands-helping"></i>
              </div>
              <h3>Community</h3>
              <p>Supporting local producers and reducing food miles.</p>
            </div>
          </div>
        </section>
  
        <section className="meet-team">
          <h2>Meet the Team</h2>
          <div className="team-members">
            <div className="team-member">
            <img src="/src/abe.jpeg" alt="CEO" />              
            <h3>Abraham Hamitou</h3>
              <p className="position">Founder & CEO</p>
              <p className="bio">
              A passionate foodie and student at Florida Atlantic University. As a software engineer 
    with a love for business, Abraham combines technical expertise with entrepreneurial 
    vision to deliver premium meats to discerning customers.
              </p>
            </div>
            <div className="team-member">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2" alt="CTO" />
              <h3>Jane Doe</h3>
              <p className="position">CTO</p>
              <p className="bio">
                With a background in logistics and e-commerce, Jane built our 
                cutting-edge platform that ensures timely deliveries and a seamless experience.
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
  
  export default About;