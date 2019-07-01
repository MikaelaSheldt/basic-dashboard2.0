# Basic Dashboard 2.0

Builds upon Basic Dashboard https://github.com/MikaelaSheldt/basic-dashboard
Impliments a more dynamic table from https://material-table.com/#/docs/get-started
Also integrates a MongoDB datastore.
Allows users to view a filtered list of students based on average attendance.
The user inputs an average attendance and is able to see a list of student's who's average attendance is the same or less than the entered average.
The table also shows contact information for both the student and their school counselor.

## Installation and Use
required: MonogoDB (installed and datastore configured)

Fork and clone repo to your machine
```
git clone https://github.com/MikaelaSheldt/basic-dashboard2.0
```
cd into new git repo and install node packages
```
npm install
```
seed the database
```
npm run seed
```
start server and start playing with code!
```npm run start-dev
```

## Application file structure

#### .gitignore:
During development I have git ignore the node modules and the webpack bundle outputs

#### webpack.config.js:
I use webpack to bundle files and monitor changes during development. I've pointed the webpack output to public to keep the bundles out of the way, and set client/index.js as the entry point. I'm using babel so that I can write with modern JS.

### server -
***
I've used a very basic Express server. Volleyball and Morgan are my go-to logging middleware. There isn't much exciting happing here, but the foundation is laid for easy REST API development and database integration.

### public -
***
A very basic stylesheet and html file as well as hardcoded student data. I've imported student.json into sortedStudents.js. The data is then sorted by average attendance and exported. I chose to only sort the data once for two reasons. This feels most similar to a practical application where sorted json data would be served to the client via an API. Also, ordering the data lowest to highest makes students with the lowest attendance average always at the top of the list and visible. Given more time, I'd like to allow the user to control sorting as well as let the user sort by different property fields.

### client -
***
  I've chosen Material as a frontend framework. I am familiar with it and find the react-redux integration to be intuitive. The components are great for quickly developing a clean UI out of the box.
  #### utilities.js:
  This is where I like to store functions that get used throughout the client. In this case it holds the filterByAttendance function that gets used in the redux dashboard reducer.
  #### index.js:
  This is the entry point to the application. Here the redux-store and material-theme are provided to the children components.
  ### store -
  While it would be simple enough to build this dashboard without redux, I prefer/enjoy keeping state central and de-coupled when I can.
  #### index.js:
  Here I've created the store and included some logging middleware for debugging purposes. I've kept the store separate from the reducer to facilitate using combined reducers in the future.
  #### dashboard.js
  This is the reducer for the dashboard. The sorted student list is imported and used as an argument in the getStudents thunk creator. gotStudents then delivers a payload to the reducer and creates a new global state.
  ### components -
  #### Base.js:
  A container component for the dashboard elements.
  #### AttendanceInput.js:
  A connected class component with local state for user input. Also renders the Header.js component.
  #### StudentTable.js:
  The Material Table component is the star of the show. I can't take credit for this styling or formatting, but I really appreciate how easy it was to implement. This is where the value of a frontend framework really shows.
