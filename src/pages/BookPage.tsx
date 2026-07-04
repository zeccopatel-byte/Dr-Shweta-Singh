import React from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  BookOpen,
  Users,
  GraduationCap,
  Globe,
  HeartHandshake,
} from "lucide-react";

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

const BookHero = () => {
  return (
    <div className="w-full bg-[#ffffff]">
      <div className="max-w-[clamp(320px,90vw,1280px)] w-full mx-auto px-[clamp(1rem,4vw,2rem)] py-[clamp(4rem,8vw,6rem)] pb-0">
        <ScrollReveal className="flex flex-col items-center text-center space-y-[clamp(1rem,3vw,1.5rem)] mb-[clamp(2rem,4vw,3rem)]">
          <h1 className="font-serif text-[clamp(3.75rem,8vw,6.25rem)] leading-[1.1] text-[#0A2463]">
            Books
          </h1>
          <p className="text-lg text-[#111111]/80 max-w-2xl mx-auto leading-relaxed font-medium">
            Explore a collection of published works covering research, society,
            and academic theory, designed to broaden horizons.
          </p>
        </ScrollReveal>
      </div>
    </div>
  );
};

const BookGrid = () => {
  const books = [
    {
      no: "006",
      image:
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800&q=80",
      category: "Research",
      author: "Dr. Shweta Singh",
      year: "2023",
      title: "Global Identity & Migration",
    },
    {
      no: "005",
      image:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&q=80",
      category: "Society",
      author: "Dr. Shweta Singh",
      year: "2021",
      title: "Resilient Communities",
    },
    {
      no: "004",
      image:
        "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=800&q=80",
      category: "Academia",
      author: "Dr. Shweta Singh",
      year: "2019",
      title: "Professional Studies in the Modern Era",
    },
    {
      no: "003",
      image:
        "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&q=80",
      category: "Culture",
      author: "Dr. Shweta Singh",
      year: "2018",
      title: "Understanding Diverse Voices",
    },
    {
      no: "002",
      image:
        "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800&q=80",
      category: "Research",
      author: "Dr. Shweta Singh",
      year: "2016",
      title: "Female Leadership in Academic Spaces",
    },
    {
      no: "001",
      image:
        "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=800&q=80",
      category: "Social Work",
      author: "Dr. Shweta Singh",
      year: "2014",
      title: "Academic Theory to Social Impact",
    },
  ];

  return (
    <ScrollReveal className="max-w-[clamp(320px,90vw,1280px)] w-full mx-auto px-[clamp(1rem,4vw,2rem)] py-[clamp(4rem,8vw,6rem)]">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-serif text-[clamp(1.5rem,3vw,1.875rem)] text-[#0A2463]">
          All Books
        </h2>
      </div>

      {/* Divider */}
      <div className="w-full border-t border-[#EDD2E0]/20 relative mb-[clamp(1.5rem,3vw,3rem)]">
        <div className="absolute left-0 -top-[3px] w-[5px] h-[5px] bg-[#0A2463]/30 rounded-full" />
        <div className="absolute right-0 -top-[3px] w-[5px] h-[5px] bg-[#0A2463]/30 rounded-full" />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-[clamp(1.5rem,3vw,2rem)]">
        {books.map((book) => (
          <div
            key={book.no}
            className="border border-[#EDD2E0] p-2 bg-white relative group cursor-pointer shadow-xl shadow-[#0A2463]/5 hover:shadow-2xl hover:shadow-rich-gold/20 transition-shadow duration-500 flex flex-col h-full"
          >
            <div className="border border-[#EDD2E0] p-4 flex flex-col h-full relative bg-[#ffffff]">
              {/* Top Bar */}
              <div className="flex items-center justify-between text-[10px] font-sans mb-4 border-b border-[#EDD2E0] pb-3">
                <span className="tracking-widest flex gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0A2463] block" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0A2463] block" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0A2463] block" />
                </span>
                <div className="flex-1 border-b border-dashed border-gray-400 mx-4"></div>
                <span className="text-[#111111]/70 font-bold">
                  [VOL. {book.no}]
                </span>
              </div>

              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden bg-transparent border border-[#EDD2E0] mb-4 ring-1 ring-white/50 group-hover:border-rich-gold transition-colors">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />
              </div>

              {/* Meta */}
              <div className="flex flex-wrap items-center justify-between text-xs text-[#111111]/60 font-semibold gap-2 mb-3">
                <span className="text-[#FE601C] font-bold tracking-widest uppercase">
                  {book.category}
                </span>
                <div className="flex items-center gap-2 text-[clamp(11px,1.5vw,0.75rem)]">
                  <span className="text-[#111111]/80 whitespace-nowrap">
                    by {book.author}
                  </span>
                  <span className="text-gray-300">|</span>
                  <span className="text-[#111111]/80 whitespace-nowrap">
                    {book.year}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-serif leading-[1.4] -mx-1 mt-auto">
                <span className="text-[#0A2463] bg-transparent group-hover:bg-[#FE601C] group-hover:text-white transition-colors duration-300 box-decoration-clone inline px-1">
                  {book.title}
                </span>
              </h3>
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
  );
};

export const BookPage = () => {
  return (
    <main className="flex-1 w-full bg-[#ffffff]">
      <BookHero />
      <BookGrid />
    </main>
  );
};
