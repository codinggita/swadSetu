import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Check } from 'lucide-react';

const Subscriptions = () => {
  const plans = [
    {
      name: "Basic",
      price: "99",
      desc: "For the simple, consistent eater.",
      features: [
        "1 Delivery Center",
        "Fixed Daily Menu",
        "Zero-Waste Packaging",
        "Weekly Billing"
      ],
      button: "Select Basic",
      featured: false
    },
    {
      name: "Standard",
      price: "139",
      desc: "Our most popular choice.",
      features: [
        "2 Delivery Centers",
        "3 Meal Swaps / Month",
        "Custom Add-ons",
        "Sustainability Tracking"
      ],
      button: "Get Standard",
      featured: true
    },
    {
      name: "Premium",
      price: "179",
      desc: "The ultimate meal ritual.",
      features: [
        "Unlimited Centers",
        "Daily Customization",
        "AI Meal Suggestions",
        "Priority Support"
      ],
      button: "Go Premium",
      featured: false
    }
  ];

  return (
    <div className="bg-bg-light min-h-screen">
      <Navbar />
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-[1200px] mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-text-dark mb-4">Choose Your Subscription Plan</h1>
          <p className="text-text-muted max-w-[600px] mx-auto">
            Select a plan that fits your lifestyle. All plans include our signature stainless steel tiffin delivery and zero-waste commitment.
          </p>
        </div>

        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div 
              key={plan.name} 
              className={`p-10 rounded-xl flex flex-col border transition-all ${
                plan.featured 
                  ? 'bg-bg-dark text-white border-primary shadow-2xl scale-105' 
                  : 'bg-white text-text-dark border-border hover:border-primary/30'
              }`}
            >
              <div className="mb-8">
                <h3 className={`text-xl font-bold mb-2 ${plan.featured ? 'text-primary' : ''}`}>
                  {plan.name}
                  {plan.featured && <span className="ml-2 bg-primary/20 text-primary text-[10px] px-2 py-1 rounded">POPULAR</span>}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">₹{plan.price}</span>
                  <span className="text-sm opacity-60">/day</span>
                </div>
                <p className="text-sm mt-4 opacity-70 leading-relaxed">{plan.desc}</p>
              </div>

              <div className="flex-1 mb-10">
                <ul className="flex flex-col gap-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm">
                      <div className={`shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${plan.featured ? 'bg-primary/20 text-primary' : 'bg-green-100 text-green-600'}`}>
                        <Check size={12} />
                      </div>
                      <span className="opacity-90">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className={`w-full py-3 rounded font-bold transition-all ${
                plan.featured 
                  ? 'bg-primary hover:bg-primary-hover text-white' 
                  : 'bg-bg-light hover:bg-border text-text-dark'
              }`}>
                {plan.button}
              </button>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Subscriptions;
