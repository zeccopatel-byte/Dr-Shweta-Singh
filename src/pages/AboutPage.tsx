import React from "react";
import { motion } from "motion/react";

const ScrollReveal = ({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

const AboutHero = () => {
  return (
    <div className="w-full bg-[#ffffff]">
      <div className="max-w-[clamp(320px,90vw,1280px)] w-full mx-auto px-[clamp(1rem,4vw,2rem)] py-[clamp(4rem,8vw,6rem)] pb-0">
        <ScrollReveal className="flex flex-col items-center text-center space-y-[clamp(1rem,3vw,1.5rem)] mb-[clamp(2rem,4vw,3rem)]">
          <h1 className="font-serif text-[clamp(3.75rem,8vw,6.25rem)] leading-[1.1] text-[#0A2463]">
            About
          </h1>
          <p className="text-lg text-[#111111]/80 max-w-2xl mx-auto leading-relaxed font-medium">
            Learn more about Dr. Shweta Singh's mission, background, and
            dedication to research, academia, and society.
          </p>
        </ScrollReveal>
      </div>
    </div>
  );
};

const AboutContent = () => {
  return (
    <div className="w-full overflow-hidden">
      <ScrollReveal className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Main Text */}
        <h2 className="font-serif text-[clamp(1.875rem,5vw,3rem)] leading-[1.2] text-[#0A2463] text-center max-w-5xl mx-auto mb-[clamp(2.5rem,5vw,5rem)]">
          Dr. Shweta Singh is a researcher, author, and educator at Loyola
          University Chicago. She explores the intersections of society,
          culture, and individual identity through thoughtful stories, academic
          research, and collaborative discourse.
        </h2>

        {/* Three Column Layout */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-[clamp(2rem,4vw,4rem)] items-start relative mt-[clamp(2.5rem,5vw,4rem)]">
          {/* Left Col */}
          <div className="space-y-12">
            <div>
              <h3 className="font-sans text-5xl font-bold text-[#0A2463] mb-2 tracking-tight">
                8+
              </h3>
              <p className="text-[#111111]/70 font-medium text-sm">
                Years Experience
              </p>
            </div>
            <div>
              <h3 className="font-sans text-5xl font-bold text-[#0A2463] mb-2 tracking-tight">
                230+
              </h3>
              <p className="text-[#111111]/70 font-medium text-sm">
                Happy Clients
              </p>
            </div>
          </div>

          {/* Center Col - Image */}
          <div className="aspect-[4/5] overflow-hidden rounded-xl relative shadow-xl shadow-[#0A2463]/10">
            <img
              src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&q=80"
              alt="Dr. Shweta Singh"
              className="w-full h-full object-cover transition-all duration-700"
            />
          </div>

          {/* Right Col */}
          <div className="space-y-12 pt-[clamp(0rem,1vw,1rem)]">
            <div className="flex flex-wrap gap-[clamp(1rem,3vw,2rem)] items-start">
              <h4 className="font-bold text-[#0A2463] text-sm whitespace-nowrap">
                ( Mission )
              </h4>
              <p className="flex-1 min-w-[200px] text-[#111111]/80 font-medium text-sm leading-relaxed">
                To foster critical thinking and empathy by making complex
                societal and cultural research accessible, engaging, and
                relevant to everyday lives and global challenges.
              </p>
            </div>
            <div className="w-full border-b border-dashed border-gray-300"></div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
};

export const AboutPage = () => {
  return (
    <main className="flex-1 w-full bg-[#ffffff]">
      <AboutHero />
      <AboutContent />
    </main>
  );
};
