# E-Commerce Back End
## Description
The back-end code for an e-commerce application. This project contains all of the routes and functionality that the front-end of the application will need in order to create an amazing e-commerce site.
## Installation
Clone the repo to your local computer
```JavaScript
git clone git@github.com:jbeedle19/e-commerce-back-end.git
``` 
Install dependencies with 
```JavaScript
npm install
```
## Usage
First, create a .env file to safely store your database information. In your terminal, navigate to the root directory of the project. Create and populate the database by running the following commands:
In your MySQL shell run
```JavaScript
source db/schema.sql
```
And then in the root directory run
```JavaScript
npm run seed
```
After the database is created and populated run the following command to start the server and connect the database.
```JavaScript
npm start
```

![walkthrough](./assets/walkthrough.gif)

[Video Link](https://drive.google.com/file/d/1Sp15msrHh_O3SEbg1l7ASDGspvqObDkt/view)
## Built With
* JavaScript
* Node.js
* Express.js
* MySQL, mysql2, & Sequelize
* dotenv