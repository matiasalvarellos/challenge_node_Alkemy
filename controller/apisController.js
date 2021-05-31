const db = require("../database/models");
const {Op} = require("sequelize");

module.exports = {
  characters: async (req, res) => {
    let characters = await db.Character.findAll();

    let results = characters.map(character => {
      return {
        title: character.title,
        image: character.image,
        url: `/character/${character.id}`
      }
    })

    let dataJson = {
      meta: {
        count: characters.length,
        status: 200,
        url: "/character",
      },
      results: results
    }
    
    res.json(dataJson)
  },
  characterDetail: async (req, res) => {

    let character = await db.Character.findByPk(req.params.id, {
      include:["movies"]
    })

    res.json(character)
  },
  movies: async (req, res) => {

    let movies = await db.Movie.findAll();
    
    let results = movies.map(movie =>{
      return {
        title: movie.title,
        image: movie.image,
        url: `/movie/${movie.id}`
      }
    })

    let dataJson = {
      meta: {
        count: movies.length,
        status: 200 ,
        url: "/movie",
      },
      results: results
    }

    res.json(dataJson);
  },
  movieDetail: async (req, res) => {

    let movie = await db.Movie.findByPk(req.params.id,{
      include:["characters"]
    })

    res.json(movie);
  },
  searchMovie: async (req,res) => {
    let movieFound = await db.Movie.findAll({
      where: {
        title: { [Op.like]: '%' + req.query.title + '%' }
      },
      order: [
        ["id", "ASC"]
      ]
    })

    if(movieFound.length == 0){
      return res.json({
        error:"no encontramos nada che"
      })
    }

    let dataJson = {
      meta:{
        status: 200
      },
      results: movieFound
    }
    
    return res.json(dataJson)

  }

}