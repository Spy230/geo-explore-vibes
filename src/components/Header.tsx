const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 glass-card border-b border-glass-border animate-slide-in-up">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1
              className="text-3xl font-bold animate-fade-in-scale"
              style={{
                color: '#b8956f',
                textShadow: '0 0 10px rgba(184, 149, 111, 0.3)'
              }}
            >
              Phenix-project
            </h1>
          </div>

          <div className="flex justify-center items-center flex-1">
            <img
              src="https://a.imgfoto.host/2025/07/30/LOGO.png"
              alt="Phoenix Logo"
              className="h-16 w-auto animate-float"
              style={{
                filter: 'drop-shadow(0 0 15px #FFD700) drop-shadow(0 0 25px #FFA500)',
                maxWidth: '120px'
              }}
            />
          </div>

          <div className="flex items-center space-x-6 animate-slide-in-right" style={{ paddingLeft: '2rem' }}>
            <div className="flex items-center space-x-4 text-sm">
              <a
                href="tel:+79023845591"
                className="transition-colors"
                style={{ color: '#d4c4b0' }}
              >
                +7 902 384-55-91
              </a>
              <a
                href="mailto:XSchoolbiz@yandex.ru"
                className="transition-colors"
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