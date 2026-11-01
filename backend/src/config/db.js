import "dotenv/config";
import {PrismaPg} from "@prisma/adapter-pg";
import {PrismaClient} from "../generated/prisma/client.ts";

const prisma = new PrismaClient({
  adapter: new PrismaPg({
    connectionString: process.env.DATABASE_URL,
  }),
  log:
  process.env.NODE_ENV === "development" ? ["query","error","warn"] : ["error"],
});

const connectDb = async () =>{
  try{
    await prisma.$connect();
    console.log("successfully connected to the database");
  }catch(error){
    console.error(`error agya: ${error.message}`);
    process.exit(1);
  }
};

const disconnectDb = async () =>{
  await prisma.$disconnect();
};

export {prisma,connectDb,disconnectDb};