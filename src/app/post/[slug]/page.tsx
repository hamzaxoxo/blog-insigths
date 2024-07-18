import BlogDetail from "@/components/Blog/BlogDetail";
import { fetchSinglePost } from "@/conf/postService";
import { Metadata } from "next";

interface Params {
  params: {
    slug: string | string[];
  };
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = params;
  const fetchedPost = await fetchSinglePost(Array.isArray(slug) ? slug[0] : slug);
  return {
    title: fetchedPost?.title,
    description: fetchedPost?.content?.text.substring(0, 150) || '',
    openGraph: {
      title: fetchedPost?.title,
      description: fetchedPost?.content?.text.substring(0, 150) || '',
      images: [
        {
          url: fetchedPost?.coverImage.url,
          width: 800,
          height: 600,
          alt: fetchedPost?.title,
        },
      ],
    }
  };
}
const Page = () => {

  return (
    <BlogDetail />
  );
}

export default Page;
