const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

const routes = require("./routes");

app.use(express.json());

app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("Mahra Dictionary Backend");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
