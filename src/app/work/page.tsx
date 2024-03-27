import { EDUCATIONS, EXPERIENCES } from "@/lib/constants";
import { isExternalLink } from "@/lib/utils";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work",
};

export default function Work() {
  return (
    <main className="content text-gray-1100">
      <section>
        <h1 className="text-3xl font-semibold mb-4 text-gray-1200">
          My Projects
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          <article className="bg-accent rounded-2xl overflow-hidden grid grid-rows-1 content-between">
            <div className="p-8 text-gray-1200">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-2xl font-semibold">Testproject</h2>
                  <Link
                    className="flex justify-between gap-5 bg-muted-foreground py-2 px-3 items-center rounded-2xl"
                    href="#"
                  >
                    www
                  </Link>
                </div>
                <p className="text-gray-1100">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque obcaecati quae voluptas dolorum fugiat tempore
                  voluptatum modi ad eos.
                </p>
              </div>
            </div>
            <Image
              src="/images/work/testcompany/testproject.png"
              alt="test"
              width={456}
              height={228}
            />
          </article>

          <article className="bg-accent rounded-2xl overflow-hidden grid grid-rows-1 content-between">
            <div className="p-8 text-gray-1200">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-2xl font-semibold">Testproject</h2>
                  <Link
                    className="flex justify-between gap-5 bg-muted-foreground py-2 px-3 items-center rounded-2xl"
                    href="#"
                  >
                    www
                  </Link>
                </div>
                <p className="text-gray-1100">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque obcaecati quae voluptas dolorum fugiat tempore
                  voluptatum modi ad eos.
                </p>
              </div>
            </div>
            <Image
              src="/images/work/testcompany/testproject.png"
              alt="test"
              width={456}
              height={228}
            />
          </article>

          <article className="bg-accent rounded-2xl overflow-hidden grid grid-rows-1 content-between">
            <div className="p-8 text-gray-1200">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-2xl font-semibold">Testproject</h2>
                  <Link
                    className="flex justify-between gap-5 bg-muted-foreground py-2 px-3 items-center rounded-2xl"
                    href="#"
                  >
                    www
                  </Link>
                </div>
                <p className="text-gray-1100">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque obcaecati quae voluptas dolorum fugiat tempore
                  voluptatum modi ad eos.
                </p>
              </div>
            </div>
            <Image
              src="/images/work/testcompany/testproject.png"
              alt="test"
              width={456}
              height={228}
              className="w-full"
            />
          </article>
        </div>
      </section>
    </main>
  );
}
