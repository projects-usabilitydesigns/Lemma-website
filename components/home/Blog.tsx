"use client";

import Image from "next/image";
import { Calendar, Clock, Eye } from "lucide-react";
import { motion } from "framer-motion";
import { FadeUp, Stagger, staggerItem } from "@/components/animation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { ResourceArticle } from "@/lib/resources-page-data";

export function Blog({ blogPosts }: { blogPosts?: ResourceArticle[] }) {
  const data = (blogPosts ?? []).slice(0, 3);
  return (
    <section id="blog" className="bg-white py-16 md:py-[100px]">
      <Container>
        <FadeUp className="mb-12 max-w-2xl space-y-6">
          <SectionLabel label="Blogs & Insights" />
          <h2 className="text-[32px] font-semibold tracking-[-0.72px] text-[var(--color-ink)] md:text-[45px] md:leading-[50px]">
            Fresh thinking on media,
            <br />
            AI & outcomes
          </h2>
        </FadeUp>

        <Stagger className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {data.map((post) => (
            <motion.a
              key={post.id}
              href={post.href}
              variants={staggerItem}
              className="group block overflow-hidden border border-[var(--color-border)] bg-[var(--color-cream-soft)] transition-shadow duration-300 hover:shadow-[0px_12px_40px_rgba(9,19,26,0.1)]"
            >
              <div className="relative aspect-[418/260] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover object-bottom transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-4 min-h-[55px] text-[20px] font-extrabold tracking-[-0.44px] text-[var(--color-ink)] transition-transform duration-300 group-hover:-translate-y-1 md:text-[22px] md:leading-[27.5px]">
                  {post.title}
                </h3>
                <div className="flex flex-wrap items-center gap-5 border-t border-[var(--color-border)] pt-4 text-[12px] text-[var(--color-slate)]">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="size-3.5" />
                    {post.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="size-3.5" />
                    {post.readTime}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Eye className="size-3.5" />
                    {post.views}
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </Stagger>

        <div className="mt-12 flex justify-center">
          <Button href="/resources/blogs" variant="primary">
            VIEW ALL
          </Button>
        </div>
      </Container>
    </section>
  );
}
