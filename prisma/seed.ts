import prisma from "@/lib/prisma";

async function main() {
  const k8s = await prisma.training.create({
    data: {
      name: 'Kubernetes',
      priceOpen: 11900,
      priceCompany: 44000,
      days: 2,
      website: 'https://kubernetes-skoleni.cz/',
      repository: 'https://github.com/vojtechmares/kubernetes-training',
    },
  })

  const tf = await prisma.training.create({
    data: {
      name: 'Terraform',
      priceOpen: 6900,
      priceCompany: 24000,
      days: 1,
      website: 'https://terraform-skoleni.cz/',
      repository: 'https://github.com/vojtechmares/terraform-skoleni',
    }
  })

  const git = await prisma.training.create({
    data: {
      name: 'Git',
      priceOpen: 6900,
      priceCompany: 24000,
      days: 1,
      website: 'https://git-skoleni.cz/',
      repository: 'https://github.com/vojtechmares/git-skoleni',
    }
  })

  const gitlab = await prisma.training.create({
    data: {
      name: 'GitLab',
      priceOpen: 6900,
      priceCompany: 24000,
      days: 1,
      website: 'https://gitlab-skoleni.cz/',
      repository: 'https://github.com/vojtechmares/gitlab-skoleni',
    }
  })

  const eks = await prisma.training.create({
    data: {
      name: 'EKS',
      priceOpen: 6900,
      priceCompany: 24000,
      days: 1,
      website: 'https://eks-skoleni.cz/',
      repository: 'https://github.com/vojtechmares/eks-skoleni',
    }
  })

  const tfDate = await prisma.trainingDate.create({
    data: {
      trainingId: tf.id,
      date: new Date(),
      location: 'Praha',
      capacity: 12,
    }
  })



  // const alice = await prisma.user.upsert({
  //   where: { email: 'alice@prisma.io' },
  //   update: {},
  //   create: {
  //     email: 'alice@prisma.io',
  //     name: 'Alice',
  //     posts: {
  //       create: {
  //         title: 'Check out Prisma with Next.js',
  //         content: 'https://www.prisma.io/nextjs',
  //         published: true,
  //       },
  //     },
  //   },
  // })
  // const bob = await prisma.user.upsert({
  //   where: { email: 'bob@prisma.io' },
  //   update: {},
  //   create: {
  //     email: 'bob@prisma.io',
  //     name: 'Bob',
  //     posts: {
  //       create: [
  //         {
  //           title: 'Follow Prisma on Twitter',
  //           content: 'https://twitter.com/prisma',
  //           published: true,
  //         },
  //         {
  //           title: 'Follow Nexus on Twitter',
  //           content: 'https://twitter.com/nexusgql',
  //           published: true,
  //         },
  //       ],
  //     },
  //   },
  // })
  console.log({ k8s, tf, git, gitlab, eks, tfDate })
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
