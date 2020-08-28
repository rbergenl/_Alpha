import graphql from 'graphql-tag';
import { print } from 'graphql';

export const query = graphql`
    query CreatePages {
        site {
            siteMetadata {
                title
            }
        }
        allStrapiPage { 
            edges {
                node {
                    strapiId
                    slug
                    title
                    lang
                    template
                    content {
                        text
                    }
                }
            }
        }
        allStrapiPost {
            edges {
                node {
                    slug
                }
            }
        }
    }
`;

export const queryAsString = print(query);
