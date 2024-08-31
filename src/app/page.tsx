import ListOfAuthor from "@/components/Author/ListOfAuthor";
import AboutUs from "@/components/Section/AboutUs";
import ChooseCategory from "@/components/Section/ChooseCategory";
import DiscoverOurStory from "@/components/Section/DiscoverOurStory";
import Featured from "@/components/Section/Featured";
import Hero from "@/components/Section/Hero";
import JoinTeam from "@/components/Section/JoinTeam";
import LogoComponent from "@/components/Section/LogoComponent";
import Testimonials from "@/components/Section/Testimonials";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <Featured />
      <ChooseCategory titile="Choose Categories" textAlign={true} />
      <AboutUs />
      <DiscoverOurStory />
      <ListOfAuthor />
      <LogoComponent />
      <Testimonials />
      <JoinTeam />
    </div>

  );
}
