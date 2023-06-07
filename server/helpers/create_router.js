const express = require('express');
const ObjectID = require('mongodb').ObjectID

const createRouter = function (collection) {

    const router = express.Router();

    router.get('/', (req, res) => {
        collection
            .find()
            .toArray()
            .then((docs) => res.json(docs))
            .catch((err) => {
                console.error(err);
                res.status(500);
                res.json({ status: 500, error: err });
            });
    });

    router.get('/:id', (req, res) => {
        const id = req.params.id;
        collection
            .findOne({ _id: ObjectID(id) })
            .then((doc) => res.json(doc))
            .catch((err) => {
                console.error(err);
                res.status(500);
                res.json({ status: 500, error: err });
            });
    });

    router.post('/', (req, res) => {
        const newData = req.body;
        collection
            .insertOne(newData)
            .then((result) => {
                res.json(result.ops[0])
            })
            .catch((err) => {
                console.error(err);
                res.status(500);
                res.json({ status: 500, error: err });
            });
    });

    router.delete('/:id', (req, res) => {
        const id = req.params.id;
        collection
            .deleteOne({ _id: ObjectID(id) })
            .then(result => {
                res.json(result)
            })
            .catch((err) => {
                console.error(err);
                res.status(500);
                res.json({ status: 500, error: err });
            });
    });


    router.get('/:id', (req, res) => {
        const id = req.params.id;
        collection
            .findOne({ _id: ObjectID(id) })
            .then((doc) => res.json(doc))
            .catch((err) => {
                console.error(err);
                res.status(500);
                res.json({ status: 500, error: err });
            });
    });

    router.get('/:id/friends', (req, res) => {
        const id = req.params.id;
        collection
          .findOne({ _id: ObjectID(id) })
          .then((doc) => {
            const friendIds = doc.friends.map((friendId) => ObjectID(friendId));
            collection
              .find({ _id: { $in: friendIds } })
              .toArray()
              .then((friends) => {
                res.json(friends);
              })
              .catch((err) => {
                console.error(err);
                res.status(500).json({ error: err });
              });
          })
          .catch((err) => {
            console.error(err);
            res.status(500).json({ error: err });
          });
      });


      router.put('/:reviewId', (req, res) => {
        const reviewId = req.params.reviewId;
        const comment = {
            username: req.body.username,
            text: req.body.text
          };
        collection
            .updateOne(
            { _id: ObjectID(reviewId) },
            { $push: { comments: comment } }
            )
            .then(() => {
            res.json({ message: 'Review Added' });
            })
            .catch((err) => {
            console.error(err);
            res.status(500).json({ error: err });
            });
        });










    return router;
}

module.exports = createRouter;