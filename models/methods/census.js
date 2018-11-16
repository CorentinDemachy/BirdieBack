const sequelize = require('sequelize');
const { census } = require('../constructors/index');


census.filterCensus = filter => new Promise(((resolve) => {
  census.findAll(filter).then((result) => {
    const plainResult = result.map(data => data.get({
      plain: true,
    }));
    resolve(plainResult);
  }).catch(err => Promise.reject(err));
}));


census.groupAndCountCensus = attribute => new Promise(((resolve) => {
  const filter = {
    where: { },
    attributes: ['age', `${attribute}`, sequelize.fn('count', sequelize.col(`${attribute}`))],
    group: [`${attribute}`],
  };

  resolve(census.findAndCountAll(filter));
}));
/* census.aggregateCensus = attribute => new Promise(((resolve) => {
  census.aggregate(attribute, 'DISTINCT', { plain: false }).then((result) => {
    resolve(result);
  });
}));


census.countAndSort = (uniqueValues, attribute) => new Promise(((resolve) => {
  const Data = {};

  for (let i = 0; i < uniqueValues.length; i += 1) {
    const filter = {
      where: { },
      attributes: ['age', `${attribute}`],
    };
    filter.where[`${attribute}`] = uniqueValues[i].DISTINCT;
    census.findAndCountAll(filter).then((matchs) => {
      const count = matchs.count;
      const plainMatchs = matchs.rows.map(data => data.get({
        plain: true,
      }));

      let sum = 0;

      for (let j = 0; j < count; j += 1) {
        sum += plainMatchs[j].age;
      }

      const averageAge = sum / count;
      const value = plainMatchs[0][`${attribute}`];
      Data[`${plainMatchs[0][`${attribute}`]}`] = {
        value,
        count,
        averageAge,

      };

      if (i === uniqueValues.length - 1) {
        const sortFunction = (a, b) => Data[b].count - Data[a].count;
        const OrderedData = Object.keys(Data).sort(sortFunction).map(key => Data[key]);

        resolve(OrderedData);
      }
    });
  }
}));

 census.averageAge = (Data, attribute) => new Promise(((resolve) => {
  const possibleValues = [];
  const DataPerValue = {};
  for (let i = 0; i < Data.length; i += 1) {
    if (possibleValues.indexOf(Data[i][`${attribute}`]) === -1) {
      possibleValues.push(`${Data[i][`${attribute}`]}`);
      console.log(possibleValues);
      DataPerValue[`${Data[i][`${attribute}`]}`] = [];
      console.log(DataPerValue[`${Data[i]}`]);
    }
    DataPerValue[`${Data[i][`${attribute}`]}`].push(Data.age);
  }
  const DataDisplay = {};
  for (let j = 0; j < DataPerValue.length; j += 1) {
    const count = DataPerValue[j].length;
    let sum = 0;
    for (let i = 0; i < count; i += 1) {
      sum += parseInt(DataPerValue[i], 10); // don't forget to add the base
    }
    const averageAge = sum / count;
    DataDisplay.push({
      key: DataPerValue[j].values,
      value: {
        key1: 'count',
        value1: count,
        key2: 'Average Age',
        value2: averageAge,
      },
    });
  }
  resolve(DataDisplay);
}));
*/

module.exports = census;
