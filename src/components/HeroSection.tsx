import { ArrowRight, Play, Users, Target, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
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
        <div className="absolute inset-0 hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 section-container text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
            <span className="text-sm font-medium">🚀 Leader nella Trasformazione Digitale PMI</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Trasforma la tua PMI con l'
            <span className="bg-gradient-to-r from-blue-300 to-green-300 bg-clip-text text-transparent">
              Intelligenza Artificiale
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            L'unico partner che unisce tecnologia AI proprietaria, expertise in finanza agevolata 
            e metodologia validata per trasformare le PMI in aziende digitalmente native
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="flex items-center justify-center mb-3">
                <Users className="w-8 h-8 text-blue-300" />
              </div>
              <div className="text-3xl font-bold mb-2">50.000+</div>
              <div className="text-sm text-gray-300">PMI Target in Italia</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="flex items-center justify-center mb-3">
                <Target className="w-8 h-8 text-green-300" />
              </div>
              <div className="text-3xl font-bold mb-2">45%</div>
              <div className="text-sm text-gray-300">Credito Imposta Transizione 5.0</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="flex items-center justify-center mb-3">
                <TrendingUp className="w-8 h-8 text-blue-300" />
              </div>
              <div className="text-3xl font-bold mb-2">8.2%</div>
              <div className="text-sm text-gray-300">PMI che adottano AI oggi</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 group">
              Inizia la Trasformazione
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-lg backdrop-blur-sm group"
            >
              <Play className="mr-2 h-5 w-5" />
              Guarda Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-sm text-gray-300 mb-4">Trusted by</p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-70">
              <span className="text-lg font-semibold">EndUser Italia</span>
              <span className="text-lg font-semibold">PNRR Partner</span>
              <span className="text-lg font-semibold">CNA Collaborator</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;