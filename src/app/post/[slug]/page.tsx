
import { Metadata } from "next";

interface Params {
  params: {
    slug: string | string[];
  };
}

// export async function generateMetadata({ params }: Params): Promise<Metadata> {
//   const { slug } = params;
//   // const fetchedPost = await fetchSinglePost(Array.isArray(slug) ? slug[0] : slug);
//   // return {
//   //   title: fetchedPost?.title,
//   //   description: fetchedPost?.content?.text.substring(0, 150) || '',
//   //   openGraph: {
//   //     title: fetchedPost?.title,
//   //     description: fetchedPost?.content?.text.substring(0, 150) || '',
//   //     images: [
//   //       {
//   //         url: fetchedPost?.coverImage.url,
//   //         width: 800,
//   //         height: 600,
//   //         alt: fetchedPost?.title,
//   //       },
//   //     ],
//   //   }
//   // };
// }
const Page = () => {

  return (
    <div>
      <h1>Post</h1>
      <p>Post content goes here.</p>
    </div>
  );
}

export default Page;
