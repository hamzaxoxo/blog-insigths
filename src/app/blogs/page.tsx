import Featured from "@/components/FeaturedPost/Featured";
import Post from "@/components/PostThumnail/Post";
import ChooseCategory from "@/components/Section/ChooseCategory";
import JoinTeam from "@/components/Section/JoinTeam";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Discover our New Blogs',
  description: 'Discover how to start a blog with our comprehensive step-by-step guide. Learn about choosing a niche, setting up your blog, creating content, and driving traffic.',
  keywords: ['how to start a blog', 'blogging for beginners', 'step-by-step blogging guide', 'start a blog', 'blogging tips'],
}
export default function Page() {
  return (
    <>
      <Featured />
      <Post />
      <ChooseCategory titile="All Categories" textAlign={false} />
      <JoinTeam />
    </>
  );
}
