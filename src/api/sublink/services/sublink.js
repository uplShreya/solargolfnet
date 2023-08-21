'use strict';

/**
 * sublink service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::sublink.sublink');
