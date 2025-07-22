import { Search, Target, Wrench, GraduationCap, TrendingUp, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const MethodologySection = () => {
  const phases = [
    {
      phase: '01',
      title: 'Digital Readiness Assessment',
      icon: Search,
      duration: '2-3 settimane',
      description: 'Audit completo delle 12 dimensioni digitali della tua PMI',
      details: [
        'Toolkit proprietario per analisi approfondita',
        'Scoring dettagliato e analisi gap tecnologici',
        'Proiezione ROI basata su KPI aziendali',
        'Report strategico con roadmap prioritizzata'
      ],
      stats: '47% PMI con problemi di connettività identificati'
    },
    {
      phase: '02',
      title: 'Incentivi e Business Case',
      icon: Target,
      duration: '1-2 settimane',
      description: 'Massimizzazione degli incentivi disponibili per il tuo progetto',
      details: [
        'Analisi eligibilità Transizione 5.0 e PNRR',
        'Business case completo con costi/benefici',
        'Timeline progetti coordinata con scadenze bandi',
        'Partnership con confidi e banche convenzionate'
      ],
      stats: 'Fino al 45% di credito imposta Transizione 5.0'
    },
    {
      phase: '03',
      title: 'Implementation Agile',
      icon: Wrench,
      duration: '3-6 mesi',
      description: 'Implementazione con metodologia Scrum e approccio pilot-first',
      details: [
        'Sprint da 2 settimane con feedback continuo',
        'Approccio MVP → iterazione → scaling',
        'Change management parallelo all\'implementazione',
        'Dashboard real-time per tracking KPI'
      ],
      stats: '26% delle PMI raggiunge integrazione profonda'
    },
    {
      phase: '04',
      title: 'Training e Adoption',
      icon: GraduationCap,
      duration: '2-4 settimane',
      description: 'Formazione intensiva per massimizzare l\'adozione interna',
      details: [
        'Workshop management per governance AI',
        'Training hands-on su strumenti implementati',
        'Supporto change per superare resistenze',
        'Certification program per competenze validate'
      ],
      stats: '59% PMI carenti di figure digitali supportate'
    },
    {
      phase: '05',
      title: 'Miglioramento Continuo',
      icon: TrendingUp,
      duration: 'Ongoing',
      description: 'Monitoraggio e ottimizzazione continua dei risultati',
      details: [
        'Dashboard KPI business e technical',
        'Review trimestrale con ottimizzazioni',
        'Pianificazione espansione e nuovi step',
        'Community clienti per condivisione best practice'
      ],
      stats: 'Solo l\'8% PMI valuta impatti in modo strutturato'
    }
  ];

  return (
    <section id="metodologia" className="py-20 bg-background">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-dark">
            Metodologia <span className="gradient-text">Digital Readiness 360°</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            La nostra metodologia proprietaria sviluppata analizzando i gap identificati 
            dalla ricerca di mercato sulle PMI italiane
          </p>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="text-center bg-gradient-card rounded-lg p-6 shadow-soft">
            <div className="text-3xl font-bold text-primary mb-2">47%</div>
            <div className="text-sm text-muted-foreground">PMI con problemi infrastrutturali</div>
          </div>
          <div className="text-center bg-gradient-card rounded-lg p-6 shadow-soft">
            <div className="text-3xl font-bold text-accent mb-2">59%</div>
            <div className="text-sm text-muted-foreground">PMI con carenza figure digitali</div>
          </div>
          <div className="text-center bg-gradient-card rounded-lg p-6 shadow-soft">
            <div className="text-3xl font-bold text-primary mb-2">8%</div>
            <div className="text-sm text-muted-foreground">PMI che valutano impatti strutturati</div>
          </div>
        </div>

        {/* Methodology Phases */}
        <div className="space-y-8">
          {phases.map((phase, index) => {
            const IconComponent = phase.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={phase.phase}
                className={`flex flex-col lg:flex-row items-center gap-8 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              >
                {/* Content Card */}
                <div className="flex-1">
                  <Card className="card-hover">
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-full">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-muted-foreground">
                            FASE {phase.phase}
                          </div>
                          <CardTitle className="text-xl font-bold text-neutral-dark">
                            {phase.title}
                          </CardTitle>
                        </div>
                        <div className="ml-auto text-sm text-accent font-semibold">
                          {phase.duration}
                        </div>
                      </div>
                      <CardDescription className="text-base text-muted-foreground">
                        {phase.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {phase.details.map((detail, idx) => (
                          <div key={idx} className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-foreground">{detail}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="bg-accent/10 border-l-4 border-accent p-4 rounded-r-lg">
                        <p className="text-sm font-medium text-accent">
                          💡 Insight di Mercato: {phase.stats}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Phase Number Circle */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center shadow-medium">
                    <span className="text-2xl font-bold text-white">{phase.phase}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Call-to-Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4 text-neutral-dark">
            Scopri il Livello di Digital Readiness della Tua PMI
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Richiedi il nostro assessment gratuito per identificare le opportunità 
            di digitalizzazione e gli incentivi disponibili per la tua azienda
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Assessment Gratuito
            </button>
            <button className="btn-outline">
              Scarica Metodologia
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;