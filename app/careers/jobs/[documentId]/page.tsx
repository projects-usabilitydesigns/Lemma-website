import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { CareersCta, JobApplyForm, JobDetail } from "@/components/careers";
import { Container } from "@/components/ui/Container";
import { getJobByDocumentId } from "@/lib/api";

type PageProps = {
  params: Promise<{ documentId: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { documentId } = await params;
  const job = await getJobByDocumentId(documentId);
  if (!job) return { title: "Careers" };
  return {
    title: `${job.title} — Careers`,
    description: `Apply for ${job.title} at Lemma Technologies${job.location ? ` (${job.location})` : ""}.`,
  };
}

export default async function JobDetailPage({ params }: PageProps) {
  const { documentId } = await params;
  const job = await getJobByDocumentId(documentId);
  if (!job) notFound();

  return (
    <>
      <Header />
      <main className="relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-70"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 0%, rgba(21,129,197,0.18), transparent 45%), radial-gradient(circle at 85% 20%, rgba(237,46,128,0.14), transparent 42%), radial-gradient(circle at 50% 100%, rgba(0,147,82,0.1), transparent 45%), linear-gradient(180deg, #f8fbff 0%, #ffffff 100%)",
          }}
        />
        <Container className="relative py-10 md:py-14">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_400px] lg:gap-12">
            <JobDetail job={job} />
            <aside className="h-fit lg:sticky lg:top-24">
              <JobApplyForm jobTitle={job.title} jobId={job.jobId} />
            </aside>
          </div>
        </Container>
        <CareersCta />
      </main>
    </>
  );
}
