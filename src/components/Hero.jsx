import { curve, heroBackground, robot } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants/index";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Generating from "./Generating";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section className="pt-[12rem] -mt-[5.25]" crosses crossesOffset="lg:translate-y-[5.25rem]" customPaddings id="hero">
      {/* hero component */}
      <div className="container relative" ref={parallaxRef}>
        {/* hero section one */}
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]">
          <h1 className="h1 mb-6">
            Explore the Possibilities of&nbsp;AI&nbsp;Chatting with{` `}
            <span className="inline-block relative">
              Brainwave
              <img
                src={curve}
                className="absolute bottom-0 left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
        
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Unleash the power of AI within Brainwave. Upgrade your productivity
            with Brainwave, the open AI chat app.
          </p>

          <Button href="/pricing" white>
            Get started
          </Button>
        </div>

        {/* hero section two */}
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          {/* hero main robot image */}
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            {/* hero main image section */}
            <div className="relative bg-n-8 rounded-[1rem]">
              {/* image top border style */}
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

              {/* hero main image content  */}
              <div className="aspect-[33/40] rounded-b-[0.9rem] md:aspect-[688/490] lg:aspect-[1024/490] overflow-hidden">
                {/* main robot image */}
                <img
                  src={robot}
                  className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                  width={1024}
                  height={490}
                  alt="AI"
                />

                {/* serch container */}
                <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />

                {/* left & right side cards  */}
                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                    {heroIcons.map((icon) => (
                      <li className="p-5" key={icon}>
                        <img src={icon} width={24} height={25} alt={icon} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>

                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                    title="code generating"
                  />
                </ScrollParallax>
              </div>
            </div>
            
            {/* hero image bottom gradient style */}
            <Gradient />
          </div>
          
          {/* blur hero bg image */}
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img
              src={heroBackground}
              className="w-full"
              width={1440}
              height={1800}
              alt="heroBackground"
            />
          </div>
          
          {/* Circles style on hero section */}
          <BackgroundCircles />
        </div>
        
        {/* companys images */}
        <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
