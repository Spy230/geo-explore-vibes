import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";

interface ConsentCheckboxesProps {
  onConsentChange?: (consents: {
    terms: boolean;
    privacy: boolean;
    marketing: boolean;
  }) => void;
  showMarketing?: boolean;
  className?: string;
}

const ConsentCheckboxes = ({ 
  onConsentChange, 
  showMarketing = true, 
  className = "" 
}: ConsentCheckboxesProps) => {
  const [consents, setConsents] = useState({
    terms: false,
    privacy: false,
    marketing: false,
  });

  const handleConsentChange = (type: keyof typeof consents, checked: boolean) => {
    const newConsents = { ...consents, [type]: checked };
    setConsents(newConsents);
    onConsentChange?.(newConsents);
  };

  return (
    <div className={`space-y-3 ${className}`}>
      {/* Согласие с офертой */}
      <div className="flex items-start space-x-2">
        <Checkbox
          id="terms-consent"
          checked={consents.terms}
          onCheckedChange={(checked) => 
            handleConsentChange('terms', checked as boolean)
          }
          className="mt-1"
        />
        <label htmlFor="terms-consent" className="text-sm leading-relaxed" style={{ color: '#d4c4b0' }}>
          Я принимаю условия{" "}
          <Link 
            to="/legal/terms" 
            className="hover:underline"
            target="_blank"
            style={{ color: '#7a6145' }}
          >
            публичной оферты
          </Link>
        </label>
      </div>

      {/* Согласие на обработку персональных данных */}
      <div className="flex items-start space-x-2">
        <Checkbox
          id="privacy-consent"
          checked={consents.privacy}
          onCheckedChange={(checked) => 
            handleConsentChange('privacy', checked as boolean)
          }
          className="mt-1"
        />
        <label htmlFor="privacy-consent" className="text-sm leading-relaxed" style={{ color: '#d4c4b0' }}>
          Я даю{" "}
          <Link 
            to="/legal/data-processing" 
            className="hover:underline"
            target="_blank"
            style={{ color: '#7a6145' }}
          >
            согласие на обработку персональных данных
          </Link>
          {" "}в соответствии с{" "}
          <Link 
            to="/legal/privacy" 
            className="hover:underline"
            target="_blank"
            style={{ color: '#7a6145' }}
          >
            политикой конфиденциальности
          </Link>
        </label>
      </div>

      {/* Согласие на рекламную рассылку (опционально) */}
      {showMarketing && (
        <div className="flex items-start space-x-2">
          <Checkbox
            id="marketing-consent"
            checked={consents.marketing}
            onCheckedChange={(checked) => 
              handleConsentChange('marketing', checked as boolean)
            }
            className="mt-1"
          />
          <label htmlFor="marketing-consent" className="text-sm leading-relaxed" style={{ color: '#d4c4b0' }}>
            Я даю{" "}
            <Link 
              to="/legal/marketing" 
              className="hover:underline"
              target="_blank"
              style={{ color: '#7a6145' }}
            >
              согласие на рекламную рассылку
            </Link>
            {" "}(необязательно)
          </label>
        </div>
      )}
    </div>
  );
};

export default ConsentCheckboxes;
