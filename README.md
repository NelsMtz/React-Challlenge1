# WEEK SIX CODE CHALLENGE REACT

## AUTHOR : NELLY MATU

## DATE : 8th AUG 2024



## Bank of Flatiron
Welcome to the Bank of Flatiron, where you can trust us with all your financial data!

## LEARNING GOALS
- Implement a 'mini' web application using React.

## Instructions
- For this project, you should be able to build a React application that displays a list of your recent bank transactions, among other features.

- Part of what this code challenge is testing is your ability to follow given instructions. While you will definitely have a significant amount of freedom in how you implement the features, be sure to carefully read the directions for setting up the application.

#### Topics tested in this Code Challenge:
- Working with state using the useState hook
- Effects in React using the useEffect hook
- Rendering and re-rendering in React
- React Events
- Working with forms and inputs in React
- Consuming APIs/Communicating with a server in React.
- CRUD operations in React.
- Endpoints

**NB :The data to be used is in the db.json file inside this repo. Copy this data and paste in into your own db.json file in the root of your project.**

#### NOTE
*If using Create React App, ensure you run the JSON Server first before running the npm start. This is because both Create React App and JSON server run on port 3000 by default. However, React's local server can find another server to run on if at the time of starting it, it finds port 3000 already taken by JSON Server.*

### Core Deliverables
At the end of the project, one should be able to:

1.See a table of the transactions.
2.Fill out and submit the form to add a new transaction. This should add the new transaction to the table as well as post the new transaction to the backend API for persistence.
3.Filter transactions by typing into the search bar. Only transactions with a description matching the search term should be shown in the transactions table.

*NB: Deploy both your frontend and the db.json once you are done and ensure to change the URL you're fetching from to the deployed backend. Undeployed work will not be graded.*

### Endpoints for Core Deliverables
GET /transactions
Example Response:

[
	{
		"id": 1,
		"date": "2019-12-01",
		"description": "Paycheck from Bob's Burgers",
		"category": "Income",
		"amount": 1000
	},
	{
		"id": 2,
		"date": "2019-12-01",
		"description": "South by Southwest Quinoa Bowl at Fresh & Co",
		"category": "Food",
		"amount": -10.55
	}
]
POST /transactions
Required Headers:

{
  "Content-Type": "application/json"
}
Request Object:

{
  "date": "string",
  "description": "string",
  "category": "string",
  "amount": number
}
Example Response:

{
	"id": 1,
	"date": "2019-12-01",
	"description": "Paycheck from Bob's Burgers",
	"category": "Income",
	"amount": 1000
}

#### Advanced Deliverables
These deliverables are not required to pass the code challenge, but if you have the extra time, or even after the code challenge, they are a great way to stretch your skills.

*Note: If you are going to attempt these advanced deliverables, please be sure to have a working commit with all the Core Deliverables first!*

As a user, I should be able to:

- Sort transactions alphabetically by category or description.
- Delete a transaction which will remove it from the table and delete it from the backend.

#### Endpoints for Advanced Deliverables
DELETE /transactions/:id
Example Response:
    
    {}

### INSTALLATION
- To use this follow these steps:

### Alternative One
1.Open your terminal/cli on your computer. 2.Clone the repository by running the following command:

 git clone https://github.com/NelsMtz/React-Challlenge1.git

3.Change directory to the repo folder

    cd WK3-CODE-CHALLENGE 
4.Open it in your Code Editor of choice. If you use VS Code, run the command:

    code .

### Alternative Two
1.On the top right corner of this page there is a button labelled Fork.

2.Click on that button to create a copy of the repository to your own account.

3.Follow the process described in Alternative One above.

4.Remember to replace your username when cloning.

    git clone https://github.com/NelsMtz/React-Challlenge1.git

### Getting the files
*fork the repo Create a new branch in your terminal Install the prerequisite. Make appropriate changes in files. Run the server to see the changes Add the changes and commit them Push to the branch Create a pull request

Open the folder location on the terminal and use the following command to run the app:

### VERCEL LINK(LIVE LINK)
[live link to my webiste](https://wk-3-code-challenge-zm8d.vercel.app/)

### HOW TO RUN ALL CODES
clone the repository run using live server

### DEPENDENCIES
practice React

### TECHNOLOGIES USED
React

  ## CONTACT INFO
.Email nmatu308@gmail.com

## LICENSE
MIT License Copyright (c) 2024 Nelly Matu