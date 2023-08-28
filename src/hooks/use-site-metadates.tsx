import { graphql, useStaticQuery } from "gatsby";

export const useSiteMetadate = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          siteUrl
          description
        }
      }
    }
  `);

  return data.site.siteMetadata;
};
