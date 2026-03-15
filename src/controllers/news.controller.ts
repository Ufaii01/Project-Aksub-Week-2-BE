import { Request, Response, NextFunction } from "express";
import NewsService from "../services/news.service";
import { ok } from "../utils/response"

class NewsController {
    static getAllNews = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const news = await NewsService.getAllNews()
            return ok(res, news, "Success get all news")
        } catch(error) {
            next(error)
        }
    }

    static getUnPublishedNews = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const unpublished = await NewsService.getUnPublishedNews()
            return ok(res, unpublished, "Success get all unPublished news")
        } catch(error) {
            next(error)
        }
    }

    static createNews = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const thumbnail = req.file ? `/uploads/${req.file.filename}` : ""
            const create = await NewsService.createNews({ ...req.body, thumbnail })
            return ok(res, create, "Success created news")
        } catch(error) {
            next(error)
        }
    }

    static editNews = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const thumbnail = req.file ? `/uploads/${req.file.filename}` : undefined
            const edit = await NewsService.editNews(Number(req.params.id), { ...req.body, thumbnail })
            return ok(res, edit, "Success edited news")
        } catch(error) {
            next(error)
        }
    }

    static deleteNews = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const destroy = await NewsService.deleteNews(Number(req.params.id))
            return ok(res, destroy, "Success deleted news")
        } catch(error) {
            next(error)
        }
    }

    static changeStatusNews = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const change = await NewsService.changeStatusNews(Number(req.params.id))
            return ok(res, change, "Success deleted news")
        } catch(error) {
            next(error)
        }
    }

    static getNewsByTitle = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const change = await NewsService.getNewsByTitle(String(req.params.title))
            return ok(res, change, "Success deleted news")
        } catch(error) {
            next(error)
        }
    }
}

export default NewsController