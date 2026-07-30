import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { aboutAssets } from "@/lib/about-data";

export function AboutCommunity() {
  return (
    <section className="bg-white py-16 md:py-[100px]">
      <Container>
        <div className="overflow-hidden rounded-[24px]">
          <div className="relative aspect-[1421/751] w-full min-h-[280px]">
            <Image
              src={aboutAssets.community}
              alt="Lemma team — Lemmagicians at work"
              fill
              className="object-cover object-center"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
