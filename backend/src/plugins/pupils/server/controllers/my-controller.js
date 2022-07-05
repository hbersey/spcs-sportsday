'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('pupils')
      .service('myService')
      .getWelcomeMessage();
  },
};
