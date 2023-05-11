const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

const apiKey = "57099e9c0700f99ff33082bc87a73e6d-us9";
const listId = "346860448d";

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function (req, res) {
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var email = req.body.email;

  var data = {
    members: [
      {
        email_adress: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
        },
      },
    ],
  };

  var jsonData = JSON.stringify(data);

  const url = "https://us9.api.mailchimp.com/3.0/lists/" + listId;

  const options = {
    method: "POST",
    auth: "szani:" + apiKey,
  };

  https.request(url, options, function (response) {
    if (response.statusCode == 200) {
      res.sendFile(__dirname + "/success.html");
    } else res.sendFile(__dirname + "/failure.html");

    response.on("data", function (data) {
      console.log(JSON.parse(data));
    });
  });
});

app.post("/failure", function (req, res) {
  res.redirect("/");
});

app.listen("3000", function (req, res) {
  console.log("Server is running on port 3000.");
});
