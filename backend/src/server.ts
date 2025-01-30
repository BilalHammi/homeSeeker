import express from "express";

const app = express();
const cors = require("cors");
app.use(cors());

app.use(function (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-Requested-With,content-type"
    );
    res.setHeader("Access-Control-Allow-Credentials", "true");
    next();
  });
  
// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// set port, listen for requests
const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
  console.log(`Server is running on localhost:${PORT}`);
});
