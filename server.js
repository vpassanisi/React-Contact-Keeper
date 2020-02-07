const express = require("express");

const app = express();

app.get("/", (req, res) => res.json({ msg: "welcome " }));

app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));

const PORT = process.env.PORT || 5500;

app.listen(5500, () => {
  console.log(`App listening on port ${PORT}!`);
});
