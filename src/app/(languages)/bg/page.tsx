import { notFound } from "next/navigation";
import { getStory } from "@/lib/storyblok";
import SbSections from "@/configs/sb-component";

export default async function Home() {
  const res = await getStory("home", "bg");

  if (!res) notFound();
  const components = res.data.story.content.body;

  return (
    <main className="h-fit min-h-screen w-full">
      <SbSections components={components} />
    </main>
  );
}
