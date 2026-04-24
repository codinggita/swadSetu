import React from 'react';
import DashboardHeader from '../components/DashboardHeader';
import Sidebar from '../components/Sidebar';
import { Star } from 'lucide-react';

const Centers = () => {
  const kitchens = [
    {
      id: 'B',
      name: 'Bandra West',
      location: '12th Road, Khar West, Mumbai',
      tags: ['HOME-STYLE', 'VEG ONLY'],
      rating: 4.9,
      price: '250',
      active: true,
      color: 'bg-[#A34E24]'
    },
    {
      id: 'K',
      name: 'Kala Ghoda Kitchen',
      location: 'Fordes Street, Fort, Mumbai',
      tags: ['GOURMET', 'NON-VEG OK'],
      rating: 4.8,
      price: '320',
      active: false,
      color: 'bg-[#1C1C1C]'
    },
    {
      id: 'J',
      name: 'Juhu Artisan Studio',
      location: 'Tara Road, Juhu, Mumbai',
      tags: ['ORGANIC', 'DIET FRIENDLY'],
      rating: 4.7,
      price: '280',
      active: false,
      color: 'bg-[#1A5B31]'
    },
    {
      id: 'P',
      name: 'Powai Tech Kitchen',
      location: 'Central Avenue, Hiranandani, Mumbai',
      tags: ['FUSION', 'HIGH PROTEIN'],
      rating: 4.9,
      price: '260',
      active: false,
      color: 'bg-[#999999]'
    }
  ];

  return (
    <div className="flex flex-col h-screen bg-white">
      <DashboardHeader />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        
        <main className="flex-1 overflow-y-auto p-12">
          <div className="max-w-[1000px] mx-auto">
            <div className="mb-12">
              <h1 className="text-4xl font-bold text-text-dark mb-3 tracking-tight">Select Your Delivery Center</h1>
              <p className="text-sm text-text-muted leading-relaxed max-w-[700px]">
                Choose the artisanal kitchen closest to your daily commute or home for the freshest meals, delivered in our signature eco-friendly tiffins.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {kitchens.map((kitchen) => (
                <div key={kitchen.name} className="border border-[#F0F0F0] bg-[#FCFBFA] p-8 rounded-sm hover:border-primary/20 transition-all flex flex-col justify-between h-[280px]">
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex gap-4">
                        <div className={`w-12 h-12 ${kitchen.color} rounded flex items-center justify-center text-white font-bold text-xl`}>
                          {kitchen.id}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-text-dark leading-tight">{kitchen.name}</h3>
                          <p className="text-xs text-text-muted mt-1">{kitchen.location}</p>
                        </div>
                      </div>
                      {kitchen.active && (
                        <span className="bg-[#D1FAE5] text-[#065F46] text-[10px] font-bold px-2 py-1 rounded">ACTIVE</span>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex gap-2">
                        {kitchen.tags.map(tag => (
                          <span key={tag} className="text-[10px] font-bold border border-border px-2 py-1 text-text-muted rounded-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-1 text-primary text-[13px] font-bold">
                        <Star size={12} fill="currentColor" /> {kitchen.rating}
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t border-border flex justify-between items-center">
                    <div className="text-sm text-text-muted">
                      <span className="font-bold text-text-dark text-base">{kitchen.price}</span> avg/meal
                    </div>
                    {kitchen.active ? (
                      <button className="bg-[#9A3412] text-white px-6 py-2 rounded text-[11px] font-bold uppercase tracking-wider">
                        Current Selection
                      </button>
                    ) : (
                      <button className="border border-border text-text-dark px-6 py-2 rounded text-[11px] font-bold uppercase tracking-wider hover:bg-black/5 transition-colors">
                        Switch Center
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-[#F3F2F0] rounded-sm overflow-hidden flex flex-col md:flex-row">
              <div className="p-12 flex-1 flex flex-col justify-center">
                <div className="text-[10px] uppercase font-bold text-primary tracking-[0.2em] mb-4">Farm-to-Tiffin Direct</div>
                <h2 className="text-3xl font-bold mb-6">Our Sourcing Ethics</h2>
                <p className="text-sm text-text-muted leading-relaxed mb-8">
                  We partner directly with organic farmers in Maharashtra to bring you ingredients that haven't seen a cold storage unit. Every meal is a testament to honest labor and the artisanal spirit of home cooking.
                </p>
                <button className="bg-[#1C1C1C] text-white px-6 py-3 rounded text-xs font-bold w-fit hover:bg-black transition-colors">
                  Learn More
                </button>
              </div>
              <div className="w-full md:w-[45%] h-[350px]">
                <img 
                  src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=1200" 
                  alt="Sourcing Ethics" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <footer className="mt-20 py-10 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-[11px] text-text-muted">
                © 2024 Artisan Tiffins. All rights reserved.
              </div>
              <div className="flex gap-8 text-[11px] text-text-muted">
                <a href="#" className="hover:text-text-dark">Privacy Policy</a>
                <a href="#" className="hover:text-text-dark">Terms of Service</a>
                <a href="#" className="hover:text-text-dark">Cookie Policy</a>
              </div>
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Centers;
