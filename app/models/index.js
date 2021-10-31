const Sequelize = require("sequelize");
const dbConfig = require("../config/db.config_dev.js");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  port: dbConfig.PORT,
  dialect: dbConfig.DIALECT,

  pool: {
    max: dbConfig.POOL.MAX,
    min: dbConfig.POOL.MIN,
    acquire: dbConfig.POOL.ACQUIRE,
    idle: dbConfig.POOL.IDLE
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./user.model.js")(sequelize, Sequelize);
db.job = require("./job.model.js")(sequelize, Sequelize);
db.jobvalue = require("./jobvalue.model.js")(sequelize, Sequelize);
db.jobvalueemail = require("./jobvalueemail.model.js")(sequelize, Sequelize);
db.jobvaluedata = require("./jobvaluedata.model.js")(sequelize, Sequelize);

db.user.hasMany(db.job, { as: "job" });
db.job.hasMany(db.jobvalue, { as: "jobvalue"});
db.jobvalue.hasMany(db.jobvalueemail, { as: "jobvalueemail"});
db.jobvalue.hasMany(db.jobvaluedata, { as: "jobvaluedata"});

db.job.belongsTo(db.user);
db.jobvalue.belongsTo(db.job);
db.jobvalueemail.belongsTo(db.jobvalue);
db.jobvaluedata.belongsTo(db.jobvalue);

module.exports = db;