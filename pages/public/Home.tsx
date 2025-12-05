import React from 'react';
import { Link } from 'react-router-dom';
import { useSite } from '../../context/SiteContext';
import Section from '../../components/ui/Section';
import { ArrowRight, CheckCircle, BarChart2, Globe, Star } from 'lucide-react';

const TESTIMONIALS = [
  {
    id: 1,
    quote: "Social Boost Media transformed our Instagram feed from a simple catalog into a vibrant community. Our engagement rates skyrocketed by 200% in the first quarter alone!",
    name: "Jessica Miller",
    role: "Founder, Urban Threads",
    image: "https://picsum.photos/50/50?random=21"
  },
  {
    id: 2,
    quote: "We needed a partner who understood complex B2B sales cycles on LinkedIn. Social Boost delivered exceptional thought leadership content that generated high-quality leads for our sales team.",
    name: "David O'Connor",
    role: "CMO, Nexus Solutions",
    image: "https://picsum.photos/50/50?random=22"
  },
  {
    id: 3,
    quote: "Their team is incredibly responsive and creative. They took over our social management completely, allowing me to focus on scaling my business. The ROI has been fantastic.",
    name: "Amara Patel",
    role: "Director, Wellness First",
    image: "https://picsum.photos/50/50?random=23"
  }
];

const Home: React.FC = () => {
  const { settings, services, packages } = useSite();

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Grow, Engage, and</span>{' '}
                  <span className="block text-blue-600 xl:inline">Dominate Social Media</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  {settings.siteDescription} We are {settings.siteName}, your international partner for scaling brand presence and driving real business results.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="https://wa.link/ynaedl"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg"
                    >
                      Get Started
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link
                      to="/services"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg"
                    >
                      Explore Services
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://picsum.photos/1200/800?random=100"
            alt="Team working on social media strategy"
          />
        </div>
      </div>

      {/* Intro Section */}
      <Section className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">
          International Excellence
        </h2>
        <p className="max-w-2xl mx-auto text-xl text-gray-500 mb-12">
          SOCIALBOOST connects your brand with a global audience using data-driven strategies and creative brilliance.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4 text-blue-600">
              <Globe size={24} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Global Reach</h3>
            <p className="text-gray-500">Strategies that transcend borders and resonate with diverse cultures.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4 text-blue-600">
              <BarChart2 size={24} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Data Driven</h3>
            <p className="text-gray-500">Every decision is backed by deep analytics and performance metrics.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4 text-blue-600">
              <CheckCircle size={24} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Proven Results</h3>
            <p className="text-gray-500">A track record of scaling brands from local heroes to global icons.</p>
          </div>
        </div>
      </Section>

      {/* Services Preview */}
      <Section light>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">Our Expertise</h2>
          <p className="mt-4 text-lg text-gray-500">Comprehensive solutions for modern brands.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.slice(0, 4).map((service) => (
            <div key={service.id} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300">
              <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-500 text-sm mb-4">{service.description}</p>
              <Link to="/services" className="text-blue-600 text-sm font-medium hover:text-blue-800 flex items-center">
                Learn more <ArrowRight size={14} className="ml-1" />
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/services" className="inline-block px-6 py-3 border border-gray-300 rounded-md text-base font-medium text-gray-700 bg-white hover:bg-gray-50">
            View All Services
          </Link>
        </div>
      </Section>

      {/* Packages Preview */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">Featured Packages</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {packages.map((pkg) => (
            <div key={pkg.id} className={`relative flex flex-col p-8 bg-white border rounded-2xl ${pkg.isPopular ? 'border-blue-500 shadow-xl ring-1 ring-blue-500' : 'border-gray-200 shadow-sm'}`}>
              {pkg.isPopular && (
                <div className="absolute top-0 right-0 -mt-3 mr-3 px-3 py-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold uppercase rounded-full tracking-wide">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold text-gray-900">{pkg.name}</h3>
              <div className="mt-4 flex items-baseline text-gray-900">
                <span className="text-3xl font-extrabold tracking-tight">{pkg.price}</span>
              </div>
              <ul className="mt-6 space-y-4 flex-1">
                {pkg.features.slice(0, 4).map((feature, idx) => (
                  <li key={idx} className="flex">
                    <CheckCircle className="flex-shrink-0 h-5 w-5 text-green-500" />
                    <span className="ml-3 text-sm text-gray-500">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <a
                  href="https://wa.link/ynaedl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full block text-center px-4 py-3 rounded-md font-semibold text-sm ${pkg.isPopular ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-blue-50 text-blue-700 hover:bg-blue-100'}`}
                >
                  {pkg.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section light>
         <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-12">What Clients Say</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex space-x-1 text-yellow-400 mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
                </div>
                <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center space-x-3">
                  <img src={testimonial.image} alt={testimonial.name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-xs text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
         </div>
      </Section>

      {/* Final CTA */}
      <div className="bg-blue-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to boost your brand?</span>
            <span className="block">Start your journey today.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-blue-200">
            Book a free consultation with our expert strategists and see how we can help you grow.
          </p>
          <a
            href="https://wa.link/ynaedl"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 sm:w-auto"
          >
            Book Consultation
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;