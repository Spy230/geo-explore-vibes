const Header = () => {
  return (
    <header
      className="fixed top-0 left-0 right-0 w-full z-50 glass-card border-b border-glass-border animate-slide-in-up"
      style={{ height: '70px' }}
    >
      <div className="w-full px-4 sm:px-6 h-full flex items-center" style={{ height: '70px' }}>
        <div className="flex items-center justify-between w-full h-full">
          {/* Мобильная версия - компактная горизонтальная компоновка */}
          <div className="block sm:hidden w-full h-full">
            <div className="grid grid-cols-3 items-center h-full w-full">
              <div className="flex justify-start">
                <h1
                  className="text-sm font-bold animate-fade-in-scale whitespace-nowrap"
                  style={{
                    color: '#b8956f',
                    textShadow: '0 0 8px rgba(184, 149, 111, 0.3)',
                    lineHeight: '1.2'
                  }}
                >
                  PHENIX PROJECT
                </h1>
              </div>

              <div className="flex justify-center">
                <img
                  src="https://a.imgfoto.host/2025/07/30/LOGO.png"
                  alt="Phoenix Logo"
                  className="h-8 w-auto"
                  style={{
                    filter: 'drop-shadow(0 0 10px #FFD700) drop-shadow(0 0 15px #FFA500)',
                    maxWidth: '40px'
                  }}
                />
              </div>

              <div className="flex justify-end">
                <div className="flex items-center space-x-0.5">
                  <a
                    href="tel:+79023845591"
                    className="transition-all duration-300 px-0.5 py-0.5 rounded flex items-center justify-center"
                    style={{
                      background: 'rgba(0, 0, 0, 0.3)',
                      border: '1px solid rgba(0, 0, 0, 0.5)',
                      minWidth: '20px',
                      minHeight: '20px'
                    }}
                  >
                    <span style={{ fontSize: '10px', color: '#dc2626' }}>📞</span>
                  </a>
                  <a
                    href="https://wa.me/79023889482"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-all duration-300 px-0.5 py-0.5 rounded flex items-center justify-center"
                    style={{
                      background: 'rgba(37, 211, 102, 0.15)',
                      border: '1px solid rgba(37, 211, 102, 0.3)',
                      minWidth: '20px',
                      minHeight: '20px'
                    }}
                  >
                    <img
                      src="https://a.imgfoto.host/2025/08/17/icons8-whatsapp-30.png"
                      alt="WhatsApp"
                      style={{ width: '10px', height: '10px' }}
                    />
                  </a>
                  <a
                    href="https://t.me/+79023889482"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-all duration-300 px-0.5 py-0.5 rounded flex items-center justify-center"
                    style={{
                      background: 'rgba(0, 136, 204, 0.15)',
                      border: '1px solid rgba(0, 136, 204, 0.3)',
                      minWidth: '20px',
                      minHeight: '20px'
                    }}
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png"
                      alt="Telegram"
                      style={{ width: '10px', height: '10px' }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Десктопная версия - горизонтальная компоновка */}
          <div className="hidden sm:flex items-center justify-between w-full h-full">
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
                className="h-12 lg:h-16 w-auto animate-float"
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
