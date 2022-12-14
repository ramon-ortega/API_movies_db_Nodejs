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
    },
    'create': (req, res) => {
        db.Actor.create(
            req.body
        ).then((actor)=>{
            res.status(201).json({
                meta: {
                    status: 201,
                    url: "api/actors/create"
                },
                data: {
                    actor
                }
            });
        });
    },
    'delete': (req, res) => {
        let actorId = req.params.id;
        db.Actor.destroy({
            where: {id: actorId}, force: true
        })
        .then((actor)=>{
            return res.status(202).json({
                meta: {
                    status: 202,
                    url: "api/actors/delete/{id}"
                },
                data: actor
            });
        });
    }
}   

module.exports = actorsController;