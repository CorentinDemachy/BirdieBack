const CensusMethods = require('../models/methods/census');


const countAndSort = (req, res, next) => {
  const { attribute } = req.body;


  CensusMethods.groupAndCountCensus(attribute).then((result) => {
    res.status(200).json(result);
  }).catch((err) => {
    next(err);
  });
};

/* const countAndSort = (req, res, next) => {
  const { attribute } = req.body;

  const filter = { where: {}, attributes: ['age', `${attribute}`] };
  console.log(filter.attributes[1]);

  CensusMethods.aggregateCensus(attribute).then((uniqueValues) => {
    CensusMethods.countAndSort(uniqueValues, attribute).then((DataDisplay) => {
      res.status(200).json(DataDisplay);
    }).catch((err) => {
      next(err);
    });
  });
}; */

module.exports = { countAndSort };
