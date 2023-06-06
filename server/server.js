const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router');
const cors = require('cors');

app.use(cors())
app.use(express.json())

MongoClient.connect('mongodb://127.0.0.1:27017', { useUnifiedTopology: true })
  .then((client) => {
    const db = client.db('podcast');
    const siteUsers = db.collection('users');
    const podcastReviews = db.collection('podcast_reviews');
    const usersRouter = createRouter(siteUsers);
    const reviewsRouter = createRouter(podcastReviews);
    app.use('/api/podcast/users', usersRouter);
    app.use('/api/podcast/reviews', reviewsRouter);
  
  });

  app.listen(9000, function(){
    console.log(`app listening on port ${this.address().port}`);
});