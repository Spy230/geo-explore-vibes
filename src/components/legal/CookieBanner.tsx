import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Проверяем, было ли уже дано согласие на cookie
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      // Небольшая задержка для лучшего UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  // Функция для сброса согласия (для тестирования)
  // Можно вызвать в консоли: window.resetCookieConsent()
  useEffect(() => {
    (window as any).resetCookieConsent = () => {
      localStorage.removeItem('cookieConsent');
      setIsVisible(true);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 shadow-lg z-50" style={{
      background: 'rgba(0, 0, 0, 0.9)',
      backdropFilter: 'blur(10px)',
      borderTop: '1px solid rgba(128, 128, 128, 0.3)'
    }}>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm" style={{ color: '#d4c4b0' }}>
            Мы используем файлы cookie для улучшения работы сайта, анализа трафика и персонализации контента. 
            Продолжая использовать сайт, вы соглашаетесь с использованием cookie в соответствии с нашей 
            политикой конфиденциальности.
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={handleDecline}
            style={{
              borderColor: 'rgba(128, 128, 128, 0.3)',
              color: '#a08670',
              background: 'transparent'
            }}
          >
            Отклонить
          </Button>
          <Button
            size="sm"
            onClick={handleAccept}
            style={{
              background: 'linear-gradient(135deg, #6b5439, #7a6145)',
              color: 'white'
            }}
          >
            Принять
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleDecline}
            style={{ color: '#a08670' }}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
