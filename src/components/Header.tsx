const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 glass-card border-b border-glass-border animate-slide-in-up">
      <div className="w-full px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Мобильная версия - вертикальная компоновка */}
          <div className="block sm:hidden w-full">
            <div className="flex flex-col items-center mb-2">
              <img
                src="https://a.imgfoto.host/2025/07/30/LOGO.png"
                alt="Phoenix Logo"
                className="h-12 w-auto mb-2"
                style={{
                  filter: 'drop-shadow(0 0 15px #FFD700) drop-shadow(0 0 25px #FFA500)',
                  maxWidth: '60px'
                }}
              />
              <h1
                className="text-lg font-bold animate-fade-in-scale text-center"
                style={{
                  color: '#b8956f',
                  textShadow: '0 0 10px rgba(184, 149, 111, 0.3)'
                }}
              >
                PHENIX PROJECT
              </h1>
            </div>
            <div className="flex items-center justify-center space-x-3 text-xs">
              <a
                href="tel:+79023845591"
                className="transition-colors px-2 py-1 rounded"
                style={{ color: '#d4c4b0', background: 'rgba(212, 196, 176, 0.1)' }}
              >
                📞
              </a>
              <a
                href="https://wa.me/79023889482"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors px-2 py-1 rounded"
                style={{ color: '#25D366', background: 'rgba(37, 211, 102, 0.1)' }}
              >
                💬
              </a>
              <a
                href="https://t.me/+79023889482"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors px-2 py-1 rounded"
                style={{ color: '#0088cc', background: 'rgba(0, 136, 204, 0.1)' }}
              >
                ✈️
              </a>
            </div>
          </div>

          {/* Десктопная версия - горизонтальная компоновка */}
          <div className="hidden sm:flex items-center justify-between w-full">
            <div className="flex-1 flex justify-start">
              <h1
                className="text-2xl lg:text-3xl font-bold animate-fade-in-scale"
                style={{
                  color: '#b8956f',
                  textShadow: '0 0 10px rgba(184, 149, 111, 0.3)'
                }}
              >
                PHENIX PROJECT
              </h1>
            </div>

            <div className="absolute left-1/2 transform -translate-x-1/2 flex justify-center items-center">
              <img
                src="https://a.imgfoto.host/2025/07/30/LOGO.png"
                alt="Phoenix Logo"
                className="h-12 lg:h-16 w-auto hidden sm:animate-float"
                style={{
                  filter: 'drop-shadow(0 0 15px #FFD700) drop-shadow(0 0 25px #FFA500)',
                  maxWidth: '120px'
                }}
              />
            </div>

            <div className="flex items-center space-x-2 lg:space-x-4 text-xs lg:text-sm animate-slide-in-right">
              <a
                href="tel:+79023845591"
                className="transition-colors hidden lg:inline"
                style={{ color: '#d4c4b0' }}
              >
                +7 902 384-55-91
              </a>
              <a
                href="mailto:XSchoolbiz@yandex.ru"
                className="transition-colors hidden xl:inline"
                style={{ color: '#d4c4b0' }}
              >
                XSchoolbiz@yandex.ru
              </a>
              <a
                href="https://wa.me/79023889482"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors"
                style={{ color: '#25D366' }}
              >
                WhatsApp
              </a>
              <a
                href="https://t.me/+79023889482"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors"
                style={{ color: '#0088cc' }}
              >
                Telegram
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
