module.exports = (sequelize, DataType) => {
    const JobValue = sequelize.define("jobvalue", {
      jobId: {
        type: DataType.STRING
      },
      active: {
        type: DataType.BOOLEAN
      },
      title: {
        type: DataType.STRING
      },
      description: {
        type: DataType.STRING
      },
      value: {
        type: DataType.STRING
      },
      interval: {
        type: DataType.STRING
      },
      visible: {
        type: DataType.BOOLEAN
      }
    });
  
    return JobValue;
  };