import React from 'react';

const Hero = () => {
  return (
    <section className="hero" style={{ backgroundImage: `url('/images/hero.png')` }}>
      <div className="container">
        <div className="hero-content">
          <h1>The Warmth of a Home-Cooked Meal, Delivered.</h1>
          <p>Experience authentic regional flavors prepared by local kitchen artisans. Sustainable, healthy, and crafted with the care of a home kitchen.</p>
          <div className="hero-btns">
            <button className="btn btn-primary">Explore Our Plans</button>
            <button className="btn btn-outline">View Menu</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
