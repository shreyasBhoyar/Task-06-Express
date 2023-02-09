Task 6: Express server with File System

Title: Express REST api using File system

Description : The express server reads user.json present in ./data folder and performs CRUD operations on it.
CRUD stands for create, read, update and delete (in that order)

How to install and run the server?
Step 1: Clone the repo in a suitable folder
Step 2 : Run the command "cd Task-06-Express" to enter into the folder
Step 3 : Run the command "npm i" to install all required dependencies to run the project
Once, the dependencies are installed you can run using the following commands - 
For production : npm run start
For development : npm run dev

The server is created to serve 5 functionalities - 

1.Get all users -
    HTTP Method : GET <br />
    url : localhost:3000/users <br />
    returns : An array of all users <br />

2.Get a specific user by Id - 
    HTTP Method : GET <br />
    url : localhost:3000/users/:id <br />
    returns : User,if present, with specified ID <br />

3.Create a new user - 
    HTTP Method : POST <br />
    url : localhost:3000/users <br />
    returns : Newly created object of user <br />
    body : {
        "id" : "",
        "name":"",
        "profileLink":"",
        "introduction":"",
        "profileImage":""
        } <br />
    Body of this structure is expected, data can be added as required <br />

4. Update some fields of the user - 
    HTTP Method : PATCH <br />
    url : localhost:3000/users/:id <br />
    returns : Updated object of specified user <br />
    body : Can contain any fields of user object <br />

5. Delete the user - 
    HTTP Method : DELETE <br />
    url : localhost:3000/users/:id <br />
    returns : Deleted object of specified user <br />
