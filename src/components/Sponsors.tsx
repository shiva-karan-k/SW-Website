import React from 'react';
import { Building2, Heart, Handshake } from 'lucide-react';

const Sponsors = () => {
  const sponsorTiers = [
    {
      title: "Title Sponsor",
      icon: Building2,
      color: "bg-yellow-500",
      sponsors: ["Techstars"]
    },
    {
      title: "Venue Partner",
      icon: Heart,
      color: "bg-blue-500",
      sponsors: ["GITAM University"]
    },
    {
      title: "Community Partners",
      icon: Handshake,
      color: "bg-green-500",
      sponsors: ["Startup Grind Vizag", "Google Developer Groups", "Microsoft for Startups", "Sted Space", "Enhance42", "DPSLEC", "Vizag Startups"]
    }
  ];

  return (
    <section id="sponsors" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Our Partners & Sponsors
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're grateful to our partners who make Startup Weekend Visakhapatnam possible
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {sponsorTiers.map((tier, index) => (
            <div key={index} className="text-center">
              <div className={`${tier.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6`}>
                <tier.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{tier.title}</h3>
              <div className="space-y-2">
                {tier.sponsors.map((sponsor, sponsorIndex) => (
                  <div key={sponsorIndex} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <span className="text-gray-700 font-medium">{sponsor}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Become a Sponsor */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-6">Become a Sponsor</h3>
          <p className="text-xl mb-8 opacity-90">
            Partner with us to support the next generation of entrepreneurs in Visakhapatnam
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-2xl font-bold mb-2">Brand Exposure</div>
              <p className="text-sm opacity-90">Reach 100+ entrepreneurs and innovators</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-2xl font-bold mb-2">Talent Pipeline</div>
              <p className="text-sm opacity-90">Connect with skilled developers and designers</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-2xl font-bold mb-2">Innovation Access</div>
              <p className="text-sm opacity-90">Discover emerging startups and technologies</p>
            </div>
          </div>
          
          <button className="bg-white text-green-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
            Become a Sponsor
          </button>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;