import React from 'react';
import Section from '../../components/ui/Section';
import { useSite } from '../../context/SiteContext';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog: React.FC = () => {
  const { posts } = useSite();

  return (
    <div className="animate-fade-in">
      <div className="bg-gray-50 py-16 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900">Our Blog</h1>
        <p className="mt-2 text-gray-500">Insights, tips, and news from the world of social media.</p>
      </div>

      <Section>
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="lg:w-2/3 space-y-12">
            {posts.map((post) => (
              <article key={post.id} className="flex flex-col md:flex-row gap-6 bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="md:w-1/3 h-56 md:h-auto shrink-0">
                  <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 flex flex-col justify-center">
                  <div className="flex items-center text-xs text-gray-500 mb-2 space-x-3">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded font-medium">{post.category}</span>
                    <span className="flex items-center"><Calendar size={12} className="mr-1" /> {post.date}</span>
                    <span className="flex items-center"><User size={12} className="mr-1" /> {post.author}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-blue-600 cursor-pointer">{post.title}</h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <button className="text-blue-600 font-bold text-sm flex items-center hover:underline mt-auto">
                    Read Article <ArrowRight size={14} className="ml-1" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3 space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
              <ul className="space-y-2">
                {['Social Media Tips', 'Marketing Strategy', 'Branding', 'Agency News', 'Case Studies'].map((cat, i) => (
                   <li key={i}>
                     <a href="#" className="flex items-center justify-between text-gray-600 hover:text-blue-600">
                       <span>{cat}</span>
                       <span className="bg-gray-100 text-gray-500 text-xs px-2 py-1 rounded-full">{Math.floor(Math.random() * 10) + 2}</span>
                     </a>
                   </li>
                ))}
              </ul>
            </div>

            <div className="bg-blue-600 p-8 rounded-xl text-white text-center">
              <h3 className="text-xl font-bold mb-4">Need help with your strategy?</h3>
              <p className="text-blue-100 mb-6">Our experts are ready to audit your social media presence.</p>
              <button className="bg-white text-blue-600 font-bold px-6 py-2 rounded-lg hover:bg-gray-100 w-full">
                Get Free Audit
              </button>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Blog;