import { events } from "@/src/data/events";
import EventGallery from "@/components/EventGallery";
import { notFound } from "next/navigation";

// Pre-render one static page per event at build time
export function generateStaticParams() {
  return events.map((event) => ({ id: event.id }));
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const event = events.find((e) => e.id === id);

  if (!event) notFound();

  // EventGallery is a Client Component — it owns the lightbox state
  return <EventGallery event={event} />;
}
