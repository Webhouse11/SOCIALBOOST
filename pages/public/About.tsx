import React from 'react';
import Section from '../../components/ui/Section';
import { COMPANY_STATS } from '../../constants';
import { Target, Zap, TrendingUp, Clock, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 uppercase tracking-wide">About Us — Social Boost Media</h1>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Social Boost Media is a specialized social media management and digital visibility division under Webhouse Media and Marketing Ltd.
          </p>
        </div>
      </div>

      {/* Main Narrative */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
             <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
             <p className="text-blue-600 font-medium text-lg mb-6 border-l-4 border-blue-600 pl-4">
               We exist for one mission: to help businesses grow faster, connect deeper, and sell smarter through the power of social media.
             </p>
             <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
               <p>
                 In a world where attention is the new currency, we help brands stand out with strategy, creativity, and consistency. We manage everything—from content creation to posting, engagement, brand storytelling, paid ads, community building, and full online reputation management—so that business owners can focus on running their business while we handle their online growth.
               </p>
               <p>
                 At Social Boost Media, we believe social media is more than just posting; it is a strategic communication tool that can shape customer perception, increase revenue, and build a loyal audience that trusts your brand.
               </p>
               <p>
                 Backed by the expertise, technology, and decade-long experience of Webhouse Media and Marketing Ltd., we bring a global standard of delivery to businesses of all sizes—startups, SMEs, personal brands, e-commerce, and corporate organizations.
               </p>
             </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-blue-600 transform translate-x-4 translate-y-4 rounded-xl"></div>
            <img src="https://picsum.photos/800/600?random=15" alt="Office Culture" className="relative rounded-xl shadow-lg w-full" />
          </div>
        </div>
      </Section>

      {/* Values - What We Stand For */}
      <div className="bg-gray-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold">What We Stand For</h2>
            <p className="mt-4 text-gray-400 text-lg">Our core values that drive your success.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            <div className="text-center p-4 group">
               <div className="bg-gray-800 group-hover:bg-blue-600 transition-colors w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-500 group-hover:text-white">
                 <Target size={28} />
               </div>
               <h3 className="font-bold text-xl mb-3">Professionalism</h3>
               <p className="text-sm text-gray-400 group-hover:text-gray-300">Your brand is handled with excellence and intentionality.</p>
            </div>
            <div className="text-center p-4 group">
               <div className="bg-gray-800 group-hover:bg-blue-600 transition-colors w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-500 group-hover:text-white">
                 <Zap size={28} />
               </div>
               <h3 className="font-bold text-xl mb-3">Creativity</h3>
               <p className="text-sm text-gray-400 group-hover:text-gray-300">Fresh, engaging content that attracts attention and inspires action.</p>
            </div>
            <div className="text-center p-4 group">
               <div className="bg-gray-800 group-hover:bg-blue-600 transition-colors w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-500 group-hover:text-white">
                 <TrendingUp size={28} />
               </div>
               <h3 className="font-bold text-xl mb-3">Results</h3>
               <p className="text-sm text-gray-400 group-hover:text-gray-300">Measurable growth—followers, engagement, reputation, and revenue.</p>
            </div>
            <div className="text-center p-4 group">
               <div className="bg-gray-800 group-hover:bg-blue-600 transition-colors w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-500 group-hover:text-white">
                 <Clock size={28} />
               </div>
               <h3 className="font-bold text-xl mb-3">Consistency</h3>
               <p className="text-sm text-gray-400 group-hover:text-gray-300">Your customers see you everywhere—every time.</p>
            </div>
            <div className="text-center p-4 group">
               <div className="bg-gray-800 group-hover:bg-blue-600 transition-colors w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-500 group-hover:text-white">
                 <Lightbulb size={28} />
               </div>
               <h3 className="font-bold text-xl mb-3">Innovation</h3>
               <p className="text-sm text-gray-400 group-hover:text-gray-300">Modern strategies that keep you ahead of competitors.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Goal & Promise */}
      <Section light>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <div className="bg-white p-10 rounded-2xl shadow-sm border-t-8 border-blue-600 h-full hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-extrabold text-gray-900 mb-6 tracking-tight">Our Goal</h3>
            <p className="text-gray-600 text-lg leading-relaxed">To position your brand as visible, trusted, and profitable across all major social media platforms.</p>
          </div>
          <div className="bg-white p-10 rounded-2xl shadow-sm border-t-8 border-indigo-600 h-full hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-extrabold text-gray-900 mb-6 tracking-tight">Our Promise</h3>
            <p className="text-gray-600 text-lg leading-relaxed">We don’t just manage your social media—we boost your presence, elevate your brand identity, and convert attention into real business growth.</p>
          </div>
        </div>
      </Section>
      
      {/* Stats - moved down as secondary proof */}
      <div className="bg-white py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {COMPANY_STATS.map((stat, idx) => (
              <div key={idx} className="p-4">
                <div className="text-4xl font-extrabold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium uppercase tracking-wider text-xs">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;