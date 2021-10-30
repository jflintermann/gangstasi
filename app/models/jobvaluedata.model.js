module.exports = (sequelize, DataType) => {
    const JobValueData = sequelize.define("jobvaluedata", {
      jobValueId: {
        type: DataType.STRING
      },
      entry: {
        type: DataType.STRING
      },
      visible: {
        type: DataType.BOOLEAN
      }
    });
  
    return JobValueData;
  };