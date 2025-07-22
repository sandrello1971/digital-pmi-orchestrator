import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const GDPRBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('gdpr-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('gdpr-consent', 'accepted');
    setIsVisible(false);
  };

  const acceptNecessary = () => {
    localStorage.setItem('gdpr-consent', 'necessary');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border p-4 shadow-lg">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm text-foreground">
              Utilizziamo cookie tecnici e di terze parti per migliorare la tua esperienza di navigazione.{' '}
              <Link to="/privacy" className="text-accent hover:underline">
                Leggi la Privacy Policy
              </Link>{' '}
              e la{' '}
              <Link to="/cookie" className="text-accent hover:underline">
                Cookie Policy
              </Link>.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={acceptNecessary}
              className="text-xs"
            >
              Solo Necessari
            </Button>
            <Button
              size="sm"
              onClick={acceptAll}
              className="btn-primary text-xs"
            >
              Accetta Tutti
            </Button>
            <button
              onClick={() => setIsVisible(false)}
              className="p-1 hover:bg-muted rounded"
              aria-label="Chiudi banner"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GDPRBanner;