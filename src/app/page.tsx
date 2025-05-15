import prisma from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const works = await prisma.work.findMany();
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center -mt-16">
      <ul>
        {works.map((work) => (
          <li key={work.id} className="mb-2">
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
