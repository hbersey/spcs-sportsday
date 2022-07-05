'use strict';

/**
 * guest-book-entry service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::guest-book-entry.guest-book-entry');
