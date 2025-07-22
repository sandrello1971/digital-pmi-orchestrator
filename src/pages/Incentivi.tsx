import { Euro, TrendingUp, FileCheck, Calculator } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Incentivi = () => {
  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="section-container py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Incentivi e <span className="gradient-text">Finanza Agevolata</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Opportunità finanziarie eccezionali per la trasformazione digitale della tua PMI. 
            Ti accompagniamo nell'accesso ai fondi pubblici disponibili.
          </p>
        </div>
      </section>

      {/* Main Incentives */}
      <section className="section-container py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Opportunità 2025-2026</h2>
            <p className="text-lg text-muted-foreground">
              I principali incentivi attivi per digitalizzazione ed efficienza energetica.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Transizione 5.0 */}
            <div className="bg-card rounded-lg p-8 border-2 border-accent card-hover">
              <div className="flex items-center justify-center w-16 h-16 bg-accent/10 rounded-lg mb-6">
                <Euro className="w-8 h-8 text-accent" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-foreground">Piano Transizione 5.0</h3>
              <div className="text-3xl font-bold mb-4 text-accent">Fino al 45%</div>
              <p className="text-muted-foreground mb-6">
                Crediti d'imposta per investimenti che coniughino digitalizzazione ed efficienza energetica.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-sm text-muted-foreground">Valido per tutto il 2025</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-sm text-muted-foreground">Combinazione digitalizzazione + sostenibilità</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-sm text-muted-foreground">Credito d'imposta utilizzabile in 5 anni</span>
                </div>
              </div>
              
              <div className="bg-accent/10 rounded-lg p-4 mb-6">
                <h4 className="font-semibold text-foreground mb-2">Esempio Pratico</h4>
                <p className="text-sm text-muted-foreground">
                  Investimento €50.000 in AI + efficienza energetica = €22.500 di credito d'imposta
                </p>
              </div>
            </div>

            {/* PID-NEXT */}
            <div className="bg-card rounded-lg p-8 border border-border card-hover">
              <div className="flex items-center justify-center w-16 h-16 bg-accent/10 rounded-lg mb-6">
                <FileCheck className="w-8 h-8 text-accent" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-foreground">Bando PID-NEXT</h3>
              <div className="text-3xl font-bold mb-4 text-accent">Fino al 100%</div>
              <p className="text-muted-foreground mb-6">
                Contributi per le PMI con scadenza 30 giugno 2025. Supporto completo per diagnosi e implementazione.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-sm text-muted-foreground">Scadenza: 30 giugno 2025</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-sm text-muted-foreground">Diagnosi digitale gratuita</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-sm text-muted-foreground">Implementazione progetti digitali</span>
                </div>
              </div>
            </div>

            {/* Nuova Sabatini */}
            <div className="bg-card rounded-lg p-8 border border-border card-hover">
              <div className="flex items-center justify-center w-16 h-16 bg-accent/10 rounded-lg mb-6">
                <TrendingUp className="w-8 h-8 text-accent" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-foreground">Nuova Sabatini</h3>
              <div className="text-3xl font-bold mb-4 text-accent">€1,7 Miliardi</div>
              <p className="text-muted-foreground mb-6">
                Rifinanziata per il periodo 2025-2029. Contributi per investimenti in tecnologie digitali e beni strumentali.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-sm text-muted-foreground">Periodo: 2025-2029</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-sm text-muted-foreground">Finanziamento agevolato beni strumentali</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-sm text-muted-foreground">Focus su innovazione tecnologica</span>
                </div>
              </div>
            </div>

            {/* PNRR */}
            <div className="bg-card rounded-lg p-8 border border-border card-hover">
              <div className="flex items-center justify-center w-16 h-16 bg-accent/10 rounded-lg mb-6">
                <Calculator className="w-8 h-8 text-accent" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-foreground">PNRR e Incentivi Regionali</h3>
              <div className="text-3xl font-bold mb-4 text-accent">Vari %</div>
              <p className="text-muted-foreground mb-6">
                Molteplici opportunità a livello nazionale e regionale per digitalizzazione e innovazione delle PMI.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-sm text-muted-foreground">Bandi specifici per settore</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-sm text-muted-foreground">Incentivi regionali complementari</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-sm text-muted-foreground">Combinazione con altri incentivi</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Paradox Section */}
      <section className="bg-card py-20">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Il Paradosso di Mercato</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-background rounded-lg p-6 border border-border">
                <div className="text-4xl font-bold text-accent mb-2">47%</div>
                <div className="text-foreground font-semibold mb-2">PMI usa solo risorse proprie</div>
                <div className="text-sm text-muted-foreground">
                  Quasi la metà delle PMI ha sostenuto le spese di digitalizzazione esclusivamente con risorse proprie
                </div>
              </div>
              <div className="bg-background rounded-lg p-6 border border-border">
                <div className="text-4xl font-bold text-accent mb-2">&lt;33%</div>
                <div className="text-foreground font-semibold mb-2">Ha utilizzato fondi pubblici</div>
                <div className="text-sm text-muted-foreground">
                  Meno di un terzo ha attinto a fondi pubblici per la digitalizzazione nell'ultimo anno
                </div>
              </div>
            </div>
            <p className="text-lg text-muted-foreground mb-8">
              <strong>Questo divario rappresenta la nostra principale opportunità:</strong> possiamo aiutare le PMI 
              ad accedere a risorse che già esistono ma sono sottoutilizzate.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Non Perdere le Opportunità</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Ti accompagniamo nell'analisi di eligibilità, preparazione della documentazione e 
            ottimizzazione del business case per massimizzare i benefici degli incentivi disponibili.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contatti">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Richiedi Analisi Incentivi Gratuita
              </Button>
            </Link>
            <Link to="/servizi">
              <Button variant="outline" size="lg" className="border-border text-foreground hover:bg-muted">
                Scopri i Nostri Servizi
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Incentivi;