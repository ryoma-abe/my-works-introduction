import prisma from "@/lib/prisma";

export default async function Works() {
  const works = await prisma.work.findMany();
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center -mt-16">
      <h1 className="text-4xl font-bold mb-8 font-[family-name:var(--font-geist-sans)] text-[#333333]">
        Posts
      </h1>
      <ol className="list-decimal list-inside font-[family-name:var(--font-geist-sans)]">
        {works.map((work) => (
          <li key={work.id} className="mb-2">
            {work.title}
          </li>
        ))}
      </ol>
    </div>
  );
}
