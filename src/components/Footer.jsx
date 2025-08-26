import { ArrowUp, Linkedin, Instagram, Facebook, Github } from "lucide-react";

export const Footer = () => {
  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-card border-t border-border mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">

          {/* Navigation links */}
          <nav className="order-2 md:order-1 w-full md:w-auto">
            <ul className="flex flex-wrap justify-center md:justify-start gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-foreground/90 hover:text-primary transition-colors text-sm px-2 py-1"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social + action */}
          <div className="order-1 md:order-2 w-full md:w-auto flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-full text-foreground/90 hover:text-primary transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2 rounded-full text-foreground/90 hover:text-primary transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-2 rounded-full text-foreground/90 hover:text-primary transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-full text-foreground/90 hover:text-primary transition-colors"
              >
                <Github size={18} />
              </a>
            </div>

            <a
              href="#hero"
              className="ml-0 md:ml-2 p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp size={18} />
            </a>
          </div>
        </div>

        <div className="mt-6 text-center md:text-left">
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} AmrRadi.co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};