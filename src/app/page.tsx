import Navbar from "@/presentation/components/layout/Navbar";
import Footer from "@/presentation/components/layout/Footer";
import Hero from "@/presentation/components/sections/Hero";
import About from "@/presentation/components/sections/About";
import WorkExperience from "@/presentation/components/sections/WorkExperience";
import Projects from "@/presentation/components/sections/Projects";
import Blog from "@/presentation/components/sections/Blog";
import Contact from "@/presentation/components/sections/Contact";
import { site, socialLinks } from "@/config/site";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  url: site.url,
  image: `${site.url}/images/profile.jpg`,
  email: `mailto:${site.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nairobi",
    addressCountry: "KE",
  },
  sameAs: [
    socialLinks.github,
    socialLinks.linkedin,
    socialLinks.x,
    socialLinks.blog,
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <WorkExperience />
        <Projects />
        {/* <Blog /> */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
