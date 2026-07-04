import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { PodcastPage } from "./pages/PodcastPage";
import { BlogPage } from "./pages/BlogPage";
import { BlogDetailsPage } from "./pages/BlogDetailsPage";
import { BookPage } from "./pages/BookPage";
import { AboutPage } from "./pages/AboutPage";
import { ScrollHighlightText } from "./components/ScrollHighlightText";
import {
  Search,
  Mail,
  Camera,
  Box,
  PenTool,
  Coffee,
  Heart,
  Briefcase,
  ArrowRight,
  Menu,
  X,
  Linkedin,
  Twitter,
  Youtube,
  Instagram,
} from "lucide-react";

const ScrollReveal = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="w-full pt-8 relative">
      {/* Top Bar */}
      <div className="max-w-[clamp(320px,90vw,1280px)] w-full mx-auto px-[clamp(1rem,4vw,2rem)] flex items-center justify-between mb-[clamp(1rem,2vw,2rem)]">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 cursor-pointer">
          <img src="/S_logo.svg" alt="Logo" className="w-[clamp(2.5rem,4vw,3rem)] h-auto object-contain" />
          <span className="font-serif font-black text-2xl tracking-tighter uppercase text-[#0A2463]">
            Dr. Shweta Singh
          </span>
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 -mr-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-[#0A2463]" />
          ) : (
            <Menu className="w-6 h-6 text-[#0A2463]" />
          )}
        </button>

        {/* Desktop Links & Search */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-semibold tracking-wide text-[#0A2463]">
          <div className="flex items-center gap-[clamp(1rem,2vw,1.5rem)]">
            <Link
              to="/"
              className="min-h-[44px] min-w-[44px] inline-flex items-center flex items-center gap-2 hover:opacity-70 hover:underline decoration-rich-gold underline-offset-4 transition-colors"
            >
              <div className="w-1.5 h-1.5 bg-[#0A2463]" />
              HOME
            </Link>
            <Link
              to="/about"
              className="min-h-[44px] min-w-[44px] inline-flex items-center hover:opacity-70 hover:underline decoration-rich-gold underline-offset-4 transition-colors"
            >
              ABOUT
            </Link>
            <Link
              to="/blog"
              className="min-h-[44px] min-w-[44px] inline-flex items-center hover:opacity-70 hover:underline decoration-rich-gold underline-offset-4 transition-colors"
            >
              BLOG
            </Link>
            <Link
              to="/books"
              className="min-h-[44px] min-w-[44px] inline-flex items-center hover:opacity-70 hover:underline decoration-rich-gold underline-offset-4 transition-colors"
            >
              BOOKS
            </Link>
            <Link
              to="/podcasts"
              className="min-h-[44px] min-w-[44px] inline-flex items-center flex items-center gap-2 hover:opacity-70 hover:underline decoration-rich-gold underline-offset-4 transition-colors"
            >
              PODCAST
              <span className="bg-rich-gold text-[#0A2463] text-xs px-1.5 py-0.5 rounded-full font-bold">
                5
              </span>
            </Link>
          </div>

          <div className="relative group">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#111111]/60" />
            <input
              type="text"
              placeholder="Search all"
              className="pl-9 pr-4 py-2 bg-[#0A2463]/5 border border-transparent rounded-full text-sm outline-none focus:bg-white focus:border-[#EDD2E0] transition-all w-[clamp(12rem,15vw,16rem)] placeholder:text-[#111111]/60"
            />
          </div>

          <button className="min-h-[44px] min-w-[44px] group flex items-center gap-3 bg-[#FE601C] text-white pl-5 pr-1 py-1 rounded-full font-bold text-xs tracking-widest hover:bg-[#FE601C]/90 transition-colors shadow-sm cursor-pointer">
            <span>SUBSCRIBE</span>
            <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center shrink-0 group-hover:translate-x-0.5 transition-transform">
              <ArrowRight className="w-3.5 h-3.5 text-[#FE601C]" />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl z-50 border-t border-[#EDD2E0] p-[clamp(1rem,3vw,1.5rem)] flex flex-col gap-[clamp(1rem,2vw,1.5rem)]">
          <div className="flex flex-col gap-4 text-lg font-semibold tracking-wide text-[#0A2463]">
            <Link
              to="/"
              className="flex items-center gap-2 hover:opacity-70 hover:underline decoration-rich-gold underline-offset-4"
            >
              <div className="w-2 h-2 bg-[#0A2463]" />
              HOME
            </Link>
            <Link
              to="/about"
              className="hover:opacity-70 hover:underline decoration-rich-gold underline-offset-4"
            >
              ABOUT
            </Link>
            <Link
              to="/blog"
              className="hover:opacity-70 hover:underline decoration-rich-gold underline-offset-4"
            >
              BLOG
            </Link>
            <Link
              to="/books"
              className="hover:opacity-70 hover:underline decoration-rich-gold underline-offset-4"
            >
              BOOKS
            </Link>
            <Link
              to="/podcasts"
              className="flex items-center gap-2 hover:opacity-70 hover:underline decoration-rich-gold underline-offset-4"
            >
              PODCAST
              <span className="bg-rich-gold text-[#0A2463] text-xs px-2 py-0.5 rounded-full font-bold">
                5
              </span>
            </Link>
          </div>
          <div className="relative w-full">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#111111]/60" />
            <input
              type="text"
              placeholder="Search all"
              className="pl-9 pr-4 py-3 w-full bg-[#0A2463]/5 border border-transparent rounded-full text-sm outline-none focus:bg-white focus:border-[#EDD2E0] transition-all placeholder:text-[#111111]/60"
            />
          </div>
          <button className="min-h-[44px] w-full group flex items-center justify-between bg-[#FE601C] text-white pl-6 pr-1.5 py-1.5 rounded-full font-bold text-sm tracking-widest hover:bg-[#FE601C]/90 transition-colors shadow-sm cursor-pointer">
            <span>SUBSCRIBE</span>
            <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shrink-0">
              <ArrowRight className="w-4 h-4 text-[#FE601C]" />
            </div>
          </button>
        </div>
      )}

      {/* Divider */}
      <div className="w-full border-t border-[#EDD2E0] relative">
        <div className="absolute left-6 -top-[3px] w-[5px] h-[5px] bg-[#0A2463] rounded-full" />
        <div className="absolute right-6 -top-[3px] w-[5px] h-[5px] bg-[#0A2463] rounded-full" />
      </div>

      {/* Huge Text */}
      {isHome && (
        <div className="w-full overflow-hidden flex justify-center py-4 bg-gradient-to-b from-transparent to-black/5">
          <h1
            className="text-[10vw] leading-none font-serif font-black tracking-tighter text-[#0A2463] shadow-halftone whitespace-nowrap uppercase cursor-default select-none"
            data-text="DR. SHWETA SINGH"
          >
            DR. SHWETA SINGH
          </h1>
        </div>
      )}
    </div>
  );
};

