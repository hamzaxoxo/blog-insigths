import Container from "@/components/Container";
import { Metadata } from "next";
import Image from "next/image";
import author4 from "../../../public/authors/5.png";
import { aboutSocialLinks } from "@/components/defaultData/SocialLinks";
import Post from "@/components/PostThumnail/Post";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bloginsights.com/about"),
  title: "About Us",
  description: "Learn about Blog Insights, our mission, values, and team. Discover why we are passionate about programming and web development education.",
  keywords: [
    "About Us",
    "Blog Insights mission, values, team, company information, history, background",
    "programming education, web development passion",
  ]
}

export default function page() {
  return (
    <>
      <div className="bg-pinkish p-5">
        <Container>
          <div className="flex flex-col">
            <div className="flex flex-col items-center md:pt-24 w-full md:max-w-full">
              <div className="flex flex-col w-full max-w-screen-lg max-md:max-w-full">
                <div className="max-w-full w-[952px]">
                  <div className="flex gap-5 max-md:flex-col">
                    <div className="flex flex-col w-[27%] max-md:ml-0 max-md:w-full">
                      <Image
                        loading="lazy"
                        src={author4}
                        alt="Andrew Johnson"
                        className="object-contain grow w-full md:w-64 aspect-[0.85] max-md:mt-8"
                      />
                    </div>
                    <div className="flex flex-col ml-5 w-[73%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col max-md:max-w-full">
                        <div className="md:text-[48px] text-[28px] font-bold tracking-tighter text-gray-800 leading-[64px] max-md:max-w-full max-md:text-4xl max-md:leading-[60px]">
                          Hey there, I’m Andrew Jonhson and welcome to my Blog
                        </div>
                        <div className="mt-6 mr-5 text-base leading-7 text-zinc-500 max-md:mr-2.5 max-md:max-w-full">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                          do eiusmod tempor incididunt ut labore et dolore magna
                          aliqua. Non blandit massa enim nec. Scelerisque viverra
                          mauris in aliquam sem. At risus viverra adipiscing at in
                          tellus.
                        </div>
                        <div className="flex gap-2 py-2">
                          {
                            aboutSocialLinks.map((link, index) => {
                              const Icon = link.icon;
                              return (
                                <a key={index} href={link.url} className="text-primary">
                                  <Icon size={16} />
                                </a>
                              )
                            })
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b867e5d612d763c6f98db68cee6b43283e705f4bcfc9712ad2f0ff8fbada17ef?apiKey=0262c9a8fe64483788a22fad731b4e53&&apiKey=0262c9a8fe64483788a22fad731b4e53"
                  className="object-contain mt-28 w-full aspect-[43.48] max-md:mt-10 max-md:max-w-full"
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Post title="My Posts" />
    </>
  )
}
