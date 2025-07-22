const Cookie = () => {
  return (
    <div className="pt-20 pb-16 bg-background">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-foreground">Cookie Policy</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-muted-foreground mb-6">
              Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Cosa sono i Cookie</h2>
              <p className="text-muted-foreground">
                I cookie sono piccoli file di testo che vengono memorizzati sul dispositivo 
                dell'utente durante la navigazione su un sito web. Permettono al sito di 
                riconoscere il dispositivo e memorizzare alcune informazioni sulle preferenze dell'utente.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Tipologie di Cookie Utilizzati</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-medium mb-3 text-foreground">Cookie Tecnici (Necessari)</h3>
                <p className="text-muted-foreground mb-4">
                  Essenziali per il funzionamento del sito. Non richiedono consenso.
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Cookie di sessione per la navigazione</li>
                  <li>Cookie per le preferenze sulla privacy</li>
                  <li>Cookie di sicurezza</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-medium mb-3 text-foreground">Cookie Analitici</h3>
                <p className="text-muted-foreground mb-4">
                  Utilizzati per raccogliere informazioni sull'utilizzo del sito.
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Google Analytics (se implementato)</li>
                  <li>Cookie per il monitoraggio delle performance</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-medium mb-3 text-foreground">Cookie di Marketing</h3>
                <p className="text-muted-foreground mb-4">
                  Utilizzati per fornire contenuti pubblicitari personalizzati.
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Cookie per il remarketing</li>
                  <li>Cookie per la profilazione pubblicitaria</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Gestione delle Preferenze</h2>
              <p className="text-muted-foreground mb-4">
                È possibile gestire le preferenze sui cookie attraverso:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Il banner di consenso presente sul sito</li>
                <li>Le impostazioni del browser</li>
                <li>Gli strumenti di opt-out specifici per ciascun servizio</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Cookie di Terze Parti</h2>
              <p className="text-muted-foreground">
                Il nostro sito può contenere cookie di terze parti per servizi di analisi, 
                social media e pubblicità. Questi cookie sono soggetti alle privacy policy 
                delle rispettive terze parti.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Durata dei Cookie</h2>
              <p className="text-muted-foreground mb-4">
                I cookie possono essere:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li><strong>Di sessione:</strong> eliminati automaticamente alla chiusura del browser</li>
                <li><strong>Persistenti:</strong> rimangono memorizzati fino alla data di scadenza o alla cancellazione manuale</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Come Disabilitare i Cookie</h2>
              <p className="text-muted-foreground mb-4">
                È possibile disabilitare i cookie tramite le impostazioni del browser:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li><strong>Chrome:</strong> Impostazioni → Privacy e sicurezza → Cookie</li>
                <li><strong>Firefox:</strong> Opzioni → Privacy e sicurezza → Cookie</li>
                <li><strong>Safari:</strong> Preferenze → Privacy → Cookie</li>
                <li><strong>Edge:</strong> Impostazioni → Privacy → Cookie</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Contatti</h2>
              <p className="text-muted-foreground">
                Per domande sui cookie o per richiedere informazioni, contattaci all'indirizzo: 
                <a href="mailto:privacy@enduser-digital.com" className="text-accent hover:underline ml-1">
                  privacy@enduser-digital.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cookie;