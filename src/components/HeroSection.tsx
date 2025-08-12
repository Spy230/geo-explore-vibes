const HeroSection = () => {
  const stats = [
    { value: '300%', label: 'Рост трафика' },
    { value: '500+', label: 'Городов' },
    { value: '1000+', label: 'Клиентов' },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden" style={{ paddingTop: 'clamp(4rem, 8vh, 5rem)', paddingBottom: 'clamp(1.5rem, 4vh, 2.5rem)' }}>
      {/* Основной фон с изображением */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://a.imgfoto.host/2025/07/30/GLAVNOE-FOTO.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Темный оверлей */}
      <div className="absolute inset-0 z-10 bg-black bg-opacity-50" />

      {/* АНИМИРОВАННЫЕ БЕЛЫЕ ЧАСТИЦЫ */}
      <div className="absolute inset-0 z-20 overflow-hidden pointer-events-none">
        {/* Крупные белые частицы */}
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={`white-large-${i}`}
            className="absolute animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${4 + Math.random() * 6}px`,
              height: `${4 + Math.random() * 6}px`,
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              borderRadius: '50%',
              boxShadow: `0 0 ${15 + Math.random() * 10}px rgba(255, 255, 255, 0.8), 0 0 ${30 + Math.random() * 20}px rgba(255, 255, 255, 0.4)`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 12}s`,
              transform: `translateZ(0)`,
              WebkitTransform: `translateZ(0)`,
              willChange: 'transform'
            }}
          />
        ))}

        {/* Средние белые частицы */}
        {Array.from({ length: 35 }, (_, i) => (
          <div
            key={`white-medium-${i}`}
            className="absolute animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              borderRadius: '50%',
              boxShadow: `0 0 ${8 + Math.random() * 6}px rgba(255, 255, 255, 0.6), 0 0 ${16 + Math.random() * 12}px rgba(255, 255, 255, 0.3)`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 8}s`,
              transform: `translateZ(0)`,
              WebkitTransform: `translateZ(0)`,
              willChange: 'transform'
            }}
          />
        ))}

        {/* Мелкие белые частицы */}
        {Array.from({ length: 50 }, (_, i) => (
          <div
            key={`white-small-${i}`}
            className="absolute animate-glow"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${1 + Math.random() * 2}px`,
              height: `${1 + Math.random() * 2}px`,
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              borderRadius: '50%',
              boxShadow: `0 0 ${4 + Math.random() * 4}px rgba(255, 255, 255, 0.8)`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 6}s`,
              transform: `translateZ(0)`,
              WebkitTransform: `translateZ(0)`,
              willChange: 'transform'
            }}
          />
        ))}

        {/* Очень мелкие мерцающие точки */}
        {Array.from({ length: 80 }, (_, i) => (
          <div
            key={`white-tiny-${i}`}
            className="absolute animate-glow"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: '1px',
              height: '1px',
              backgroundColor: 'rgba(255, 255, 255, 1)',
              borderRadius: '50%',
              boxShadow: `0 0 ${2 + Math.random() * 3}px rgba(255, 255, 255, 0.9)`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${2 + Math.random() * 4}s`,
              transform: `translateZ(0)`,
              WebkitTransform: `translateZ(0)`,
              willChange: 'transform'
            }}
          />
        ))}


      </div>

      {/* Контент */}
      <div className="text-center relative z-30" style={{ width: '100%', padding: '0 clamp(1rem, 4vw, 2rem)' }}>
        <div className="animate-slide-in-up" style={{ marginBottom: 'clamp(1.5rem, 4vw, 2rem)' }}>
          <h1 className="font-bold animate-fade-in-scale" style={{ 
            marginBottom: 'clamp(0.5rem, 2vw, 1rem)',
            fontSize: 'clamp(2rem, 8vw, 3.75rem)',
            lineHeight: '1.1'
          }}>
            <span
            style={{
              background: 'linear-gradient(135deg, #7a6145, #9c7a5a, #b8956f)',
              WebkitBackgroundClip: 'text',
              MozBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              // Фоллбэк для старых браузеров
              ...(typeof CSS === 'undefined' || !CSS.supports('background-clip', 'text') ? {
                background: 'none',
                color: '#b8956f'
              } : {})
            }}
            >
              Гео-продвижение
            </span>
            <br />
            <span style={{ color: '#d4c4b0' }}>для вашего бизнеса</span>
          </h1>
          <p className="animate-slide-in-up" style={{ 
            color: '#a08670', 
            maxWidth: '48rem', 
            margin: '0 auto', 
            lineHeight: '1.6', 
            animationDelay: '0.3s',
            fontSize: 'clamp(1rem, 3vw, 1.5rem)'
          }}>
            Поднимем ваш бизнес в топ поиска.
            Больше клиентов из вашего города уже через 2 недели
          </p>
        </div>

        <div className="flex justify-center animate-slide-in-up hero-buttons" style={{ 
          gap: 'clamp(0.5rem, 2vw, 1rem)', 
          marginBottom: 'clamp(2rem, 6vw, 4rem)', 
          flexWrap: 'wrap', 
          animationDelay: '0.5s',
          flexDirection: 'row',
          alignItems: 'center'
        }}>
          <button
            className="font-semibold text-white rounded-lg hover-lift animate-pulse"
            style={{
              background: 'linear-gradient(135deg, #6b5439, #7a6145)',
              boxShadow: '0 0 30px rgba(122, 97, 69, 0.4)',
              border: 'none',
              cursor: 'pointer',
              padding: 'clamp(0.75rem, 2vw, 1rem) clamp(1.5rem, 4vw, 2rem)',
              fontSize: 'clamp(0.9rem, 2.5vw, 1.125rem)',
              minWidth: 'clamp(200px, 40vw, 250px)'
            }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Получить консультацию
          </button>
          <button
            className="font-semibold rounded-lg hover-glow"
            style={{
              background: 'transparent',
              color: '#d4c4b0',
              border: '2px solid #7a6145',
              cursor: 'pointer',
              padding: 'clamp(0.75rem, 2vw, 1rem) clamp(1.5rem, 4vw, 2rem)',
              fontSize: 'clamp(0.9rem, 2.5vw, 1.125rem)',
              minWidth: 'clamp(200px, 40vw, 250px)'
            }}
            onClick={() => window.open('https://wa.me/79023889482', '_blank')}
          >
            Связаться в WhatsApp
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 hero-stats" style={{ maxWidth: '48rem', margin: '0 auto' }}>
          {stats.map((stat, index) => (
            <div key={index} className="text-center stagger-animation hover-lift" style={{ padding: 'clamp(0.5rem, 2vw, 1rem)' }}>
              <div
                className="font-bold animate-pulse"
                style={{
                  color: '#b8956f',
                  textShadow: '0 0 20px rgba(184, 149, 111, 0.3)',
                  fontSize: 'clamp(1.5rem, 6vw, 2.25rem)',
                  lineHeight: '1.2'
                }}
              >
                {stat.value}
              </div>
              <div style={{ 
                color: '#a08670',
                fontSize: 'clamp(0.9rem, 2.5vw, 1.125rem)',
                marginTop: 'clamp(0.25rem, 1vw, 0.5rem)'
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
