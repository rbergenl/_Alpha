const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    // fill the author name with the current user
    async create(ctx) {
        let entity;
        if (ctx.is('multipart')) {
          const { data, files } = parseMultipartData(ctx);
          data.author = ctx.state.user.id;
          entity = await strapi.services.page.create(data, { files });
        } else {
          ctx.request.body.author = ctx.state.user.id;
          entity = await strapi.services.page.create(ctx.request.body);
        }
        return sanitizeEntity(entity, { model: strapi.models.page });
      },
};
