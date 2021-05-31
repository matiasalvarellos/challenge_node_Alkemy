module.exports = function (sequelize, dataTypes) {
  const Movie = sequelize.define("Movie", {
    title: dataTypes.STRING,
    image: dataTypes.STRING,
    date_movie: dataTypes.STRING,
    qualification: dataTypes.STRING,
  });

  Movie.associate = (models) => {

    Movie.belongsToMany(models.Character, {
      as:"characters",
      through: 'character_movie',
      foreignKey: 'movie_id',
      otherKey: 'character_id'
    })

    Movie.belongsTo(models.Genre, {
      as: "genre",
      foreignKey: "genre_id"
    })
    
  };

  return Movie;
}