'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

const slugify = require('slugify');

let slug;

// https://github.com/strapi/strapi/issues/4776
module.exports = {
  lifecycles: {
    async beforeCreate(data) {
      strapi.log.debug("beforeCreate")
      slug = data.name || slug;
      data.slug = slugify(data.name, {lower: true});
    },
    async beforeUpdate (params,data) {
      strapi.log.debug("beforeUpdate")
      slug = data.name || slug;
      data.slug = slugify(slug, {lower: true});
    },
  },
};


// module.exports = {
//   beforeSave: async (model, attrs, options) => {
//     if (options.method === 'insert' && attrs.name) {
//       model.set('slug', slugify(attrs.name, {lower: true}));
//     } else if (options.method === 'update' && attrs.name) {
//       attrs.slug = slugify(attrs.name, {lower: true});
//     }
//   },
// };
