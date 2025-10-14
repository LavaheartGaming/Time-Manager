import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg'; 
import { PrismaClient } from '@prisma/client';

declare global {
  var prisma: PrismaClient | undefined;
}

const connectionString = `${process.env.DATABASE_URL}`;

if (!global.prisma) {
    const pool = new Pool({ connectionString });
    const adapter = new PrismaPg(pool);
    global.prisma = new PrismaClient({ adapter });
}

export const prisma = global.prisma;