import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import SEOHead from '@/components/SEOHead';

const Contatti = () => {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "EndUser Digital",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+39-02-1234-5678",
      "contactType": "customer service",
      "email": "info@enduser-digital.com",
      "availableLanguage": "Italian"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Via dell'Innovazione, 42",
      "addressLocality": "Milano",
      "postalCode": "20123",
      "addressCountry": "IT"
    }
  };

  return (
    <>
      <SEOHead
        title="Contatti - Richiedi Consulenza Gratuita per Trasformazione Digitale PMI"
        description="Contatta EndUser Digital per consulenza gratuita su AI e digitalizzazione PMI. Assessment gratuito, analisi incentivi. Risposta in 24h. Milano +39 02 1234 5678."
        keywords="contatti EndUser Digital, consulenza gratuita PMI, assessment digitale gratuito, contatti trasformazione digitale, Milano consulenza AI"
        canonicalUrl="/contatti"
        structuredData={contactSchema}
      />
      <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="section-container py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Contattaci
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Inizia la trasformazione digitale della tua PMI. Il nostro team di esperti è pronto 
            ad accompagnarti nel percorso verso l'innovazione e l'intelligenza artificiale.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-container py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div className="bg-card rounded-lg p-8 border border-border">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Richiedi Informazioni</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Nome *</label>
                    <Input placeholder="Il tuo nome" className="bg-background border-border" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Cognome *</label>
                    <Input placeholder="Il tuo cognome" className="bg-background border-border" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
                  <Input type="email" placeholder="la-tua-email@esempio.it" className="bg-background border-border" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Telefono</label>
                  <Input type="tel" placeholder="+39 123 456 7890" className="bg-background border-border" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Azienda *</label>
                  <Input placeholder="Nome della tua azienda" className="bg-background border-border" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Settore</label>
                  <Select>
                    <SelectTrigger className="bg-background border-border">
                      <SelectValue placeholder="Seleziona il settore" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="manifatturiero">Manifatturiero</SelectItem>
                      <SelectItem value="servizi">Servizi</SelectItem>
                      <SelectItem value="commercio">Commercio</SelectItem>
                      <SelectItem value="logistica">Logistica</SelectItem>
                      <SelectItem value="costruzioni">Costruzioni</SelectItem>
                      <SelectItem value="altro">Altro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Servizio di Interesse</label>
                  <Select>
                    <SelectTrigger className="bg-background border-border">
                      <SelectValue placeholder="Seleziona il servizio" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ai-starter">AI Starter (€3.000 - €5.000)</SelectItem>
                      <SelectItem value="ai-pilot">AI Pilot (€15.000 - €25.000)</SelectItem>
                      <SelectItem value="ai-partner">AI Partner (€24.000 - €120.000)</SelectItem>
                      <SelectItem value="metodologia">Metodologia Digital Readiness 360°</SelectItem>
                      <SelectItem value="incentivi">Supporto Incentivi e Finanza Agevolata</SelectItem>
                      <SelectItem value="consulenza">Consulenza Generale</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Messaggio</label>
                  <Textarea 
                    placeholder="Descrivi brevemente le tue esigenze e obiettivi di digitalizzazione..."
                    className="bg-background border-border h-32"
                  />
                </div>
                
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  Invia Richiesta
                </Button>
                
                <p className="text-xs text-muted-foreground">
                  * Campi obbligatori. Rispettiamo la tua privacy e utilizziamo i dati solo per rispondere alla tua richiesta.
                </p>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6 text-foreground">Informazioni di Contatto</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg mr-4 flex-shrink-0">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email</h3>
                      <p className="text-muted-foreground">info@enduser-digital.com</p>
                      <p className="text-muted-foreground">digital@enduser-italia.it</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg mr-4 flex-shrink-0">
                      <Phone className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Telefono</h3>
                      <p className="text-muted-foreground">+39 02 1234 5678</p>
                      <p className="text-sm text-muted-foreground">Lun-Ven 9:00-18:00</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg mr-4 flex-shrink-0">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Sede</h3>
                      <p className="text-muted-foreground">
                        Via dell'Innovazione, 42<br />
                        20123 Milano (MI)<br />
                        Italia
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg mr-4 flex-shrink-0">
                      <Clock className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Orari</h3>
                      <p className="text-muted-foreground">
                        Lunedì - Venerdì: 9:00 - 18:00<br />
                        Sabato: 9:00 - 13:00<br />
                        Domenica: Chiuso
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-card rounded-lg p-6 border border-border">
                <h3 className="text-lg font-semibold mb-4 text-foreground">Azioni Rapide</h3>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start border-border text-foreground hover:bg-muted">
                    📊 Richiedi Assessment Gratuito
                  </Button>
                  <Button variant="outline" className="w-full justify-start border-border text-foreground hover:bg-muted">
                    💰 Analisi Incentivi Disponibili
                  </Button>
                  <Button variant="outline" className="w-full justify-start border-border text-foreground hover:bg-muted">
                    🎯 Demo Piattaforma Intelligence
                  </Button>
                  <Button variant="outline" className="w-full justify-start border-border text-foreground hover:bg-muted">
                    📞 Prenota Consulenza Strategica
                  </Button>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-accent/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2 text-foreground">Tempi di Risposta</h3>
                <p className="text-muted-foreground text-sm">
                  Ci impegniamo a rispondere entro <strong>24 ore</strong> durante i giorni lavorativi. 
                  Per richieste urgenti, contattaci telefonicamente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default Contatti;