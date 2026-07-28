"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Stagger, staggerItem } from "@/components/animation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { products } from "@/lib/data";

export function Products() {
  return (
    <section id="products" className="bg-white py-16 md:py-[100px]">
      <Container>
        <div className="mb-11 space-y-5">
          <SectionLabel label="The Lemma Stack" />
          <h2 className="max-w-4xl text-[32px] font-semibold tracking-[-0.72px] text-[var(--color-ink)] md:text-[45px] md:leading-[50px]">
            Five products. One outcome engine.
          </h2>
        </div>

        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => (
            <motion.article
              key={product.id}
              variants={staggerItem}
              whileHover={{ y: -8 }}
              className="group flex h-full flex-col rounded-[16px] border border-[var(--color-border-strong)] bg-white p-5 text-left shadow-[0px_4px_0px_#008fdb] transition-shadow duration-300 hover:shadow-[0px_8px_24px_rgba(0,143,219,0.25)]"
            >
              <div className="relative mb-5 h-8 w-full max-w-[210px]">
                <Image
                  src={product.logo}
                  alt={`LEMMA ${product.name}`}
                  fill
                  className="object-contain object-left"
                />
              </div>
              <h3 className="mb-4 text-[24px] font-bold tracking-[-0.44px] text-[var(--color-ink)]">
                {product.name}
              </h3>
              <p className="mb-6 flex-1 text-[16px] leading-[22px] text-[var(--color-slate)]">
                {product.description}
              </p>
              <Button href={product.href} variant="primary" arrow="right" className="w-fit">
                learn more
              </Button>
            </motion.article>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
