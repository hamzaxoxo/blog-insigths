import Image from "next/image";
import featuredImage from "../../../public/featuredImage.png";
import Container from "../Container";
import Link from "next/link";

interface BlogPost {
  title: string;
  author: string;
  date: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  { title: "8 Figma design systems that you can download for free today.", author: "Jane Smith", date: "Mar 15, 2023", slug: "hi" },
  { title: "How to Create Engaging UI Animations in Figma", author: "David Lee", date: "Jun 10, 2022", slug: "hi" },
  { title: "The Ultimate Guide to Figma Plugins for Designers", author: "Emily Johnson", date: "Sep 5, 2023", slug: "hi" },
  { title: "Design Systems vs. Style Guides: What’s the Difference?", author: "Michael Brown", date: "Dec 1, 2021", slug: "hi" },
];

export default function Featured() {
  return (
    <Container className="py-20 flex flex-col">

      <div className="w-full p-8">
        <div className="flex gap-10 lg:flex-row flex-col">

          <div className="flex flex-col gap-5 grow font-bold text-gray-800">
            <p className="text-xl sm:text-4xl font-bold leading-5 text-gray-800">Featured Post</p>
            <Image
              alt="featured image"
              loading="lazy"
              src={featuredImage}
              className="w-full aspect-[1.89] object-cover md0:max-w-full"
            />
            <div className="text-sm font-medium leading-5 text-violet-800 md0:max-w-full">
              By <span className="text-violet-800">John Doe</span> l May 23,
              2022
            </div>
            <div className="text-3xl tracking-tighter leading-10 -md0:max-w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </div>
            <div className="text-base leading-7 text-zinc-500 md0:max-w-full">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </div>
            <div className="self-start px-12 py-4 text-lg leading-6 bg-amber-300 max-md0:px-5">
              Read More &gt;
            </div>
          </div>

          <div className="flex justify-between flex-col gap-5">
            <div className="flex justify-between">
              <p className="text-xl sm:text-4xl font-bold leading-5 text-gray-800">All Post</p>
              <Link href='/' className="text-base leading-7 font-bold underline text-violet-800">
                View All
              </Link>
            </div>
            <div className="flex flex-col grow ">
              {blogPosts.map((post, index) => (
                <Link href={`/${post.title}`} key={index} className={`flex flex-col items-start bg-white hover:bg-orange-50 p-4`}>
                  <div className="text-sm font-medium leading-5 text-violet-800">
                    By <span className="text-violet-800">{post.author}</span> | {post.date}
                  </div>
                  <div className="mt-4 text-2xl font-bold leading-10 text-gray-800">
                    {post.title}
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </Container>
  );
}

