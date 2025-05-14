import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";

export default async function Work({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const work = await prisma.work.findUnique({
    where: { id: parseInt(id) },
  });

  if (!work) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center -mt-16">
      <article className="max-w-2xl space-y-4 font-[family-name:var(--font-geist-sans)]">
        <h1 className="text-4xl font-bold mb-8 text-[#333333]">{work.title}</h1>
        <div className="prose prose-gray mt-8">
          {work.description || "コンテンツはありません"}
        </div>
      </article>
    </div>
  );
}
