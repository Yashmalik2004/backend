import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient({
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