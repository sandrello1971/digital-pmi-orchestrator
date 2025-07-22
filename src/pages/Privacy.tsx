import SEOHead from '@/components/SEOHead';

const Privacy = () => {
  return (
    <>
      <SEOHead
        title="Privacy Policy - Protezione Dati EndUser Digital"
        description="Privacy Policy di EndUser Digital: come trattiamo i tuoi dati personali, finalità, diritti dell'interessato. Conformità GDPR per servizi di trasformazione digitale."
        keywords="privacy policy EndUser Digital, GDPR, protezione dati, trattamento dati personali, diritti interessato"
        canonicalUrl="/privacy"
      />
      <div className="pt-20 pb-16 bg-background">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-foreground">Privacy Policy</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-muted-foreground mb-6">
              Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Titolare del Trattamento</h2>
              <p className="text-muted-foreground">
                Il Titolare del trattamento dei dati è EndUser Digital, con sede in [Indirizzo], 
                email: privacy@enduser-digital.com
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Tipologie di Dati Raccolti</h2>
              <p className="text-muted-foreground mb-4">
                Raccogliamo le seguenti tipologie di dati:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Dati di contatto (nome, email, telefono)</li>
                <li>Dati aziendali (ragione sociale, settore, dimensioni)</li>
                <li>Dati di navigazione (cookies tecnici)</li>
                <li>Dati di utilizzo dei servizi</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Finalità del Trattamento</h2>
              <p className="text-muted-foreground mb-4">
                I dati vengono trattati per le seguenti finalità:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Erogazione dei servizi di consulenza digitale</li>
                <li>Gestione delle richieste di contatto</li>
                <li>Invio di comunicazioni commerciali (previo consenso)</li>
                <li>Miglioramento dei servizi offerti</li>
                <li>Adempimenti di legge</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Base Giuridica</h2>
              <p className="text-muted-foreground">
                Il trattamento si basa su: esecuzione contrattuale, consenso dell'interessato, 
                interesse legittimo del titolare, adempimento di obblighi di legge.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Diritti dell'Interessato</h2>
              <p className="text-muted-foreground mb-4">
                Gli interessati hanno diritto a:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Accesso ai propri dati personali</li>
                <li>Rettifica dei dati inesatti</li>
                <li>Cancellazione dei dati</li>
                <li>Limitazione del trattamento</li>
                <li>Portabilità dei dati</li>
                <li>Opposizione al trattamento</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Conservazione dei Dati</h2>
              <p className="text-muted-foreground">
                I dati vengono conservati per il tempo strettamente necessario alle finalità 
                per cui sono stati raccolti e comunque nel rispetto delle normative vigenti.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Contatti</h2>
              <p className="text-muted-foreground">
                Per esercitare i propri diritti o per qualsiasi informazione relativa al 
                trattamento dei dati, è possibile contattarci all'indirizzo: 
                <a href="mailto:privacy@enduser-digital.com" className="text-accent hover:underline ml-1">
                  privacy@enduser-digital.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Privacy;