const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

const apiKey = "fd39e086399f769abe5fcf3d23d96240-us9";
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
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
        }
      },
    ],
  };

  var jsonData = JSON.stringify(data);

  const url = "https://us9.api.mailchimp.com/3.0/lists/346860448d";

  const options = {
    method: "POST",
    auth: "szani:fd39e086399f769abe5fcf3d23d96240-us9",
  };

  const request = https.request(url, options, function (response) {
    if (response.statusCode == 200) {
      res.sendFile(__dirname + "/success.html");
    } else res.sendFile(__dirname + "/failure.html");

    response.on("data", function (data) {
      console.log(JSON.parse(data));
    });

    response.on("error", function (err) {
      console.log(err);
    });
  });

  request.write(jsonData);
  request.end();

});

app.post("/failure", function (req, res) {
  res.redirect("/");
});

app.listen("3000", function (req, res) {
  console.log("Server is running on port 3000.");
});
