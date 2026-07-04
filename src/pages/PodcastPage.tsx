import React from "react";
import { motion } from "motion/react";
import { Podcast, Cloud, Music, Speaker, Play, ArrowRight } from "lucide-react";

const ScrollReveal = ({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const PodcastGrid = () => {
  const podcasts = [
    {
      ep: "005",
      image:
        "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&q=80",
      title: "Understanding identity in a connected world",
      author: "Dr. Shweta Singh",
      duration: "1hr 15min",
    },
    {
      ep: "004",
      image:
        "https://images.pexels.com/photos/6896194/pexels-photo-6896194.jpeg?auto=compress&w=1200",
      title: "The power of storytelling in social work",
      author: "Dr. Shweta Singh",
      duration: "1hr 06min",
    },
    {
      ep: "003",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
      title: "Navigating cross-cultural communication",
      author: "Dr. Shweta Singh",
      duration: "1hr 20min",
    },
    {
      ep: "002",
      image:
        "https://images.unsplash.com/photo-1581368135153-a506cf13b1e1?w=800&q=80",
      title: "Impact of global media on local culture",
      author: "Dr. Shweta Singh",
      duration: "1hr 10min",
    },
    {
      ep: "001",
      image:
        "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800&q=80",
      title: "Social dynamics in modern urban settings",
      author: "Dr. Shweta Singh",
      duration: "1hr 05min",
    },
    {
      ep: "000",
      image:
        "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&q=80",
      title: "The genesis of identity research",
      author: "Dr. Shweta Singh",
      duration: "0hr 55min",
    },
  ];

  return (
    <div className="w-full bg-[#ffffff] border-t border-[#EDD2E0]/10">
      <ScrollReveal className="max-w-[clamp(320px,90vw,1280px)] w-full mx-auto px-[clamp(1rem,4vw,2rem)] py-[clamp(4rem,8vw,6rem)]">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-serif text-[clamp(1.5rem,3vw,1.875rem)] text-[#0A2463]">
            All Episodes
          </h2>
        </div>

        {/* Divider */}
        <div className="w-full border-t border-[#EDD2E0]/20 relative mb-[clamp(1.5rem,3vw,3rem)]">
          <div className="absolute left-0 -top-[3px] w-[5px] h-[5px] bg-[#0A2463]/30 rounded-full" />
          <div className="absolute right-0 -top-[3px] w-[5px] h-[5px] bg-[#0A2463]/30 rounded-full" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,400px),1fr))] gap-[clamp(1.5rem,3vw,2rem)]">
          {podcasts.map((podcast) => (
            <div
              key={podcast.ep}
              className="border border-[#EDD2E0]/10 p-2 bg-transparent relative group cursor-pointer shadow-xl shadow-[#0A2463]/5 hover:shadow-2xl transition-shadow duration-500"
            >
              <div className="border border-[#EDD2E0] p-4 flex flex-col relative bg-white h-full">
                {/* Top Bar */}
                <div className="flex items-center justify-between text-[10px] font-sans mb-4 border-b border-[#EDD2E0]/10 pb-3">
                  <span className="tracking-widest flex gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0A2463] block" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0A2463] block" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0A2463] block" />
                  </span>
                  <div className="flex-1 border-b border-dashed border-[#EDD2E0]/20 mx-4"></div>
                  <span className="text-[#111111]/60 font-bold">
                    [EP. {podcast.ep}]
                  </span>
                </div>

                {/* Content Split */}
                <div className="flex flex-wrap gap-[clamp(1rem,2vw,1.5rem)] h-full">
                  {/* Image */}
                  <div className="flex-1 min-w-[min(100%,200px)] aspect-square border border-[#EDD2E0] overflow-hidden relative ring-1 ring-[#EDD2E0]/5 group-hover:border-[#EDD2E0]/40 transition-colors shrink-0 bg-transparent">
                    <img
                      src={podcast.image}
                      alt={podcast.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-[1.5] min-w-[min(100%,200px)] flex flex-col py-1">
                    <h3 className="text-2xl font-serif leading-[1.3] -mx-1 mb-4">
                      <span className="text-[#0A2463] bg-transparent group-hover:bg-[#FE601C] group-hover:text-white transition-colors duration-300 box-decoration-clone inline px-1">
                        {podcast.title}
                      </span>
                    </h3>

                    <div className="flex items-center gap-2 text-xs text-[#111111]/50 font-semibold mb-6">
                      <span className="text-[#111111]/70">
                        by {podcast.author}
                      </span>
                      <span className="text-[#111111]/30">|</span>
                      <span className="text-[#111111]/70">
                        {podcast.duration}
                      </span>
                    </div>

                    <button className="min-h-[44px] min-w-[44px] bg-[#FE601C] text-white text-[10px] font-bold tracking-widest px-4 py-2 rounded-md w-fit hover:bg-[#FE601C]/80 transition-colors uppercase">
                      Play Episode
                    </button>

                    <div className="mt-auto pt-6 flex items-center gap-3">
                      <span className="text-xs text-[#111111]/50 font-medium">
                        Listen on:
                      </span>
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full border border-[#EDD2E0]/20 bg-[#0A2463]/5 flex items-center justify-center group-hover:bg-[#0A2463]/10 transition-colors">
                          <svg
                            className="w-3 h-3 text-[#0A2463]"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                            <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                            <line x1="12" x2="12" y1="19" y2="22" />
                          </svg>
                        </div>
                        <div className="w-5 h-5 rounded-full border border-[#EDD2E0]/20 bg-[#0A2463]/5 flex items-center justify-center group-hover:bg-[#0A2463]/10 transition-colors">
                          <svg
                            className="w-3 h-3 text-[#0A2463]"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                          </svg>
                        </div>
                        <div className="w-5 h-5 rounded-full border border-[#EDD2E0]/20 bg-[#0A2463]/5 flex items-center justify-center group-hover:bg-[#0A2463]/10 transition-colors">
                          <svg
                            className="w-3 h-3 text-[#0A2463]"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <circle cx="12" cy="12" r="10" />
                            <path d="M8 12a4 4 0 0 1 8 0" />
                            <path d="M10 14a2 2 0 0 1 4 0" />
                          </svg>
                        </div>
                        <div className="w-5 h-5 rounded-full border border-[#EDD2E0]/20 bg-[#0A2463]/5 flex items-center justify-center group-hover:bg-[#0A2463]/10 transition-colors">
                          <svg
                            className="w-3 h-3 text-[#0A2463]"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 8v8" />
                            <path d="M8 12h8" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="flex justify-center mt-[clamp(2.5rem,5vw,4rem)]">
          <button className="min-h-[44px] group flex items-center justify-between gap-4 bg-transparent border border-[#FE601C] text-[#FE601C] pl-6 pr-1.5 py-1.5 rounded-full font-bold text-sm tracking-widest hover:bg-[#FE601C] hover:text-white transition-colors cursor-pointer shrink-0">
            <span>LOAD MORE</span>
            <div className="w-9 h-9 rounded-full bg-[#FE601C] flex items-center justify-center shrink-0 group-hover:bg-white transition-colors">
              <ArrowRight className="w-4 h-4 text-white group-hover:text-[#0A2463] transition-colors" />
            </div>
          </button>
        </div>
      </ScrollReveal>
    </div>
  );
};

export const PodcastPage = () => {
  return (
    <main className="flex-1 w-full bg-[#ffffff]">
      <div className="max-w-[clamp(320px,90vw,1280px)] w-full mx-auto px-[clamp(1rem,4vw,2rem)] py-[clamp(4rem,8vw,6rem)] pb-0">
        <ScrollReveal className="flex flex-col items-center text-center space-y-[clamp(1rem,3vw,1.5rem)] mb-[clamp(2rem,4vw,3rem)]">
          <h1 className="font-serif text-[clamp(3.75rem,8vw,6.25rem)] leading-[1.1] text-[#0A2463]">
            Shweta's Podcast
          </h1>
          <p className="text-lg text-[#111111]/80 max-w-2xl mx-auto leading-relaxed font-medium">
            Conversations that uncover the ideas, struggles, and wins behind
            today's most inspiring creators and entrepreneurs.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-8">
            <span className="text-[#0A2463] font-semibold">Listen on:</span>
            <div className="flex gap-2">
              <a
                href="#"
                className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-[#FE601C] text-white flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Podcast className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-[#FE601C] text-white flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Cloud className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-[#FE601C] text-white flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Music className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-[#FE601C] text-white flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Speaker className="w-4 h-4" />
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
      <PodcastGrid />
    </main>
  );
};
