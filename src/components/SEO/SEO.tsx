import React from "react";
import { useSiteMetadate } from "../../hooks/use-site-metadates";

interface SEOProps {
  title?: string;
  description?: string;
  pathname?: string;
  children?: React.ReactNode;
}

const getSEO = ({ title, description, pathname }: SEOProps) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    image,
    siteUrl,
  } = useSiteMetadate();

  return {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ""}`,
  };
};

export const SEO = ({ title, description, pathname, children }: SEOProps) => {
  const seo = getSEO({ title, description, pathname, children });
  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      {children}
    </>
  );
};
