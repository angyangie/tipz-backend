///// TIPZ NOTE: FILE FOR AN OLD PROJECT - IT NEEDS TO BE DELETED OR RE-PUPOSED FOR TIPZ /////

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {

  const aetna = await prisma.provider.upsert({
    where: { email: 'aetna@gmail.com' },
    update: {},
    create: {
      email: 'aetna@gmail.com',
      name: 'Aetna',
    },
  });

  const blueCross = await prisma.provider.upsert({
    where: { email: 'bluecross@gmail.com' },
    update: {},
    create: {
      email: 'bluecross@gmail.com',
      name: 'Blue Cross',
    },
  });

  const angie = await prisma.client.upsert({
    where: { email: 'angie@gmail.com' },
    update: {},
    create: {
      email: 'angie@gmail.com',
      name: 'Angie',
      clientPlans: {
        create: {
          type: 'basic',
          provider: {
              connect: {
                id: aetna.id,
              },
            },
          },
        },
        journalEntries: {
          create: {
            text: "This is angie's first journal entry!"
          }
        }
    }
  })

  const bob = await prisma.client.upsert({
    where: { email: 'bob@gmail.com' },
    update: {},
    create: {
      email: 'bob@gmail.com',
      name: 'Bob',
      clientPlans: {
        create: {
          type: 'premium',
          provider: {
            connect: {
              id: aetna.id,
            },
          },
        },
      },
        journalEntries: {
          create: {
            text: "This is Bob's first journal entry!",
          },
        },
    }
  })

  const ariel = await prisma.client.upsert({
    where: { email: 'ariel@gmail.com' },
    update: {},
    create: {
      email: 'ariel@gmail.com',
      name: 'Ariel',
      clientPlans: {
        create: {
          type: 'premium',
          provider: {
            connect: {
              id: blueCross.id,
            },
          },
        },
      },
      journalEntries: {
        create: {
          text: "This is Ariel's first journal entry!",
        },
      },
    },
  });
  console.log({ angie, bob, ariel })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
