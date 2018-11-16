const CensusMethods = require('../models/methods/census');


const countAndSort = (req, res, next) => {
  const { attribute } = req.body;


  CensusMethods.groupAndCountCensus(attribute).then((result) => {
    res.status(200).json(result);
  }).catch((err) => {
    next(err);
  });
};


module.exports = { countAndSort };
