import React from 'react';

const CTA = () => {
  return (
    <section className="cta-section" style={{ backgroundImage: `url('/images/cta_bg.png')` }}>
      <div className="container">
        <h2>Ready for a better lunch ritual?</h2>
        <p>Join 5,000+ conscious diners who have traded processed meals for the warmth of home-cooked artisanal food.</p>
        <button className="btn btn-primary">Start Your Subscription</button>
      </div>
    </section>
  );
};

export default CTA;
