'use strict';

/**
 *  result controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

const POINTS = [4, 3, 2, 1];

module.exports = createCoreController('api::result.result', ({ strapi }) => ({
    async totals(ctx) {
        const houses = (await strapi.db.query("api::house.house").findMany()).map(({ Name }) => Name);
        const entries = await strapi.db.query("api::result.result").findMany({
            populate: {
                place_1: true,
                place_2: true,
                place_3: true,
                place_4: true,
            }
        });

        const scores = Object.fromEntries(houses.map(el => [el, 0]));

        for (const el of entries) {
            for (let i = 0; i < 4; i++) {
                let current = el[`place_${i + 1}`];

                if (!current)
                    break;

                console.log([current.Name, POINTS[i]])

                scores[current.Name] += POINTS[i];
            }
        }



        ctx.body = scores;
    },
}))