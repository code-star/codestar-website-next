import dynamic from "next/dynamic";
import { ArticleMetadata } from "../../../../mdx";

type ArticlePageProps = { params: { slug: string } };

// https://didoesdigital.com/blog/nextjs-blog-02-add-mdx/
// export async function generateStaticParams() {
//   const blogPosts = ["first-mdx-post"]; // FIXME: Read from file system
//   const blogStaticParams = blogPosts.map((post) => ({
//     slug: post,
//     metadata: metadata,
//   }));

//   return blogStaticParams;
// }

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
