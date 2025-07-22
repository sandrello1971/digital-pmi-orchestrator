import { Euro, FileText, Calendar, TrendingUp, Award, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const IncentivesSection = () => {
  const incentives = [
    {
      title: 'Piano Transizione 5.0',
      amount: 'Fino al 45%',
      description: 'Credito d\'imposta per investimenti che coniughino digitalizzazione ed efficienza energetica',
      deadline: 'Tutto il 2025',
      icon: TrendingUp,
      color: 'from-green-500 to-green-600',
      benefits: [
        'Credito d\'imposta fino al 45% degli investimenti',
        'Focus su digitalizzazione + sostenibilità',
        'Applicabile a software, hardware e formazione',
        'Procedure semplificate per PMI'
      ],
      eligible: 'PMI manifatturiere e servizi avanzati'
    },
    {
      title: 'Bando PID-NEXT',
      amount: 'Fino al 100%',
      description: 'Contributi per digitalizzazione e innovazione delle PMI',
      deadline: '30 Giugno 2025',
      icon: Award,
      color: 'from-blue-500 to-blue-600',
      benefits: [
        'Finanziamento a fondo perduto fino al 100%',
        'Diagnosi digitale gratuita inclusa',
        'Supporto per implementazione soluzioni',
        'Accompagnamento post-progetto'
      ],
      eligible: 'PMI con 10-249 dipendenti'
    },
    {
      title: 'Nuova Sabatini 2025-2029',
      amount: '€1,7 Miliardi',
      description: 'Finanziamento agevolato per investimenti in beni strumentali e digitali',
      deadline: 'Periodo 2025-2029',
      icon: Euro,
      color: 'from-purple-500 to-purple-600',
      benefits: [
        'Tasso agevolato per finanziamenti',
        'Contributo a fondo perduto aggiuntivo',
        'Procedure digitalizzate e rapide',
        'Esteso a software e tecnologie digitali'
      ],
      eligible: 'Tutte le PMI italiane'
    }
  ];

  const stats = [
    {
      value: '47%',
      label: 'PMI finanziano solo con risorse proprie',
      description: 'Opportunità di ottimizzazione finanziaria'
    },
    {
      value: '<33%',
      label: 'PMI ha usato fondi pubblici nell\'ultimo anno',
      description: 'Ampio margine di miglioramento'
    },
    {
      value: '€1,7B',
      label: 'Disponibili con Nuova Sabatini',
      description: 'Risorse significative sottoutilizzate'
    }
  ];

  return (
    <section id="incentivi" className="py-20 bg-neutral-light/30">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-dark">
            <span className="gradient-text">Incentivi</span> e Finanziamenti
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Opportunità finanziarie eccezionali per accelerare la tua trasformazione digitale. 
            Ti aiutiamo ad accedere a risorse che esistono ma sono sottoutilizzate.
          </p>
        </div>

        {/* Market Opportunity Stats */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-xl p-6 mb-12">
          <h3 className="text-lg font-bold text-red-800 mb-4 flex items-center">
            <TrendingUp className="w-5 h-5 mr-2" />
            Paradosso di Mercato: Opportunità Sottoutilizzata
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-red-700 mb-1">{stat.value}</div>
                <div className="text-sm font-medium text-red-600 mb-1">{stat.label}</div>
                <div className="text-xs text-red-500">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Incentives Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {incentives.map((incentive, index) => {
            const IconComponent = incentive.icon;
            return (
              <Card key={index} className="card-hover">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${incentive.color} flex items-center justify-center`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-neutral-dark">
                    {incentive.title}
                  </CardTitle>
                  <div className="text-3xl font-bold gradient-text">
                    {incentive.amount}
                  </div>
                  <CardDescription className="text-muted-foreground">
                    {incentive.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between bg-accent/10 p-3 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-accent" />
                      <span className="text-sm font-medium">Scadenza:</span>
                    </div>
                    <span className="text-sm font-bold text-accent">{incentive.deadline}</span>
                  </div>

                  <div className="space-y-3">
                    {incentive.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="text-xs text-muted-foreground mb-1">Chi può accedere:</p>
                    <p className="text-sm font-medium text-foreground">{incentive.eligible}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* How We Help */}
        <div className="bg-gradient-card rounded-2xl p-8 mb-12 shadow-medium">
          <h3 className="text-2xl font-bold mb-6 text-center text-neutral-dark">
            Come Ti Aiutiamo ad Accedere agli Incentivi
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Analisi Eligibilità</h4>
              <p className="text-sm text-muted-foreground">
                Verifichiamo tutti i requisiti e identifichiamo gli incentivi applicabili
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Euro className="w-6 h-6 text-accent" />
              </div>
              <h4 className="font-semibold mb-2">Business Case</h4>
              <p className="text-sm text-muted-foreground">
                Costruiamo il business case ottimale con ROI e incentivi integrati
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Gestione Timeline</h4>
              <p className="text-sm text-muted-foreground">
                Coordiniamo i progetti con le scadenze dei bandi per massimizzare l'accesso
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="w-6 h-6 text-accent" />
              </div>
              <h4 className="font-semibold mb-2">Partnership Finanziarie</h4>
              <p className="text-sm text-muted-foreground">
                Collaboriamo con confidi e banche per facilitare l'accesso al credito
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4 text-neutral-dark">
            Calcola i Tuoi Incentivi Disponibili
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Richiedi un'analisi gratuita per scoprire esattamente a quali incentivi 
            può accedere la tua PMI e quanto puoi risparmiare
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-primary">
              Calcola Incentivi Gratuiti
            </Button>
            <Button className="btn-outline">
              Scarica Guida PNRR
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IncentivesSection;