import { Mail, Phone, MapPin, Linkedin, Twitter, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoTransparent from '@/assets/EUDLOGObianco.png';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Servizi', href: '#servizi' },
    { name: 'Metodologia', href: '#metodologia' },
    { name: 'Incentivi', href: '#incentivi' },
    { name: 'Chi Siamo', href: '#chi-siamo' }
  ];

  const services = [
    { name: 'AI Starter', href: '#servizi' },
    { name: 'AI Pilot', href: '#servizi' },
    { name: 'AI Partner', href: '#servizi' },
    { name: 'Assessment Gratuito', href: '#contatti' }
  ];

  const resources = [
    { name: 'Guida PNRR', href: '#' },
    { name: 'Transizione 5.0', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Casi Studio', href: '#' }
  ];

  return (
    <footer className="bg-neutral-dark text-white">
      {/* Main Footer */}
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img
                src={logoTransparent}
                alt="EndUser Digital"
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              La business unit del gruppo EndUser Italia dedicata alla trasformazione 
              digitale delle PMI italiane attraverso l'Intelligenza Artificiale.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-accent" />
                <span className="text-sm text-gray-300">info@enduser-digital.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-accent" />
                <span className="text-sm text-gray-300">+39 02 1234 5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-accent" />
                <span className="text-sm text-gray-300">Milano, Italia</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Navigazione</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-accent transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a 
                  href="#contatti"
                  className="text-gray-300 hover:text-accent transition-colors duration-200 text-sm"
                >
                  Contatti
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Servizi</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a 
                    href={service.href}
                    className="text-gray-300 hover:text-accent transition-colors duration-200 text-sm"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6">Risorse</h3>
            <ul className="space-y-3 mb-6">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <a 
                    href={resource.href}
                    className="text-gray-300 hover:text-accent transition-colors duration-200 text-sm"
                  >
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Newsletter Signup */}
            <div className="bg-white/5 p-4 rounded-lg">
              <h4 className="font-semibold mb-2 text-sm">Newsletter</h4>
              <p className="text-xs text-gray-400 mb-3">
                Aggiornamenti su AI, incentivi e digitalizzazione PMI
              </p>
              <div className="flex space-x-2">
                <input 
                  type="email" 
                  placeholder="La tua email"
                  className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <Button size="sm" className="bg-accent hover:bg-accent/90 text-white">
                  Iscriviti
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="section-container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-gray-400">
              © 2025 EndUser Digital. Tutti i diritti riservati.
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                Cookie Policy
              </a>
            </div>

            {/* Social Links & Back to Top */}
            <div className="flex items-center space-x-4">
              <a 
                href="#" 
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <button 
                onClick={scrollToTop}
                className="w-8 h-8 bg-accent rounded-full flex items-center justify-center hover:bg-accent/90 transition-colors"
                aria-label="Torna su"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Gruppo EndUser Credit */}
      <div className="bg-white/5 border-t border-white/10">
        <div className="section-container py-3">
          <div className="text-center text-xs text-gray-500">
            Una società del <span className="text-accent font-semibold">Gruppo EndUser Italia</span> 
            {" "}- Specialisti in Finance, Training e Digital Transformation
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;