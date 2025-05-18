import prisma from "@/lib/prisma";
import React from "react";
import DashboardWorksList from "../components/works/DashboardWorksList";

export default async function DashboardPage() {
  const works = await prisma.work.findMany();

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <DashboardWorksList works={works} />
    </div>
  );
}
