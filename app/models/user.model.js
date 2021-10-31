module.exports = (sequelize, DataType) => {
    const User = sequelize.define("user", {
      name: {
        type: DataType.STRING
      },
      password: {
        type: DataType.STRING
      },
      email: {
        type: DataType.STRING
      },
      session: {
        type: DataType.BOOLEAN
      },
      last_login: {
        type: DataType.STRING
      },
      visible: {
        type: DataType.BOOLEAN
      }
    }, {
      underscored: true
    });
  
    return User;
  };