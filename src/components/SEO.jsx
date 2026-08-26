import { useEffect } from 'react';

const SEO = ({ title, description, keywords }) => {
  useEffect(() => {
    // Ensure base title format
    const fullTitle = title.includes('ScaleBy') ? title : `${title} | ScaleBy`;
    document.title = fullTitle;

    // Helper to set meta tags
    const setMetaTag = (name, content) => {
      if (!content) return;
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    setMetaTag('description', description);
    setMetaTag('keywords', keywords);
    
    // OpenGraph and Twitter tags for social sharing
    const setPropertyTag = (property, content) => {
      if (!content) return;
      let tag = document.querySelector(`meta[property="${property}"]`) || document.querySelector(`meta[name="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(property.startsWith('og:') ? 'property' : 'name', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };
    
    setPropertyTag('og:title', fullTitle);
    setPropertyTag('twitter:title', fullTitle);
    setPropertyTag('og:description', description);
    setPropertyTag('twitter:description', description);

    // Optional: cleanup function could restore previous tags, but for SPA routing
    // it's usually fine to just let the next route overwrite them.
  }, [title, description, keywords]);

  return null;
};

export default SEO;
