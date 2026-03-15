import express from "express";
import NewsController from "../controllers/news.controller";
import { upload } from "../middlewares/multer.middleware";

const route = express.Router();

route.get("/", NewsController.getAllNews);
route.get("/unPublished", NewsController.getUnPublishedNews);
route.post("/create", upload.single("image"),NewsController.createNews);
route.put("/edit/:id", upload.single("image"), NewsController.editNews);
route.delete("/delete/:id", NewsController.deleteNews);
route.put("/changeStatus/:id", NewsController.changeStatusNews);
route.get("/:title", NewsController.getNewsByTitle);

export default route