import "dotenv/config";
import { PrismaMariaDb } from '@prisma/adapter-mariadb'
import { PrismaClient } from "../prisma/generated/prisma/client.js";

const connectionString = process.env.DATABASE_URL;

const adapter = new PrismaMariaDb({ connectionString });

const prisma = new PrismaClient({ adapter });

export default prisma;