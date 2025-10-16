const About = () => {
  const skills = [
    'React & Next.js',
    'TypeScript',
    'Tailwind CSS',
    'Node.js',
    'Laravel',
    'Magento',
    'Strapi',
    'WordPress',
    'Redux',
    'Gatsby.js',
    'Material-UI',
    'Bootstrap',
  ];

  return (
    <section className='py-24 relative'>
      <div className='container px-4'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-16 space-y-4'>
            <h2 className='text-4xl md:text-6xl font-bold text-foreground'>
              About Me
            </h2>
            <div className='w-20 h-1 bg-gradient-primary mx-auto rounded-full' />
          </div>

          <div className='grid md:grid-cols-2 gap-12 items-center'>
            <div className='space-y-6'>
              <p className='text-lg text-muted-foreground leading-relaxed'>
                I'm a passionate{' '}
                <span className='text-primary font-semibold'>
                  Frontend Web Developer
                </span>{' '}
                who loves turning complex ideas into intuitive, high-performance
                web applications.
              </p>
              <p className='text-lg text-muted-foreground leading-relaxed'>
                Over the past 6+ years, I've built and optimized digital
                platforms for various industries — including travel,
                hospitality, and education — using tools like React, Next.js,
                Laravel, and Strapi. At Liburdulu.id, I focus on crafting smooth
                booking flows, dynamic interfaces, and SEO-driven components to
                enhance customer engagement.
              </p>
              <p className='text-lg text-muted-foreground leading-relaxed'>
                Beyond coding, I enjoy mentoring developers, leading small
                teams, and sharing best practices on frontend architecture and
                UI/UX principles. My goal is to continue growing as a tech-savvy
                problem solver, building web solutions that are not only fast
                and scalable but also meaningful for the people who use them.
              </p>
            </div>

            <div className='space-y-6'>
              <h3 className='text-2xl font-bold text-foreground mb-6'>
                Skills & Technologies
              </h3>
              <div className='grid grid-cols-2 gap-3'>
                {skills.map((skill, index) => (
                  <div
                    key={skill}
                    className='bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-all hover:shadow-glow cursor-default group'
                    style={{ animationDelay: `${index * 0.1}s` }}>
                    <span className='text-foreground font-medium group-hover:text-primary transition-colors'>
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
