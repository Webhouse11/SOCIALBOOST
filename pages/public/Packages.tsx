import React from 'react';
import Section from '../../components/ui/Section';
import { useSite } from '../../context/SiteContext';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const Packages: React.FC = () => {
  const { packages } = useSite();

  return (
    <div className="animate-fade-in bg-gray-50 min-h-screen">
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">SOCIALBOOST Special Packages</h1>
          <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">Transparent pricing. No hidden fees. Choose the plan that fits your growth goals.</p>
        </div>
      </div>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {packages.map((pkg) => (
            <div 
              key={pkg.id} 
              className={`bg-white rounded-2xl overflow-hidden flex flex-col ${pkg.isPopular ? 'border-2 border-blue-500 shadow-2xl scale-105 z-10' : 'border border-gray-200 shadow-lg'}`}
            >
              {pkg.isPopular && (
                 <div className="bg-blue-500 text-white text-center py-2 text-sm font-bold uppercase tracking-wide">
                   Best Value
                 </div>
              )}
              <div className="p-8 flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-extrabold text-gray-900">{pkg.price}</span>
                </div>
                <p className="text-gray-500 text-sm mb-6">Perfect for starting or scaling.</p>
                
                <ul className="space-y-4">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 shrink-0 mr-3" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 bg-gray-50 border-t border-gray-100">
                <a 
                  href="https://wa.link/ynaedl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center py-4 rounded-lg font-bold transition-colors ${pkg.isPopular ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-white text-blue-600 border border-blue-200 hover:bg-blue-50'}`}
                >
                  {pkg.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Need a Custom Enterprise Solution?</h3>
          <p className="text-gray-600 mb-6">
            We understand that large organizations have unique needs. Contact us for a bespoke proposal including multi-region support, dedicated creative teams, and 24/7 crisis management.
          </p>
          <a href="https://wa.link/ynaedl" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold hover:underline">Contact Sales Team &rarr;</a>
        </div>
      </Section>
    </div>
  );
};

export default Packages;