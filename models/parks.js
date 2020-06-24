module.exports = function(sequelize, DataTypes) {
    var Parks = sequelize.define("Parks", {
      parkID: {
          type: DataTypes.STRING,
          allowNull: false,
          primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      address: {
        type: DataTypes.STRING,
        allowNull: true,
        default: "hi"
      },
      rating: {
        type: DataTypes.INTEGER,
      },
      popularity: {
        type: DataTypes.INTEGER,
        default: 0
      }
    })

    Parks.associate = function(models){
      Parks.hasMany(models.threads)
    }
    return Parks;
  }