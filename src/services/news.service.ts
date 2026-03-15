import NewsRepository from "../repositories/news.repository";
import { newsEditSchema, newsSchema } from "../validations/news.validation";

class NewsService {
    static getAllNews = async () => {
        const existingNews = await NewsRepository.getAllNews();
        if(existingNews.length === 0) {
            throw new Error("There's no News")
        }

        return existingNews
    }

    static getUnPublishedNews = async () => {
        const existingNews = await NewsRepository.getUnPublishedNews();
        if(existingNews.length === 0) {
            throw new Error("All news already published")
        }

        return existingNews
    }

    static createNews = async (data: { title: string, desc: string, writer: string, thumbnail: string }) => {
        const validateData = newsSchema.parse(data)
        return NewsRepository.createNews(validateData)
    }

    static editNews = async (newsId: number, data: { title: string, desc: string, writer: string, thumbnail?: string } ) => {
        const existingNews = await NewsRepository.getNewsById(newsId)
        if(!existingNews) {
            throw new Error("News not found")
        }

        const validateData = newsEditSchema.parse(data)
        return NewsRepository.editNews(newsId, validateData)
    }

    static deleteNews = async (newsId: number) => {
        const existingNews = await NewsRepository.getNewsById(newsId)
        if(!existingNews) {
            throw new Error("News not found")
        }

        return NewsRepository.deleteNews(newsId)
    }

    static changeStatusNews = async (newsId: number) => {
        const existingNews = await NewsRepository.getNewsById(newsId) 
        if(!existingNews) {
            throw new Error("News not found")
        }

        return NewsRepository.changeStatusNews(newsId)
    }
    
    static getNewsByTitle = async (title: string) => {
        const result = await NewsRepository.getNewsByTitle(title)
        if(result.length === 0) {  
            throw new Error("News not found")
        }
        return result
    }
}

export default NewsService