const db = require('../../database/models');

const actorsController = {
    'list': (req, res) => {
        db.Actor.findAll()
            .then(actors => {
                res.status(200).json({
                    meta: {
                        status: 200,
                        total: actors.length,
                        url: "api/actors",
                    },
                    data: actors
                });
            });
    },
    'detail': (req, res) => {
        db.Actor.findByPk(req.params.id)
            .then(actor => {
                res .status(200).json({
                    meta: {
                        status: 200,
                        url: "api/actors/detail/{id}",
                    },
                    data: actor
                });
            });
    }
}   

module.exports = actorsController;