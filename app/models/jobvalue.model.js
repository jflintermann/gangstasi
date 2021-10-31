module.exports = (sequelize, DataType) => {
    const JobValue = sequelize.define("jobvalue", {
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
    }, {
      underscored: true
    });
  
    return JobValue;
  };