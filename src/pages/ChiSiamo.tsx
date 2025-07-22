import { Users, Target, TrendingUp, Shield, BookOpen, Lightbulb } from 'lucide-react';

const ChiSiamo = () => {
  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="section-container py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Chi Siamo
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            EndUser Digital è la business unit del gruppo EndUser Italia dedicata alla 
            trasformazione digitale delle PMI italiane. Nasce in un momento cruciale per 
            accompagnare le aziende nel futuro digitale.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-container py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">La Nostra Missione</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Ci impegniamo nella divulgazione dell'AI nelle scuole e nella promozione di un uso 
              corretto ed etico dell'AI, fornendo alle PMI un ecosistema completo di servizi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg p-8 border border-border card-hover">
              <div className="flex items-center justify-center w-16 h-16 bg-accent/10 rounded-lg mb-6 mx-auto">
                <BookOpen className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center text-foreground">Educazione AI</h3>
              <p className="text-muted-foreground text-center">
                Divulgazione dell'intelligenza artificiale nelle scuole per formare le nuove generazioni.
              </p>
            </div>

            <div className="bg-card rounded-lg p-8 border border-border card-hover">
              <div className="flex items-center justify-center w-16 h-16 bg-accent/10 rounded-lg mb-6 mx-auto">
                <Shield className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center text-foreground">Etica AI</h3>
              <p className="text-muted-foreground text-center">
                Promozione di un uso corretto ed etico dell'intelligenza artificiale nel business.
              </p>
            </div>

            <div className="bg-card rounded-lg p-8 border border-border card-hover">
              <div className="flex items-center justify-center w-16 h-16 bg-accent/10 rounded-lg mb-6 mx-auto">
                <Lightbulb className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center text-foreground">Innovazione</h3>
              <p className="text-muted-foreground text-center">
                Sviluppo di soluzioni innovative per la trasformazione digitale delle PMI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Market Stats */}
      <section className="bg-card py-20">
        <div className="section-container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Il Nostro Contesto</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Operiamo in un mercato in rapida evoluzione con opportunità straordinarie per le PMI italiane.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-20 h-20 bg-accent/10 rounded-full mb-6 mx-auto">
                  <Users className="w-10 h-10 text-accent" />
                </div>
                <div className="text-4xl font-bold mb-2 text-foreground">240.000+</div>
                <div className="text-muted-foreground">PMI in Italia con 10-249 dipendenti</div>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center w-20 h-20 bg-accent/10 rounded-full mb-6 mx-auto">
                  <Target className="w-10 h-10 text-accent" />
                </div>
                <div className="text-4xl font-bold mb-2 text-foreground">54%</div>
                <div className="text-muted-foreground">PMI investe con decisione nel digitale</div>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center w-20 h-20 bg-accent/10 rounded-full mb-6 mx-auto">
                  <TrendingUp className="w-10 h-10 text-accent" />
                </div>
                <div className="text-4xl font-bold mb-2 text-foreground">19%</div>
                <div className="text-muted-foreground">Adotta tecnologie avanzate in modo strutturato</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="section-container py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">I Nostri Valori</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="text-left">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Eccellenza Tecnologica</h3>
              <p className="text-muted-foreground">
                Sviluppiamo soluzioni AI proprietarie all'avanguardia, specificamente progettate 
                per le esigenze delle PMI italiane.
              </p>
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Partnership Strategica</h3>
              <p className="text-muted-foreground">
                Non siamo solo fornitori, ma partner strategici che accompagnano le aziende 
                in ogni fase della trasformazione digitale.
              </p>
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Sostenibilità</h3>
              <p className="text-muted-foreground">
                Integriamo digitalizzazione ed efficienza energetica per un futuro sostenibile, 
                sfruttando gli incentivi del Piano Transizione 5.0.
              </p>
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Impatto Sociale</h3>
              <p className="text-muted-foreground">
                Crediamo nel potere della tecnologia per creare valore sociale, educando le 
                nuove generazioni e supportando l'innovazione etica.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChiSiamo;