"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, Utensils, Info, Phone, Mail, Instagram, 
  ArrowRight, CheckCircle2, Menu as MenuIcon, X, ChefHat, Send 
} from 'lucide-react';

// --- DATA ---
const menuData = [
  { name: 'Kolkata Chicken Biryani', category: 'Chicken', desc: 'Aromatic basmati, subtle spices, tender chicken, and the signature potato.' },
  { name: 'Hyderabadi Dum Chicken Biryani', category: 'Chicken', desc: 'Rich, spicy, and deeply flavorful, cooked in authentic kachchi dum style.' },
  { name: 'Lucknowi Chicken Biryani', category: 'Chicken', desc: 'Mild, fragrant, and royal awadhi flavors with melt-in-the-mouth meat.' },
  { name: 'Kerala Chicken Biryani', category: 'Chicken', desc: 'Made with short-grain kaima rice, enriched with cashew, raisins, and ghee.' },
  { name: 'Dindigul Chicken Biryani', category: 'Chicken', desc: 'Seeraga samba rice with a distinct peppery, tangy southern flair.' },
  { name: 'Donne Chicken Biryani', category: 'Chicken', desc: 'Karnataka style biryani cooked with fresh mint, coriander, and green chilies.' },
  { name: 'Kashmiri Biryani', category: 'Chicken', desc: 'Infused with saffron, dry fruits, and a hint of sweetness.' },
  { name: 'Malai Paneer Biryani', category: 'Veg', desc: 'Soft paneer cubes layered with creamy, fragrant basmati rice.' },
  { name: 'Kathal Biryani', category: 'Veg', desc: 'Jackfruit marinated in robust spices, mimicking the texture of meat perfectly.' },
  { name: 'Chicken Haandi Shaandi', category: 'Curries', desc: 'Our signature rich, slow-cooked chicken curry.' },
  { name: 'Kathal Haandi Shaandi', category: 'Curries', desc: 'Spiced jackfruit simmered in a rich tomato-onion gravy.' },
  { name: 'Dum-e-Fish Haandi Shaandi', category: 'Curries', desc: 'Tender fish pieces cooked gently in a mustard and yogurt blend.' }
];

const regions = ['Kashmir', 'Lucknow', 'Assam', 'Kolkata', 'Hyderabad', 'Karnataka', 'Tamil Nadu', 'Kerala'];

const sizes = [
  { name: 'Safar Haandi', weight: '350g', price: '₹199', serves: 'Serves 1', desc: 'Perfect for a solo journey of flavors.', image: '/biriyani1.png' },
  { name: 'Mehfil Haandi', weight: '800g', price: '₹299', serves: 'Serves 2', desc: 'Share the joy with your favorite person.', image: '/biriyani2.png' },
  { name: 'Dawaati Haandi', weight: '1200g', price: '₹499', serves: 'Serves 3', desc: 'A feast meant for family and friends.', image: '/biriyani1.png' }
];

const socialImages = [
  "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1589302168068-964664d93cb0?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80"
];

// --- COMPONENTS ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Experience', href: '#experience' },
    { name: 'Menu', href: '#menu' },
    { name: 'Story', href: '#story' },
    { name: 'Location', href: '#location' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#F4EAD8] shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <img 
            src="/hslogo.png" 
            alt="Haandi Shaandi Logo" 
            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/180x60/B83A0D/FFFFFF?text=Haandi+Shaandi"; }}
            className="h-12 md:h-16 w-auto object-contain transition-transform hover:scale-105" 
          />
        </a>
        
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className={`font-body font-medium hover:text-[#D4581C] transition-colors ${scrolled ? 'text-[#2A1B14]' : 'text-[#F4EAD8]'}`}>
              {link.name}
            </a>
          ))}
          <a href="#waitlist" className="bg-[#B83A0D] text-[#F4EAD8] px-6 py-2 rounded-full font-body font-medium hover:bg-[#C22E1A] transition-colors shadow-lg">
            Join Waitlist
          </a>
        </div>

        <button className={`md:hidden ${scrolled ? 'text-[#2A1B14]' : 'text-[#F4EAD8]'}`} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <MenuIcon size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-[#F4EAD8] shadow-lg py-4 flex flex-col items-center space-y-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="font-body text-[#2A1B14] font-medium text-lg">
                {link.name}
              </a>
            ))}
            <a href="#waitlist" onClick={() => setIsOpen(false)} className="bg-[#B83A0D] text-[#F4EAD8] px-8 py-3 rounded-full font-body font-medium">
              Join Waitlist
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section className="relative h-screen flex items-center justify-center overflow-hidden" id="home">
    <div 
      className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat animate-slow-zoom"
      style={{ backgroundImage: `url('https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?auto=format&fit=crop&q=80')` }}
    />
    <div className="absolute inset-0 bg-black/60 z-10" />

    <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-16">
      <motion.h1 
        initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
        className="font-heading text-5xl md:text-7xl font-bold text-[#F4EAD8] mb-6 leading-tight"
      >
        Uniting the Flavours of <span className="text-[#D4581C]">Bharat</span>
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
        className="font-body text-lg md:text-2xl text-[#F4EAD8]/90 mb-10 max-w-2xl mx-auto"
      >
        Authentic dum biryanis inspired by regional Indian traditions, served hot in traditional clay haandi pots.
      </motion.p>
      <motion.div 
        initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
        className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
      >
        <a href="#menu" className="bg-[#B83A0D] text-[#F4EAD8] px-8 py-4 rounded-full font-body font-semibold text-lg hover:bg-[#C22E1A] transition-all transform hover:scale-105 shadow-xl w-full sm:w-auto">
          Explore Menu
        </a>
        <a href="#waitlist" className="bg-transparent border-2 border-[#F4EAD8] text-[#F4EAD8] px-8 py-4 rounded-full font-body font-semibold text-lg hover:bg-[#F4EAD8] hover:text-[#B83A0D] transition-all w-full sm:w-auto">
          Join Waitlist
        </a>
      </motion.div>
    </div>
  </section>
);

