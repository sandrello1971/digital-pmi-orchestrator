import { ArrowRight, Play, Users, Target, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src="http://enduser-digital.com/wp-content/uploads/2024/09/Copy-of-Untitled-Project-1.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 section-container text-center text-white pt-20">
          <div className="max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <span className="text-sm font-medium">🚀 Leader nella Trasformazione Digitale PMI</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-3 leading-tight">
              Trasforma la tua PMI con l'
              <span className="gradient-text">
                Intelligenza Artificiale
              </span>
            </h1>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Link to="/servizi">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-4 text-lg font-semibold rounded-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 group">
                  Inizia la Trasformazione
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white/30 text-white hover:bg-white/10 hover:text-white px-8 py-4 text-lg font-semibold rounded-lg backdrop-blur-sm group"
              >
                <Play className="mr-2 h-5 w-5" />
                Guarda Demo
              </Button>
            </div>

            {/* Value Proposition */}
            <div className="text-center">
              <p className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                L'unico partner che unisce tecnologia AI proprietaria, expertise in finanza agevolata e metodologia 
                validata per trasformare le PMI in aziende digitalmente native
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Moved outside hero */}
      <section className="py-16 bg-background/95">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">50.000+</div>
              <p className="text-muted-foreground">PMI Target in Italia</p>
            </div>
            <div className="text-center bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">45%</div>
              <p className="text-muted-foreground">Credito Imposta Transizione 5.0</p>
            </div>
            <div className="text-center bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">8.2%</div>
              <p className="text-muted-foreground">PMI che adottano AI oggi</p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Sections */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Perché Scegliere EndUser Digital?
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              Siamo l'unico partner che combina tecnologia proprietaria, expertise finanziaria 
              e metodologia validata per la trasformazione digitale delle PMI italiane.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;