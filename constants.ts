import { BlogPost, Package, Service, SiteSettings, TeamMember, Stat } from './types';

export const INITIAL_SETTINGS: SiteSettings = {
  siteName: 'SOCIALBOOST',
  siteDescription: 'Grow, Engage, and Dominate Social Media.',
  contactEmail: 'webhouselab1@gmail.com',
  contactPhone: '+234-8152469749',
  address: 'LEKKI PHASE 1, LAGOS, NIGERIA',
  primaryColor: '#0ea5e9',
  seoTitle: 'SocialBoost | International Social Media Agency',
  seoKeywords: 'social media, marketing, branding, growth, agency',
};

export const INITIAL_SERVICES: Service[] = [
  { id: '1', title: 'Social Media Account Management', description: 'Full-service management of your digital presence across all platforms.', icon: 'Users' },
  { id: '2', title: 'Content Creation & Planning', description: 'High-quality visuals, copy, and strategic calendars tailored to your audience.', icon: 'PenTool' },
  { id: '3', title: 'Social Media Ads & Paid Campaigns', description: 'ROI-focused ad campaigns on Facebook, Instagram, LinkedIn, and TikTok.', icon: 'Target' },
  { id: '4', title: 'Brand Identity & Online Positioning', description: 'Defining your voice, look, and feel to stand out in a crowded market.', icon: 'Award' },
  { id: '5', title: 'Influencer Strategy & Outreach', description: 'Connecting your brand with key opinion leaders to amplify reach.', icon: 'Megaphone' },
  { id: '6', title: 'Analytics & Performance Reporting', description: 'Deep dive data analysis to optimize performance and growth.', icon: 'BarChart' },
  { id: '7', title: 'Community Engagement', description: 'Active moderation and community building to foster brand loyalty.', icon: 'MessageCircle' },
  { id: '8', title: 'Content Calendar Development', description: 'Strategic roadmap for consistent and timely content delivery.', icon: 'Calendar' },
];

export const INITIAL_PACKAGES: Package[] = [
  {
    id: '0',
    name: 'Social Basic',
    price: '$150/mo',
    features: ['5 custom posts/month', 'Content Calendar', 'Basic Hashtag Strategy', '1 Platform Support', 'Monthly Report'],
    cta: 'Start Basic'
  },
  {
    id: '1',
    name: 'Social Starter',
    price: '$999/mo',
    features: ['12 custom posts/month', 'Basic social media management', 'Community Guidelines', '2 Platforms Support', 'Email Support'],
    cta: 'Get Starter'
  },
  {
    id: '2',
    name: 'Growth Plus',
    price: '$1,999/mo',
    features: ['Everything in Starter', '20 custom posts/month', 'Ad strategy setup', 'Community engagement', '3 Platforms Support', 'Priority Support'],
    isPopular: true,
    cta: 'Book Strategy Call'
  },
  {
    id: '3',
    name: 'Brand Empire Suite',
    price: '$4,500/mo',
    features: ['Full social media takeover', 'Unlimited content planning', 'Influencer coordination', 'Weekly analytics', 'Dedicated account manager', 'All Platforms'],
    cta: 'Request Proposal'
  },
];

export const INITIAL_POSTS: BlogPost[] = [
  {
    id: '1',
    title: '10 Trends Shaping Social Media in 2024',
    excerpt: 'Discover the latest algorithms and content styles that are dominating the feeds this year.',
    content: 'Full content would go here...',
    author: 'Sarah Jenkins',
    date: 'Oct 12, 2023',
    category: 'Social Media Tips',
    imageUrl: 'https://picsum.photos/800/400?random=1'
  },
  {
    id: '2',
    title: 'Why Video Content is King',
    excerpt: 'Short-form video is no longer optional. Here is how to leverage Reels and TikTok for your brand.',
    content: 'Full content would go here...',
    author: 'Mike Ross',
    date: 'Oct 15, 2023',
    category: 'Content Creation',
    imageUrl: 'https://picsum.photos/800/400?random=2'
  },
  {
    id: '3',
    title: 'Building a Community, Not Just Followers',
    excerpt: 'Engagement metrics matter more than vanity numbers. Learn how to build a loyal tribe.',
    content: 'Full content would go here...',
    author: 'Jessica Lee',
    date: 'Oct 20, 2023',
    category: 'Branding',
    imageUrl: 'https://picsum.photos/800/400?random=3'
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  { id: '1', name: 'Alex Johnson', role: 'CEO & Founder', imageUrl: 'https://picsum.photos/200/200?random=10' },
  { id: '2', name: 'Maria Rodriguez', role: 'Head of Strategy', imageUrl: 'https://picsum.photos/200/200?random=11' },
  { id: '3', name: 'David Kim', role: 'Creative Director', imageUrl: 'https://picsum.photos/200/200?random=12' },
  { id: '4', name: 'Emily Chen', role: 'Lead Copywriter', imageUrl: 'https://picsum.photos/200/200?random=13' },
];

export const COMPANY_STATS: Stat[] = [
  { label: 'Clients Worldwide', value: '500+' },
  { label: 'Campaigns Launched', value: '1,200+' },
  { label: 'Ad Spend Managed', value: '$10M+' },
];