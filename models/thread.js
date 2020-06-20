module.exports = function(sequelize, DataTypes) {
  var Threads = sequelize.define("threads", {
    text: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  })
  return Threads;
}