module.exports = function (sequelize, dataTypes) {
  const Character = sequelize.define("Character", {
    name: dataTypes.STRING,
    age: dataTypes.STRING,
    weight: dataTypes.STRING,
    avatar: dataTypes.STRING,
    history: dataTypes.STRING,
  });

  Character.associate = (models) => {

    Character.belongsToMany(models.Movie, {
      as: "movies",
      through: 'character_movie',
      foreignKey: 'character_id',
      otherKey: 'movie_id'
    })

  };

  return Character;
}