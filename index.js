const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const ApiRouter = require("./routes/api");
const cookieSession = require("cookie-session");
const cookieParser = require("cookie-parser");
const session = require("express-session");

require("dotenv").config();
const MONGO_URI = process.env.MONGODB_URI;

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB has been connected"))
  .catch((err) => console.log(err));

mongoose.Promise = require("bluebird");

const app = express();
// app.use(cookieSession({
//     name: 'session',
//     keys: ['key'],
//     maxAge: 24 * 60 * 60 * 1000, // 24 hours
//   }))
app.use(cookieParser());
const apiPort = 4000;
app.set("trust proxy", 1); // trust first proxy

app.use(express.json());
// app.use(express.static("dist"));
app.use(
  session({
    secret: "LightBlog",
    cookie: { maxAge: 864000000, httpOnly: false },
    resave: false,
    saveUninitialized: false,
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "client", "build")));

app.use("/api", ApiRouter);
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// set favicon
app.get("/favicon.ico", (req, res) => {
  res.status(404).send();
});

// set the initial entry point
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../dist/index.html"));
// });
//   app.use((err, req, res, next) => {
//     if (res.headersSent) {
//       next(err)
//     }
//     res.status(500).send({ Error: err.stack })
//   })

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(process.env.PORT || apiPort, () =>
  console.log(`Server running on port ${process.env.PORT || apiPort}`)
);
