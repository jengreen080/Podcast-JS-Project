use podcast;
// db.dropDatabase();

db.users.insertMany([
  {
    username: "ben15",
    friends: [],
    wishlist: []
  }, 
  {
    username: "zhu41",
    friends: [],
    wishlist: []
  }, 
  {
    username: "andrew22",
    friends: [],
    wishlist: []
  }

])


db.podcast_reviews.insertMany([
  {
    id: "257343bd-e9e9-47a5-af4a-e56e830b1cd4",
    reviews: [
      {
        user: '647c833f1f41861eac82d252',
        rating: 5,
        text: "Great Podcast"
      },
      {
        user: '647c833f1f41861eac82d253',
        rating: 4,
        text: "Decent Podcast"
      },
      {
        user: '647c833f1f41861eac82d253',
        rating: 1,
        text: "Terrible Podcast"
      }
    ]
  },
  {
    id: "3c44a6e2-cab7-4d84-b7c8-afe6bab9d5d8",
    reviews: [
      {
        user: '647c833f1f41861eac82d252',
        rating: 5,
        text: "Great Podcast"
      },
      {
        user: '647c833f1f41861eac82d253',
        rating: 4,
        text: "Decent Podcast"
      },
      {
        user: '647c833f1f41861eac82d253',
        rating: 1,
        text: "Terrible Podcast"
      }
    ]
  },
  {
    id: "6f007867-2ffe-41e8-a2b4-4de5ee553a2d",
    reviews: [
      {
        user: '647c833f1f41861eac82d252',
        rating: 5,
        text: "Great Podcast"
      },
      {
        user: '647c833f1f41861eac82d253',
        rating: 4,
        text: "Decent Podcast"
      },
      {
        user: '647c833f1f41861eac82d253',
        rating: 1,
        text: "Terrible Podcast"
      }
    ]
  }
])
