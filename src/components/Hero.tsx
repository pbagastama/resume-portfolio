import { ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Gradient orbs background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="container relative z-10 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4 animate-fade-in">
            <p className="text-primary text-lg font-medium tracking-wide">Hello, I'm</p>
            <h1 className="text-6xl md:text-8xl font-bold text-foreground tracking-tight">
              Bagas Pratama
            </h1>
            <div className="relative inline-block">
              <h2 className="text-3xl md:text-5xl font-light text-muted-foreground">
                Frontend Web Developer
              </h2>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-primary rounded-full" />
            </div>
          </div>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-delay">
            Crafting exceptional digital experiences with React, Next.js, and modern web technologies. 
            Passionate about building scalable, performant applications.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in-delay">
            <Button 
              variant="default" 
              size="lg" 
              className="bg-gradient-primary text-background font-semibold hover:opacity-90 transition-opacity group"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-border hover:bg-secondary transition-colors"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6 pt-8 animate-fade-in-delay">
            <a 
              href="https://github.com/pbagastama" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://linkedin.com/in/pbagastama" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="https://twitter.com/pbagastama" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-6 w-6" />
            </a>
            <a 
              href="mailto:bagasp837@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
