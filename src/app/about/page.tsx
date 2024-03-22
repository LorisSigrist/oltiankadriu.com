import { EDUCATIONS, EXPERIENCES } from "@/lib/constants";
import { isExternalLink } from "@/lib/utils";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
};

export default function About() {
  return (
    <main className="content text-gray-1100">
      <section className="w-full">
        <div className="relative mb-24">
          <Image
            src="/oltiankadriu.jpg"
            alt="Profile Picture"
            width={160}
            height={160}
            className="absolute left-0 -bottom-[64px] z-10 rounded-full aspect-square size-40 border-4 border-white"
          />
          <Image
            src="https://images.unsplash.com/photo-1527668752968-14dc70a27c95?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Banner Image"
            width={944}
            height={300}
            className="relative rounded-xl object-cover h-[235px] md:h-[300px] aspect-video"
          />
        </div>

        <div>
          <span className="text-3xl font-semibold text-gray-1200">
            Oltian Kadriu
          </span>
          <div className="text-xl font-semibold">@oltiankadriu</div>
        </div>
      </section>

      <section>
        <h1 className="text-3xl font-semibold mb-4 text-gray-1200">About me</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, illo
          alias? Quo nobis autem dolores eius. Excepturi eius necessitatibus rem
          tempora dignissimos qui fuga incidunt modi? Error dolor ratione aut?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos illo nisi
          iusto a doloremque, debitis quibusdam neque repellendus explicabo
          deserunt eveniet deleniti cupiditate illum quae error totam,
          accusantium natus perspiciatis. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Consectetur rerum provident accusantium
          alias, odio unde consequatur magnam sequi numquam dolore soluta libero
          veritatis nobis vero vitae necessitatibus hic? Deserunt, voluptatum.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4 text-gray-1200">
          Experience
        </h2>

        {EXPERIENCES.map((experience, index) => (
          <div key={index}>
            <div className="flex gap-2 mb-1 items-center">
              <p>
                {experience.position} at{" "}
                <Link
                  className="underline hover:text-gray-1200 underline-offset-2 font-medium"
                  href={experience.companyUrl}
                  {...(isExternalLink(experience.companyUrl)
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {experience.company}
                </Link>
              </p>
            </div>
            <p className="text-sm mb-2">
              {experience.startDate} -{" "}
              {experience.endDate ? (
                <>{experience.endDate}</>
              ) : (
                <span className="text-green-600">Now</span>
              )}
            </p>
            {experience.description ? <p>{experience.description}</p> : null}
            {index !== EXPERIENCES.length - 1 && (
              <div className="border-b border-b-zinc-100 my-4 dark:border-b-zinc-900" />
            )}
          </div>
        ))}
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4 text-gray-1200">Education</h2>

        {EDUCATIONS.map((education, index) => (
          <div key={index}>
            <div className="flex gap-2 mb-1 items-center">
              <p>
                {education.schoolType} at{" "}
                <Link
                  className="underline hover:text-gray-1200 underline-offset-2 font-medium"
                  href={education.schoolUrl}
                  {...(isExternalLink(education.schoolUrl)
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {education.school}
                </Link>
              </p>
            </div>
            <p className="text-sm mb-2">
              {education.startDate} -{" "}
              {education.endDate ? (
                <>{education.endDate}</>
              ) : (
                <span className="text-green-600">Now</span>
              )}
            </p>
            {education.description ? <p>{education.description}</p> : null}
            {index !== EDUCATIONS.length - 1 && (
              <div className="border-b border-b-zinc-100 my-4 dark:border-b-zinc-900" />
            )}
          </div>
        ))}
      </section>
    </main>
  );
}
