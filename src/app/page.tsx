import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { PROJECTS } from "@/lib/constants";

export default function Home() {
  return (
    <main className="content">
      <section>
        <div className="flex items-center justify-start md:gap-24 gap-16 max-lg:py-20 w-full lg:pt-24 lg:pb-8 mb-12 lg:justify-between lg:flex-row flex-col-reverse">
          <div className="lg:h-2/6 h-2/5 max-lg:w-full max-lg:flex">
            <div className="cursor-text max-w-2xl">
              <h1 className="text-4xl font-semibold leading-snug mb-10 text-gray-1100">
                Hi 👋 I&apos;m{" "}
                <span className="text-gray-1200 underline-offset-4">
                  Oltian
                </span>
                , a web developer and designer from Zurich, Switzerland.
                Crafting clean, minimalist designs with a touch of flair is my
                thing.
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="flex gap-4 items-center mb-8">
          <h2 className="font-medium text-lg text-gray-1100 flex-shrink-0">
            Selected work
          </h2>
          <div className="w-full h-[1px] bg-zinc-100 dark:bg-zinc-900"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.filter((project) => project.isSelected).map(
            (project, index) => (
              <article
                key={index}
                className="bg-accent rounded-2xl overflow-hidden grid grid-rows-1 content-between"
              >
                <div className="p-8 text-gray-1200">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-2xl font-semibold">
                        {project.title}
                      </h3>
                      <Link
                        className="flex justify-between gap-3 py-2 px-3 items-center rounded-2xl hover:underline text-sm"
                        href={`/work/${project.slug}`}
                      >
                        Read More <MoveRight />
                      </Link>
                    </div>
                    <p className="text-gray-1100">{project.shortDescription}</p>
                  </div>
                </div>
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  width={456}
                  height={228}
                  className="w-full animate-reveal"
                />
              </article>
            )
          )}
        </div>
      </section>
    </main>
  );
}
