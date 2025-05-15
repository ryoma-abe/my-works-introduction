import prisma from "@/lib/prisma";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function Work({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const work = await prisma.work.findUnique({
    where: { slug },
  });

  if (!work) {
    notFound();
  }

  return (
    <article className="max-w-2xl space-y-4 font-[family-name:var(--font-geist-sans)]">
      <h2 className="text-4xl font-bold mb-8 text-white">{work.title}</h2>
      {work.url && (
        <Link href={work.url} className="text-blue-200">
          {work.url}
        </Link>
      )}
      <div className="prose prose-gray mt-8">
        <p className="text-white">
          {work.description || "コンテンツはありません"}
        </p>
      </div>
    </article>
  );
}