export const Hero = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,450px),1fr))] gap-[clamp(2rem,6vw,6rem)] items-center">
      {/* Left Column (Featured Article) */}
      <ScrollReveal>
        <div className="border border-[#EDD2E0] p-2 bg-white relative group cursor-pointer shadow-xl shadow-[#0A2463]/5 hover:shadow-2xl hover:shadow-rich-gold/20 transition-shadow duration-500 order-first">
          <div className="border border-[#EDD2E0] p-5 space-y-5 relative bg-[#ffffff]">
            {/* Top border decor */}
            <div className="flex items-center justify-between text-[10px] font-sans uppercase tracking-widest border-b border-[#EDD2E0] pb-3">
              <span className="flex gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0A2463] block" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#0A2463] block" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#0A2463] block" />
              </span>
              <span className="flex-1 border-b border-dashed border-gray-400 mx-4" />
              <span className="font-bold text-[#111111]">FEATURED</span>
              <span className="flex-1 border-b border-dashed border-gray-400 mx-4" />
              <span className="text-[#111111]/70">[NO. 019]</span>
            </div>

            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden bg-transparent border border-[#EDD2E0] mb-2 ring-1 ring-white/50 group-hover:border-rich-gold transition-colors">
              <img
                src="https://images.unsplash.com/photo-1542206395-9feb3edaa68d?auto=format&fit=crop&q=80"
                alt="Featured article showcasing an elegant setup"
                className="object-cover w-full h-full transition-all duration-700"
              />
              {/* Indian pattern overlay just slightly visible over image */}
              <div className="absolute inset-0 bg-indian-pattern opacity-10 mix-blend-overlay pointer-events-none" />
            </div>

            <div className="flex flex-wrap items-center justify-between text-xs text-[#111111]/60 font-semibold gap-2">
              <span className="text-[#FE601C] font-bold tracking-widest uppercase">
                Academic Research
              </span>
              <div className="flex items-center gap-2">
                <span className="text-[#111111]/80">by Dr. Shweta Singh</span>
                <span className="text-gray-300">|</span>
                <span className="text-[#111111]/80">12 min read</span>
              </div>
            </div>

            <h3 className="font-serif text-[clamp(1.875rem,4vw,2.25rem)] leading-[1.4] -mx-1">
              <span className="text-[#0A2463] bg-transparent group-hover:bg-[#FE601C] group-hover:text-white transition-colors duration-300 box-decoration-clone inline px-1">
                Navigating identity and society in a globalized world
              </span>
            </h3>
          </div>
        </div>
      </ScrollReveal>

      {/* Right Column (Text & Newsletter) */}
      <ScrollReveal delay={0.2} className="space-y-12 pl-[clamp(0rem,2vw,2rem)]">
        <div className="space-y-[clamp(1rem,3vw,1.5rem)]">
          <h2 className="font-serif text-[clamp(3rem,6vw,4.5rem)] leading-[1.1] text-[#0A2463]">
            Insights on <br className="hidden sm:block" /> culture, society &
            identity
          </h2>
          <p className="text-lg text-[#111111]/80 max-w-md leading-relaxed font-medium">
            Dive into well-crafted research, interviews, and academic
            perspectives designed to inform, inspire, and elevate our
            understanding of the modern world.
          </p>
        </div>

        {/* Subscribe Box */}
        <div
          className="relative p-2"
          style={{
            background:
              "repeating-linear-gradient(-45deg, #EDD2E0, #EDD2E0 8px, transparent 8px, transparent 16px)",
          }}
        >
          <div className="relative z-10 border-2 border-[#EDD2E0] overflow-hidden bg-[#ffffff]">
            <div
              className="absolute inset-0 opacity-20 mix-blend-multiply pointer-events-none"
              style={{
                backgroundImage: "url(/bg_design.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
            <div className="p-8 space-y-[clamp(1rem,3vw,1.5rem)] relative z-10 bg-white">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#0A2463] mb-2">
                    Don't miss a thing
                  </h3>
                  <p className="text-[#111111]/80 text-sm font-medium">
                    Subscribe to get updates straight to your inbox.
                  </p>
                </div>

                {/* Stamp visual */}
                <div className="w-16 h-16 shrink-0 rounded-full border border-gray-400 flex items-center justify-center rotate-12 opacity-50 relative">
                  <div className="absolute inset-2 border border-gray-400 rounded-full" />
                  <div className="text-[7px] font-sans text-center leading-[1.2] uppercase">
                    Chicago
                    <br />
                    <span className="font-bold">USA</span>
                    <br />
                    Loyola Univ
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:border-[#EDD2E0] outline-none bg-white transition-colors text-sm font-medium placeholder:text-[#111111]/50"
                />
                <button className="min-h-[44px] min-w-[44px] group flex items-center justify-between gap-4 bg-[#FE601C] text-white pl-6 pr-1.5 py-1.5 rounded-full font-bold text-sm tracking-widest hover:bg-[#FE601C]/90 transition-colors cursor-pointer shrink-0">
                  <span>SUBSCRIBE</span>
                  <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shrink-0 group-hover:translate-x-0.5 transition-transform">
                    <ArrowRight className="w-4 h-4 text-[#FE601C]" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
};

const About = () => {
  return (
    <div className="mt-32 relative py-20 w-full overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "url('https://img.magnific.com/free-vector/watercolor-background-with-decorative-hand-drawn-flowers_23-2147562946.jpg?t=st=1782753837~exp=1782757437~hmac=0289156234ccb0cb733d6f9ed74823fb144f0f5bea7ed90fd0617b1d23de05ea&w=2000')",
          backgroundRepeat: "repeat",
          backgroundSize: "400px",
        }}
      />

      <ScrollReveal className="relative z-10 max-w-[clamp(320px,90vw,1280px)] w-full mx-auto px-[clamp(1rem,4vw,2rem)]">
        {/* Top Header line */}
        <div className="flex items-center justify-between text-xs font-sans uppercase tracking-widest text-[#111111]/60 mb-[clamp(1.5rem,3vw,3rem)]">
          <div className="flex items-center gap-2">
            <div className="w-[1px] h-3 bg-[#0A2463]"></div>
            <span className="font-bold text-[#111111]">WHO WE ARE</span>
          </div>
          <div className="flex-1 border-b border-dashed border-gray-300 mx-6"></div>
          <span>®2026</span>
        </div>

        {/* Main Text */}
        <ScrollHighlightText
          className="font-serif text-[clamp(1.875rem,5vw,3rem)] leading-[1.2] text-[#0A2463] text-center max-w-5xl mx-auto mb-[clamp(2.5rem,5vw,5rem)]"
          text="Dr. Shweta Singh is a researcher, author, and educator at Loyola University Chicago. She explores the intersections of society, culture, and individual identity through thoughtful stories, academic research, and collaborative discourse."
        />

        {/* Three Column Layout */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-[clamp(2rem,4vw,4rem)] items-start relative">
          {/* Decorative plusses */}
          <div className="hidden md:block absolute top-[-40px] left-0 text-[#111111]/50 text-lg font-sans">
            +
          </div>
          <div className="hidden md:block absolute top-[-40px] left-[50%] -translate-x-[50%] text-[#111111]/50 text-lg font-sans">
            +
          </div>
          <div className="hidden md:block absolute top-[-40px] right-0 text-[#111111]/50 text-lg font-sans">
            +
          </div>

          {/* Left Col */}
          <div className="space-y-12">
            <div>
              <h3 className="font-sans text-5xl font-bold text-[#FE601C] mb-2 tracking-tight">
                8+
              </h3>
              <p className="text-[#111111]/70 font-medium text-sm">
                Years Experience
              </p>
            </div>
            <div>
              <h3 className="font-sans text-5xl font-bold text-[#FE601C] mb-2 tracking-tight">
                230+
              </h3>
              <p className="text-[#111111]/70 font-medium text-sm">
                Happy Clients
              </p>
            </div>

            <Link
              to="/about"
              className="min-h-[44px] min-w-[44px] group flex items-center justify-between gap-3 bg-[#FE601C] text-white pl-6 pr-1.5 py-1.5 rounded-full font-bold text-xs tracking-widest hover:bg-[#FE601C]/90 transition-colors shadow-sm cursor-pointer mt-[clamp(2rem,4vw,3rem)] w-fit"
            >
              <span>MORE ABOUT US</span>
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 group-hover:translate-x-0.5 transition-transform">
                <ArrowRight className="w-4 h-4 text-[#FE601C]" />
              </div>
            </Link>
          </div>

          {/* Center Col - Image */}
          <div className="aspect-[4/5] overflow-hidden rounded-xl relative shadow-xl shadow-[#0A2463]/10">
            <div className="absolute top-4 left-4 text-white/70 text-lg font-sans z-10">
              +
            </div>
            <div className="absolute bottom-4 right-4 text-white/70 text-lg font-sans z-10">
              +
            </div>
            <img
              src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&q=80"
              alt="Think Women Platform"
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

            <div className="flex flex-wrap gap-[clamp(1rem,3vw,2rem)] items-start">
              <h4 className="font-bold text-[#0A2463] text-sm whitespace-nowrap">
                ( Academic Focus )
              </h4>
              <p className="flex-1 min-w-[200px] text-[#111111]/80 font-medium text-sm leading-relaxed">
                Serving as a faculty member at Loyola University Chicago's SCPS,
                focusing on empowering students and advancing research that
                bridges theory with meaningful social impact.
              </p>
            </div>
            <div className="w-full border-b border-dashed border-gray-300"></div>

            <div className="pt-2">
              <div className="flex items-center gap-4 text-sm text-[#111111]/60 font-medium mb-4">
                <span className="text-[#0A2463]">Academic</span>
                <div className="flex-1 h-[1px] bg-gray-300"></div>
                <span className="text-[#111111]/80">
                  Loyola University Chicago
                </span>
              </div>
              <div className="text-right text-sm text-[#111111]/80 font-medium">
                Publications & Books — 20+
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
};

const EditorsChoice = () => {
  return (
    <div className="bg-[#0A2463] w-full py-20 px-6 border-t border-white/20 relative overflow-hidden">
      {/* Background decoration */}
      <img
        src="/bg.png"
        alt=""
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl object-contain opacity-20 pointer-events-none"
      />
      <ScrollReveal className="max-w-[clamp(320px,90vw,1280px)] mx-auto w-full px-[clamp(1rem,4vw,2rem)] relative z-10">
        <h2 className="font-serif text-[clamp(1.5rem,3vw,1.875rem)] text-white mb-6">
          Editor's choice
        </h2>

        {/* Divider */}
        <div className="w-full border-t border-white/20 relative mb-[clamp(1rem,2vw,2rem)]">
          <div className="absolute left-0 -top-[3px] w-[5px] h-[5px] bg-white rounded-full" />
          <div className="absolute right-0 -top-[3px] w-[5px] h-[5px] bg-white rounded-full" />
        </div>

        <div className="border border-white/20 relative group cursor-pointer transition-shadow duration-500 hover:shadow-xl hover:shadow-[#0A2463]/20">
          {/* Top border decor */}
          <div className="flex items-center justify-between text-[10px] font-sans uppercase tracking-widest border-b border-white/20 px-4 py-3 text-white/60">
            <span className="flex gap-1">
              <span className="w-2 h-2 rounded-full border border-white/40 block bg-transparent" />
              <span className="w-2 h-2 rounded-full border border-white/40 block bg-transparent" />
              <span className="w-2 h-2 rounded-full border border-white/40 block bg-transparent" />
            </span>
            <span className="flex-1 border-b border-dashed border-white/20 mx-4" />
            <span className="text-white/60">[NO. 018]</span>
          </div>

          {/* Image */}
          <div className="relative aspect-[4/3] md:aspect-[21/9] overflow-hidden bg-transparent">
            <img
              src="https://images.pexels.com/photos/10493214/pexels-photo-10493214.jpeg?auto=compress&w=1260&h=750&dpr=2"
              alt="Editor's Choice"
              className="absolute inset-0 object-cover w-full h-full transition-all duration-700"
            />
            {/* Content overlaid on image */}
            <div className="absolute inset-0 bg-[#0A2463]/10 mix-blend-overlay pointer-events-none" />
            <div className="absolute inset-0 p-[clamp(2rem,5vw,4rem)] flex flex-col justify-start items-start z-10">
              <span className="text-[#0A2463] bg-[#EDD2E0] px-2 py-1 rounded text-sm font-medium mb-4 shadow-sm">
                Lifestyle
              </span>
              <h3 className="font-serif text-[64px] leading-[1.1] text-[#FE601C] mb-6 max-w-4xl flex flex-col items-start gap-1">
                <span className="bg-white px-2">Social work and</span>
                <span className="bg-white px-2">
                  the future of our communities
                </span>
              </h3>
              <div className="flex items-center gap-2 text-sm font-medium text-white/90 mt-2">
                <span>by Dr. Shweta Singh</span>
                <span className="text-white/60">|</span>
                <span>10 min read</span>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
};

const RecentPosts = () => {
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
  ];

  return (
    <ScrollReveal className="max-w-[clamp(320px,90vw,1280px)] mx-auto px-[clamp(1rem,4vw,2rem)] py-[clamp(4rem,8vw,6rem)] w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-serif text-[clamp(1.5rem,3vw,1.875rem)] text-[#0A2463]">
          Recent posts
        </h2>
        <button className="min-h-[44px] min-w-[44px] group flex items-center justify-between gap-4 bg-[#FE601C] text-white pl-6 pr-1.5 py-1.5 rounded-full font-bold text-sm tracking-widest hover:bg-[#FE601C]/90 transition-colors cursor-pointer shrink-0">
          <span className="uppercase">View all posts</span>
          <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shrink-0 group-hover:translate-x-0.5 transition-transform">
            <ArrowRight className="w-4 h-4 text-[#FE601C]" />
          </div>
        </button>
      </div>

      {/* Divider */}
      <div className="w-full border-t border-[#EDD2E0]/20 relative mb-[clamp(1.5rem,3vw,3rem)]">
        <div className="absolute left-0 -top-[3px] w-[5px] h-[5px] bg-[#0A2463]/20 rounded-full" />
        <div className="absolute right-0 -top-[3px] w-[5px] h-[5px] bg-[#0A2463]/20 rounded-full" />
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
                  className="w-full h-full object-cover transition-all duration-700"
                />
              </div>

              {/* Meta */}
              <div className="flex items-center justify-between text-xs text-[#111111]/60 font-semibold gap-2 mb-3">
                <span className="text-[#FE601C] font-bold tracking-widest uppercase">
                  {post.category}
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-[#111111]/80">by {post.author}</span>
                  <span className="text-gray-300">|</span>
                  <span className="text-[#111111]/80">{post.readTime}</span>
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
    </ScrollReveal>
  );
};

const BookSeries = () => {
  const books = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800&q=80",
      quote:
        "This platform was started with a simple idea: to share stories that spark curiosity and inspire conversations.",
      author: "Frances Guerrero",
      role: "Founder & Editor",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&q=80",
      quote:
        "Our mission is to empower individuals through knowledge and inspiration. We believe that every story has the power to change a life.",
      author: "Dr. Shweta Singh",
      role: "Visionary & Creator",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=800&q=80",
      quote:
        "Reading is essential for those who seek to rise above the ordinary. We provide a space for extraordinary voices.",
      author: "Marcus Aurelius",
      role: "Guest Author",
    },
  ];

  return (
    <div className="relative w-full overflow-hidden py-16 lg:py-24">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "url('https://img.magnific.com/free-vector/watercolor-background-with-decorative-hand-drawn-flowers_23-2147562946.jpg?t=st=1782753837~exp=1782757437~hmac=0289156234ccb0cb733d6f9ed74823fb144f0f5bea7ed90fd0617b1d23de05ea&w=2000')",
          backgroundRepeat: "repeat",
          backgroundSize: "400px",
        }}
      />

      <ScrollReveal className="relative z-10 max-w-[clamp(320px,90vw,1280px)] w-full mx-auto px-[clamp(1rem,4vw,2rem)]">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 text-left">
          <h2 className="font-serif text-[clamp(1.5rem,3vw,1.875rem)] text-[#0A2463]">
            Book series
          </h2>
          <button className="min-h-[44px] min-w-[44px] group flex items-center justify-between gap-4 bg-[#FE601C] text-white pl-6 pr-1.5 py-1.5 rounded-full font-bold text-sm tracking-widest hover:bg-[#FE601C]/90 transition-colors cursor-pointer shrink-0">
            <span className="uppercase">View all</span>
            <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shrink-0 group-hover:translate-x-0.5 transition-transform">
              <ArrowRight className="w-4 h-4 text-[#FE601C]" />
            </div>
          </button>
        </div>

        {/* Divider */}
        <div className="w-full border-t border-[#EDD2E0]/20 relative mb-[clamp(1.5rem,3vw,3rem)]">
          <div className="absolute left-0 -top-[3px] w-[5px] h-[5px] bg-[#0A2463]/20 rounded-full" />
          <div className="absolute right-0 -top-[3px] w-[5px] h-[5px] bg-[#0A2463]/20 rounded-full" />
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-[clamp(1.5rem,3vw,2rem)]">
          {books.map((book) => (
            <div
              className="flex flex-col items-center text-center group cursor-pointer"
              key={book.id}
            >
              {/* Image Container */}
              <div className="border border-[#EDD2E0] p-2 bg-[#ffffff] w-full mb-[clamp(1rem,2vw,2rem)] shadow-xl shadow-[#0A2463]/5 group-hover:shadow-2xl transition-shadow duration-500">
                <div className="border border-[#EDD2E0] p-3 relative bg-[#ffffff]">
                  {/* Top border decor */}
                  <div className="flex items-center justify-center text-[10px] font-sans mb-3 text-[#0A2463]">
                    <div className="flex-1 border-b border-dashed border-[#EDD2E0]/40"></div>
                    <span className="px-4 flex gap-1">
                      <span className="w-[4px] h-[4px] rounded-full border border-[#EDD2E0] block bg-transparent" />
                      <span className="w-[4px] h-[4px] rounded-full border border-[#EDD2E0] block bg-transparent" />
                      <span className="w-[4px] h-[4px] rounded-full border border-[#EDD2E0] block bg-transparent" />
                    </span>
                    <div className="flex-1 border-b border-dashed border-[#EDD2E0]/40"></div>
                  </div>

                  <div className="aspect-square w-full relative border border-[#EDD2E0] overflow-hidden bg-transparent">
                    <img
                      src={book.image}
                      alt={book.author}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>

              {/* Quote text */}
              <p className="font-serif text-[clamp(0.875rem,2vw,1rem)] text-[#111111] leading-relaxed mb-6 px-4">
                {book.quote}
              </p>

              {/* Bottom border decor */}
              <div className="flex items-center justify-center text-[10px] font-sans w-full max-w-[200px] mx-auto mb-5 text-[#0A2463] mt-auto">
                <div className="flex-1 border-b border-dashed border-[#EDD2E0]/40"></div>
                <span className="px-4 flex gap-1">
                  <span className="w-[4px] h-[4px] rounded-full border border-[#EDD2E0] block bg-transparent" />
                  <span className="w-[4px] h-[4px] rounded-full border border-[#EDD2E0] block bg-transparent" />
                  <span className="w-[4px] h-[4px] rounded-full border border-[#EDD2E0] block bg-transparent" />
                </span>
                <div className="flex-1 border-b border-dashed border-[#EDD2E0]/40"></div>
              </div>

              {/* Author */}
              <div>
                <h4 className="font-serif text-base text-[#0A2463] font-semibold">
                  {book.author}
                </h4>
                <p className="font-sans text-[10px] text-[#111111]/60 tracking-widest mt-1 uppercase">
                  {book.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </div>
  );
};

export const Podcasts = () => {
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
  ];

  return (
    <div className="w-full bg-[#EDD2E0]">
      <ScrollReveal className="max-w-[clamp(320px,90vw,1280px)] w-full mx-auto px-[clamp(1rem,4vw,2rem)] py-[clamp(4rem,8vw,6rem)]">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-serif text-[clamp(1.5rem,3vw,1.875rem)] text-[#0A2463]">
            Podcasts
          </h2>
          <Link
            to="/podcasts"
            className="min-h-[44px] min-w-[44px] group flex items-center justify-between gap-4 bg-[#FE601C] text-white pl-6 pr-1.5 py-1.5 rounded-full font-bold text-sm tracking-widest hover:bg-[#FE601C]/90 transition-colors cursor-pointer shrink-0"
          >
            <span className="uppercase">Listen all</span>
            <div className="w-9 h-9 rounded-full bg-[#EDD2E0] flex items-center justify-center shrink-0 group-hover:translate-x-0.5 transition-transform">
              <ArrowRight className="w-4 h-4 text-[#0A2463]" />
            </div>
          </Link>
        </div>

        {/* Divider */}
        <div className="w-full border-t border-white relative mb-[clamp(1.5rem,3vw,3rem)]">
          <div className="absolute left-0 -top-[3px] w-[5px] h-[5px] bg-[#0A2463]/20 rounded-full" />
          <div className="absolute right-0 -top-[3px] w-[5px] h-[5px] bg-[#0A2463]/20 rounded-full" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,400px),1fr))] gap-[clamp(1.5rem,3vw,2rem)]">
          {podcasts.map((podcast) => (
            <div
              key={podcast.ep}
              className="border border-white p-2 bg-transparent relative group cursor-pointer shadow-xl shadow-[#0A2463]/5 hover:shadow-2xl transition-shadow duration-500"
            >
              <div className="border border-white/40 p-4 flex flex-col relative bg-[#EDD2E0] h-full">
                {/* Top Bar */}
                <div className="flex items-center justify-between text-[10px] font-sans mb-4 border-b border-[#EDD2E0]/20 pb-3">
                  <span className="tracking-widest flex gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0A2463]/60 block" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0A2463]/60 block" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0A2463]/60 block" />
                  </span>
                  <div className="flex-1 border-b border-dashed border-[#EDD2E0]/20 mx-4"></div>
                  <span className="text-[#111111]/60 font-bold">
                    [EP. {podcast.ep}]
                  </span>
                </div>

                {/* Content Split */}
                <div className="flex flex-wrap gap-[clamp(1rem,2vw,1.5rem)] h-full">
                  {/* Image */}
                  <div className="flex-1 min-w-[min(100%,200px)] aspect-square border border-[#EDD2E0]/20 overflow-hidden relative ring-1 ring-[#EDD2E0]/10 group-hover:border-[#EDD2E0]/40 transition-colors shrink-0 bg-transparent">
                    <img
                      src={podcast.image}
                      alt={podcast.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
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

                    <button className="min-h-[44px] min-w-[44px] bg-[#FE601C] text-white text-[10px] font-bold tracking-widest px-4 py-2 rounded-md w-fit hover:bg-[#FE601C]/90 transition-colors uppercase">
                      Play Episode
                    </button>

                    <div className="mt-auto pt-6 flex items-center gap-3">
                      <span className="text-xs text-[#111111]/50 font-medium">
                        Listen on:
                      </span>
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-[#0A2463]/10 flex items-center justify-center">
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
                        <div className="w-5 h-5 rounded-full bg-[#0A2463]/10 flex items-center justify-center">
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
                        <div className="w-5 h-5 rounded-full bg-[#0A2463]/10 flex items-center justify-center">
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
                        <div className="w-5 h-5 rounded-full bg-[#0A2463]/10 flex items-center justify-center">
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
      </ScrollReveal>
    </div>
  );
};

export const Footer = () => {
  return (
    <footer className="w-full bg-[#0A2463] text-white relative pt-24 lg:pt-32 pb-48 lg:pb-[300px] min-h-[1000px] flex flex-col overflow-hidden">
      {/* Background Pattern on edge */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          backgroundImage: "url('/bg_design.png')",
          backgroundPosition: "bottom center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "max(100%, 1200px) auto",
        }}
      />

      {/* Top Gradient to ensure smooth transition to teal */}
      <div className="absolute inset-0 w-full h-1/2 bg-gradient-to-b from-[#0A2463] via-[#0A2463]/80 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-[clamp(320px,90vw,1280px)] mx-auto px-[clamp(1rem,4vw,2rem)] w-full flex-1 flex flex-col">
        <div className="flex flex-wrap gap-[clamp(2rem,4vw,3rem)] mb-[clamp(2rem,4vw,4rem)]">
          {/* Left Column (Newsletter) */}
          <div className="flex-1 min-w-[min(100%,320px)] max-w-[600px] space-y-[clamp(1rem,3vw,1.5rem)]">
            <h2 className="font-serif text-3xl font-bold tracking-tight">
              Dr. Shweta Singh
            </h2>
            <p className="font-serif text-xl text-white/90">
              Never miss an update
            </p>
            <div className="flex bg-[#0A2463]/20 rounded-full p-1 border border-white/10 w-full max-w-md focus-within:border-white/30 transition-colors">
              <input
                type="email"
                placeholder="Subscribe with your email"
                className="bg-transparent border-none outline-none px-4 py-2 text-sm w-full placeholder:text-white/50 text-white"
              />
              <button className="min-h-[44px] min-w-[44px] group flex items-center justify-between gap-4 bg-[#FE601C] text-white pl-6 pr-1.5 py-1.5 rounded-full font-bold text-xs tracking-widest hover:bg-[#FE601C]/90 transition-colors cursor-pointer shrink-0">
                <span className="uppercase">Subscribe</span>
                <div className="bg-white rounded-full p-2 group-hover:scale-110 transition-transform">
                  <ArrowRight className="w-3.5 h-3.5 text-[#FE601C]" />
                </div>
              </button>
            </div>
            <p className="text-xs text-white/70">
              By subscribing, you agree to our{" "}
              <a
                href="#"
                className="min-h-[44px] min-w-[44px] inline-flex items-center text-white font-semibold hover:underline"
              >
                Privacy Policy
              </a>
              .
            </p>
            <div className="flex items-center gap-4 pt-4">
              <a href="#" className="min-w-[44px] min-h-[44px] w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FE601C] transition-colors text-white">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="min-w-[44px] min-h-[44px] w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FE601C] transition-colors text-white">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="min-w-[44px] min-h-[44px] w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FE601C] transition-colors text-white">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="min-w-[44px] min-h-[44px] w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FE601C] transition-colors text-white">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Columns (Links) */}
          <div className="flex-[1.5] min-w-[min(100%,320px)] grid grid-cols-[repeat(auto-fit,minmax(min(100%,200px),1fr))] gap-[clamp(1.5rem,3vw,2rem)]">
            {/* Pages */}
            <div className="space-y-[clamp(1rem,3vw,1.5rem)] relative">
              {/* Vertical Divider (Desktop) */}
              <div className="hidden md:block absolute -left-8 top-0 bottom-0 w-px bg-white/20" />
              <div className="hidden md:block absolute -left-[33px] top-0 w-[5px] h-[5px] bg-white/20 rounded-full" />
              <div className="hidden md:block absolute -left-[33px] bottom-0 w-[5px] h-[5px] bg-white/20 rounded-full" />
              <h3 className="font-serif text-xl">Pages</h3>
              <ul className="space-y-[clamp(0.75rem,2vw,1rem)] text-xs font-semibold tracking-widest uppercase text-white/70">
                <li>
                  <Link
                    to="/"
                    className="min-h-[44px] min-w-[44px] inline-flex items-center hover:text-white transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="min-h-[44px] min-w-[44px] inline-flex items-center hover:text-white transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className="min-h-[44px] min-w-[44px] inline-flex items-center hover:text-white transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/books"
                    className="min-h-[44px] min-w-[44px] inline-flex items-center hover:text-white transition-colors"
                  >
                    Books
                  </Link>
                </li>
                <li>
                  <Link
                    to="/podcasts"
                    className="min-h-[44px] min-w-[44px] inline-flex items-center hover:text-white transition-colors"
                  >
                    Podcast
                  </Link>
                </li>
              </ul>
            </div>

            {/* Categories */}
            <div className="space-y-[clamp(1rem,3vw,1.5rem)] relative">
              {/* Vertical Divider (Desktop) */}
              <div className="hidden md:block absolute -left-8 top-0 bottom-0 w-px bg-white/20" />
              <div className="hidden md:block absolute -left-[33px] top-0 w-[5px] h-[5px] bg-white/20 rounded-full" />
              <div className="hidden md:block absolute -left-[33px] bottom-0 w-[5px] h-[5px] bg-white/20 rounded-full" />
              <h3 className="font-serif text-xl">Categories</h3>
              <ul className="space-y-[clamp(0.75rem,2vw,1rem)] text-xs font-semibold tracking-widest uppercase text-white/70">
                <li>
                  <a
                    href="#"
                    className="min-h-[44px] min-w-[44px] inline-flex items-center hover:text-white transition-colors"
                  >
                    Academia
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="min-h-[44px] min-w-[44px] inline-flex items-center hover:text-white transition-colors"
                  >
                    Society
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="min-h-[44px] min-w-[44px] inline-flex items-center hover:text-white transition-colors"
                  >
                    Culture
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="min-h-[44px] min-w-[44px] inline-flex items-center hover:text-white transition-colors"
                  >
                    Identity
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Spacer to push bottom bar down */}
        <div className="flex-1" />

        {/* Bottom Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-white/70 font-medium">
          <p>
            Designed by{" "}
            <a
              href="https://www.linkedin.com/in/zalak-zecco-patel-3a618890/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors underline underline-offset-2"
            >
              Zecco
            </a>
          </p>
          <p>© 2026 Dr. Shweta Singh. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export const Home = () => {
  return (
    <main className="flex-1 w-full">
      <div className="max-w-[clamp(320px,90vw,1280px)] w-full mx-auto px-[clamp(1rem,4vw,2rem)] py-[clamp(4rem,8vw,6rem)] pb-0">
        <Hero />
      </div>
      <About />
      <EditorsChoice />
      <RecentPosts />
      <Podcasts />
      <BookSeries />
    </main>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#ffffff] flex flex-col font-sans selection:bg-rich-gold/40">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/podcasts" element={<PodcastPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogDetailsPage />} />
        <Route path="/books" element={<BookPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
