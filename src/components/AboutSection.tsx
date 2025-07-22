import { Building2, Users, Target, Heart, TrendingUp, Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: 'Missione',
      description: 'Trasformare le PMI italiane in aziende digitalmente native attraverso l\'AI'
    },
    {
      icon: Heart,
      title: 'Impegno Sociale',
      description: 'Divulgazione dell\'AI nelle scuole e promozione di un uso corretto ed etico'
    },
    {
      icon: Building2,
      title: 'Expertise',
      description: 'Unica combinazione di tecnologia AI, finanza agevolata e metodologie validate'
    }
  ];

  const stats = [
    {
      value: '240.000+',
      label: 'PMI Target in Italia',
      description: 'Con 10-249 dipendenti'
    },
    {
      value: '76,5%',
      label: 'Occupati nelle PMI',
      description: 'Del totale nazionale'
    },
    {
      value: '65%',
      label: 'Valore Aggiunto',
      description: 'Generato dalle PMI'
    },
    {
      value: '50.000',
      label: 'PMI Evolute',
      description: 'Nostro target primario'
    }
  ];

  const strengths = [
    {
      title: 'Partnership Istituzionali',
      description: 'Collaborazioni con CNA, Confartigianato, Camere di Commercio e network Confidi',
      icon: Award
    },
    {
      title: 'Gruppo EndUser Italia',
      description: 'Sinergie con competenze finance, training e sustainability del gruppo',
      icon: Building2
    },
    {
      title: 'Tecnologia Proprietaria',
      description: 'Piattaforma Intelligence sviluppata specificamente per le PMI italiane',
      icon: TrendingUp
    }
  ];

  return (
    <section id="chi-siamo" className="py-20 bg-background">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-dark">
            Chi è <span className="gradient-text">EndUser Digital</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            La business unit del gruppo EndUser Italia dedicata alla trasformazione digitale delle PMI italiane. 
            Nasce in un momento cruciale della digitalizzazione del paese.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-card rounded-2xl p-8 mb-16 shadow-medium">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-neutral-dark mb-4">La Nostra Visione</h3>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              "Essere il partner definitivo per la trasformazione AI delle PMI italiane, 
              democratizzando l'accesso alle tecnologie avanzate e agli incentivi pubblici 
              per costruire il futuro dell'impresa italiana."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-neutral-dark mb-2">{value.title}</h4>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Market Context */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-neutral-dark">
            Il Contesto di Mercato che Ci Guida
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-gradient-card rounded-lg p-6 shadow-soft">
                <div className="text-2xl md:text-3xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-neutral-dark mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-muted-foreground">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Insights */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 mb-16">
          <h3 className="text-xl font-bold text-blue-800 mb-6 text-center">
            🎯 Il Timing Perfetto per la Trasformazione
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-blue-700 mb-3">Opportunità di Mercato</h4>
              <ul className="space-y-2 text-sm text-blue-600">
                <li>• 54% delle PMI investe nel digitale, ma solo 19% in modo strutturato</li>
                <li>• Adozione AI cresciuta dal 5% all'8,2% in un anno</li>
                <li>• Solo il 25,7% usa strumenti di analisi dati</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-blue-700 mb-3">Sfide da Risolvere</h4>
              <ul className="space-y-2 text-sm text-blue-600">
                <li>• 47% delle PMI ha problemi di connettività</li>
                <li>• 59% denuncia carenza di figure digitali</li>
                <li>• Solo 8% valuta l'impatto del digitale strutturalmente</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Our Strengths */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-neutral-dark">
            I Nostri Punti di Forza
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {strengths.map((strength, index) => {
              const IconComponent = strength.icon;
              return (
                <Card key={index} className="card-hover">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-neutral-dark">
                      {strength.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-muted-foreground">
                      {strength.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Positioning Statement */}
        <div className="text-center bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4 text-neutral-dark">
            "Orchestratore della Trasformazione Digitale PMI"
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-4xl mx-auto">
            Ci posizioniamo come l'unico partner che unisce tecnologia AI proprietaria, 
            expertise in finanza agevolata e metodologia validata per trasformare 
            le PMI in aziende digitalmente native.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white/80 rounded-lg p-4">
              <h4 className="font-bold text-primary mb-2">vs Grandi Consulenze</h4>
              <p className="text-sm text-muted-foreground">Accessibilità e specializzazione PMI</p>
            </div>
            <div className="bg-white/80 rounded-lg p-4">
              <h4 className="font-bold text-primary mb-2">vs Piccoli Consulenti</h4>
              <p className="text-sm text-muted-foreground">Continuità e competenze integrate</p>
            </div>
            <div className="bg-white/80 rounded-lg p-4">
              <h4 className="font-bold text-primary mb-2">vs Vendor Tecnologici</h4>
              <p className="text-sm text-muted-foreground">Soluzione + Servizio personalizzato</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;