import { prisma } from '../prisma';

class NewsRepository {
    static getAllNews = async () => {
        return prisma.news.findMany({
            where: { published: true },
            select: {
                id: true,
                title: true,
                desc: true,
                writer: true,
                thumbnail: true,
            }
        })
    }

    static getNewsById = async (newsId: number) => {
        return prisma.news.findUnique({
            where: { id: newsId }
        })
    } 

    static getUnPublishedNews = async () => {
        return prisma.news.findMany({
            where: { published: false },
            select: {
                id: true,
                title: true,
                desc: true,
                writer: true,
                thumbnail: true,
            }
        })
    }

    static createNews = async (data: { title: string, desc: string, writer: string, thumbnail: string }) => {
        return prisma.news.create({
            data
        })
    }

    static editNews = async (newsId: number, data: { title: string, desc: string, writer: string, thumbnail?: string }) => {
        return prisma.news.update({
            where: { id: newsId },  
            data: {
                title: data.title,
                desc: data.desc,
                writer: data.writer,
                thumbnail: data.thumbnail,
            }
        })
    }

    static deleteNews = async (newsId: number) => {
        return prisma.news.delete({
            where: { id: newsId },
        })
    }

    static changeStatusNews = async (newsId: number) => {
        return prisma.news.update({
            where: { id: newsId },
            data: { published: true },
        })
    }

    static getNewsByTitle = async (title: string) => {
        return prisma.news.findMany({
            where: { title: { contains: title } },
            select: {
                title: true,
                desc: true,
                writer: true,
                thumbnail: true,
            }
        })
    }
} 

export default NewsRepository