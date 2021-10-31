module.exports = (sequelize, DataType) => {
    const JobValueEmail = sequelize.define("jobvalueemail", {
      active: {
        type: DataType.BOOLEAN
      },
      address: {
        type: DataType.STRING
      },
      condition: {
        type: DataType.STRING
      },
      threshold: {
        type: DataType.STRING
      },
      visible: {
        type: DataType.BOOLEAN
      }
    }, {
      underscored: true
    });
  
    return JobValueEmail;
  };