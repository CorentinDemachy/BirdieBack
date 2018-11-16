const Sequelize = require('sequelize');
const config = require('config');

const censusConstructor = require('./sequelize-constructor/census');


// Sequelize connection
const dbconfig = config.get('dbConfig');
const sequelize = new Sequelize(dbconfig.database, dbconfig.username, dbconfig.password, {
  host: dbconfig.host,
  dialect: 'mysql',
  operatorsAliases: false,
  logging: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

// Models
const census = censusConstructor(sequelize);

// Export

module.exports = { sequelize, census };
