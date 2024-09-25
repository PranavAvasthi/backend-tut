// console.log("Hello World");
// console.log("Testing Nodemon");

import http from "http";
// console.log(http);
import fullName, { fullName2, generateRandomPercentage } from "./features.js";
import fs from "fs";

// by this way, we can avoid writing this inside the if statement as this is synchronous and other program will run only after this executes
// const home = fs.readFileSync("./index.html")
 
console.log(fullName);
// console.log(fullName2);

// console.log(generateRandomPercentage());

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile("./index.html", (err, home) => {
      res.end(home);
    });
  } else if (req.url === "/about") {
    res.end(
      `<h1>About Page where random percentage is ${generateRandomPercentage()}</h1>`
    );
  } else if (req.url === "/contact") {
    res.end("<h1>Contact Page</h1>");
  } else {
    res.end("<h1>Page not found</h1>");
  }
});

server.listen(5000, () => {
  console.log("Server is Working");
});
