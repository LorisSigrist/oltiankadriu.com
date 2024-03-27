import { PROJECTS } from "@/lib/constants";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { cache } from "react";

interface PageProps {
  params: { slug: string };
}

const getProject = cache(async (slug: string) => {
  const project = PROJECTS.find((project) => project.slug === slug);

  if (!project) notFound();

  return project;
});

export async function generateStaticParams() {
  return PROJECTS.map((project) => project.slug);
}

export async function generateMetadata({
  params: { slug },
}: PageProps): Promise<Metadata> {
  const project = await getProject(slug);

  return {
    title: project.title,
  };
}

export default async function Page({ params: { slug } }: PageProps) {
  const project = await getProject(slug);

  return (
    <main className="m-auto my-10 flex max-w-5xl flex-col items-center gap-5 px-3 md:flex-row md:items-start">
      <p>{project.title}</p>
    </main>
  );
}
