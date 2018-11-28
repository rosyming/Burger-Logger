# Burger-Logger
### GATech Coding Bootcamp Homework:Burger Logger Node Express Handlebars
Updated: 11/25/18

- - -
### Overview
In this assignment, you'll create a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM (yum!). Be sure to follow the MVC design pattern; use Node and MySQL to query and route data in your app, and Handlebars to generate your HTML.

* Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.
* Whenever a user submits a burger's name, your app will display the burger on the left side of the page -- waiting to be devoured.
* Each burger in the waiting area also has a `Devour it!` button. When the user clicks it, the burger will move to the right side of the page.
* Your app will store every burger in a database, whether devoured or not.
* [Check out this video of the app for a run-through of how it works](https://youtu.be/msvdn95x9OM).



OLD: _______
Developed a compatibility-based application called "FriendFinder". FriendFinder is a simple dating app. This full-stack site takes in results from users' surveys, then compares their answers with those from other users. The app will then display the name and picture of the user with the best overall match. 

Express is used to handle routing and is deployed to Heroku for users to fill out.


- - -
### How to Operate the App
1. Start the survey by clicking "Go To Survery" button

2. Enter in a User Name and a link to a photo

3. Answer each of the 10 questions by selecting an option on a scale of 1 to 5 with 1 being Strongly Disagree and 5 being Strongly Agree.

4. Click submit to calculate your friend match.  A pop-up will appear with the name and image of a person that you most closely match with.

- - -
### Calculations
* Each user's results are converted into a simple array of numbers
* The difference between the current user's scores are compared and calculated against those from other users, question by question. 
* The differences are then added up to calculate a Total Difference score. 
* The closest match will be the user with the least amount of difference.

- - -
### Technologies Used
1. html
2. JavaScript
3. jQuery
4. Node.js
5. NPMs and APIs: Express npm
6. Heroku Cloud Platform

- - -
### Repository
* https://github.com/rosyming/Friend-Finder

### Heroku Domain
* https://stark-coast-23135.herokuapp.com/