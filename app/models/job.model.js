module.exports = (sequelize, DataType) => {
    const Job = sequelize.define("job", {
      active: {
        type: DataType.BOOLEAN
      },
      title: {
        type: DataType.STRING
      },
      description: {
        type: DataType.STRING
      },
      url: {
        type: DataType.STRING
      },
      visible: {
        type: DataType.BOOLEAN
      }
    }, {
      underscored: true
    });
  
    return Job;
  };