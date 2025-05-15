import prisma from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const works = await prisma.work.findMany();
  return (
    <div className="min-h-screen bg-gray-50 container mx-auto">
      <ul className="grid grid-cols-3 gap-2 mt-16">
        {works.map((work) => (
          <li key={work.id} className="p-4">
            <Link href={`/works/${work.slug}`}>
              {work.imageUrl && (
                <Image
                  src={work.imageUrl}
                  width={600}
                  height={400}
                  alt={work.title}
                />
              )}
              <h3>{work.title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
