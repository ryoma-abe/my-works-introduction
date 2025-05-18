"use client";
import { Work } from "@/generated/prisma/client";
import { useState } from "react";

type Props = {
  works: Work[];
};

export default function DashboardClient({ works }: Props) {
  const [menuOpenId, setMenuOpenId] = useState<string | null>(null);
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <ul className="space-y-4">
        {works.map((work) => (
          <li key={work.id} className="border rounded px-4 py-3">
            <div className="flex justify-between">
              <div>
                <p className="font-semibold">
                  {work.title || "タイトル未設定"}
                </p>
                <p className="text-sm text-gray-500">
                  {new Date(work.createdAt).toLocaleString("ja-JP", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
              <div className="relative">
                <button
                  className="text-gray-500"
                  onClick={() =>
                    setMenuOpenId(menuOpenId === work.id ? null : work.id)
                  }
                >
                  ⋯
                </button>
                <div
                  className={`absolute right-0 mt-2 w-40 border rounded shadow ${
                    menuOpenId !== work.id ? "hidden" : ""
                  }`}
                >
                  <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                    編集
                  </button>
                  <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                    複製
                  </button>
                  <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                    共有用リンクをコピー
                  </button>
                  <div className="border-t my-1" />
                  <button className="block w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-100">
                    削除
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
