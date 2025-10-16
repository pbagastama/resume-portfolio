import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

const Portfolio = () => {
  const [visibleItems, setVisibleItems] = useState(6);

  const projects = [
    {
      title: 'Liburdulu',
      subtitle: 'Digital Travel Platform',
      description:
        'Built and optimized digital travel platform using Magento, Strapi, Laravel, Next.js, MUI & Tailwind, focusing on smooth booking flows and engaging user experiences.',
      tech: ['Magento', 'Strapi', 'Laravel', 'Next.js', 'MUI', 'Tailwind'],
      role: 'Website Developer',
      url: 'https://liburdulu.id/',
    },
    {
      title: 'Waringin Hospitality Group',
      subtitle: 'Hospitality Website',
      description:
        'Revamped website for Waringin Hospitality Group with integrated booking engine system.',
      tech: ['Laravel', 'Vite', 'Bootstrap', 'JavaScript', 'SCSS'],
      role: 'Frontend Developer',
      url: 'https://waringinhospitality.com/',
    },
    {
      title: 'Autopedia Indonesia',
      subtitle: 'Automotive Stock Platform',
      description:
        'Revamped website for Autopedia Indonesia with stock chart integration for automotive industry.',
      tech: [
        'Laravel',
        'Bootstrap',
        'JavaScript',
        'jQuery',
        'Chart.js',
        'SCSS',
      ],
      role: 'Frontend Developer',
      url: 'https://autopedia.id/',
    },
    {
      title: 'Mahakarya Adi Indonesia',
      subtitle: 'Company Profile',
      description:
        'Revamped and rebranded company profile website for MAI with modern UI/UX design.',
      tech: ['HTML', 'CSS', 'jQuery', 'Bootstrap', 'SCSS', 'WordPress'],
      role: 'WordPress Developer',
      url: 'https://mai.co.id/',
    },
    {
      title: 'Westin Surabaya Events',
      subtitle: 'Events & Grand Ballroom',
      description:
        'Revamped landing page to microsite for Westin Surabaya Events with modern UI/UX and enhanced user engagement.',
      tech: ['TypeScript', 'React', 'Next.js', 'Tailwind'],
      role: 'Lead Developer',
      url: 'https://westinsurabayaevents.com/',
    },
    {
      title: 'Bina Artha Ventura',
      subtitle: 'Financial Services',
      description:
        'Complete website revamp with modern UI/UX style, improving user experience and brand presentation.',
      tech: ['TypeScript', 'React', 'Next.js', 'Tailwind'],
      role: 'Lead Developer',
      url: 'https://bina-artha.com/',
    },
    {
      title: 'Japaholic Indonesia',
      subtitle: 'Media Aggregator',
      description:
        'Created and developed a comprehensive media aggregator website about Japan in Indonesia.',
      tech: ['HTML', 'CSS', 'JavaScript', 'WordPress', 'Elementor'],
      role: 'WordPress Developer',
      url: 'https://japaholic.id/',
    },
    {
      title: 'Pilot Pen Indonesia',
      subtitle: 'Company Profile',
      description:
        'Developed company profile website with comprehensive product listings and modern design.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'SASS', 'WordPress'],
      role: 'WordPress Developer',
      url: 'https://pilotpen.co.id/',
    },
    {
      title: 'Ellips Haircare',
      subtitle: 'Global E-commerce',
      description:
        'Built dashboard CMS and e-commerce website for global haircare brand with modern stack.',
      tech: ['React', 'Redux', 'Gatsby.js', 'Bootstrap'],
      role: 'Frontend Developer',
      url: 'https://myellipshaircare.com/',
    },
    {
      title: 'Sushiro Indonesia',
      subtitle: 'Multi-language Website',
      description:
        'Created multi-language website for Sushiro Indonesia brand with modern design and responsive layout.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'SASS', 'WordPress'],
      role: 'WordPress Developer',
      url: 'https://sushiro.co.id/',
    },
    {
      title: 'Tanah Air Digital Exchange (TADEX)',
      subtitle: 'Digital Exchange Platform',
      description:
        'Revamped microsite TADEX for refreshment design (UI/UX) with modern interface and enhanced user experience.',
      tech: ['React', 'Next.js', 'Bootstrap', 'SCSS'],
      role: 'Frontend Developer',
      url: 'https://tadex.id/',
    },
    {
      title: 'Sekolah Murid Merdeka',
      subtitle: 'Educational Website',
      description:
        'Revamped website for Sekolah Murid Merdeka by sekolah.mu with modern design and user-friendly interface.',
      tech: ['HTML', 'CSS', 'JavaScript', 'WordPress', 'Elementor'],
      role: 'WordPress Developer',
      url: 'https://www.sekolahmuridmerdeka.id/',
    },
    {
      title: 'Gatsby Indonesia',
      subtitle: 'Mandom Corporation',
      description:
        'Maintenance SEO and update features for Gatsby Indonesia website with improved performance.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'PHP (Twig)'],
      role: 'Frontend Developer',
      url: 'https://gatsby.co.id/',
    },
    {
      title: 'Panduan Bunda',
      subtitle: 'Interactive Memory Game',
      description:
        'Created interactive memory game on Panduan Bunda website for engaging user experience.',
      tech: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap'],
      role: 'Frontend Developer',
      url: 'https://www.panduanbunda.com/kadodaribunda',
    },
    {
      title: 'Human Initiative Indonesia',
      subtitle: 'Non-Profit Organization',
      description:
        'Revamped website for Human Initiative Indonesia with modern design and improved accessibility.',
      tech: ['HTML', 'CSS', 'jQuery', 'Bootstrap', 'WordPress'],
      role: 'WordPress Developer',
      url: 'https://human-initiative.org/',
    },
  ];

  const loadMore = () => {
    setVisibleItems((prev) => Math.min(prev + 3, projects.length));
  };

  const displayedProjects = projects.slice(0, visibleItems);
  const hasMore = visibleItems < projects.length;

  return (
    <section id='portfolio' className='py-24 bg-gradient-subtle relative'>
      <div className='container px-4'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16 space-y-4'>
            <h2 className='text-4xl md:text-6xl font-bold text-foreground'>
              Featured Work
            </h2>
            <div className='w-20 h-1 bg-gradient-primary mx-auto rounded-full' />
            {/* <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A selection of projects I've worked on, ranging from digital platforms to corporate websites
            </p> */}
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {displayedProjects.map((project, index) => (
              <Card
                key={project.title}
                className='group bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow overflow-hidden cursor-pointer'
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => window.open(project.url, '_blank')}>
                <CardContent className='p-6 space-y-4'>
                  <div className='space-y-2'>
                    <div className='flex items-start justify-between'>
                      <div className='flex-1'>
                        <h3 className='text-2xl font-bold text-foreground group-hover:text-primary transition-colors'>
                          {project.title}
                        </h3>
                        <p className='text-sm text-muted-foreground'>
                          {project.subtitle}
                        </p>
                      </div>
                      <div
                        onClick={(e) => e.stopPropagation()}
                        className='text-muted-foreground hover:text-primary transition-colors'>
                        <a
                          href={project.url}
                          target='_blank'
                          rel='noopener noreferrer'
                          aria-label={`Visit ${project.title}`}>
                          <ExternalLink className='h-5 w-5' />
                        </a>
                      </div>
                    </div>
                    <p className='text-sm text-primary font-medium'>
                      {project.role}
                    </p>
                  </div>

                  <p className='text-muted-foreground leading-relaxed'>
                    {project.description}
                  </p>

                  <div className='flex flex-wrap gap-2 pt-2'>
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className='text-xs px-3 py-1 bg-secondary border border-border rounded-full text-foreground'>
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {hasMore && (
            <div className='text-center mt-12'>
              <Button
                onClick={loadMore}
                size='lg'
                className='bg-gradient-primary hover:opacity-90 transition-opacity text-white font-semibold px-8 py-6 text-lg'>
                Load More Projects
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
