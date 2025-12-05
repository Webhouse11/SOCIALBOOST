import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { BlogPost, Package, Service, SiteSettings } from '../types';
import { INITIAL_POSTS, INITIAL_PACKAGES, INITIAL_SERVICES, INITIAL_SETTINGS } from '../constants';

interface SiteContextType {
  settings: SiteSettings;
  updateSettings: (newSettings: Partial<SiteSettings>) => void;
  posts: BlogPost[];
  addPost: (post: BlogPost) => void;
  deletePost: (id: string) => void;
  services: Service[];
  packages: Package[];
  isDark: boolean; // Not fully implemented in UI but good for structure
  toggleTheme: () => void;
}

const SiteContext = createContext<SiteContextType | undefined>(undefined);

export const SiteProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<SiteSettings>(INITIAL_SETTINGS);
  const [posts, setPosts] = useState<BlogPost[]>(INITIAL_POSTS);
  const [services, setServices] = useState<Service[]>(INITIAL_SERVICES);
  const [packages, setPackages] = useState<Package[]>(INITIAL_PACKAGES);
  const [isDark, setIsDark] = useState(false);

  // Simulate SEO update effect
  useEffect(() => {
    document.title = settings.seoTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', settings.siteDescription);
    }
  }, [settings]);

  const updateSettings = (newSettings: Partial<SiteSettings>) => {
    setSettings((prev) => ({ ...prev, ...newSettings }));
  };

  const addPost = (post: BlogPost) => {
    setPosts((prev) => [post, ...prev]);
  };

  const deletePost = (id: string) => {
    setPosts((prev) => prev.filter((p) => p.id !== id));
  };

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <SiteContext.Provider
      value={{
        settings,
        updateSettings,
        posts,
        addPost,
        deletePost,
        services,
        packages,
        isDark,
        toggleTheme,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};

export const useSite = () => {
  const context = useContext(SiteContext);
  if (!context) {
    throw new Error('useSite must be used within a SiteProvider');
  }
  return context;
};