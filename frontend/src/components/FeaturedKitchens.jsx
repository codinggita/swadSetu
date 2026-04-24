import React from 'react';

const KitchenCard = ({ img, title, rating, desc }) => (
  <div className="kitchen-card">
    <div className="kitchen-img">
      <img src={img} alt={title} />
    </div>
    <div className="kitchen-info">
      <div className="kitchen-title-row">
        <h3>{title}</h3>
        <div className="rating">★ {rating}</div>
      </div>
      <p className="kitchen-desc">{desc}</p>
      <a href="#" className="view-menu">View Menu</a>
    </div>
  </div>
);

const FeaturedKitchens = () => {
  const kitchens = [
    {
      img: '/images/kitchen_asha.png',
      title: "Asha's Heirloom Recipes",
      rating: '4.8',
      desc: 'Bringing the lost flavors of Maharashtra\'s coastal villages to your doorstep using 50-year-old spice blends.'
    },
    {
      img: '/images/kitchen_malabar.png',
      title: 'The Malabar Coast',
      rating: '4.9',
      desc: 'Specializing in slow-cooked stews and fermented rice cakes from the heart of Kerala\'s culinary heritage.'
    },
    {
      img: '/images/kitchen_punjab.png',
      title: 'Grandma\'s Punjab',
      rating: '4.7',
      desc: 'Robust, hearty, and butter-laden classics that remind you of long afternoons in a sun-drenched courtyard.'
    }
  ];

  return (
    <section className="section-padding bg-light">
      <div className="container">
        <div className="featured-header">
          <div>
            <h2>Featured Kitchens</h2>
            <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>The soul of swadSetu lies in our local artisan partners.</p>
          </div>
          <a href="#" className="view-all">View All Kitchens →</a>
        </div>
        <div className="kitchen-grid">
          {kitchens.map((k, i) => <KitchenCard key={i} {...k} />)}
        </div>
      </div>
    </section>
  );
};

export default FeaturedKitchens;
