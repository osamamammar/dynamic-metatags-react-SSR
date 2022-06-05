const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const path = require("path");
const fs = require("fs");

app.get("/", function (request, response) {
  console.log("Home page visited!");
  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", function (err, data) {
    if (err) {
      return console.log(err);
    }
    data = data.replace(/\$OG_TITLE/g, "Home Page");
    data = data.replace(/\$OG_DESCRIPTION/g, "Home page description");
    result = data.replace(
      /\$OG_IMAGE/g,
      "https://pbs.twimg.com/profile_images/1006551930062008321/iviLW6vi_400x400.jpg"
    );
    response.send(result);
  });
});

app.get("/about", function (request, response) {
  console.log("About page visited!");
  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", function (err, data) {
    if (err) {
      return console.log(err);
    }
    data = data.replace(/\$OG_TITLE/g, "About Page");
    data = data.replace(/\$OG_DESCRIPTION/g, "About page description");
    result = data.replace(
      /\$OG_IMAGE/g,
      "https://img.freepik.com/free-photo/about-us-page-information-story-brand-concept_53876-120793.jpg?w=2000"
    );
    response.send(result);
  });
});

app.get("/contact", function (request, response) {
  console.log("Contact page visited!");
  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", function (err, data) {
    if (err) {
      return console.log(err);
    }
    data = data.replace(/\$OG_TITLE/g, "Contact Page");
    data = data.replace(/\$OG_DESCRIPTION/g, "Contact page description");
    result = data.replace(
      /\$OG_IMAGE/g,
      "https://cdn.searchenginejournal.com/wp-content/uploads/2020/08/contact-us-pages-sej-5f63d4f927b04-1520x800.png"
    );
    response.send(result);
  });
});

app.use(express.static(path.resolve(__dirname, "./build")));

app.get("*", function (request, response) {
  const filePath = path.resolve(__dirname, "./build", "index.html");
  response.sendFile(filePath);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
