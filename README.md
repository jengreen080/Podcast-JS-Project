# Project Name - Social Media Podcast
A brief description of the project.
This is a social media platform designed for podcast enthusiasts to connect with friends, share their favorite podcasts, and discover new ones. Users can create an account, login, and start exploring the platform's features.
Features
Podcast Sharing: Users can share their favorite podcasts with the community by posting podcast details such as title, description, and episode information. They can also add ratings and reviews to podcasts.
Friend Connections: Users can search for other users and send friend requests. Once connected, they can view each other's shared podcasts and activity.
Trending Podcasts: The platform displays a curated list of 5 trending podcasts on the homepage. These podcasts are determined based on factors like ratings, reviews, and user interactions.
User Favorites: Each user has a personalised list of favorite podcasts. They can easily add or remove podcasts from their favorites list and access them for quick reference.
Friend List: Users can view a list of their friends and they can add and remove them from the list.
## SET UP##
## Open the terminal
Open the Spotlight Search (cmd + space bar)
Type "Terminal"
Press enter
Creating a folder The terminal should start in ~ which is the home path.
Create a folder by pasting: mkdir social_media_podcast
You can change the name as you see fit (e.g. mkdir foldername)
Create a folder by pasting: mkdir social_media_podcast
Navigate to the folder Now you will need to step in to that folder 5. Navigate to the folder by pasting: cd social_media_podcast The ~ should now be showing 'social_media_podcast'
Setting up the GIT repository Once in the folder, create a GIT repository. 6. Initiate the Git repository by pasting: git init
The 'social_media_podcast' should now have git:(main) in front of it.
Accessing the files Still in the same folder 7. Pull (or access) the files by pasting: git clone git@github.com:jengreen080/Podcast-JS-Project.git
Creating GIT branch and merging branch: https://medium.com/david-fellows/git-branch-and-merge-made-easy-ec6918469837
once all the folder and components have been added to the main branch. You can then make your own branch to work on individual task and merge it when you finished.
installation necessary software
JavaScript
Node.js - https://nodejs.org/en/download
npm update - https://docs.npmjs.com/cli/v7/commands/npm-update
npm i - https://docs.npmjs.com/cli/v6/commands/npm-install
@apollo/client - https://www.apollographql.com/docs/devtools/cli/
# Getting Started with Create React App
### `npm start`
Runs the app in client folder
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
The page will reload when you make changes.\
You may also see any lint errors in the console.
### `npm run seeds`
Runs this in server folder
The purpose of running the seeds script is to automate the process of populating the database with initial data. It allows you to quickly set up the necessary data for your application
## `npm run server:dev`
By running npm run server:dev, you can start the development server and test your application locally during the development process. It enables you to make changes to your code and see the results in real-time without the need to manually restart the server.
## Folder and File
## README.md
## "client" refers to the directory that contains the client-side code of the application. It is where the frontend code resides, responsible for the user interface and interactions with the user.
## The src folder which live in client folder is the place where developers write their code. This is where they can store all of their source files, such as HTML, CSS, JavaScript, and other files. The dist folder is where the compiled code is stored. This is the code that is ready to be deployed to a production environment.
## "server" folder typically refers to the directory that contains the server-side code of the application. It is where the backend code resides, responsible for handling requests from the client, processing data, and managing the application's business logic.