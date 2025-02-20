export interface ArticleMetadata {
  title?: string;
  author?: string;
  publishedAt?: string;
}

declare module "*.mdx" {
  let MDXComponent: (props) => JSX.Element;
  export default MDXComponent;

  export const metadata: ArticleMetadata;
}