const Experience = () => (
  <section id="experience" className="py-24 bg-[#F4EAD8] overflow-hidden">
    <div className="max-w-6xl mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="md:w-1/2 relative"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-square max-w-md mx-auto">
            <img src="https://images.unsplash.com/photo-1589301760014-d929f39ce9b1?auto=format&fit=crop&q=80" alt="Clay Haandi Pot" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-32 h-32 pointer-events-none z-10">
              <div className="steam-particle steam-1"></div>
              <div className="steam-particle steam-2"></div>
              <div className="steam-particle steam-3"></div>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#D4581C] rounded-full -z-10 blur-2xl opacity-50"></div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#B83A0D] mb-6">The Haandi Experience</h2>
          <p className="font-body text-xl text-[#2A1B14] font-medium mb-6 italic">"Slow cooked dum biryani sealed with tradition."</p>
          <p className="font-body text-[#2A1B14]/80 leading-relaxed mb-8">
            Every biryani at Haandi Shaandi is cooked and served in a traditional unglazed clay pot. The porous nature of the clay allows heat and moisture to circulate, infusing the meat and rice with an earthy aroma that metal simply cannot replicate. Sealed with dough to trap the steam (dum), the flavors are locked inside until the moment it reaches your table.
          </p>
          <ul className="space-y-4">
            {['Authentic earthy flavor', 'Perfect moisture retention', 'Sealed fresh for every order'].map((item, i) => (
              <li key={i} className="flex items-center space-x-3 text-[#B83A0D] font-body font-medium justify-center md:justify-start">
                <CheckCircle2 size={20} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  </section>
);

const MapSection = () => (
  <section className="py-24 bg-[#2A1B14] text-[#F4EAD8] overflow-hidden relative">
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#D4581C] mb-6">Biryani Across Bharat</h2>
        <p className="font-body text-lg text-[#F4EAD8]/80 leading-relaxed">
          From royal kitchens to street-side legends — every region of India has its own biryani story. Haandi Shaandi brings these diverse, authentic flavors together under one roof.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto">
        {regions.map((region, index) => (
          <motion.div
            key={region}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}
            className="bg-[#F4EAD8]/5 border border-[#D4581C]/30 rounded-xl p-6 text-center hover:bg-[#D4581C]/10 transition-colors cursor-pointer group"
          >
            <MapPin className="mx-auto text-[#D4581C] mb-3 group-hover:scale-110 transition-transform" size={28} />
            <h3 className="font-heading text-xl font-semibold text-[#F4EAD8]">{region}</h3>
          </motion.div>
        ))}
      </div>
    </div>
    <svg className="absolute inset-0 w-full h-full opacity-5 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/></pattern>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  </section>
);

const ServingSizes = () => (
  <section className="py-24 bg-[#F4EAD8]">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div 
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#B83A0D] mb-4">Choose Your Haandi</h2>
        <p className="font-body text-lg text-[#2A1B14]/70">Perfect portions for every appetite.</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {sizes.map((size, index) => (
          <motion.div
            key={size.name}
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.2 }}
            className="bg-white rounded-2xl shadow-xl border border-[#F4EAD8] text-center relative overflow-hidden group flex flex-col hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-[#D4581C] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 z-20" />
            
            <div className="relative h-56 w-full overflow-hidden">
              <img src={size.image} alt={size.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2A1B14]/80 via-transparent to-transparent z-10" />
              
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-20 pointer-events-none z-10 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                <div className="hot-smoke-particle h-smoke-1"></div>
                <div className="hot-smoke-particle h-smoke-2"></div>
                <div className="hot-smoke-particle h-smoke-3"></div>
              </div>

              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-[#B83A0D] font-bold text-sm shadow-lg z-20">
                {size.weight}
              </div>
            </div>
            
            <div className="p-8 flex-1 flex flex-col relative bg-white z-10 text-left">
              <h3 className="font-heading text-2xl font-bold text-[#2A1B14] mb-3 text-center">{size.name}</h3>
              <p className="font-body text-[#2A1B14]/70 mb-6 flex-1 text-center">{size.desc}</p>
              
              <div className="flex justify-between items-center pt-6 border-t border-gray-100">
                <span className="font-body text-[#2A1B14] font-medium flex items-center gap-2">
                  <Info size={16} className="text-[#B83A0D]" /> {size.serves}
                </span>
                <span className="font-heading text-2xl font-bold text-[#B83A0D]">{size.price}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('Chicken');
  const categories = ['Chicken', 'Veg', 'Curries'];
  const filteredMenu = menuData.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#B83A0D] mb-4">Our Menu</h2>
          <p className="font-body text-lg text-[#2A1B14]/70">A curated selection of India's finest regional flavors.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-full font-heading text-lg font-semibold transition-all ${
                activeCategory === cat 
                  ? 'bg-[#B83A0D] text-[#F4EAD8] shadow-lg scale-105' 
                  : 'bg-[#F4EAD8] text-[#2A1B14] hover:bg-[#D4581C] hover:text-[#F4EAD8]'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <motion.div 
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {filteredMenu.map((item, index) => (
            <div key={index} className="flex flex-col border-b border-gray-200 pb-6 group">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-heading text-xl font-bold text-[#2A1B14] group-hover:text-[#D4581C] transition-colors">{item.name}</h3>
              </div>
              <p className="font-body text-[#2A1B14]/70 text-sm leading-relaxed pr-8">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const WaitlistForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="waitlist" className="py-24 bg-[#B83A0D] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C22E1A] rounded-full mix-blend-multiply filter blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4581C] rounded-full mix-blend-multiply filter blur-3xl opacity-50 transform -translate-x-1/2 translate-y-1/2" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto px-6 relative z-10"
      >
        <div className="bg-[#F4EAD8] rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-5/12 bg-[#2A1B14] text-[#F4EAD8] p-10 flex flex-col justify-center">
            <h3 className="font-heading text-3xl font-bold mb-4">Join the Waitlist</h3>
            <p className="font-body text-[#F4EAD8]/80 mb-8">Be the first to experience the true flavors of Bharat in Siliguri.</p>
            <div className="bg-[#D4581C]/20 border border-[#D4581C]/40 rounded-xl p-6">
              <p className="font-heading font-bold text-[#D4581C] mb-2 flex items-center gap-2">
                <CheckCircle2 size={20} /> Exclusive Offer
              </p>
              <p className="font-body text-sm text-[#F4EAD8]/90">Free Haandi Meal for the first 50 guests on our waitlist!</p>
            </div>
          </div>

          <div className="md:w-7/12 p-10">
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12"
              >
                <div className="w-16 h-16 bg-[#B83A0D]/10 text-[#B83A0D] rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 size={32} />
                </div>
                <h4 className="font-heading text-2xl font-bold text-[#2A1B14]">You are now on the Haandi List!</h4>
                <p className="font-body text-[#2A1B14]/70">We'll contact you via WhatsApp with your exclusive invitation soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block font-body text-sm font-medium text-[#2A1B14] mb-2">Full Name</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#B83A0D] transition-all font-body text-[#2A1B14]" placeholder="Your name" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-body text-sm font-medium text-[#2A1B14] mb-2">Phone Number</label>
                    <input required type="tel" className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#B83A0D] transition-all font-body text-[#2A1B14]" placeholder="10-digit number" />
                  </div>
                  <div>
                    <label className="block font-body text-sm font-medium text-[#2A1B14] mb-2">WhatsApp Number</label>
                    <input required type="tel" className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#B83A0D] transition-all font-body text-[#2A1B14]" placeholder="If different" />
                  </div>
                </div>
                <div>
                  <label className="block font-body text-sm font-medium text-[#2A1B14] mb-2">Which biryani are you most excited for?</label>
                  <select className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#B83A0D] transition-all font-body text-[#2A1B14]">
                    {menuData.filter(item => item.category !== 'Curries').map((item, i) => (
                      <option key={i} value={item.name}>{item.name}</option>
                    ))}
                  </select>
                </div>
                <button type="submit" className="w-full bg-[#B83A0D] text-[#F4EAD8] py-4 rounded-xl font-heading font-bold text-lg hover:bg-[#C22E1A] transition-colors shadow-lg flex items-center justify-center gap-2">
                  Join the List <ArrowRight size={20} />
                </button>
              </form>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const Story = () => (
  <section id="story" className="py-24 bg-[#F4EAD8]">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center gap-16">
        <motion.div 
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="md:w-1/2 order-2 md:order-1"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#B83A0D] mb-6">Our Story</h2>
          <p className="font-body text-[#2A1B14]/80 text-lg leading-relaxed mb-6">
            Biryani in India is not just a dish; it is a cultural tapestry woven with spices, traditions, and history. Yet, enjoying true regional varieties often means traveling thousands of miles. 
          </p>
          <p className="font-body text-[#2A1B14]/80 text-lg leading-relaxed mb-8">
            <strong className="text-[#2A1B14]">Haandi Shaandi</strong> was born from a simple idea: What if we could unite the diverse flavors of Bharat in one place? We traveled from the royal kitchens of Awadh to the spice-rich coastlines of Kerala, learning authentic recipes, sourcing regional ingredients, and perfecting the ancient art of slow-cooked dum in clay pots.
          </p>
          <div className="inline-block border-l-4 border-[#D4581C] pl-6 py-2">
            <p className="font-heading text-2xl font-semibold text-[#D4581C] italic">
              "Not just food, but a journey across India, served in a single Haandi."
            </p>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="md:w-1/2 order-1 md:order-2"
        >
          <div className="rounded-2xl overflow-hidden shadow-2xl relative">
            <img src="https://images.unsplash.com/photo-1563379091339-03b2184f4f0c?auto=format&fit=crop&q=80" alt="Spices and Biryani" className="w-full h-auto object-cover" />
            <div className="absolute inset-0 bg-[#B83A0D]/10 mix-blend-overlay"></div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Location = () => (
  <section id="location" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div 
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#B83A0D] mb-4">Coming Soon to Siliguri</h2>
        <p className="font-body text-lg text-[#2A1B14]/70">Get ready for a royal feast right in the heart of your city.</p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
        className="bg-[#F4EAD8] rounded-3xl p-4 md:p-8 shadow-xl max-w-5xl mx-auto relative"
      >
        <div className="aspect-video w-full rounded-2xl overflow-hidden bg-gray-200 relative">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114068.51382455323!2d88.35824965352697!3d26.71616428753231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e44114f5441d8f%3A0xbaa0cbb41e40ebbd!2sSiliguri%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
            width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="absolute inset-0"
          ></iframe>
        </div>
        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-white px-8 py-6 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4 w-[90%] md:w-auto">
          <div className="bg-[#B83A0D]/10 p-3 rounded-full text-[#B83A0D]">
            <MapPin size={28} />
          </div>
          <div>
            <h4 className="font-heading font-bold text-xl text-[#2A1B14]">Haandi Shaandi</h4>
            <p className="font-body text-[#2A1B14]/70">Siliguri, West Bengal, India</p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const SocialMedia = () => (
  <section className="py-24 bg-[#2A1B14] overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
       <motion.h2 
         initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
         className="font-heading text-4xl md:text-5xl font-bold text-[#F4EAD8] mb-4"
       >
         Join the Feast Online
       </motion.h2>
       <a href="#" className="inline-flex items-center gap-2 text-[#D4581C] hover:text-[#F4EAD8] transition-colors font-body font-medium text-lg">
         <Instagram size={24} /> @haandishaandi
       </a>
    </div>
    
    <div className="flex gap-4 px-4 overflow-x-auto pb-8 snap-x">
      {socialImages.map((img, i) => (
        <motion.div 
          key={i}
          whileHover={{ y: -10 }}
          className="min-w-[280px] md:min-w-[320px] aspect-square rounded-2xl overflow-hidden relative group snap-center flex-shrink-0"
        >
          <img src={img} alt={`Social Post ${i+1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Instagram size={48} className="text-white" />
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-[#1C110C] text-[#F4EAD8] pt-20 pb-10">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
      <div className="col-span-1 md:col-span-1">
        <h2 className="font-heading text-3xl font-bold text-[#D4581C] mb-4">Haandi Shaandi</h2>
        <p className="font-body text-sm text-[#F4EAD8]/70 mb-6 leading-relaxed">
          Uniting the Flavours of Bharat.<br/>
          Authentic regional dum biryanis served in traditional clay haandi pots.
        </p>
      </div>
      <div>
        <h4 className="font-heading text-xl font-semibold mb-6">Quick Links</h4>
        <ul className="space-y-3 font-body text-sm text-[#F4EAD8]/70">
          <li><a href="#menu" className="hover:text-[#D4581C] transition-colors">Explore Menu</a></li>
          <li><a href="#experience" className="hover:text-[#D4581C] transition-colors">The Experience</a></li>
          <li><a href="#story" className="hover:text-[#D4581C] transition-colors">Our Story</a></li>
          <li><a href="#waitlist" className="hover:text-[#D4581C] transition-colors">Join Waitlist</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-heading text-xl font-semibold mb-6">Contact</h4>
        <ul className="space-y-4 font-body text-sm text-[#F4EAD8]/70">
          <li className="flex items-start gap-3"><MapPin size={18} className="text-[#D4581C] flex-shrink-0 mt-1" /><span>Siliguri,<br/>West Bengal, India</span></li>
          <li className="flex items-center gap-3"><Phone size={18} className="text-[#D4581C]" /><span>+91 98765 43210</span></li>
          <li className="flex items-center gap-3"><Mail size={18} className="text-[#D4581C]" /><span>hello@haandishaandi.com</span></li>
        </ul>
      </div>
      <div>
        <h4 className="font-heading text-xl font-semibold mb-6">Follow Us</h4>
        <div className="flex gap-4">
          <a href="#" className="w-10 h-10 rounded-full bg-[#F4EAD8]/10 flex items-center justify-center hover:bg-[#D4581C] transition-colors">
            <Instagram size={20} />
          </a>
        </div>
      </div>
    </div>
    
    <div className="max-w-7xl mx-auto px-6 border-t border-[#F4EAD8]/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-body text-[#F4EAD8]/50">
      <p>© {new Date().getFullYear()} Haandi Shaandi. All rights reserved.</p>
      <p className="mt-2 md:mt-0">Crafted for the Love of Biryani.</p>
    </div>
  </footer>
);

const AiChef = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ role: 'model', text: 'Namaste! I am the Haandi Shaandi AI Chef. What kind of flavors do you enjoy? (e.g., spicy, mild, vegetarian)' }]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const apiKey = ""; // Set by environment

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userText = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setIsLoading(true);

    try {
      let response;
      let delays = [1000, 2000, 4000, 8000, 16000];
      for (let i = 0; i < delays.length + 1; i++) {
        try {
          response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: [{ parts: [{ text: userText }] }],
              systemInstruction: { parts: [{ text: "You are the Haandi Shaandi AI Chef. Recommend a biryani from our menu based on the user's taste. Menu: Kolkata Chicken (subtle, potato), Hyderabadi (spicy, rich), Lucknowi (mild), Kerala (cashews/raisins), Dindigul (peppery), Donne (mint/coriander), Kashmiri (sweet/saffron), Malai Paneer (veg), Kathal (veg jackfruit). Keep responses under 3 sentences, be warm and inviting." }] }
            })
          });
          if (response.ok) break;
          if (i === delays.length) throw new Error("API error");
        } catch (err) {
          if (i === delays.length) throw err;
        }
        await new Promise(res => setTimeout(res, delays[i]));
      }

      const data = await response.json();
      const modelText = data.candidates?.[0]?.content?.parts?.[0]?.text || "I'm having trouble thinking of a recipe right now. Please try again!";
      setMessages(prev => [...prev, { role: 'model', text: modelText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "Apologies, the kitchen is a bit busy! Please try asking again." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-[#B83A0D] text-[#F4EAD8] p-4 rounded-full shadow-2xl hover:bg-[#C22E1A] transition-transform hover:scale-110 flex items-center justify-center"
      >
        {isOpen ? <X size={28} /> : <ChefHat size={28} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.9 }} transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-[90vw] md:w-96 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col"
            style={{ height: '450px', maxHeight: '80vh' }}
          >
            <div className="bg-[#B83A0D] text-[#F4EAD8] p-4 flex items-center gap-3">
              <ChefHat size={24} />
              <div>
                <h3 className="font-heading font-bold text-lg leading-tight">AI Chef Sommelier</h3>
                <p className="font-body text-xs opacity-80">Ask for recommendations</p>
              </div>
            </div>

            <div className="flex-1 p-4 overflow-y-auto bg-[#F4EAD8]/20 flex flex-col gap-3 font-body">
              {messages.map((m, i) => (
                <div key={i} className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${m.role === 'user' ? 'bg-[#D4581C] text-white self-end rounded-tr-sm' : 'bg-white border border-gray-200 text-[#2A1B14] self-start rounded-tl-sm shadow-sm'}`}>
                  {m.text}
                </div>
              ))}
              {isLoading && (
                <div className="bg-white border border-gray-200 text-[#2A1B14] self-start rounded-2xl rounded-tl-sm p-3 text-sm flex gap-1 items-center shadow-sm">
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSend} className="p-3 bg-white border-t border-gray-100 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="E.g., I love spicy food..."
                className="flex-1 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 text-sm font-body focus:outline-none focus:ring-2 focus:ring-[#B83A0D]"
              />
              <button type="submit" disabled={isLoading || !input.trim()} className="bg-[#B83A0D] text-white p-2 rounded-full disabled:opacity-50 hover:bg-[#C22E1A] transition-colors flex items-center justify-center min-w-[36px]">
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// --- MAIN APP ---

export default function Page() {
  return (
    <>
      {/* Global CSS for custom animations (smoke, parallax, fonts) */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;600;700;800&family=Poppins:wght@300;400;500;600&display=swap');
        
        html { scroll-behavior: smooth; }
        .font-heading { font-family: 'Baloo 2', cursive; }
        .font-body { font-family: 'Poppins', sans-serif; }

        @keyframes slowZoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        .animate-slow-zoom { animation: slowZoom 20s ease-in-out infinite alternate; }

        @keyframes steam {
          0% { transform: translateY(0) translateX(0) scale(1); opacity: 0; }
          50% { opacity: 0.6; }
          100% { transform: translateY(-120px) translateX(-20px) scale(3); opacity: 0; }
        }
        .steam-particle {
          position: absolute; bottom: 0; width: 16px; height: 16px;
          background-color: rgba(255, 255, 255, 0.4); border-radius: 50%;
          filter: blur(12px); animation: steam 3s ease-in-out infinite;
        }
        .steam-1 { left: 40%; animation-delay: 0.8s; }
        .steam-2 { left: 50%; animation-delay: 1.6s; }
        .steam-3 { left: 60%; animation-delay: 2.4s; }

        @keyframes hotSmoke {
          0% { transform: translateY(0) scale(1); opacity: 0; }
          50% { opacity: 0.8; }
          100% { transform: translateY(-80px) scale(2.5); opacity: 0; }
        }
        .hot-smoke-particle {
          position: absolute; bottom: 0; width: 16px; height: 16px;
          background-color: rgba(255, 255, 255, 0.5); border-radius: 50%;
          filter: blur(8px); animation: hotSmoke 2.5s ease-in-out infinite;
        }
        .h-smoke-1 { left: 45%; transform: translateX(-5px); animation-delay: 0.7s; }
        .h-smoke-2 { left: 50%; transform: translateX(15px); animation-delay: 1.4s; }
        .h-smoke-3 { left: 55%; transform: translateX(-5px); animation-delay: 2.1s; }
      `}} />
      
      <div className="bg-[#F4EAD8] min-h-screen font-body text-[#2A1B14] overflow-x-hidden selection:bg-[#B83A0D] selection:text-[#F4EAD8]">
        <Navbar />
        <main>
          <Hero />
          <Experience />
          <MapSection />
          <ServingSizes />
          <Menu />
          <WaitlistForm />
          <Story />
          <Location />
          <SocialMedia />
        </main>
        <Footer />
        <AiChef />
      </div>
    </>
  );
}
