"use client";

import { ArticleDetailContent } from "@/components/resources/ArticleDetailContent";
import {
  defaultArticleCtas,
  type ArticleBodySection,
  type ArticleDetail,
} from "@/lib/article-detail";
import { allBlogs, type BlogPostDetail } from "@/lib/resources-page-data";

function toArticleDetail(article: BlogPostDetail): ArticleDetail {
  const firstParagraph = article.body.find((section) => section.type === "paragraph");
  const excerpt = firstParagraph?.text ?? "";
  let skippedExcerpt = false;

  const body: ArticleBodySection[] = [];
  for (const section of article.body) {
    if (section.type === "paragraph" && !skippedExcerpt && section.text === excerpt) {
      skippedExcerpt = true;
      continue;
    }
    if (section.type === "blockquote") {
      body.push({ type: "takeaway", text: section.text });
      continue;
    }
    if (section.type === "heading" || section.type === "paragraph" || section.type === "list") {
      body.push(section);
    }
  }

  return {
    slug: article.slug,
    kind: "blog",
    category: article.category,
    categories: ["Blogs", article.tags[0] ?? article.category],
    title: article.title,
    excerpt,
    author: article.author,
    date: article.date,
    readTime: article.readTime,
    image: article.image,
    tags: article.tags,
    body,
    cta: defaultArticleCtas.blog,
  };
}

export function BlogDetailContent({ article }: { article: BlogPostDetail }) {
  const related = allBlogs
    .filter((blog) => blog.slug !== article.slug)
    .slice(0, 3)
    .map((blog) => ({
      title: blog.title,
      href: blog.href,
      image: blog.image,
    }));

  return <ArticleDetailContent article={toArticleDetail(article)} related={related} />;
}
