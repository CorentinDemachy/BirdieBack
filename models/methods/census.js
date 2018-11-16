const sequelize = require('sequelize');
const { census } = require('../constructors/index');


census.groupAndCountCensus = attribute => new Promise(((resolve) => {
  const filter = {
    where: { },
    attributes: [`${attribute}`, sequelize.fn('count', sequelize.col(`${attribute}`)), [sequelize.fn('AVG', sequelize.col('age')), 'ageAvg']],
    group: [`${attribute}`],
  };

  census.findAndCountAll(filter).then((datas) => {
    const datarows = datas.rows.map(data => data.get({
      plain: true,
    }));

    for (let i = 0; i < datas.count.length; i += 1) {
      datarows[i].count = datas.count[i].count;
    }
    const sortFunction = (a, b) => b.count - a.count;
    const orderedData = datarows.sort(sortFunction);
    resolve(orderedData);
  });
})).catch(err => Promise.reject(err));

module.exports = census;
