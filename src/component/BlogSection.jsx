import React, { useState, useEffect } from 'react';
import { Calendar, User, X, ArrowRight } from 'lucide-react';

// --- 1. DEMO DATA ---
const blogPosts = [
  {
    id: 1,
    title: "5 Simple Habits for a Brighter Smile",
    excerpt: "Achieving a gleaming white smile doesn't always require expensive treatments. Here are daily habits that help.",
    content: `
      <p class="mb-4">A bright smile is often seen as a sign of health and vitality. While professional whitening is effective, maintaining that brightness comes down to daily habits. Here are five simple things you can do every day:</p>
      <h4 class="text-lg font-bold mb-2">1. Watch What You Drink</h4>
      <p class="mb-4">Coffee, tea, and red wine are notorious for staining teeth. Try drinking water after consuming these beverages to rinse away staining agents.</p>
      <h4 class="text-lg font-bold mb-2">2. Upgrade Your Toothbrush</h4>
      <p class="mb-4">Electric toothbrushes can remove more plaque than manual ones, leading to cleaner, brighter-looking teeth.</p>
      <h4 class="text-lg font-bold mb-2">3. Eat "Crunchy" Fruits and Veggies</h4>
      <p class="mb-4">Apples, celery, and carrots act as natural abrasives, helping to scrub away surface stains as you chew.</p>
      <p>By incorporating these small changes, you can significantly improve the brightness of your smile between dental visits.</p>
    `,
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=2070&auto=format&fit=crop",
    category: "Dental Tips",
    author: "Dr. Sarah Smith",
    date: "Oct 12, 2023"
  },
  {
    id: 2,
    title: "Why You Shouldn't Ignore Bleeding Gums",
    excerpt: "Seeing pink in the sink isn't normal. Learn what bleeding gums might be trying to tell you about your health.",
    content: `
      <p class="mb-4">It's a common misconception that a little bleeding during brushing is normal. It is often the earliest sign of gingivitis, the first stage of gum disease.</p>
      <h4 class="text-lg font-bold mb-2">The Root Cause</h4>
      <p class="mb-4">Bleeding is usually caused by plaque buildup along the gumline. The bacteria in plaque cause inflammation, making gums tender and prone to bleeding.</p>
      <h4 class="text-lg font-bold mb-2">Don't Stop Brushing</h4>
      <p class="mb-4">Many people stop brushing the bleeding areas, which only makes the problem worse. Instead, brush gently but thoroughly, and ensure you are flossing daily to remove the irritants between teeth.</p>
      <p>If bleeding persists for more than a week, it's crucial to schedule a check-up before it progresses to periodontitis.</p>
    `,
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782808?q=80&w=2070&auto=format&fit=crop",
    category: "Oral Health",
    author: "Dr. Mark Davis",
    date: "Sep 28, 2023"
  },
  {
    id: 3,
    title: "Invisalign vs. Braces: What's Right for You?",
    excerpt: "Considering straightening your teeth? We break down the pros and cons of the two most popular options.",
    content: `
      <p class="mb-4">Choosing between clear aligners (like Invisalign) and traditional metal braces depends on several factors, including the complexity of your case, lifestyle, and budget.</p>
      <h4 class="text-lg font-bold mb-2">Invisalign Pros:</h4>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li>Almost invisible.</li>
        <li>Removable for eating and cleaning.</li>
        <li>Generally more comfortable.</li>
      </ul>
      <h4 class="text-lg font-bold mb-2">Traditional Braces Pros:</h4>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li>Better for complex severe misalignment.</li>
        <li>No temptation to take them out (better compliance).</li>
        <li>Often more affordable for complex cases.</li>
      </ul>
      <p>The best way to decide is a consultation with an orthodontist who can assess your specific needs.</p>
    `,
    image: "https://images.unsplash.com/photo-1572666341285-cb8cb60d0693?q=80&w=2070&auto=format&fit=crop",
    category: "Orthodontics",
    author: "Dr. Emily Blunt",
    date: "Aug 15, 2023"
  }
];

// --- 2. MODAL COMPONENT (The "Small Window") ---
const BlogModal = ({ blog, onClose }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!blog) return null;

  return (
    // Overlay background
    <div 
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose} // Close when clicking outside the box
    >
      {/* Modal Content Box */}
      <div 
        className="bg-white rounded-3xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative shadow-2xl animate-slide-up"
        onClick={(e) => e.stopPropagation()} // Prevent clicks inside closing the modal
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 bg-white/80 backdrop-blur p-2 rounded-full text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors z-10"
        >
          <X size={24} />
        </button>

        {/* Image Header */}
        <div className="h-64 md:h-80 relative">
           <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
           <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
           <span className="absolute bottom-4 left-6 bg-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              {blog.category}
           </span>
        </div>

        {/* Body Content */}
        <div className="p-8 md:p-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {blog.title}
          </h2>

          {/* Metadata */}
          <div className="flex items-center gap-6 text-sm text-gray-500 mb-8 pb-8 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <User size={16} className="text-cyan-500" />
              {blog.author}
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-cyan-500" />
              {blog.date}
            </div>
          </div>

          {/* HTML Content Injection */}
          <div 
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-a:text-cyan-600"
            dangerouslySetInnerHTML={{ __html: blog.content }} 
          />
        </div>
      </div>
    </div>
  );
};


// --- 3. MAIN BLOG SECTION COMPONENT ---
const BlogSection = () => {
  // State to track which blog is currently open in the modal (null = none open)
  const [selectedBlog, setSelectedBlog] = useState(null);

  return (
    <section id="blog" className="w-full py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            Latest <span className="text-cyan-500">News & Articles</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            Stay informed with tips, guides, and news about dental health from our expert team.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div 
              key={post.id}
              // Clicking the card sets the selected blog state to open the modal
              onClick={() => setSelectedBlog(post)} 
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group flex flex-col h-full"
            >
              {/* Card Image */}
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-cyan-600 text-xs font-bold px-3 py-1 rounded-full">
                  {post.category}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-grow">
                 {/* Metadata */}
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                    <div className="flex items-center gap-1">
                       <Calendar size={14} /> {post.date}
                    </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-cyan-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6 flex-grow line-clamp-3">
                  {post.excerpt}
                </p>
                
                {/* Read More Button */}
                <div className="flex items-center gap-2 text-cyan-600 font-bold text-sm mt-auto">
                   Read Article <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Render Modal if a blog is selected */}
      {selectedBlog && (
        <BlogModal blog={selectedBlog} onClose={() => setSelectedBlog(null)} />
      )}

      {/* CSS for Modal Animations */}
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fadeIn 0.3s ease-out forwards; }
        .animate-slide-up { animation: slideUp 0.4s ease-out forwards; }
      `}</style>
    </section>
  );
};

export default BlogSection;