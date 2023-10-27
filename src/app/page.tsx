import Banner from "./_components/Banner";
import Features from "./_components/Features";
import Hero from "./_components/Hero";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Hero />
      <Features />
      <Banner
        title="kick start your career today!"
        subTitle="Start for free — Try our resume builder now"
        button={{
          buttonText: "build your resume",
          buttonLink: "/resume-builder",
        }}
      />
    </main>
  );
}
