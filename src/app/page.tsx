import Header from "@/components/Header/Header";

import Home from "@/sections/Home/Home";
import About from "@/sections/About/About";
import Impact from "@/sections/Impact/Impact";
import Services from "@/sections/Services/Services";
import CaseStudies from "@/sections/CaseStudies/CaseStudies";
import Testimonials from "@/sections/Testimonials/Testimonials";
import WhyTaash from "@/sections/WhyTaash/WhyTaash";
import Footer from "@/components/Footer/Footer";

export default function Page() {
  return (
    <>
      <Header />
      
      <main id="homepage-main" className="relative z-10 w-full min-h-screen">
        <Home />
        <About />
        <Impact />
        <Services />
        <CaseStudies />
        <Testimonials />
        <WhyTaash />
        <Footer />
      </main>
    </>
  );
}
