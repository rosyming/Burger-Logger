# Burger-Logger
### GATech Coding Bootcamp Homework:Burger Logger Node Express Handlebars
Updated: 11/29/18

- - -
### Overview and How to Operate the App
Developed a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM. 

* Burger-Logger is a burger restaurant app that lets users input the names of burgers they'd like to eat (or re-eat).
* The app will store the burgers in a database unless deleted.
* Whenever a user adds a burger name, selects whether they 'ate the burger' or 'need to eat the burger' and clicks the 'Add Burger' button, the app will display the burger on the left or right hand side of the page -- 'Burgers to Eat' or 'Burgers Ate' -- depending on the selection.
* Each burger in the 'Burgers to Eat' area has an `Eat it` button and a 'Delete' button. When the user clicks the 'Eat it' button, the burger will move to the right side of the page to the 'Burgers Ate' section indicating that the burger has been eaten, and it was yummy.
* Similarly, each burger in the 'Burgers Ate' area has an `Eat again` button and a 'Delete' button. When the user clicks the 'Eat again' button, the burger will move to the left side of the page to the 'Burgers to Eat' section indicating that the burger was yummy enough to eat again. 
* Clicking the 'Delete' button will remove the burger from the corresponding list and delete the burger from the database.

- - -
### Technologies Used
1. html
2. JavaScript
3. jQuery
4. Node.js
5. NPMs and/or APIs: Express npm, mysql npm, express-handlebars npm, dotenv npm
6. Heroku Cloud Platform

- - -
### Repository
* https://github.com/rosyming/Burger-Logger

### Heroku Domain
* https://stark-coast-23135.herokuapp.com/