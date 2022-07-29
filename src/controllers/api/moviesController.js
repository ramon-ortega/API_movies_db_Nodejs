const db = require('../../database/models');

// Aqui tienen otra forma de llamar a cada uno de los modelos
const Movies = db.Movie;

const moviesController = {
    'create': (req, res) => {
        Movies.create(
            req.body
        ).then((movie)=>{
            res.status(201).json({
                meta: {
                    status: 201,
                },
                data: {
                    movie
                }
            });
        });
    },
    'delete': (req, res) => {
        let movieId = req.params.id;
        Movies.destroy({
            where: {id: movieId}, force: true
        })
        .then((movie)=>{
            return res.status(202).json({
                meta: {
                    status: 202
                },
                data: movie
            });
        });
    }
};

module.exports = moviesController;