import { Check, ArrowRight, Zap, Target, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Servizi = () => {
  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="section-container py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            I Nostri Servizi
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Tre pacchetti calibrati sulle reali esigenze delle PMI italiane, dal primo approccio 
            all'AI fino alla trasformazione digitale completa.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-container py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* AI Starter */}
            <div className="bg-card rounded-lg p-8 border border-border card-hover relative">
              <div className="flex items-center justify-center w-16 h-16 bg-accent/10 rounded-lg mb-6">
                <Zap className="w-8 h-8 text-accent" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-foreground">AI Starter</h3>
              <div className="text-sm text-muted-foreground mb-6">4-6 settimane</div>
              
              <p className="text-muted-foreground mb-6">
                Perfetto per il 46% delle PMI che ha interesse ma non ha competenze AI.
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Audit completo delle dimensioni digitali della tua PMI</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Analisi fattibilità per implementazione AI</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Roadmap di base per trasformazione digitale</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Supporto incentivi: identificazione bandi PNRR</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Workshop introduttivo AI per team</span>
                </li>
              </ul>
              
              <Link to="/contatti">
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  Inizia con AI Starter
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            {/* AI Pilot */}
            <div className="bg-card rounded-lg p-8 border-2 border-accent card-hover relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold">
                  Più Richiesto
                </span>
              </div>
              
              <div className="flex items-center justify-center w-16 h-16 bg-accent/10 rounded-lg mb-6">
                <Target className="w-8 h-8 text-accent" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-foreground">AI Pilot</h3>
              <div className="text-sm text-muted-foreground mb-6">5-6 mesi</div>
              
              <p className="text-muted-foreground mb-6">
                Ideale per il 19% delle PMI pronte per implementazioni strutturate.
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Implementazione progetto pilota AI</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Integrazione con sistemi esistenti (CRM, ERP)</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Automazione processi selezionati</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Finanza agevolata: accesso Transizione 5.0 (45% credito)</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Formazione approfondita personale</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Monitoraggio risultati e ottimizzazioni</span>
                </li>
              </ul>
              
              <Link to="/contatti">
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  Scegli AI Pilot
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            {/* AI Partner */}
            <div className="bg-card rounded-lg p-8 border border-border card-hover relative">
              <div className="flex items-center justify-center w-16 h-16 bg-accent/10 rounded-lg mb-6">
                <Rocket className="w-8 h-8 text-accent" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-foreground">AI Partner</h3>
              <div className="text-sm text-muted-foreground mb-6">12 mesi</div>
              
              <p className="text-muted-foreground mb-6">
                Per il 26% delle PMI che vuole integrazione profonda e partnership strategica.
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Partnership strategica continuativa</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Implementazione completa ecosistema AI</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Supporto ongoing e aggiornamenti continui</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Accesso prioritario tecnologie emergenti</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Change management e governance AI</span>
                </li>
              </ul>
              
              <Link to="/contatti">
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  Diventa Partner
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Preview */}
      <section className="bg-card py-20">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Metodologia Digital Readiness 360°</h2>
            <p className="text-lg text-muted-foreground mb-8">
              La nostra metodologia proprietaria sviluppata analizzando i gap identificati dalla ricerca di mercato.
            </p>
            <Link to="/metodologia">
              <Button variant="outline" size="lg" className="border-border text-foreground hover:bg-muted">
                Scopri la Metodologia
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Servizi;