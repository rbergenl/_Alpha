import * as path from 'path';
import { GatsbyNode } from 'gatsby';
import { queryAsString } from './createPagesQuery';
import { CreatePages } from '../__generated__/CreatePages';

export const createPages: GatsbyNode['createPages'] = async ({
    graphql,
    actions,
}) => {
    const { createPage } = actions
    const result = await graphql<CreatePages>(queryAsString)

    result.data.allStrapiPage.edges.forEach(({ node }) => {
      createPage({
        path: `${ getLangPath(node) }/${ node.template === 'home_page' ? '' : node.slug }`,
        component: path.resolve(`./src/templates/${ node.template }.tsx`),
        context: {
          // node,
          // Data passed to context is available
          // in page queries as GraphQL variables.
          id: { eq: node.strapiId },
          slug: node.slug,
          text: node.content[0]?.text,
          title: result.data.site.siteMetadata.title
        },
      })
    })
}

//     result.data.allStrapiPost.edges.forEach(({ node }) => {
//       createPage({
//         path: `${ getLangPath(node) }/blog/${node.slug}`,
//         component: path.resolve(`./src/templates/single_post.tsx`),
//         context: {
//           // Data passed to context is available
//           // in page queries as GraphQL variables.
//           slug: node.slug,
//         },
//       })
//     })

const DEFAULT_LANG = 'en';
const getLangPath = (node) => (!node.lang || node.lang === DEFAULT_LANG) ? '' : '/' + node.lang;
