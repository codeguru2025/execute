import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
}

function getOrCreateMeta(name: string, property?: string): HTMLMetaElement {
  let selector: string;
  if (property) {
    selector = `meta[property="${property}"]`;
  } else {
    selector = `meta[name="${name}"]`;
  }
  
  let meta = document.querySelector<HTMLMetaElement>(selector);
  
  if (!meta) {
    meta = document.createElement("meta");
    if (property) {
      meta.setAttribute("property", property);
    } else {
      meta.setAttribute("name", name);
    }
    document.head.appendChild(meta);
  }
  
  return meta;
}

export function useSEO({ title, description }: SEOProps) {
  useEffect(() => {
    const fullTitle = `${title} | Execute Group`;
    
    document.title = fullTitle;
    
    const metaDescription = getOrCreateMeta("description");
    metaDescription.setAttribute("content", description);
    
    const ogTitle = getOrCreateMeta("", "og:title");
    ogTitle.setAttribute("content", fullTitle);
    
    const ogDescription = getOrCreateMeta("", "og:description");
    ogDescription.setAttribute("content", description);
    
    const ogType = getOrCreateMeta("", "og:type");
    ogType.setAttribute("content", "website");
    
    const ogUrl = getOrCreateMeta("", "og:url");
    ogUrl.setAttribute("content", window.location.href);
    
    const twitterTitle = getOrCreateMeta("twitter:title");
    twitterTitle.setAttribute("content", fullTitle);
    
    const twitterDescription = getOrCreateMeta("twitter:description");
    twitterDescription.setAttribute("content", description);
    
    const twitterCard = getOrCreateMeta("twitter:card");
    twitterCard.setAttribute("content", "summary_large_image");
  }, [title, description]);
}
