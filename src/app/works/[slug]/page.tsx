import prisma from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalLink } from "lucide-react";

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
    <article className="max-w-5xl space-y-4 mx-auto">
      <h2 className="text-4xl font-bold mb-8 text-white">{work.title}</h2>
      {work.url && (
        <Link
          href={work.url}
          className="inline-flex items-center gap-1 text-blue-200 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {work.url}
          <ExternalLink size={16} />
        </Link>
      )}
      {work.imageUrl && (
        <Image
          className="object-cover w-full"
          src={work.imageUrl}
          width={600}
          height={400}
          alt={work.title}
        />
      )}
      <div className="prose prose-gray mt-8">
        <p className="text-white">
          {work.description || "コンテンツはありません"}
        </p>
      </div>
    </article>
  );
}
