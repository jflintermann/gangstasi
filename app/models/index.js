const Sequelize = require("sequelize");
const dbConfig = require("../config/db.config.js");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
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

db.job.belongsTo(db.user, {
    foreignKey: "userId"
});
db.jobvalue.belongsTo(db.job, {
    foreignKey: "jobId"
});
db.jobvalueemail.belongsTo(db.jobvalue, {
    foreignKey: "jobValueId"
});
db.jobvaluedata.belongsTo(db.jobvalue, {
    foreignKey: "jobValueId"
});

module.exports = db;