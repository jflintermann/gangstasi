module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "snx_3D5ru9HF",
    DB: "snoopmetrix_live",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };