import PublicHeader from "@/app/components/common/PublicHeader";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <PublicHeader />
      <main className="min-h-screen py-20">{children}</main>
    </>
  );
}
