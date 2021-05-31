module.exports = function (sequelize, dataTypes) {

  const Genre = sequelize.define("Genre", {
    name: dataTypes.STRING,
    age: dataTypes.STRING,
    weight: dataTypes.STRING,
    avatar: dataTypes.STRING,
    history: dataTypes.STRING,
  });

  Genre.associate = (models) => {

    Genre.hasMany(models.Movie , {
      as: "movies",
      foreignKey: "genre_id"
    })
    
  };

  return Genre;
}