import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { X } from "lucide-react";

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowConsent(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-md animate-in slide-in-from-bottom-5">
      <div className="bg-card/95 backdrop-blur-sm border border-border rounded-lg shadow-elegant p-6">
        <div className="flex items-start justify-between mb-4">
          <h3 className="font-semibold text-foreground">Cookie Consent</h3>
          <button
            onClick={handleDecline}
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <p className="text-sm text-muted-foreground mb-6">
          We use cookies to enhance your experience. Read our{" "}
          <a href="/cookie-policy" className="text-primary hover:underline">
            Cookie Policy
          </a>.
        </p>
        <div className="flex gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={handleDecline}
            className="flex-1"
          >
            Decline
          </Button>
          <Button
            size="sm"
            onClick={handleAccept}
            className="flex-1"
          >
            Accept All
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
