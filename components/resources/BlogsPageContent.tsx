"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { FadeUp } from "@/components/animation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ResourceCard } from "@/components/resources/ResourceCard";
import { allBlogs } from "@/lib/resources-page-data";
import { animation } from "@/lib/design-system";

const INITIAL_COUNT = 9;
const LOAD_MORE_COUNT = 6;

export function BlogsPageContent() {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const visibleBlogs = allBlogs.slice(0, visibleCount);
  const hasMore = visibleCount < allBlogs.length;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#e6f4fd] via-[#f0f7ff] to-[#fff0f6]">
        <Container className="relative pb-12 pt-[120px] md:pb-16 md:pt-[140px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: animation.duration.slow,
              ease: animation.easeOut,
            }}
            className="flex flex-col items-center text-center"
          >
            <Link
              href="/resources"
              className="group mb-6 inline-flex items-center gap-2 rounded-full border border-[#008fdb]/20 bg-white/80 px-4 py-2 text-[13px] font-medium text-[#008fdb] backdrop-blur-sm transition-all hover:border-[#008fdb]/40 hover:shadow-md"
            >
              <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-0.5" strokeWidth={2.2} />
              Back to Resources
            </Link>
            <h1 className="font-heading text-[40px] font-semibold leading-[1.12] tracking-[-0.72px] text-[var(--color-ink)] md:text-[56px] md:leading-[62px]">
              Blogs
            </h1>
          </motion.div>
        </Container>
      </section>

      {/* Blog Grid */}
      <section className="bg-[#f8f9fb] pb-12 pt-12 md:pb-16 md:pt-16">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visibleBlogs.map((article) => (
              <ResourceCard key={article.id} article={article} />
            ))}
          </div>

          {hasMore && (
            <FadeUp delay={0.1} className="mt-10 flex justify-center">
              <Button
                variant="primary"
                arrow="right"
                className="normal-case tracking-normal border-white/[0.08] text-white hover:shadow-[0_10px_30px_rgba(0,143,219,0.28)]"
                style={{ backgroundImage: "var(--gradient-cta)" }}
                onClick={() =>
                  setVisibleCount((c) => Math.min(c + LOAD_MORE_COUNT, allBlogs.length))
                }
              >
                Load More
              </Button>
            </FadeUp>
          )}
        </Container>
      </section>
    </>
  );
}
