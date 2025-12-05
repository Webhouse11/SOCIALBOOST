import React from 'react';
import Section from '../../components/ui/Section';
import { useSite } from '../../context/SiteContext';
import * as Icons from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const { services } = useSite();

  return (
    <div className="animate-fade-in">
       <div className="bg-gray-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold sm:text-5xl">Our Premium Services</h1>
          <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto">End-to-end social media solutions designed to elevate your brand.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {services.map((service, index) => {
          // Dynamic Icon rendering
          const IconComponent = (Icons as any)[service.icon] || Icons.HelpCircle;
          
          return (
            <div key={service.id} className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="w-full md:w-1/2">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                  <IconComponent size={32} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {service.description} We leverage industry-leading tools and creative expertise to ensure this service drives tangible results for your business. From initial concept to final execution, our team handles every detail.
                </p>
                <a 
                  href="https://wa.link/ynaedl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-bold hover:text-blue-800 inline-flex items-center"
                >
                  Start Project <Icons.ArrowRight size={18} className="ml-2" />
                </a>
              </div>
              <div className="w-full md:w-1/2">
                <img 
                  src={`https://picsum.photos/600/400?random=${index + 50}`} 
                  alt={service.title} 
                  className="rounded-xl shadow-lg w-full object-cover h-64 md:h-80 hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>
          );
        })}
      </div>

      <Section light className="text-center">
        <h2 className="text-3xl font-bold mb-6">Not sure what you need?</h2>
        <p className="text-gray-600 mb-8">Schedule a discovery call and let us analyze your brand's current performance.</p>
        <a 
          href="https://wa.link/ynaedl"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors inline-block"
        >
          Book Free Strategy Call
        </a>
      </Section>
    </div>
  );
};

export default Services;