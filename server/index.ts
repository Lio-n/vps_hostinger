import * as express from "express";
import * as cors from "cors";
import * as path from "path";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.static("."));
// app.use(express.static("dist"));

app.get("/api/hello", (req, res) => {
  res.send({ message: "Hello" });
});

app.get("/api/goodbye", (req, res) => {
  res.send({ message: "Goodbye!!" });
});

// All other unmatched requests will return the React app
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../index.html"));
});

app.listen(port, () => {
  console.table({ message: "Server listen on port", port });
});
