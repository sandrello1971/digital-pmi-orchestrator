import { Mail, Phone, MapPin, Calendar, ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'info@enduser-digital.com',
      description: 'Risposta entro 24 ore'
    },
    {
      icon: Phone,
      title: 'Telefono',
      value: '+39 02 1234 5678',
      description: 'Lun-Ven 9:00-18:00'
    },
    {
      icon: MapPin,
      title: 'Sede',
      value: 'Milano, Italia',
      description: 'Incontri su appuntamento'
    }
  ];

  const consultationOptions = [
    {
      title: 'Consulenza Gratuita',
      duration: '30 minuti',
      description: 'Assessment iniziale e identificazione opportunità',
      icon: MessageCircle,
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Digital Readiness Check',
      duration: '60 minuti',
      description: 'Analisi approfondita del livello di digitalizzazione',
      icon: Calendar,
      color: 'from-green-500 to-green-600'
    }
  ];

  return (
    <section id="contatti" className="py-20 bg-neutral-light/30">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-dark">
            Inizia la Tua <span className="gradient-text">Trasformazione</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Prenota una consulenza gratuita per scoprire come l'AI può trasformare 
            la tua PMI e quali incentivi puoi ottenere
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-neutral-dark">
                  Richiedi Informazioni
                </CardTitle>
                <CardDescription>
                  Compila il form e ti ricontatteremo entro 24 ore per organizzare 
                  una consulenza personalizzata
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Nome *
                    </label>
                    <Input placeholder="Il tuo nome" className="border-input" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Cognome *
                    </label>
                    <Input placeholder="Il tuo cognome" className="border-input" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Email Aziendale *
                  </label>
                  <Input 
                    type="email" 
                    placeholder="nome@azienda.com" 
                    className="border-input" 
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Azienda *
                  </label>
                  <Input placeholder="Nome della tua azienda" className="border-input" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Settore
                    </label>
                    <Input placeholder="es. Manifatturiero" className="border-input" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Numero Dipendenti
                    </label>
                    <Input placeholder="es. 50" className="border-input" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Servizio di Interesse
                  </label>
                  <select className="w-full p-3 border border-input rounded-lg bg-background">
                    <option value="">Seleziona un servizio</option>
                    <option value="ai-starter">AI Starter (€3k-5k)</option>
                    <option value="ai-pilot">AI Pilot (€15k-25k)</option>
                    <option value="ai-partner">AI Partner (€24k-120k/anno)</option>
                    <option value="assessment">Assessment Gratuito</option>
                    <option value="incentivi">Consulenza Incentivi</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Messaggio
                  </label>
                  <Textarea 
                    placeholder="Descrivici le tue esigenze e obiettivi di digitalizzazione..."
                    rows={4}
                    className="border-input"
                  />
                </div>

                <Button className="w-full btn-primary group">
                  Invia Richiesta
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Proteggendo la tua privacy, utilizzeremo i dati solo per rispondere alla tua richiesta. 
                  Consulta la nostra Privacy Policy.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Options */}
          <div className="space-y-8">
            {/* Consultation Options */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-neutral-dark">
                Opzioni di Consulenza
              </h3>
              <div className="space-y-4">
                {consultationOptions.map((option, index) => {
                  const IconComponent = option.icon;
                  return (
                    <Card key={index} className="card-hover">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${option.color} flex items-center justify-center flex-shrink-0`}>
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-bold text-neutral-dark">{option.title}</h4>
                              <span className="text-sm font-medium text-accent">{option.duration}</span>
                            </div>
                            <p className="text-sm text-muted-foreground">{option.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Contact Methods */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-neutral-dark">
                Contatti Diretti
              </h3>
              <div className="space-y-4">
                {contactMethods.map((method, index) => {
                  const IconComponent = method.icon;
                  return (
                    <div key={index} className="flex items-center space-x-4 p-4 bg-gradient-card rounded-lg shadow-soft">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-neutral-dark">{method.title}</h4>
                        <p className="text-sm font-medium text-foreground">{method.value}</p>
                        <p className="text-xs text-muted-foreground">{method.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick CTA */}
            <Card className="bg-gradient-to-r from-primary/5 to-accent/5">
              <CardContent className="p-6 text-center">
                <h4 className="text-lg font-bold mb-3 text-neutral-dark">
                  Hai bisogno di una risposta immediata?
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Prenota direttamente una call di 15 minuti con uno dei nostri esperti
                </p>
                <Button className="btn-secondary w-full">
                  <Calendar className="mr-2 h-4 w-4" />
                  Prenota Call Immediata
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom Trust Indicators */}
        <div className="mt-16 pt-8 border-t border-border text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60">
            <div>
              <div className="text-2xl font-bold text-primary">24h</div>
              <div className="text-sm text-muted-foreground">Tempo di Risposta</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Confidenzialità</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">GDPR</div>
              <div className="text-sm text-muted-foreground">Compliance</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">0€</div>
              <div className="text-sm text-muted-foreground">Prima Consulenza</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;