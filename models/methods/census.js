const sequelize = require('sequelize');
const { census } = require('../constructors/index');


census.groupAndCountCensus = attribute => new Promise(((resolve) => {
  const filter = {
    where: { },
    attributes: ['age', `${attribute}`, sequelize.fn('count', sequelize.col(`${attribute}`))],
    group: [`${attribute}`],
  };

  resolve(census.findAndCountAll(filter));
}));

module.exports = census;
