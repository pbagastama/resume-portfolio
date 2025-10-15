import { Mail, MapPin, Phone, Github, Linkedin, Twitter, Instagram, Facebook } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "bagasp837@gmail.com",
      href: "mailto:bagasp837@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bekasi - Jakarta",
      href: null,
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+62 896 3788 9438",
      href: "tel:+6289637889438",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/pbagastama",
      username: "pbagastama",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/pbagastama",
      username: "pbagastama",
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com/pbagastama",
      username: "@pbagastama",
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://instagram.com/pbagastama",
      username: "@pbagastama",
    },
    {
      icon: Facebook,
      label: "Facebook",
      href: "https://facebook.com/pbagastama",
      username: "pbagastama",
    },
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground">
              Let's Connect
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or just want to chat? Feel free to reach out!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Get In Touch</h3>
                <div className="space-y-4">
                  {contactInfo.map((item) => {
                    const Icon = item.icon;
                    const content = (
                      <div className="flex items-start gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-all hover:shadow-glow">
                        <div className="bg-secondary p-3 rounded-lg">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{item.label}</p>
                          <p className="text-foreground font-medium">{item.value}</p>
                        </div>
                      </div>
                    );

                    return item.href ? (
                      <a key={item.label} href={item.href} className="block">
                        {content}
                      </a>
                    ) : (
                      <div key={item.label}>{content}</div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Follow Me</h3>
                <div className="space-y-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-all hover:shadow-glow group"
                      >
                        <div className="bg-secondary p-3 rounded-lg group-hover:bg-gradient-primary transition-all">
                          <Icon className="h-5 w-5 text-primary group-hover:text-background transition-colors" />
                        </div>
                        <div className="flex-1">
                          <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                            {social.label}
                          </p>
                          <p className="text-sm text-muted-foreground">{social.username}</p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
