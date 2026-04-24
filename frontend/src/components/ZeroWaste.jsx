import React from 'react';

const ZeroWaste = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="zero-waste">
          <div className="zero-waste-img">
            <img src="/images/zero_waste.png" alt="Stainless Steel Tiffins" style={{ borderRadius: '8px' }} />
          </div>
          <div className="zero-waste-content">
            <h2>Zero Waste Living</h2>
            <span className="quote">"Good for your soul, better for our planet"</span>
            
            <div className="mission-item">
              <div className="mission-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <div className="mission-text">
                <h4>No Single-Use Plastic</h4>
                <p>Every meal arrives in high-grade stainless steel tiffins, eliminating thousands of plastic containers every month.</p>
              </div>
            </div>

            <div className="mission-item">
              <div className="mission-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
                </svg>
              </div>
              <div className="mission-text">
                <h4>Artisanal Sourcing</h4>
                <p>We source directly from local farmers, reducing the carbon footprint and ensuring the freshest ingredients possible.</p>
              </div>
            </div>

            <button className="btn btn-green">Our Sustainability Roadmap</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZeroWaste;
