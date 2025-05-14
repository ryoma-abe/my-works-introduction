import { PrismaClient, Prisma } from "../src/generated/prisma";

const prisma = new PrismaClient();

const userData: Prisma.WorkCreateInput[] = [
  {
    slug: "awesome-site",
    title: "かっこいいLPサイト",
    description: "ReactとTailwindで構築したLPサイト",
    imageUrl: "https://via.placeholder.com/600x400",
    url: "https://example.com",
  },
  {
    slug: "shopify-ec",
    title: "ShopifyアパレルECサイト",
    description: "Liquidとカスタムアプリで構築したアパレルEC",
    imageUrl: "https://via.placeholder.com/600x400",
    url: "https://shop.example.com",
  },
];

export async function main() {
  for (const work of userData) {
    await prisma.work.create({ data: work });
  }
}

main();
