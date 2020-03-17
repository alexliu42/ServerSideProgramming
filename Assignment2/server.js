const express = require("express");
const app = express();


app.use(express.static("public"));
app.use(express.urlencoded());
app.set("view engine", "pug");


app.get("/", function(request, response) {
  response.sendFile(__dirname + "/views/index.html");
});

app.post("/profile", (req, res) => {
  let fname = req.body.first_Name;
  let lname = req.body.last_Name;
  let location = req.body.location;
  let pnumber = req.body.phone_Number;
  let email = req.body.email;
  res.render("profile.pug", {
    first_name: fname,
    last_name: lname,
    location: location,
    phone_number: pnumber,
    email: email
  });
});

const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
