module.exports = (sequelize, DataType) => {
    const User = sequelize.define("user", {
      name: {
        type: DataType.STRING
      },
      password: {
        type: DataType.STRING
      },
      session: {
        type: DataType.BOOLEAN
      },
      lastLogin: {
        type: DataType.STRING
      },
      visible: {
        type: DataType.BOOLEAN
      }
    });
  
    return User;
  };