"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="mx-auto flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <h1>
          <Link href="/" className="text-xl font-bold text-white">
            RyoCode
          </Link>
        </h1>

        <nav className="hidden gap-8 text-sm font-medium text-white sm:flex">
          <Link href="/works" className="hover:text-indigo-400">
            制作実績
          </Link>
          <Link href="/services" className="hover:text-indigo-400">
            サービス
          </Link>
          <Link href="/about" className="hover:text-indigo-400">
            プロフィール
          </Link>
          <Link href="/contact" className="hover:text-indigo-400">
            お問い合わせ
          </Link>
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden text-white"
          aria-label="メニューを開く"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* モバイルメニュー */}
      {isOpen && (
        <div className="sm:hidden bg-black bg-opacity-95 text-white px-4 pb-4">
          <Link href="/works" className="block py-2 hover:text-indigo-400">
            制作実績
          </Link>
          <Link href="/services" className="block py-2 hover:text-indigo-400">
            サービス
          </Link>
          <Link href="/about" className="block py-2 hover:text-indigo-400">
            プロフィール
          </Link>
          <Link href="/contact" className="block py-2 hover:text-indigo-400">
            お問い合わせ
          </Link>
        </div>
      )}
    </header>
  );
}
