import dynamic from "next/dynamic";
import { ArticleMetadata } from "../../../../mdx";
import { getBlogPosts } from "@/lib/publications/getPublications";

type ArticlePageProps = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const blogPosts = getBlogPosts().map((article) => article.id);
  const blogStaticParams = blogPosts.map((post) => ({
    slug: post,
  }));
  return blogStaticParams;
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const resolvedParams = await params;
  const readMdx = import("@/articles/" + resolvedParams.slug + ".mdx");
  const { metadata }: { metadata: ArticleMetadata } = await readMdx;
  const ArticleMarkdown = dynamic(() => readMdx);

  return (
    <>
      {metadata.title && <h1>{metadata.title}</h1>}
      {metadata.author && metadata.publishedAt && (
        <p>
          Published at {metadata?.publishedAt} by {metadata?.author}
        </p>
      )}
      <ArticleMarkdown />
    </>
  );
}
