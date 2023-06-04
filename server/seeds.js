use podcast;
// db.dropDatabase();

// db.users.insertMany([
//   {
//     username: "ben15",
//     friends: [],
//     wishlist: []
//   }, 
//   {
//     username: "zhu41",
//     friends: [],
//     wishlist: []
//   }, 
//   {
//     username: "andrew22",
//     friends: [],
//     wishlist: []
//   }

// ])


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


db.tiles.insertMany([
  {
    user: '647c833f1f41861eac82d252',
    podcastId: "257343bd-e9e9-47a5-af4a-e56e830b1cd4",
    likes: 11,
    comments: [
      {
        user:'647c833f1f41861eac82d253',
        text: "I also love this pod!"
      },
      {
        user:'647c833f1f41861eac82d252',
        text: "No way, that's cool"
      },
      {
        user:'647c833f1f41861eac82d253',
        text: "I listen on the way to work"
      }
    ]
  },
  {
    user: '647c833f1f41861eac82d252',
    podcastId: "3c44a6e2-cab7-4d84-b7c8-afe6bab9d5d8",
    likes: 6,
    comments: [
      {
        user:'647c833f1f41861eac82d253',
        text: "I also love this pod!"
      },
      {
        user:'647c833f1f41861eac82d252',
        text: "No way, that's cool"
      },
      {
        user:'647c833f1f41861eac82d253',
        text: "I listen on the way to work"
      }
    ]
  },
  {
    user: '647c833f1f41861eac82d252',
    podcastId: "6f007867-2ffe-41e8-a2b4-4de5ee553a2d",
    likes: 4,
    comments: [
      {
        user:'647c833f1f41861eac82d253',
        text: "I also love this pod!"
      },
      {
        user:'647c833f1f41861eac82d252',
        text: "No way, that's cool"
      },
      {
        user:'647c833f1f41861eac82d253',
        text: "I listen on the way to work"
      }
    ]
  },
])