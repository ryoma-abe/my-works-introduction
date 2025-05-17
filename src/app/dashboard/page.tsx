import prisma from "@/lib/prisma";
import React from "react";

export default async function DashboardPage() {
  const works = await prisma.work.findMany();

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <ul className="space-y-4">
        {works.map((work) => (
          <li
            key={work.id}
            className="border rounded px-4 py-3 shadow-sm hover:bg-gray-50"
          >
            <p className="font-semibold">{work.title || "タイトル未設定"}</p>
            <p className="text-sm text-gray-500">
              {new Date(work.createdAt).toLocaleString("ja-JP", {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
