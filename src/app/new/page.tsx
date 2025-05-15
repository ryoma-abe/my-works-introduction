import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import Form from "next/form";
import { redirect } from "next/navigation";

export default function NewWork() {
  async function createWork(formData: FormData) {
    "use server";

    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const slug = formData.get("slug") as string;
    await prisma.work.create({
      data: {
        title,
        description,
        slug,
      },
    });
    revalidatePath("/works");
    redirect("/works");
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Create New Post</h1>
      <Form action={createWork} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-lg mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter your post title"
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div>
          <label htmlFor="slug" className="block text-lg mb-2">
            slug
          </label>
          <input
            type="text"
            id="slug"
            name="slug"
            placeholder="Enter your post slug"
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-lg mb-2">
            Content
          </label>
          <textarea
            id="description"
            name="description"
            placeholder="Write your post description here..."
            rows={6}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600"
        >
          Create Post
        </button>
      </Form>
    </div>
  );
}
