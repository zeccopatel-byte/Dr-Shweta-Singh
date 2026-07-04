import React from "react";
import { Link } from "react-router-dom";
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

const BlogHero = () => {
  const categories = [
    { name: "ALL", icon: null, active: true },
    { name: "RESEARCH", icon: BookOpen, active: false },
    { name: "SOCIETY", icon: Users, active: false },
    { name: "ACADEMIA", icon: GraduationCap, active: false },
    { name: "CULTURE", icon: Globe, active: false },
    { name: "SOCIAL WORK", icon: HeartHandshake, active: false },
  ];

  return (
    <div className="w-full bg-[#ffffff]">
      <div className="max-w-[clamp(320px,90vw,1280px)] w-full mx-auto px-[clamp(1rem,4vw,2rem)] py-[clamp(4rem,8vw,6rem)] pb-0">
        <ScrollReveal className="flex flex-col items-center text-center space-y-[clamp(1rem,3vw,1.5rem)] mb-[clamp(2rem,4vw,3rem)]">
          <h1 className="font-serif text-[clamp(3.75rem,8vw,6.25rem)] leading-[1.1] text-[#0A2463]">
            Blog
          </h1>
          <p className="text-lg text-[#111111]/80 max-w-2xl mx-auto leading-relaxed font-medium">
            Dive into well-crafted research, interviews, and academic
            perspectives designed to inform, inspire, and elevate our
            understanding of the modern world.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="flex flex-col items-center">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat.name}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-[clamp(10px,1.5vw,0.75rem)] tracking-widest uppercase transition-colors ${
                  cat.active
                    ? "bg-[#FE601C] text-white shadow-md"
                    : "bg-[#0A2463]/5 text-[#0A2463] hover:bg-[#0A2463] hover:text-white"
                }`}
              >
                {cat.icon && <cat.icon className="w-3.5 h-3.5" />}
                {cat.name}
              </button>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

const BlogGrid = () => {
  const posts = [
    {
      no: "022",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
      category: "Research",
      author: "Dr. Shweta Singh",
      readTime: "7 min read",
      title: "Exploring the intersections of migration and global identity",
    },
    {
      no: "021",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
      category: "Society",
      author: "Dr. Shweta Singh",
      readTime: "6 min read",
      title: "Building resilient communities through social work education",
    },
    {
      no: "020",
      image:
        "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&q=80",
      category: "Academia",
      author: "Dr. Shweta Singh",
      readTime: "5 min read",
      title:
        "The role of continuing and professional studies in the modern era",
    },
    {
      no: "017",
      image:
        "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80",
      category: "Culture",
      author: "Dr. Shweta Singh",
      readTime: "6 min read",
      title: "Narratives of culture: Understanding diverse voices",
    },
    {
      no: "014",
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80",
      category: "Research",
      author: "Dr. Shweta Singh",
      readTime: "6 min read",
      title: "Empowering female leadership in academic spaces",
    },
    {
      no: "013",
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
      category: "Social Work",
      author: "Dr. Shweta Singh",
      readTime: "5 min read",
      title: "Translating academic theory into meaningful social impact",
    },
    {
      no: "012",
      image:
        "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=800&q=80",
      category: "Society",
      author: "Dr. Shweta Singh",
      readTime: "8 min read",
      title: "The shifting paradigms of modern urban living",
    },
    {
      no: "011",
      image:
        "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=800&q=80",
      category: "Culture",
      author: "Dr. Shweta Singh",
      readTime: "4 min read",
      title: "Revisiting classic literature in the digital age",
    },
    {
      no: "010",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
      category: "Academia",
      author: "Dr. Shweta Singh",
      readTime: "6 min read",
      title: "Fostering inclusive learning environments",
    },
  ];

  return (
    <ScrollReveal className="max-w-[clamp(320px,90vw,1280px)] w-full mx-auto px-[clamp(1rem,4vw,2rem)] py-[clamp(4rem,8vw,6rem)]">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-serif text-[clamp(1.5rem,3vw,1.875rem)] text-[#0A2463]">
          All Posts
        </h2>
      </div>

      {/* Divider */}
      <div className="w-full border-t border-[#EDD2E0]/20 relative mb-[clamp(1.5rem,3vw,3rem)]">
        <div className="absolute left-0 -top-[3px] w-[5px] h-[5px] bg-[#0A2463]/30 rounded-full" />
        <div className="absolute right-0 -top-[3px] w-[5px] h-[5px] bg-[#0A2463]/30 rounded-full" />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-[clamp(1.5rem,3vw,2rem)]">
        {posts.map((post) => (
          <Link
            to={`/blog/${post.no}`}
            key={post.no}
            className="border border-[#EDD2E0] p-2 bg-white relative group cursor-pointer shadow-xl shadow-[#0A2463]/5 hover:shadow-2xl hover:shadow-rich-gold/20 transition-shadow duration-500 flex flex-col h-full block"
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
                  [NO. {post.no}]
                </span>
              </div>

              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-transparent border border-[#EDD2E0] mb-4 ring-1 ring-white/50 group-hover:border-rich-gold transition-colors">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />
              </div>

              {/* Meta */}
              <div className="flex flex-wrap items-center justify-between text-xs text-[#111111]/60 font-semibold gap-2 mb-3">
                <span className="text-[#FE601C] font-bold tracking-widest uppercase">
                  {post.category}
                </span>
                <div className="flex items-center gap-2 text-[clamp(11px,1.5vw,0.75rem)]">
                  <span className="text-[#111111]/80 whitespace-nowrap">
                    by {post.author}
                  </span>
                  <span className="text-gray-300">|</span>
                  <span className="text-[#111111]/80 whitespace-nowrap">
                    {post.readTime}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-serif leading-[1.4] -mx-1 mt-auto">
                <span className="text-[#0A2463] bg-transparent group-hover:bg-[#FE601C] group-hover:text-white transition-colors duration-300 box-decoration-clone inline px-1">
                  {post.title}
                </span>
              </h3>
            </div>
          </Link>
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

export const BlogPage = () => {
  return (
    <main className="flex-1 w-full bg-[#ffffff]">
      <BlogHero />
      <BlogGrid />
    </main>
  );
};
