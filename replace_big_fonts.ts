import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf8');

// Categories in cards
content = content.replace(/<span className="text-\[\#0A2463\] font-bold tracking-widest uppercase">/g, '<span className="text-[#FE601C] font-bold tracking-widest uppercase">');

// Big fonts
content = content.replace(/className="text-\[10vw\] leading-none font-serif font-black tracking-tighter text-\[\#0A2463\]/g, 'className="text-[10vw] leading-none font-serif font-black tracking-tighter text-[#FE601C]');
content = content.replace(/className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-\[1\.1\] text-\[\#0A2463\]"/g, 'className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.1] text-[#FE601C]"');
content = content.replace(/className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-\[1\.2\] text-\[\#0A2463\] text-center/g, 'className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.2] text-[#FE601C] text-center');
content = content.replace(/className="font-sans text-5xl font-bold text-\[\#0A2463\]/g, 'className="font-sans text-5xl font-bold text-[#FE601C]');
content = content.replace(/className="font-serif text-\[64px\] leading-\[1\.1\] text-\[\#0A2463\]/g, 'className="font-serif text-[64px] leading-[1.1] text-[#FE601C]');

fs.writeFileSync('src/App.tsx', content);

['src/pages/BlogPage.tsx', 'src/pages/BookPage.tsx', 'src/pages/AboutPage.tsx', 'src/pages/PodcastPage.tsx'].forEach(file => {
    let pageContent = fs.readFileSync(file, 'utf8');
    pageContent = pageContent.replace(/<span className="text-\[\#0A2463\] font-bold tracking-widest uppercase">/g, '<span className="text-[#FE601C] font-bold tracking-widest uppercase">');
    pageContent = pageContent.replace(/className="font-serif text-6xl sm:text-7xl lg:text-\[100px\] leading-\[1\.1\] text-\[\#0A2463\]"/g, 'className="font-serif text-6xl sm:text-7xl lg:text-[100px] leading-[1.1] text-[#FE601C]"');
    fs.writeFileSync(file, pageContent);
});
