"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FadeUp, Stagger, staggerItem } from "@/components/animation";
import { Container } from "@/components/ui/Container";
import { LinkArrow } from "@/components/ui/LinkArrow";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { products as defaultProducts } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Products() {
  const data = defaultProducts;
  return (
    <section id="products" className="bg-white py-10 md:py-14">
      <Container>
        <FadeUp className="mb-8 space-y-4">
          <SectionLabel label="The Lemma Stack" />
          <h2 className="max-w-4xl text-[32px] font-semibold tracking-[-0.72px] text-[var(--color-ink)] md:text-[45px] md:leading-[50px]">
            Four products. One outcome engine.
          </h2>
        </FadeUp>

        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {data.map((product) => (
            <motion.article
              key={product.id}
              variants={staggerItem}
              whileHover={{ y: -8 }}
              className="group flex h-full flex-col items-center rounded-[16px] border border-[var(--color-border-strong)] bg-white p-5 text-center shadow-[0px_4px_0px_#037C7C] transition-shadow duration-300 hover:shadow-[0px_8px_24px_rgba(3,124,124,0.25)]"
            >
              <div
                className={cn(
                  "relative mb-5 h-8 w-full",
                  product.id === "phi" ? "max-w-[188px]" : "max-w-[230px]",
                )}
              >
                <Image
                  src={product.logo}
                  alt={`LEMMA ${product.name}`}
                  fill
                  unoptimized
                  className="object-contain object-center transition-opacity duration-300 group-hover:opacity-0"
                />
                {product.logoColor ? (
                  <Image
                    src={product.logoColor}
                    alt=""
                    fill
                    unoptimized
                    className="object-contain object-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                ) : null}
              </div>
              <p className="mb-6 flex-1 text-[16px] leading-[22px] text-[var(--color-slate)]">
                {product.description}
              </p>
              <LinkArrow href={product.href}>learn more</LinkArrow>
            </motion.article>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
