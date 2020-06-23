module.exports = function(sequelize, DataTypes) {
  var Threads = sequelize.define("threads", {
    text: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  })
    Threads.associate = function(models){
      Threads.belongsTo(models.Parks, {
        foreignKey: {
          allowNull: false
        }
      })
    }
    return Threads
}