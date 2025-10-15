import { Calendar, Clock, ArrowRight } from "lucide-react";

const Blog = () => {
  const articles = [
    {
      title: "The Evolution of Tiki-Taka: Modern Football Tactics",
      excerpt: "Exploring how Barcelona's legendary playing style has influenced modern football and evolved over the years. From Guardiola's masterclass to current implementations.",
      category: "Football",
      date: "March 15, 2024",
      readTime: "8 min read",
      image: "⚽",
    },
    {
      title: "Marathon Training: From Couch to 42K",
      excerpt: "My personal journey from running my first 5K to completing a full marathon. Training tips, nutrition advice, and mental preparation strategies.",
      category: "Sports",
      date: "March 10, 2024",
      readTime: "6 min read",
      image: "🏃",
    },
    {
      title: "AI in 2024: The Technologies Shaping Our Future",
      excerpt: "A deep dive into the latest AI advancements, from GPT-4 to autonomous systems. How artificial intelligence is revolutionizing industries.",
      category: "Technology",
      date: "March 5, 2024",
      readTime: "10 min read",
      image: "🤖",
    },
    {
      title: "Building Scalable React Applications with TypeScript",
      excerpt: "Best practices for architecting large-scale React applications. Type safety, component patterns, and performance optimization techniques.",
      category: "Coding",
      date: "February 28, 2024",
      readTime: "12 min read",
      image: "👨‍💻",
    },
    {
      title: "Premier League Tactical Analysis: Arsenal's Resurgence",
      excerpt: "Breaking down Mikel Arteta's tactical approach and how Arsenal transformed into title contenders. Positional play and pressing patterns analyzed.",
      category: "Football",
      date: "February 20, 2024",
      readTime: "9 min read",
      image: "⚽",
    },
    {
      title: "The Rise of Electric Vehicles: Tesla and Beyond",
      excerpt: "Examining the EV revolution and its impact on the automotive industry. From battery technology to charging infrastructure.",
      category: "Technology",
      date: "February 15, 2024",
      readTime: "7 min read",
      image: "🚗",
    },
  ];

  return (
    <section id="blog" className="py-5" style={{ background: '#16213e' }}>
      <div className="container py-5">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <h2 className="display-4 fw-bold text-white mb-3">Latest Articles</h2>
            <div className="mx-auto mb-4 rounded" style={{
              width: '80px',
              height: '4px',
              background: 'linear-gradient(90deg, #ef4444 0%, #3b82f6 100%)'
            }} />
            <p className="fs-5 text-white-50">
              Thoughts, stories, and insights about football, sports, technology, and coding
            </p>
          </div>
        </div>

        <div className="row g-4">
          {articles.map((article, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <article 
                className="card h-100 border-0"
                style={{
                  background: 'rgba(26, 26, 46, 0.8)',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 15px 35px rgba(239, 68, 68, 0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div className="card-body p-4 d-flex flex-column">
                  <div className="mb-3 fs-1">{article.image}</div>
                  
                  <span 
                    className="badge mb-3 align-self-start"
                    style={{
                      background: 'linear-gradient(90deg, #ef4444 0%, #dc2626 100%)',
                      color: 'white',
                      fontSize: '0.75rem',
                      padding: '0.4rem 0.8rem'
                    }}
                  >
                    {article.category}
                  </span>

                  <h3 className="h5 fw-bold text-white mb-3">{article.title}</h3>
                  
                  <p className="text-white-50 mb-4 flex-grow-1">{article.excerpt}</p>

                  <div className="d-flex justify-content-between align-items-center text-white-50 small mb-3">
                    <div className="d-flex align-items-center gap-2">
                      <Calendar size={14} />
                      <span>{article.date}</span>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <Clock size={14} />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  <button 
                    className="btn btn-sm d-inline-flex align-items-center gap-2 align-self-start"
                    style={{
                      color: '#ef4444',
                      background: 'transparent',
                      border: '1px solid #ef4444',
                      transition: 'all 0.3s'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#ef4444';
                      e.currentTarget.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.color = '#ef4444';
                    }}
                  >
                    Read More
                    <ArrowRight size={14} />
                  </button>
                </div>
              </article>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <button 
            className="btn btn-danger btn-lg px-5"
            style={{ fontWeight: 600 }}
          >
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
