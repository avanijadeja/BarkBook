# BARKBOOK

BARKBOOK is a blogsite application similar to wordpress site.

# Description

BarkBook is a apploication in which user can see all groomers and add comments on groomer about their pet's service.User can see other User's comments on particular Groomer.User can also see all their previous comments.

In BarkBook application,

- when User visit the site then User can see login/signup form. when User first time visit our website then User have to do Signup first.In this we are using Bcrypt to protect User password.

- when User enter in our application, User can see all groomers with name and profile pic of Groomer.

- In Nav bar, User can see Barkbook logo on left side and right side Home, Dashboard, logout options.

- when User click on Home link, User see all groomers with name and profile pic.

- when user click on Groomer's name or pic, user can see all information realted to that particular Groomer and in right side User can see all comments(reviews) about this particular Groomer.and Add review button.

- when User click on Add Review button, user can enter review(comment) about selected Groomer.

- when User click on submit button, User again see that selected groomer with all comments including user's current comment.

- when User click on the dashboard option in the navigation,then user taken to the dashboard and presented with all comments. User have already created.

- on Home page and Dashboard page, User can see all our client pet's images.

- when User click logout, User exit the application and navigate to main login form of our BarkBook application.

For this BarkBook application, we used MVC,Model-View-Controller paradigm.we used express-handlebars package to use Handlebars.js for user Views, use the MySQL2Links to an external site. and SequelizeLinks to an external site. packages to connect to a MySQL database for user Models, and create an Express.js API for user Controllers.the dotenv packageLinks to an external site. to use environment variables, the bcrypt packageLinks to an external site. to hash passwords, and the express-sessionLinks to an external site. and connect-session-sequelizeLinks to an external site. packages to add authentication.The express-sessionLinks to an external site. package stores the session data on the client in a cookie. When user idle on the site for more than a set time, the cookie will expire and user will be required to log in again to start a new session.In this we are using slick library to make carousel to display all client's pet images.

In this user can see different folders like,

- config folder , user can see config.js file in which database and user connection logic is written this file is connected to .env file for user login and password privacy.

- controllers folder contains, different routes of this application.

- db folder contains the schema.sql file means shows which database and table are in used.

- models folder contains .js file in which through sequelize we generated different tables and relations between tables.

- In public folder contains css folder so script.css files shows css properites of page, images folder contains this application video files, js folder contains .js files for different operations of page means seqelize sql queries.

- seeds folder contains data files.

- utils folder contains helper function of this application means to calculate date, session logic.

- Views folder contians to all handlebars logic for all pages.

- .env files save database,user,password information,connection with jawsdb daatabase.

- server.js file contains main logic to connect all pages and start the application.

In this application, we learn MVC and how to arrange files in model, view,controller style.I used Bcrypt,session,dotenv,express,handlebars,sql,sequelize,slick.so now we can create full functional website.

# Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

# Installation

- first user have to do npm init -y to generate package.json file.

- In this application I used bcrypt,connect-session-sequelize,dotenv,express,express-handlebars,express-session,mysql2,sequelize,slick library.so user can install individual of all this modules.like eg. npm install bcrypt or user can write npm install so bydefault all packages are install.

- goto db folder,open terminal and run mysql -u root -p ,if user have password then write password.and enter.
  then user run source schema.sql; command and then quit; command. so through this user can intialize database and table .

- on server.js rightclick and open terminal and run command like npm run seed , so data store in table because in packge.json file I write node seeds/index.js in seed. so by default when user write npm run seed it execute seeds folder index.js file.

- user have to write command like, npm run start so application can start.because in package.json file I write node server.js in start so by default when user write npm run start its execute node server.js.

so applicaiton now starts user have to write localhost:3001 in browser so user can see this application output and user can now operate this application using browser.

# Usage

![video_gifformat]()

The URL of the functional, deployed application - https://barkbookapp.herokuapp.com/

The URL of the GitHub repository - https://github.com/MogleyBear06/BarkBook.git

# Credits

For this application, we read from different websites, some are as under,

- https://developer.mozilla.org/en-US/docs/Glossary/MVC

- https://www.npmjs.com/package/bcrypt

- https://www.npmjs.com/package/sequelize

- https://www.npmjs.com/package/mysql2

- https://www.npmjs.com/package/express-session

- https://getbootstrap.com/

- https://www.w3schools.com/

- https://kenwheeler.github.io/slick/

# License

This project is using the MIT License.

# Badges

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
