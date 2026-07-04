import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, Link as LinkIcon, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

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

export const BlogDetailsPage = () => {
  return (
    <main className="flex-1 w-full bg-[#ffffff] pt-[clamp(4rem,8vw,6rem)] pb-20">
      <div className="max-w-[clamp(320px,90vw,1280px)] w-full mx-auto px-[clamp(1rem,4vw,2rem)]">
        {/* Breadcrumbs */}
        <div className="flex justify-center items-center text-xs font-semibold tracking-widest uppercase text-[#111111]/60 mb-8 gap-2">
          <Link to="/" className="hover:text-[#FE601C] transition-colors">Home</Link>
          <span className="text-[#111111]/30">|</span>
          <Link to="/blog" className="hover:text-[#FE601C] transition-colors">All Blogs</Link>
        </div>

        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-[clamp(2rem,4vw,3rem)]">
          <h1 className="font-serif text-[clamp(2.25rem,6vw,3.75rem)] leading-[1.1] text-[#0A2463] mb-6">
            Best productivity hacks for creative freelancers today
          </h1>
          <p className="text-lg text-[#111111]/80 mb-6 font-medium">
            Smart tools and routines to let freelancers stay organized, inspired, and productive.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-[#111111]/60 font-semibold">
            <span>by Michael Smith</span>
            <span className="text-gray-300">|</span>
            <span>5 min read</span>
          </div>
        </div>

        {/* Cover Image */}
        <div className="w-full relative aspect-[21/9] border border-[#EDD2E0] overflow-hidden mb-[clamp(2.5rem,5vw,4rem)] shadow-xl shadow-[#0A2463]/5">
          <img
            src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=1600&q=80"
            alt="Productivity"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Two Column Layout */}
        <div className="flex flex-wrap gap-[clamp(3rem,6vw,6rem)]">
          {/* Main Content */}
          <article className="flex-[1_1_min(100%,600px)] space-y-[clamp(2rem,4vw,3rem)]">
            <section>
              <h2 className="font-serif text-3xl text-[#0A2463] mb-4">Introduction</h2>
              <p className="text-[#111111]/80 leading-relaxed mb-4">
                Creative freelancers face constant pressure to deliver high-quality work while managing deadlines, communication, and personal time. Productivity plays a major role in staying consistent and competitive in this growing industry.
              </p>
              <p className="text-[#111111]/80 leading-relaxed mb-4">
                The ability to focus, organize projects, and manage energy levels can directly impact earnings and professional reputation. When workflows are structured, creativity becomes more enjoyable and sustainable.
              </p>
              <p className="text-[#111111]/80 leading-relaxed">
                Freelancers who adopt smart systems are able to finish tasks faster, take on more opportunities, and maintain a healthier balance between work and life.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-3xl text-[#0A2463] mb-4">Why smart routines improve efficiency</h2>
              <p className="text-[#111111]/80 leading-relaxed mb-4">
                Freelancers need flexibility, but structure is what keeps projects moving. Creating a daily routine helps avoid distractions and improves concentration.
              </p>
              <p className="text-[#111111]/80 leading-relaxed">
                Planning tasks in advance and setting priorities keeps workload under control. This leads to a more focused mindset and better results in less time.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-3xl text-[#0A2463] mb-4">Tools that enhance creativity and workflow</h2>
              <p className="text-[#111111]/80 leading-relaxed mb-4">
                Digital tools make it easier for freelancers to stay organized and productive. Simple systems for tracking work, storing ideas, and scheduling tasks remove confusion and reduce stress.
              </p>
              <p className="text-[#111111]/80 leading-relaxed">
                With the right tools, freelancers can simplify complex work, collaborate smoothly, and protect their creative energy for what matters most.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-3xl text-[#0A2463] mb-4">Staying focused while working independently</h2>
              <p className="text-[#111111]/80 leading-relaxed mb-4">
                Working alone can make it tough to stay motivated. Creating a dedicated workspace, setting time blocks, and reducing digital interruptions help build stronger focus.
              </p>
              <p className="text-[#111111]/80 leading-relaxed">
                Freelancers gain more control when they decide how and when to check messages or social notifications. This improves workflow and keeps attention on important tasks.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-3xl text-[#0A2463] mb-4">A balance of work and well being</h2>
              <p className="text-[#111111]/80 leading-relaxed mb-4">
                A good productivity strategy also includes habits that support mental and physical health. Breaks, proper sleep, and time away from screens help maintain energy and creativity for long-term success.
              </p>
              <p className="text-[#111111]/80 leading-relaxed mb-2">
                Here is how healthier routines improve productivity:
              </p>
              <ul className="list-disc list-inside text-[#111111]/80 space-y-2 ml-4">
                <li>More energy throughout the day</li>
                <li>Better clarity and idea generation</li>
                <li>Reduced burnout and stress</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-3xl text-[#0A2463] mb-4">Boosting confidence through consistent progress</h2>
              <p className="text-[#111111]/80 leading-relaxed mb-4">
                Productive freelancers finish tasks on time and communicate clearly with clients. This builds trust and leads to repeat work and positive referrals.
              </p>
              <p className="text-[#111111]/80 leading-relaxed">
                Small improvements every day lead to stronger confidence and better performance across all projects.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-3xl text-[#0A2463] mb-4">Conclusion</h2>
              <p className="text-[#111111]/80 leading-relaxed mb-4">
                Productivity is essential for creative freelancers who want to grow in a competitive market. Smart routines, helpful tools, and healthy habits make work more organized and enjoyable.
              </p>
              <p className="text-[#111111]/80 leading-relaxed">
                By improving focus and structure, freelancers can deliver better outcomes and take on new opportunities with confidence. Productivity is not just about doing more; it is about working smarter and creating a sustainable path for long-term success.
              </p>
            </section>

            {/* Pagination */}
            <div className="w-full border-t border-[#EDD2E0] pt-8 flex justify-between gap-4 mt-[clamp(2.5rem,5vw,4rem)]">
              <Link to="/blog" className="flex items-center gap-4 group flex-1 border border-[#EDD2E0] p-4 hover:shadow-lg transition-shadow">
                <div className="w-16 h-12 bg-gray-200 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=200&q=80" alt="Prev" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-[#111111]/60 mb-1">Previous blog</div>
                </div>
              </Link>
              <Link to="/blog" className="flex items-center gap-4 group flex-1 border border-[#EDD2E0] p-4 hover:shadow-lg transition-shadow justify-end text-right">
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-[#111111]/60 mb-1">Next blog</div>
                </div>
                <div className="w-16 h-12 bg-gray-200 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=200&q=80" alt="Next" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
              </Link>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="flex-[0_0_min(100%,320px)] space-y-[clamp(2rem,4vw,3rem)]">
            {/* Share Post */}
            <div>
              <h3 className="font-serif text-xl text-[#0A2463] mb-4 border-b border-[#EDD2E0] pb-2 flex justify-between items-center">
                <span>Share post</span>
                <div className="flex items-center gap-3">
                  <button className="min-w-[44px] min-h-[44px] flex items-center justify-center text-[#111111]/60 hover:text-[#FE601C] transition-colors"><LinkIcon className="w-4 h-4" /></button>
                  <button className="min-w-[44px] min-h-[44px] flex items-center justify-center text-[#111111]/60 hover:text-[#FE601C] transition-colors"><Facebook className="w-4 h-4" /></button>
                  <button className="min-w-[44px] min-h-[44px] flex items-center justify-center text-[#111111]/60 hover:text-[#FE601C] transition-colors"><Twitter className="w-4 h-4" /></button>
                  <button className="min-w-[44px] min-h-[44px] flex items-center justify-center text-[#111111]/60 hover:text-[#FE601C] transition-colors"><Linkedin className="w-4 h-4" /></button>
                </div>
              </h3>
            </div>

            {/* Author Info */}
            <div>
              <h3 className="font-serif text-xl text-[#0A2463] mb-4 border-b border-[#EDD2E0] pb-2">Author info</h3>
              <div className="flex gap-4 items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 border border-[#EDD2E0]">
                  <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80" alt="Author" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0A2463] mb-1">Michael Smith</h4>
                  <p className="text-xs text-[#111111]/60 mb-2">Founder & Editor in Chief</p>
                  <div className="flex gap-2">
                    <button className="min-w-[44px] min-h-[44px] flex items-center justify-center text-[#111111]/40 hover:text-[#FE601C] transition-colors"><Instagram className="w-3 h-3" /></button>
                    <button className="min-w-[44px] min-h-[44px] flex items-center justify-center text-[#111111]/40 hover:text-[#FE601C] transition-colors"><Facebook className="w-3 h-3" /></button>
                    <button className="min-w-[44px] min-h-[44px] flex items-center justify-center text-[#111111]/40 hover:text-[#FE601C] transition-colors"><Twitter className="w-3 h-3" /></button>
                  </div>
                </div>
              </div>
            </div>

            {/* Editor's Choice */}
            <div>
              <h3 className="font-serif text-xl text-[#0A2463] mb-4 border-b border-[#EDD2E0] pb-2">Editor's choice</h3>
              <Link to="#" className="group block">
                <div className="flex gap-4 items-start">
                  <div className="w-20 h-16 bg-gray-200 shrink-0 overflow-hidden border border-[#EDD2E0]">
                    <img src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=200&q=80" alt="Thumb" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  </div>
                  <div>
                    <h4 className="font-serif text-[#0A2463] text-sm leading-tight mb-2 group-hover:text-[#FE601C] transition-colors">
                      How remote work is reshaping modern lifestyles
                    </h4>
                    <p className="text-[10px] text-[#111111]/60">by Benjamin Small | 4 min read</p>
                  </div>
                </div>
              </Link>
            </div>

            {/* Recent Posts */}
            <div>
              <h3 className="font-serif text-xl text-[#0A2463] mb-4 border-b border-[#EDD2E0] pb-2">Recent posts</h3>
              <div className="space-y-4">
                <Link to="#" className="group block border-b border-[#EDD2E0] pb-4">
                  <h4 className="font-serif text-[#0A2463] text-sm leading-tight mb-2 group-hover:text-[#FE601C] transition-colors">
                    How e-commerce is redefining global shopping trends
                  </h4>
                  <p className="text-[10px] text-[#111111]/60">by Emily Johnson | 6 min read</p>
                </Link>
                <Link to="#" className="group block border-b border-[#EDD2E0] pb-4">
                  <h4 className="font-serif text-[#0A2463] text-sm leading-tight mb-2 group-hover:text-[#FE601C] transition-colors">
                    Exploring minimalist living: a beginner's perspective
                  </h4>
                  <p className="text-[10px] text-[#111111]/60">by Jacob Anderson | 5 min read</p>
                </Link>
              </div>
            </div>

            {/* Ad Widget */}
            <div className="relative aspect-[4/3] overflow-hidden border border-[#EDD2E0] group cursor-pointer">
              <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&q=80" alt="Ad" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-between p-4">
                <div className="self-end bg-white/20 backdrop-blur-sm px-2 py-1 text-[8px] font-bold uppercase tracking-widest text-white rounded-full border border-white/30">
                  Advertisement
                </div>
                <h4 className="font-serif text-white text-2xl leading-tight">
                  Save on premium membership
                </h4>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};
