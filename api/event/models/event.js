'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

const slugify = require('slugify');

let slug;

module.exports = {
  lifecycles: {
    async beforeCreate(data) {
      strapi.log.debug("beforeCreate")
      slug = data.title || slug;
      data.slug = slugify(data.title, {lower: true});
    },
    async beforeUpdate (params,data) {
      strapi.log.debug("beforeUpdate", data.title)
      slug = data.title || slug;
      data.slug = slugify(slug, {lower: true});
    },
  },
};
