const sequelize = require('sequelize');
const { census } = require('../constructors/index');


census.groupAndCountCensus = attribute => new Promise(((resolve) => {
  const filter = {
    where: { },
    attributes: [`${attribute}`, [sequelize.fn('count', sequelize.col(`${attribute}`)), 'count'], [sequelize.fn('AVG', sequelize.col('age')), 'ageAvg']],
    group: [`${attribute}`],
    order: [[sequelize.fn('count', sequelize.col(`${attribute}`)), 'DESC']],
  };

  census.findAll(filter).then((datas) => {
    resolve(datas);
  });
})).catch(err => Promise.reject(err));

module.exports = census;
