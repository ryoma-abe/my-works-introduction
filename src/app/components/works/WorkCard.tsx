// components/WorkCard.tsx
import Image from "next/image";
import Link from "next/link";

type Props = {
  slug: string;
  imageUrl: string | null;
  title: string;
  url: string | null;
  description: string | null;
};

export default function WorkCard({ slug, imageUrl, title }: Props) {
  return (
    <li>
      <Link href={`/works/${slug}`} className="p-4 block">
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={title}
            className="object-cover"
            width={600}
            height={400}
          />
        )}
        <div className="flex flex-col gap-3 mt-3">
          <h3 className="text-md font-semibold text-white">{title}</h3>
        </div>
      </Link>
    </li>
  );
}
