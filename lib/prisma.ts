import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
  return new PrismaClient();
};

const globalThisForPrisma = globalThis as unknown as {
  prisma: undefined | ReturnType<typeof prismaClientSingleton>;
};

const prisma = globalThisForPrisma.prisma ?? prismaClientSingleton();

export { prisma };

if (process.env.NODE_ENV !== "production") globalThisForPrisma.prisma = prisma;
