import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function insertUser(
  email: string,
  password: string,
  firstName: string,
  lastName: string
) {
  const response = await prisma.user.create({
    data: {
      email,
      password,
      firstName,
      lastName,
    },
    select: {
      id: true,
      firstName: true,
    },
  });
  console.log(response);
}

interface UpdateParams {
  firstName: string;
  lastName: string;
}
//insertUser("habeel@gmail.com","habeel123",'habeel','shamsudeen');
async function updateUser(
  email: string,
  { firstName, lastName }: UpdateParams
) {
  const response = await prisma.user.update({
    where: { email: email },
    data: {
      firstName,
      lastName,
    },
    select:{
        id:true,
        firstName:true
    }
  });
  console.log(response)
}
// updateUser('habeel@gmail.com',{
//     firstName:"Habeel",
//     lastName:"Shamsudeen"
//   })


  async function getUser(username: string) {
   const res = await prisma.user.findFirst({
    where:{
        email:username
    }
   })
   console.log(res)
  };

  getUser('habeel@gmail.com')