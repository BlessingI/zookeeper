const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

const express = require("express");
const PORT = 8000;
const app = express();

app.use(express.static("public"));

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT, () => {
  console.log(`I am listening on ${PORT}`);
});
