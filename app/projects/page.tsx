import Link from "next/link";
import React from "react";
import { Card } from "../components/card";
import { Navigation } from "../components/nav";

const projects = [
  {
    title: "Filmworks",
    slug: "filmworks",
    description: "Film production services and portfolio.",
    date: "2025-02-25",
    url: "https://filmworks.az",
  },
  {
    title: "Employment",
    slug: "employment",
    description: "A platform for job seekers and recruiters.",
    date: "2025-02-25",
    url: "https://employment.az",
  },
  {
    title: "Bitrix Buta Grup",
    slug: "bitrix-buta-grup",
    description: "A CRM and management platform for Buta Group.",
    date: "2025-02-25",
    url: "https://bitrix.butagrup.com.tr/?lang=en",
  },
  {
    title: "Özgün İnşaat",
    slug: "ozgun-insaat",
    description: "Construction and real estate company.",
    date: "2025-02-25",
    url: "https://ozguninsaat.com/",
  },
  {
    title: "HD Buta Grup",
    slug: "hd-buta-grup",
    description: "High-definition web solutions from Buta Group.",
    date: "2025-02-25",
    url: "https://hd.butagrup.com.tr/",
  },
  {
    title: "VTP Bala",
    slug: "vtp-bala",
    description: "E-commerce and digital solutions.",
    date: "2025-02-25",
    url: "https://vtp.butagrup.az/bala/",
  },
  {
    title: "Kaizen",
    slug: "kaizen",
    description: "A consultancy firm specializing in performance improvement.",
    date: "2025-02-25",
    url: "https://kaizen.az/",
  },
];

export default function StaticProjectsPage() {
  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-4 text-zinc-400">
            A collection of projects I have worked on.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.slug}>
              <Link href={project.url}>
                <article className="relative w-full h-full p-4 md:p-8">
                  <div className="flex items-center justify-between gap-2">
                    <div className="text-xs text-zinc-100">
                      <time dateTime={new Date(project.date).toISOString()}>
                        {Intl.DateTimeFormat(undefined, {
                          dateStyle: "medium",
                        }).format(new Date(project.date))}
                      </time>
                    </div>
                  </div>

                  <h2 className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display">
                    {project.title}
                  </h2>
                  <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                    {project.description}
                  </p>
                  <div className="absolute bottom-2 md:bottom-4">
                    <p className="text-zinc-200 hover:text-zinc-50">
                      <Link href={project.url}>
                        Visit Site <span aria-hidden="true">&rarr;</span>
                      </Link>
                    </p>
                  </div>
                </article>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
