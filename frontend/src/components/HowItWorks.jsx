import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 2H10a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6L16 2Z"></path>
          <path d="M16 2v4h4"></path>
          <path d="m9 12 2 2 4-4"></path>
        </svg>
      ),
      title: 'Choose Your Plan',
      desc: 'Select a meal schedule that fits your life—from daily lunches to curated weekend feasts.'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 13.8V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3.8"></path>
          <path d="M6 10H4a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h2"></path>
          <path d="M18 10h2a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-2"></path>
          <path d="M6 13a4 4 0 0 0 12 0"></path>
          <path d="M12 17v4"></path>
          <path d="M9 21h6"></path>
        </svg>
      ),
      title: 'Kitchen Crafting',
      desc: 'Our partner artisans prepare your meals using traditional techniques and fresh, local sourcing.'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 10 17 10"></path>
          <path d="M17 10c.5-4.4 5-5.9 5-5.9"></path>
          <path d="M17 10c4.4.5 5.9 5 5.9 5"></path>
          <path d="M17 10c-.5 4.4-5 5.9-5 5.9"></path>
          <path d="M17 10c-4.4-.5-5.9-5-5.9-5"></path>
          <path d="M11 20s-2-2-2-5"></path>
          <path d="M11 20s2-2 2-5"></path>
        </svg>
      ),
      title: 'Eco-Friendly Drop',
      desc: 'Delivered in zero-waste reusable containers. We pick them up, clean them, and repeat the cycle.'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container">
        <h2 className="section-title">How It Works</h2>
        <div className="how-it-works-grid">
          {steps.map((step, index) => (
            <div key={index} className="work-card">
              <div className="card-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
