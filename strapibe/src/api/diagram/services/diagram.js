'use strict';

/**
 * diagram service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::diagram.diagram');
