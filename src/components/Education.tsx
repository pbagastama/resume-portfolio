import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  const educations = [
    {
      degree: 'Informatics Engineering',
      institution: 'Gunadarma University',
      period: 'September 2014 - September 2018',
      description: "Bachelor's degree in Informatics Engineering",
      icon: '🎓',
    },
    {
      degree: 'Computer and Network Engineering ',
      institution: 'SMK Telekomunikasi Telesandi',
      period: 'June 2011 - June 2014',
      description:
        'Completed vocational education in Computer and Network Engineering',
      icon: '📡',
    },
  ];

  return (
    <section className='py-20 px-4 bg-background'>
      <div className='container mx-auto max-w-6xl'>
        <div className='text-center mb-16 space-y-4'>
          <h2 className='text-4xl md:text-6xl font-bold text-foreground'>
            Education
          </h2>
          <div className='w-20 h-1 bg-gradient-primary mx-auto rounded-full' />
          {/* <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Latar belakang pendidikan saya
          </p> */}
        </div>

        <div className='grid md:grid-cols-2 gap-6'>
          {educations.map((edu, index) => (
            <Card key={index} className='hover:shadow-lg transition-shadow'>
              <CardHeader>
                <div className='flex items-start gap-4'>
                  {/* <div className='text-4xl'>{edu.icon}</div> */}
                  <div className='flex-1'>
                    <CardTitle className='text-xl mb-2'>
                      {edu.institution}
                    </CardTitle>
                    <p className='text-lg font-semibold text-primary'>
                      {edu.degree}
                    </p>
                    <div className='flex items-center gap-2 text-muted-foreground mt-2'>
                      <Calendar className='h-4 w-4' />
                      <span className='text-sm'>{edu.period}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              {/* <CardContent>
                <p className='text-sm text-muted-foreground'>
                  {edu.description}
                </p>
              </CardContent> */}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
