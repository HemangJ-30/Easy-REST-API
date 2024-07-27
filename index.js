const app = require("express")();

const PORT = 8000;

app.listen(PORT, () => console.log(`Server Running on ${PORT}`));

/**Simple string being passed */
app.get("/animals", (req, res) => {
  res.send("Monkey and You");
});

/**JSON object being passed */
app.get("/animal", (req, res) => {
  res.send({
    donkey: 6,
    pig: 3,
  });
});
