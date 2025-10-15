const Hobbies = () => {
  const hobbies = [
    {
      title: 'Football Passion',
      category: 'Sports',
      description:
        'Devoted football fan following Premier League, La Liga, and international tournaments. Love playing matches with friends on weekends and analyzing tactical formations.',
      highlights: [
        'Match Analysis',
        'Playing Striker',
        'EPL Fan',
        'FIFA Gaming',
      ],
      icon: 'bi-dribbble',
      color: '#28a745',
    },
    {
      title: 'Basketball & Beyond',
      category: 'Sports',
      description:
        'Active in various sports including basketball, badminton, and running. Believe in maintaining a healthy lifestyle through regular physical activities.',
      highlights: ['Basketball', 'Badminton', 'Running', 'Gym Workouts'],
      icon: 'bi-trophy',
      color: '#fd7e14',
    },
    {
      title: 'Tech Enthusiast',
      category: 'Technology',
      description:
        'Always keeping up with the latest technology trends, gadgets, and innovations. Love exploring new tools and understanding how things work behind the scenes.',
      highlights: ['Latest Gadgets', 'Tech News', 'AI & ML', 'Cloud Computing'],
      icon: 'bi-laptop',
      color: '#17a2b8',
    },
    {
      title: 'Web Development',
      category: 'Coding',
      description:
        'Passionate about building modern web applications using React, Next.js, and TypeScript. Enjoy solving complex problems and creating user-friendly interfaces.',
      highlights: [
        'React & Next.js',
        'TypeScript',
        'Full Stack',
        'UI/UX Design',
      ],
      icon: 'bi-code-slash',
      color: '#6f42c1',
    },
    {
      title: 'Football Analytics',
      category: 'Tech & Sports',
      description:
        'Combining my love for football and technology by analyzing player statistics, team performance, and match data using various analytics tools.',
      highlights: [
        'Data Analysis',
        'Stats Tracking',
        'Performance Metrics',
        'Tactical Review',
      ],
      icon: 'bi-graph-up',
      color: '#dc3545',
    },
    {
      title: 'Gaming & Esports',
      category: 'Entertainment',
      description:
        'Enjoy gaming in my free time, especially sports games and competitive esports. Follow major esports tournaments and occasionally participate in online competitions.',
      highlights: ['FIFA', 'eFootball', 'Esports', 'Competitive Gaming'],
      icon: 'bi-controller',
      color: '#007bff',
    },
  ];

  return (
    <section id='hobbies' className='py-5'>
      <div className='container py-5'>
        <div className='row justify-content-center mb-5'>
          <div className='col-lg-8 text-center'>
            <h2 className='display-4 fw-bold mb-3'>My Hobbies & Interests</h2>
            <div
              className='mx-auto mb-4'
              style={{
                width: '80px',
                height: '4px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: '2px',
              }}
            />
            <p className='lead text-muted'>
              Things that I'm passionate about and love spending my time on
            </p>
          </div>
        </div>

        <div className='row g-4'>
          {hobbies.map((hobby, index) => (
            <div className='col-md-6 col-lg-4' key={hobby.title}>
              <div
                className='card h-100 border-0 shadow-sm'
                style={{
                  transition: 'all 0.3s ease',
                  animationDelay: `${index * 0.1}s`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow =
                    '0 15px 40px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow =
                    '0 0.125rem 0.25rem rgba(0,0,0,0.075)';
                }}>
                <div className='card-body p-4'>
                  <div className='d-flex justify-content-between align-items-start mb-3'>
                    <div
                      className='d-inline-flex align-items-center justify-content-center rounded-circle'
                      style={{
                        width: '60px',
                        height: '60px',
                        backgroundColor: hobby.color,
                      }}>
                      <i className={`${hobby.icon} text-white fs-3`}></i>
                    </div>
                    <span
                      className='badge rounded-pill px-3 py-2'
                      style={{
                        backgroundColor: `${hobby.color}20`,
                        color: hobby.color,
                        fontSize: '0.75rem',
                      }}>
                      {hobby.category}
                    </span>
                  </div>

                  <h3 className='h5 fw-bold mb-3'>{hobby.title}</h3>
                  <p className='text-muted mb-4'>{hobby.description}</p>

                  <div className='d-flex flex-wrap gap-2'>
                    {hobby.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className='badge bg-light text-dark border'
                        style={{ fontSize: '0.7rem', fontWeight: 'normal' }}>
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
