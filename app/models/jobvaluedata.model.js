module.exports = (sequelize, DataType) => {
    const JobValueData = sequelize.define("jobvaluedata", {
      entry: {
        type: DataType.STRING
      },
      visible: {
        type: DataType.BOOLEAN
      }
    }, {
      underscored: true
    });
  
    return JobValueData;
  };