import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import { news } from './news'

const prisma = new PrismaClient()

async function main() {
    for(let i of news) {
        await prisma.news.create({
            data: i
        })
    }
}

main().catch(e => {
    console.log(e)
    process.exit(1)
}).finally(() => {
    prisma.$disconnect()
})