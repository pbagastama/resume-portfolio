const About = () => {
  const skills = [
    "React & Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Laravel",
    "Magento",
    "Strapi",
    "WordPress",
    "Redux",
    "Gatsby.js",
    "Material-UI",
    "Bootstrap"
  ];

  return (
    <section className="py-24 relative">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate <span className="text-primary font-semibold">Frontend Web Developer</span> based in Bekasi - Jakarta, 
                with extensive experience in building modern, scalable web applications.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My expertise lies in creating exceptional user experiences using cutting-edge technologies. 
                I've worked on diverse projects ranging from digital travel platforms to corporate websites, 
                always focusing on performance, accessibility, and beautiful design.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I thrive on solving complex problems and transforming ideas into reality through clean, 
                maintainable code. Whether it's a complete website revamp or building features from scratch, 
                I'm committed to delivering high-quality solutions.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground mb-6">Skills & Technologies</h3>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <div
                    key={skill}
                    className="bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-all hover:shadow-glow cursor-default group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="text-foreground font-medium group-hover:text-primary transition-colors">
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
