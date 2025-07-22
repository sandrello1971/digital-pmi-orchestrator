import { CheckCircle, ArrowRight, Wifi, Users, BarChart, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Metodologia = () => {
  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="section-container py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Metodologia <span className="gradient-text">Digital Readiness 360°</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            La nostra metodologia proprietaria sviluppata analizzando i gap identificati dalla 
            ricerca di mercato per garantire una trasformazione digitale completa e strutturata.
          </p>
        </div>
      </section>

      {/* Methodology Components */}
      <section className="section-container py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">I Tre Pilastri della Metodologia</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Ogni componente risponde ai principali ostacoli identificati nelle PMI italiane.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg p-8 border border-border card-hover">
              <div className="flex items-center justify-center w-16 h-16 bg-accent/10 rounded-lg mb-6 mx-auto">
                <Wifi className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center text-foreground">Assessment Infrastrutturale</h3>
              <p className="text-muted-foreground text-center mb-4">
                Per il 47% delle PMI con problemi di connettività e infrastruttura tecnologica.
              </p>
              <div className="text-sm text-muted-foreground">
                <ul className="space-y-2">
                  <li>• Analisi connettività e performance</li>
                  <li>• Audit sicurezza informatica</li>
                  <li>• Valutazione scalabilità sistemi</li>
                  <li>• Piano di upgrade tecnologico</li>
                </ul>
              </div>
            </div>

            <div className="bg-card rounded-lg p-8 border border-border card-hover">
              <div className="flex items-center justify-center w-16 h-16 bg-accent/10 rounded-lg mb-6 mx-auto">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center text-foreground">Audit delle Competenze</h3>
              <p className="text-muted-foreground text-center mb-4">
                Per il 59% delle PMI con carenza di figure digitali e competenze specifiche.
              </p>
              <div className="text-sm text-muted-foreground">
                <ul className="space-y-2">
                  <li>• Mappatura skill digitali esistenti</li>
                  <li>• Gap analysis competenze AI</li>
                  <li>• Piano formazione personalizzato</li>
                  <li>• Strategie di recruitment digital</li>
                </ul>
              </div>
            </div>

            <div className="bg-card rounded-lg p-8 border border-border card-hover">
              <div className="flex items-center justify-center w-16 h-16 bg-accent/10 rounded-lg mb-6 mx-auto">
                <BarChart className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center text-foreground">Misurazione Impatto</h3>
              <p className="text-muted-foreground text-center mb-4">
                Per l'8% delle PMI che non valuta in modo strutturato l'impatto del digitale.
              </p>
              <div className="text-sm text-muted-foreground">
                <ul className="space-y-2">
                  <li>• KPI e metriche personalizzate</li>
                  <li>• Dashboard real-time risultati</li>
                  <li>• ROI tracking automatizzato</li>
                  <li>• Report periodici impatto business</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="bg-card py-20">
        <div className="section-container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Le 5 Fasi del Processo</h2>
              <p className="text-lg text-muted-foreground">
                Un approccio strutturato e graduale per garantire il successo della trasformazione.
              </p>
            </div>

            <div className="space-y-12">
              {/* Fase 1 */}
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-xl">
                    1
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Digital Readiness Assessment</h3>
                  <p className="text-muted-foreground mb-4">
                    Audit completo con il nostro toolkit proprietario che analizza 12 dimensioni digitali. 
                    Output: scoring, analisi gap e proiezione ROI.
                  </p>
                  <div className="text-sm text-muted-foreground">
                    <strong>Durata:</strong> 2-3 settimane | <strong>Deliverable:</strong> Report + roadmap prioritizzata
                  </div>
                </div>
              </div>

              {/* Fase 2 */}
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-xl">
                    2
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Incentivi e Business Case</h3>
                  <p className="text-muted-foreground mb-4">
                    Analisi eligibilità per Transizione 5.0, PNRR e incentivi regionali. 
                    Business case completo con costi, benefici e timeline progetti.
                  </p>
                  <div className="text-sm text-muted-foreground">
                    <strong>Focus:</strong> Coordinamento con scadenze bandi | <strong>Partner:</strong> Confidi e banche
                  </div>
                </div>
              </div>

              {/* Fase 3 */}
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-xl">
                    3
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Implementation Agile</h3>
                  <p className="text-muted-foreground mb-4">
                    Metodologia Scrum con sprint di 2 settimane. Approccio pilot: MVP → iterazione → scaling. 
                    Change management e formazione parallela.
                  </p>
                  <div className="text-sm text-muted-foreground">
                    <strong>Tracking:</strong> Dashboard real-time | <strong>Approccio:</strong> MVP first
                  </div>
                </div>
              </div>

              {/* Fase 4 */}
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-xl">
                    4
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Training e Adoption</h3>
                  <p className="text-muted-foreground mb-4">
                    Workshop per management su governance AI, user training hands-on, 
                    supporto per superare resistenze interne e certificazione competenze.
                  </p>
                  <div className="text-sm text-muted-foreground">
                    <strong>Certificazione:</strong> Competenze AI certificate | <strong>Support:</strong> Change management
                  </div>
                </div>
              </div>

              {/* Fase 5 */}
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-xl">
                    5
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Miglioramento Continuo</h3>
                  <p className="text-muted-foreground mb-4">
                    Dashboard monitoraggio KPI, review trimestrali, pianificazione espansioni future 
                    e accesso alla community di clienti per condivisione best practice.
                  </p>
                  <div className="text-sm text-muted-foreground">
                    <strong>Frequenza:</strong> Review trimestrali | <strong>Community:</strong> Network clienti
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intelligence Platform Preview */}
      <section className="section-container py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center w-20 h-20 bg-accent/10 rounded-full mb-8 mx-auto">
            <Lightbulb className="w-10 h-10 text-accent" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Piattaforma Intelligence</h2>
          <p className="text-lg text-muted-foreground mb-8">
            In sviluppo per Q4 2025: la prima piattaforma SaaS pensata specificamente per democratizzare 
            l'AI nelle PMI italiane, con integrazione universale e analytics semplificate.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-muted-foreground mb-8">
            <div>
              <CheckCircle className="w-5 h-5 text-accent mx-auto mb-2" />
              <div>Integrazione universale per il 74% con soluzioni base</div>
            </div>
            <div>
              <CheckCircle className="w-5 h-5 text-accent mx-auto mb-2" />
              <div>AI conversazionale per democratizzare l'accesso</div>
            </div>
            <div>
              <CheckCircle className="w-5 h-5 text-accent mx-auto mb-2" />
              <div>Analytics semplificate per il 75% senza strumenti</div>
            </div>
          </div>
          <Link to="/contatti">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              Richiedi Demo della Metodologia
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Metodologia;