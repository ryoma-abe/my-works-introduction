import PrivateHeader from "../components/common/PrivateHeader";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <PrivateHeader />
      <main className="min-h-screen py-20">{children}</main>
    </>
  );
}
