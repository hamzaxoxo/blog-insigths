"use client";
import Featured from "@/components/Section/Featured";
import Hero from "@/components/Section/Hero";
import Newsletter from "@/components/Section/Newsletter";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function Home() {
  const { error, isLoading } = useUser();
  if (isLoading) return <div className="flex justify-center items-center h-screen">Loading...</div>;
  if (error) return <div>{error.message}</div>;
  return (
    <div className="px-8 sm:px-20 space-y-20 ">
      <Hero />
      <Featured />
      <Newsletter />
    </div>
  );
}
