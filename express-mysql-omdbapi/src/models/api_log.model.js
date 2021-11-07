module.exports = (sequelize, Sequelize) => {
    const ApiLog = sequelize.define("apiLog", {
      endpoint: {
        type: Sequelize.STRING
      },
      params: {
        type: Sequelize.STRING
      },
      timestamp: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      }
    });
  
    return ApiLog;
  };