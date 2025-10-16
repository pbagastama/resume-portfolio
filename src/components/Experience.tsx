import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Web Developer',
      company: 'PT. Liburnesia Digital Nusantara (Liburdulu)',
      location: 'Jakarta, Indonesia',
      period: 'October 2024 - Present',
      description: [
        'Built and optimized the Liburdulu.id digital travel platform using Magento, Laravel, Next.js, MUI & Tailwind, focusing on smooth booking flows, scalable features, and engaging user experiences.',
        'Responsible for major UI revamps, new feature development, and SEO optimization to ensure a seamless and competitive travel booking journey.',
        'Revamped major UI components: migrated fonts to Poppins, redesigned Cart Page, Order History, Product Detail, and Hotel Booking pages with OTA-style responsive layouts.',
        'Built and launched new features: Buy Now, Down Payment (DP), Smart Search Product, Payment Method, and AI Travel Chatbot (Yellow.ai).',
        'Integrated Dynamic Tiering (Magento) and Dynamic Margin (Strapi) to support partner dashboards.',
        'Migrated homepage content (banners, promos, exclusive partners) from Magento to Strapi CMS for scalable content management.',
        'Delivered homepage enhancements with new About, Why Us, and Testimonial sections.',
        'Supported marketing campaigns: WOW (Woman on Wander) and seasonal promos (12.12 Flash Sale, Independence Day, Anniversary, etc.).',
        'Improved SEO & performance by implementing SEO-friendly routing, dynamic meta tags (title, description, images), and automated sitemap generation with next-sitemap.',
      ],
      tags: [
        'Next.js',
        'Magento',
        'Laravel',
        'React',
        'Tailwind',
        'MUI',
        'Strapi',
      ],
    },
    {
      title: 'Senior Frontend Developer',
      company: 'PT. Mahakarya Adi Indonesia (MAI)',
      location: 'Jakarta, Indonesia',
      period: 'January 2022 - October 2024',
      description: [
        'Revamped Landing Page to Microsite Westin Surabaya Events (NextJS - Lead Developer).',
        'Created & developed website media aggregator about Japan in Indonesia (Wordpress).',
        'Created website company profile for Pilot Pen Indonesia (Wordpress).',
        'Revamped website Waringin Hospitality Group with booking engine (Laravel).',
        'Revamped website Autopedia Indonesia with stock chart saham (Laravel).',
        'Created multi-language website for Sushiro Indonesia (Wordpress).',
        'Rebranded and revamped website company profile for MAI (Wordpress).',
      ],
      tags: ['Next.js', 'React', 'Laravel', 'Wordpress', 'PHP'],
    },
    {
      title: 'Frontend Developer',
      company: 'PT. Mahakarya Adi Indonesia (MAI)',
      location: 'Jakarta, Indonesia',
      period: 'January 2020 - December 2021',
      description: [
        'Wireframed & laid out websites with Figma.',
        'Created Memory Game on Website Panduan Bunda.',
        'Developed dashboard website company profile for Ellips Indonesia with React Redux.',
        'Implemented CRUD operations with React JS and Redux.',
        'Added feature maps on website HIS Blog with interaction maps using Simplemaps API.',
        'Revamped layout for websites Human Initiative & UHA Mikakuto Indonesia.',
      ],
      tags: ['React', 'Redux', 'Figma', 'JavaScript'],
    },
    {
      title: 'Team Lead Bootcamp',
      company: 'RevoU (Full Stack Software Engineer)',
      location: 'Jakarta, Indonesia',
      period: 'September 2023 - May 2024',
      description: [
        'Mentoring, Supporting and Leading a team of student for bootcamp program, teaching:',
        'Module 1: Web Development Essentials',
        'Module 2: Front-end Development',
        'Module 3: Javascript and Typescript',
        'Module 4: React',
        'Module 5: Front End Advanced Concepts',
        'Module 6: Python for Back-end',
        'Module 7: Connecting to Database',
      ],
      tags: ['Mentoring', 'React', 'TypeScript', 'Python', 'Teaching'],
    },
    {
      title: 'Mentor - Frontend Engineering',
      company: 'Ruangguru - Kampus Merdeka',
      location: 'Jakarta, Indonesia',
      period: 'February 2022 - July 2022',
      description: [
        'Mentor at Ruangguru [Kampus Merdeka] for frontend engineering programs, teaching:',
        'Frontend Programming (HTML, CSS, Javascript)',
        'React & Frontend Framework (State, Props, Hooks)',
        'Interacting & Creating API (Postman & JSON Server)',
        'Mentored a 1-on-3 Frontend Bootcamp class to create high-quality websites and dynamic applications.',
      ],
      tags: ['Mentoring', 'React', 'JavaScript', 'HTML', 'CSS'],
    },
    {
      title: 'Wordpress Developer',
      company: 'Sekolah.mu - Freelance',
      location: 'Jakarta, Indonesia',
      period: 'June 2021 - December 2021',
      description: [
        'Revamped and maintained Sekolah Murid Merdeka website using Wordpress & Elementor.',
      ],
      tags: ['Wordpress', 'Elementor', 'Freelance'],
    },
    {
      title: 'Frontend Developer',
      company: 'Socialights Indonesia',
      location: 'Jakarta, Indonesia',
      period: 'March 2019 - December 2019',
      description: [
        'Slicing Assets Design From Adobe XD',
        'UI/UX Layouting (HTML Layouting, CSS Styling, Javascript)',
        'Make a website for Brand Senka Indonesia & SHVR Community Shop (Frontend)',
        'Maintenance Website from GG Move, SHVR, Indosat GIG, Wahanaritelindo.',
      ],
      tags: ['HTML', 'CSS', 'JavaScript', 'Adobe XD'],
    },
    {
      title: 'Web Content Administrator',
      company: 'VML Southeast Asia & India',
      location: 'Jakarta, Indonesia',
      period: 'November 2018 - February 2019',
      description: [
        'Managed CMS websites for clients Mercedes Benz, Hansaplast, Nivea, and Niveamen.',
      ],
      tags: ['CMS', 'Content Management'],
    },
    {
      title: 'Frontend Web Developer',
      company: 'Smarteye VR',
      location: 'Jakarta, Indonesia',
      period: 'January 2018 - April 2018',
      description: [
        'Responsible for layout development of SmartEye.id website regarding virtual reality products.',
      ],
      tags: ['HTML', 'CSS', 'JavaScript'],
    },
  ];

  return (
    <section className='py-24 bg-gradient-subtle'>
      <div className='container px-4'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-12 space-y-4'>
            <h2 className='text-4xl md:text-6xl font-bold text-foreground'>
              Working Experience
            </h2>
            <div className='w-20 h-1 bg-gradient-primary mx-auto rounded-full' />
            {/* <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Latar belakang pendidikan saya
            </p> */}
          </div>
          <div className='space-y-6'>
            {experiences.map((exp, index) => (
              <Card key={index} className='hover:shadow-lg transition-shadow'>
                <CardHeader>
                  <div className='flex flex-col md:flex-row md:items-start md:justify-between gap-2'>
                    <div className='flex-1'>
                      <CardTitle className='text-2xl mb-2'>
                        {exp.title}
                      </CardTitle>
                      <p className='text-lg font-semibold text-primary'>
                        {exp.company}
                      </p>
                      <p className='text-sm text-muted-foreground'>
                        {exp.location}
                      </p>
                    </div>
                    <div className='flex items-center gap-2 text-muted-foreground'>
                      <Calendar className='h-4 w-4' />
                      <span className='text-sm font-medium'>{exp.period}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className='space-y-2 mb-4'>
                    {exp.description.map((desc, i) => (
                      <li
                        key={i}
                        className='text-sm text-muted-foreground flex justify-center items-center gap-2'>
                        <span className='text-primary'>•</span>
                        <span className='flex-1'>{desc}</span>
                      </li>
                    ))}
                  </ul>
                  <div className='flex flex-wrap gap-2'>
                    {exp.tags.map((tag, i) => (
                      <Badge key={i} variant='secondary'>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
