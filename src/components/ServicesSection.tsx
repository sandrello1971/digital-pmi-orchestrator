import { CheckCircle, ArrowRight, Rocket, Zap, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      id: 'starter',
      title: 'AI Starter',
      price: '€3.000 - €5.000',
      duration: '4-6 settimane',
      description: 'Perfetto per PMI che vogliono iniziare il percorso di digitalizzazione',
      icon: Rocket,
      color: 'from-blue-500 to-blue-600',
      features: [
        'Assessment digitale con metodologia proprietaria',
        'Analisi fattibilità per implementazione AI',
        'Roadmap di base per trasformazione digitale',
        'Supporto incentivi PNRR e identificazione bandi',
        'Workshop introduttivo AI per team aziendale',
        'Report dettagliato con scoring e analisi gap'
      ],
      target: '46% delle PMI che ha interesse ma non competenze',
      cta: 'Inizia Ora'
    },
    {
      id: 'pilot',
      title: 'AI Pilot',
      price: '€15.000 - €25.000',
      duration: '5-6 mesi',
      description: 'Per PMI pronte per implementazioni strutturate e progetti pilota',
      icon: Zap,
      color: 'from-green-500 to-green-600',
      popular: true,
      features: [
        'Implementazione progetto pilota AI',
        'Integrazione con sistemi esistenti (CRM, ERP)',
        'Automazione processi selezionati',
        'Accesso a Transizione 5.0 (fino 45% credito imposta)',
        'Formazione approfondita personale',
        'Monitoraggio risultati e ottimizzazioni'
      ],
      target: '19% delle PMI pronte per implementazioni strutturate',
      cta: 'Richiedi Demo'
    },
    {
      id: 'partner',
      title: 'AI Partner',
      price: '€24.000 - €120.000/anno',
      duration: '12 mesi',
      description: 'Partnership strategica per PMI che vogliono integrazione completa',
      icon: Crown,
      color: 'from-purple-500 to-purple-600',
      features: [
        'Partnership strategica continuativa',
        'Implementazione completa ecosistema AI',
        'Supporto ongoing e aggiornamenti continui',
        'Accesso prioritario tecnologie emergenti',
        'Change management e governance AI',
        'Community esclusiva clienti per best practice'
      ],
      target: '26% delle PMI che vuole integrazione profonda',
      cta: 'Diventa Partner'
    }
  ];

  return (
    <section id="servizi" className="py-20 bg-neutral-light/50">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-dark">
            I Nostri <span className="gradient-text">Servizi AI</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tre pacchetti calibrati sulle reali esigenze delle PMI italiane, 
            basati su dati di mercato validati e metodologie proprietarie
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.id} 
                className={`relative card-hover ${service.popular ? 'ring-2 ring-accent scale-105' : ''}`}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold">
                      Più Richiesto
                    </div>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-neutral-dark">
                    {service.title}
                  </CardTitle>
                  <div className="text-3xl font-bold gradient-text">
                    {service.price}
                  </div>
                  <CardDescription className="text-muted-foreground">
                    {service.duration}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>

                  <div className="space-y-3">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="text-xs text-muted-foreground mb-1">Target di Mercato:</p>
                    <p className="text-sm font-medium text-foreground">{service.target}</p>
                  </div>

                  <Button 
                    className={`w-full ${service.popular ? 'btn-secondary' : 'btn-primary'} group`}
                  >
                    {service.cta}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4 text-neutral-dark">
            Non sai quale soluzione fa per te?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Prenota una consulenza gratuita di 30 minuti per identificare il percorso ideale 
            per la tua PMI e scoprire quali incentivi puoi ottenere
          </p>
          <Button className="btn-primary group">
            Consulenza Gratuita
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;