import React, { useState } from 'react';
import Section from '../../components/ui/Section';
import { useSite } from '../../context/SiteContext';
import { Mail, Phone, MapPin, MessageSquare, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const { settings } = useSite();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    // Construct WhatsApp Message
    const text = `*New Inquiry from Website*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Subject:* ${formData.subject}%0A*Message:* ${formData.message}`;
    
    // Redirect to WhatsApp API with the number associated with wa.link/ynaedl (2349035882281)
    const whatsappUrl = `https://api.whatsapp.com/send?phone=2349035882281&text=${text}`;
    
    window.open(whatsappUrl, '_blank');
    
    setStatus('success');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    
    // Reset status after a delay
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <div className="animate-fade-in">
      <div className="bg-gray-900 py-16 text-white text-center">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-400">Let's start a conversation about your brand's future.</p>
      </div>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h2>
            <p className="text-gray-600 mb-8">
              Whether you have a question about our packages, pricing, or want to schedule a consultation, our team is ready to answer all your questions.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Visit Us</h3>
                  <p className="text-gray-600">{settings.address}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Email Us</h3>
                  <p className="text-gray-600">{settings.contactEmail}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Call Us</h3>
                  <p className="text-gray-600">{settings.contactPhone}</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
               <a 
                 href="https://wa.link/ynaedl" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="inline-flex items-center space-x-2 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors shadow-lg shadow-green-500/30"
               >
                 <MessageSquare size={20} />
                 <span>Quick Chat on WhatsApp</span>
               </a>
            </div>

            {/* Map Placeholder */}
            <div className="mt-10 h-64 bg-gray-200 rounded-xl overflow-hidden relative">
               <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  <span className="flex items-center"><MapPin className="mr-2" /> Map Integration Placeholder</span>
               </div>
               <img src="https://picsum.photos/600/300?grayscale&blur=2" alt="Map" className="w-full h-full object-cover opacity-30" />
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <MessageSquare className="mr-3 text-green-500" />
              Send Message via WhatsApp
            </h2>
            {status === 'success' ? (
              <div className="bg-green-50 text-green-700 p-6 rounded-lg text-center">
                <p className="font-bold text-lg mb-2">Redirecting to WhatsApp...</p>
                <p>If the chat didn't open automatically, please check your popup blocker or click the button below.</p>
                <button onClick={handleSubmit} className="mt-4 text-green-800 underline font-bold">Try Again</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    required
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                      required
                      type="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input
                      required
                      type="tel"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <select
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    value={formData.subject}
                    onChange={e => setFormData({...formData, subject: e.target.value})}
                  >
                    <option value="">Select a topic</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="New Project">Start a Project</option>
                    <option value="Support">Support</option>
                    <option value="Partnership">Partnership</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    placeholder="How can we help you?"
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-green-500 text-white font-bold py-4 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center disabled:opacity-70 shadow-lg shadow-green-500/20"
                >
                  {status === 'sending' ? 'Opening WhatsApp...' : <><Send size={18} className="mr-2" /> Send via WhatsApp</>}
                </button>
                <p className="text-xs text-center text-gray-500 mt-4">
                  By clicking Send, you will be redirected to WhatsApp to complete your message.
                </p>
              </form>
            )}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;