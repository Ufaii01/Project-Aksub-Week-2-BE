import express from "express";
import path from "path";
import route from "./routes/news.route.js";
import errorHandler from "./middlewares/error.middleware";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

app.get("/", (req, res) => {
    res.redirect("/news");
});

app.use('/news', route);

app.use(errorHandler);

app.listen(PORT, () => {
    console.log("Server running at http://localhost:3000");
});

