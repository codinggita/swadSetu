import React, { useState } from 'react';
import { 
  Search, 
  MessageSquare, 
  Phone, 
  Mail, 
  ChevronRight, 
  ChevronDown, 
  ChevronUp, 
  ArrowLeft,
  Package,
  Calendar,
  CreditCard,
  Truck,
  Settings,
  ShieldCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';

const SupportPage = () => {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      question: "Can I pause my tiffin plan for a few days?",
      answer: "Yes, you can pause your plan by 9 PM the previous night. Navigate to 'My Plans', select 'Manage Delivery', and choose the dates you'd like to skip. Your plan duration will be extended automatically."
    },
    {
      question: "The meal delivered was cold. What should I do?",
      answer: "We're sorry to hear that. Our tiffins are designed to retain heat, but if your meal arrives cold, please contact our support immediately. You can use the 'Live Chat' feature for a quick resolution."
    },
    {
      question: "How do I change my tiffin center/kitchen?",
      answer: "You can change your kitchen from the 'Profile Settings' under the 'Subscription' tab. Changes made before the billing cycle will take effect from the next month."
    },
    {
      question: "What hygiene standards do your centers follow?",
      answer: "All our kitchen artisans are FSSAI certified and undergo regular health checkups. We maintain strict hygiene protocols in all our tiffin centers."
    },
    {
      question: "My tiffin hasn't arrived by 1 PM. Who to contact?",
      answer: "If your delivery is delayed, check the live status in the app. If it's past 1:15 PM, please use the 'Call Us' feature or 'Live Chat' to reach your delivery partner directly."
    }
  ];

  const topics = [
    { title: "Order Tracking & History", sub: "Active orders, history, and receipts", icon: Package, color: "text-blue-500" },
    { title: "Tiffin Centers", sub: "Searching kitchens and hygiene reports", icon: ShieldCheck, color: "text-pink-500" },
    { title: "Subscription Plans", sub: "Renewals, upgrades, and cancellations", icon: Calendar, color: "text-yellow-500" },
    { title: "Delivery Issues", sub: "Late deliveries, missing items, or packaging", icon: Truck, color: "text-green-500" },
    { title: "Payments & Refunds", sub: "Wallet balance, payment failure, and refunds", icon: CreditCard, color: "text-blue-600" },
    { title: "Profile Settings", sub: "Edit info, update address, and preferences", icon: Settings, color: "text-orange-500" },
  ];

  return (
    <div className="min-h-screen bg-[#FDFCFE] font-sans text-gray-800 pb-12">
      {/* Header */}
      <header className="bg-[#2D1B69] text-white pt-6 pb-20 px-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center mb-12">
          <Link to="/" className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <ArrowLeft size={20} />
          </Link>
          <div className="text-xl font-bold tracking-tight">swadSetu</div>
          <div className="text-xs opacity-70 cursor-pointer hover:opacity-100">My tickets</div>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">How can we help you?</h1>
          <p className="text-sm md:text-base opacity-70 mb-8 max-w-xl mx-auto leading-relaxed">
            Search for articles or choose a topic below to get the help you need for your daily tiffin service.
          </p>
          
          <div className="relative max-w-2xl mx-auto">
            <input 
              type="text" 
              placeholder="Search for 'delivery status', 'cancel meal', 'refund'..." 
              className="w-full py-4 pl-6 pr-16 rounded-full bg-white text-gray-900 shadow-xl border-none outline-none text-sm placeholder:text-gray-400"
            />
            <button className="absolute right-2 top-2 bottom-2 bg-[#6333FF] hover:bg-[#5229D1] text-white px-6 rounded-full transition-colors text-sm font-medium">
              Search
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 -mt-10">
        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center flex flex-col items-center hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center mb-4">
              <MessageSquare size={24} />
            </div>
            <h3 className="font-bold text-lg mb-2">Live Chat</h3>
            <p className="text-xs text-gray-500 mb-4">Available 8 AM - 9 PM daily for instant resolution.</p>
            <button className="text-[#6333FF] text-sm font-bold flex items-center gap-1 hover:underline">
              Chat Now <ChevronRight size={14} />
            </button>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center flex flex-col items-center hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-green-50 text-green-600 rounded-lg flex items-center justify-center mb-4">
              <Phone size={24} />
            </div>
            <h3 className="font-bold text-lg mb-2">Call Us</h3>
            <p className="text-xs text-gray-500 mb-4">Urgent delivery issue? Call our center direct line.</p>
            <button className="text-green-600 text-sm font-bold flex items-center gap-1 hover:underline">
              Dial +1-800-TIFFIN <ChevronRight size={14} />
            </button>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center flex flex-col items-center hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-lg flex items-center justify-center mb-4">
              <Mail size={24} />
            </div>
            <h3 className="font-bold text-lg mb-2">Send Email</h3>
            <p className="text-xs text-gray-500 mb-4">For billing inquiries or plan changes anytime.</p>
            <button className="text-orange-600 text-sm font-bold flex items-center gap-1 hover:underline">
              Email Support <ChevronRight size={14} />
            </button>
          </div>
        </div>

        {/* Browse by Topic */}
        <section className="mb-16">
          <h2 className="text-xl font-bold mb-8">Browse by Topic</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {topics.map((topic, i) => (
              <div key={i} className="bg-white p-5 rounded-xl border border-gray-100 flex items-center justify-between hover:border-purple-200 cursor-pointer transition-all group">
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-lg bg-gray-50 group-hover:bg-purple-50 transition-colors ${topic.color}`}>
                    <topic.icon size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold mb-0.5">{topic.title}</h4>
                    <p className="text-[11px] text-gray-400">{topic.sub}</p>
                  </div>
                </div>
                <ChevronRight size={16} className="text-gray-300 group-hover:text-purple-400 transition-colors" />
              </div>
            ))}
          </div>
        </section>

        {/* FAQ & Form Split */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* FAQ Accordion */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold mb-8">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                  <button 
                    className="w-full p-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                    onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  >
                    <span className={`text-sm font-bold ${openFaq === i ? 'text-[#6333FF]' : 'text-gray-700'}`}>
                      {faq.question}
                    </span>
                    {openFaq === i ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5 pt-0">
                      <p className="text-[13px] text-gray-500 leading-relaxed border-t border-gray-50 pt-4">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar Form */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              <div className="bg-[#2D1B69] p-6 text-white">
                <h3 className="font-bold text-lg mb-1">Submit a request</h3>
                <p className="text-[11px] opacity-70">Typical response time: &lt; 2 hours</p>
              </div>
              <div className="p-6 space-y-4">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Your Name</label>
                  <input type="text" placeholder="Arun Kumar" className="w-full p-3 bg-purple-50/50 border border-purple-100 rounded-lg text-sm outline-none focus:border-purple-300" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Issue Type</label>
                  <select className="w-full p-3 bg-purple-50/50 border border-purple-100 rounded-lg text-sm outline-none focus:border-purple-300 appearance-none">
                    <option>Select a category</option>
                    <option>Delivery Delay</option>
                    <option>Quality Issue</option>
                    <option>Payment Issue</option>
                    <option>Subscription Change</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Tiffin Center</label>
                  <select className="w-full p-3 bg-purple-50/50 border border-purple-100 rounded-lg text-sm outline-none focus:border-purple-300 appearance-none">
                    <option>Meera's Kitchen - Sector 5</option>
                    <option>Royal Desi - MG Road</option>
                    <option>Home Style - HSR Layout</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Description</label>
                  <textarea 
                    placeholder="Tell us more about the issue..." 
                    className="w-full p-3 bg-purple-50/50 border border-purple-100 rounded-lg text-sm outline-none focus:border-purple-300 h-28 resize-none"
                  ></textarea>
                </div>
                <button className="w-full bg-[#6333FF] hover:bg-[#5229D1] text-white p-4 rounded-xl font-bold text-sm shadow-lg shadow-purple-200 transition-all active:scale-[0.98]">
                  Submit Request
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* System Status */}
        <section className="bg-white rounded-2xl p-6 border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="font-bold text-sm">System Status</span>
            <div className="flex items-center gap-1.5 bg-green-50 px-2 py-1 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-600 text-[10px] font-bold uppercase tracking-wider">All systems healthy</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 md:gap-8">
            <div className="flex items-center gap-3">
              <span className="text-[11px] text-gray-400 font-medium">Meal ordering</span>
              <span className="text-[10px] font-bold text-green-500 bg-green-50 px-2 py-0.5 rounded uppercase">Operational</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[11px] text-gray-400 font-medium">Delivery tracking</span>
              <span className="text-[10px] font-bold text-orange-500 bg-orange-50 px-2 py-0.5 rounded uppercase">Slight delay</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[11px] text-gray-400 font-medium">Payments</span>
              <span className="text-[10px] font-bold text-green-500 bg-green-50 px-2 py-0.5 rounded uppercase">Operational</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[11px] text-gray-400 font-medium">Center switching</span>
              <span className="text-[10px] font-bold text-green-500 bg-green-50 px-2 py-0.5 rounded uppercase">Operational</span>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-4 mt-20 pt-8 border-t border-gray-100 flex flex-col md:row justify-between items-center gap-6">
        <div className="text-[11px] font-bold text-gray-900 tracking-tight">TiffinBox Logistics</div>
        <div className="flex gap-6">
          <Link to="/privacy" className="text-[10px] text-gray-400 hover:text-gray-600 transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="text-[10px] text-gray-400 hover:text-gray-600 transition-colors">Terms of Service</Link>
          <Link to="/contact" className="text-[10px] text-gray-400 hover:text-gray-600 transition-colors">Contact Support</Link>
          <Link to="/faq" className="text-[10px] text-gray-400 hover:text-gray-600 transition-colors">FAQ</Link>
        </div>
        <div className="text-[10px] text-gray-400">
          © 2024 TiffinBox Logistics. Joyfully Organized.
        </div>
      </footer>
    </div>
  );
};

export default SupportPage;
