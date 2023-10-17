const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const mongourl = require("./keys/keys").MONGOURL;
const port = require("./keys/keys").APPLICATION_PORT;
const users = require("./router/api/users");
const login = require("./router/api/login");

const app = express();

app.use(bodyParser.json());

mongoose
  .connect(mongourl)
  .then(() => console.log("connected to database successfully..."))
  .catch((error) =>
    console.log("unable to connect to database error: ", error)
  );

app.use("/api/users", users);
app.use("/api/login", login);

app.listen(port, () => console.log("listning on port ", port));
