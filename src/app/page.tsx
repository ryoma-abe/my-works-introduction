// app/page.tsx (Home)
import prisma from "@/lib/prisma";
import WorkCard from "./components/works/WorkCard";

export default async function Home() {
  const works = await prisma.work.findMany();

  return (
    <main className="min-h-screen bg-black py-20">
      <ul className="grid w-full gap-4 px-4 sm:grid-cols-2 lg:grid-cols-3">
        {works.map((work) => (
          <WorkCard
            key={work.id}
            slug={work.slug}
            imageUrl={work.imageUrl}
            title={work.title}
            url={work.url}
          />
        ))}
      </ul>
    </main>
  );
}
