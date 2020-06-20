module.exports = function(sequelize, DataTypes) {
  var Parks = sequelize.define("Parks", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    zip: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    rating: {
      type: DataTypes.INTEGER,
    },
    popularity: {
      type: DataTypes.INTEGER
    }
  })
  return Parks;
}