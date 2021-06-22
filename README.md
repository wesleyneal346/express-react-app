# **Mountain America Coding Callenge**
Using these projects as a base, fork this repo, and complete Parts 1 & 2. When you're finished, commit your changes and open a PR into the original repo (https://github.com/MACU-Interviews/express-react-app)

---

## **Part 1**
Write an Express API and React app to display a list of animals. Please use hooks instead of component lifecycle methods.

Some placeholder animal data is provided in /server/data.js. (`const data = require('./data');`)

#### **Requirements**:
* Style the background of every other row
* At screen widths 600px and greater: the name and age should be adjacent. At screen widths less than 600px: the name and age should be stacked vertically
* Example list design:
    * <img alt="Example Design" src="./screenshot1.png" width="300px" /> <img alt="Example Design" src="./screenshot2.png" width="300px" />


#### **Extra credit**:
* Style the list further
* Add a text search filter to the list
* Add create, update, and delete functionality


---
### Install the **server** (generated using [express-generator](https://expressjs.com/en/starter/generator.html))

    > cd server
    > npm install

### Run the **server** ([http://localhost:3030](http://localhost:3030))

    > npm start

---

### Install the **client** (generated using [Create React App](https://github.com/facebook/create-react-app))

    > cd client
    > npm install

### Run the **client** ([http://localhost:3000](http://localhost:3000))

    > npm start

---
## **Part 2**

In `toy-problems/index.js` please complete the first function (`isPrime`) and be ready to write and discuss some of the remaining functions during the interview.


### Install dependencies

    > cd toy-problems
    > npm install

### Test your code

    > npm run test