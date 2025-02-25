import { notFound } from "next/navigation";
import { allProjects } from "contentlayer/generated";
import { Mdx } from "@/app/components/mdx";
import { Header } from "./header";
import "./mdx.css";
import { ReportView } from "./view";
import { Redis } from "@upstash/redis";

// Set revalidation time (caching)
export const revalidate = 60;

type Props = {
  params: {
    slug: string;
  };
};

const redis = Redis.fromEnv();

export default async function PostPage({ params }: Props) {
  const slug = params?.slug;

  // Find the project by slug
  const project = allProjects.find((project) => project.slug === slug);

  if (!project) {
    notFound(); // If project is not found, show a 404 page
  }

  // Fetch pageviews from Redis (server-side logic)
  const views =
    (await redis.get<number>(["pageviews", "projects", slug].join(":"))) ?? 0;

  // Fetch external data (can be done server-side as well)
  const data = await fetch("https://your-api-domain.com/pipeline").then((res) =>
    res.json()
  );

  return (
    <div className="bg-zinc-50 min-h-screen">
      <Header project={project} views={views} />
      <ReportView slug={project.slug} data={data} />

      <article className="px-4 py-12 mx-auto prose prose-zinc prose-quoteless">
        <Mdx code={project.body.code} />
      </article>
    </div>
  );
}
