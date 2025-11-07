import { PrismaClient } from "@/generated/prisma/client"; 

// in dev only
// putting it in global object bcz to avoid the error on hot reload which is a dev only issues.
const globalForPrisma = global as unknown as {
    prisma: PrismaClient; 
};
// ensures no new prisma client instances are created on hot reload just for dev mode
const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
    globalForPrisma.prisma = prisma;
}

// in production :- 
//const prisma = new PrismaClient();

export default prisma;


