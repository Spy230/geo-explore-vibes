import AnimatedBackground from '../components/AnimatedBackground';
import Header from '../components/Header';

const ThankYou = () => {
  return (
    <div className="min-h-screen">
      <AnimatedBackground />
      <Header />

      <main>
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden" style={{ paddingBottom: 'clamp(1.5rem, 4vh, 2.5rem)' }}>
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
            {Array.from({ length: 15 }, (_, i) => (
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
            {Array.from({ length: 25 }, (_, i) => (
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
            {Array.from({ length: 40 }, (_, i) => (
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
          </div>

          {/* Контент */}
          <div className="text-center relative z-30" style={{ width: '100%', padding: '0 clamp(1rem, 4vw, 2rem)' }}>
            <div className="animate-slide-in-up" style={{ marginBottom: 'clamp(2rem, 6vw, 3rem)' }}>
              {/* Иконка успеха */}
              <div className="animate-fade-in-scale" style={{ marginBottom: 'clamp(1.5rem, 4vw, 2rem)' }}>
                <div className="success-icon" style={{
                  width: 'clamp(80px, 15vw, 120px)',
                  height: 'clamp(80px, 15vw, 120px)',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #22c55e, #16a34a)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto'
                }}>
                  <span style={{ 
                    fontSize: 'clamp(2rem, 6vw, 3rem)', 
                    color: 'white',
                    fontWeight: 'bold'
                  }}>
                    ✓
                  </span>
                </div>
              </div>

              <h1 className="font-bold animate-fade-in-scale" style={{ 
                marginBottom: 'clamp(1rem, 3vw, 1.5rem)',
                fontSize: 'clamp(2.5rem, 9vw, 4rem)',
                lineHeight: '1.1'
              }}>
                <span
                  style={{
                    background: 'linear-gradient(135deg, #d4af37, #ffd700, #ffed4e)',
                    WebkitBackgroundClip: 'text',
                    MozBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent',
                    textShadow: '0 0 30px rgba(255, 215, 0, 0.5)',
                    // Фоллбэк для старых браузеров
                    ...(typeof CSS === 'undefined' || !CSS.supports('background-clip', 'text') ? {
                      background: 'none',
                      color: '#ffd700',
                      textShadow: '0 0 30px rgba(255, 215, 0, 0.5)'
                    } : {})
                  }}
                >
                  Спасибо!
                </span>
              </h1>

              <p className="animate-slide-in-up" style={{ 
                color: '#d4c4b0', 
                maxWidth: '48rem', 
                margin: '0 auto', 
                lineHeight: '1.6', 
                animationDelay: '0.3s',
                fontSize: 'clamp(1.1rem, 3.5vw, 1.6rem)',
                marginBottom: 'clamp(1rem, 3vw, 1.5rem)'
              }}>
                Ваша заявка успешно отправлена!
              </p>

              <p className="animate-slide-in-up" style={{ 
                color: '#a08670', 
                maxWidth: '42rem', 
                margin: '0 auto', 
                lineHeight: '1.5', 
                animationDelay: '0.5s',
                fontSize: 'clamp(0.95rem, 2.8vw, 1.3rem)'
              }}>
                Свяжемся с вами в течении 15 минут, детально обсудим грядущий проект и подготовим персональное предложение!
              </p>
            </div>

            <div className="flex justify-center animate-slide-in-up" style={{ 
              gap: 'clamp(0.5rem, 2vw, 1rem)', 
              marginBottom: 'clamp(2rem, 6vw, 3rem)', 
              flexWrap: 'wrap', 
              animationDelay: '0.7s',
              flexDirection: 'row',
              alignItems: 'center'
            }}>
              <button
                className="font-semibold text-white rounded-lg thank-you-button"
                style={{
                  background: 'linear-gradient(135deg, #6b5439, #7a6145)',
                  boxShadow: '0 0 30px rgba(122, 97, 69, 0.4)',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 'clamp(0.75rem, 2vw, 1rem) clamp(1.5rem, 4vw, 2rem)',
                  fontSize: 'clamp(0.9rem, 2.5vw, 1.125rem)',
                  minWidth: 'clamp(200px, 40vw, 250px)'
                }}
                onClick={() => window.location.href = '/'}
              >
                Вернуться на главную
              </button>
              <button
                className="font-semibold rounded-lg thank-you-button"
                style={{
                  background: 'transparent',
                  color: '#25D366',
                  border: '2px solid #25D366',
                  cursor: 'pointer',
                  padding: 'clamp(0.75rem, 2vw, 1rem) clamp(1.5rem, 4vw, 2rem)',
                  fontSize: 'clamp(0.9rem, 2.5vw, 1.125rem)',
                  minWidth: 'clamp(200px, 40vw, 250px)'
                }}
                onClick={() => window.open('https://wa.me/79023889482', '_blank')}
              >
                Написать в WhatsApp
              </button>
            </div>

            {/* Дополнительная информация */}
            <div className="animate-slide-in-up glass-card" style={{
              maxWidth: '36rem',
              margin: '0 auto',
              padding: 'clamp(1.5rem, 4vw, 2rem)',
              borderRadius: 'clamp(1rem, 2vw, 1.5rem)',
              animationDelay: '0.9s'
            }}>
              <h3 style={{
                color: '#b8956f',
                fontSize: 'clamp(1.1rem, 2.8vw, 1.4rem)',
                fontWeight: 'bold',
                marginBottom: 'clamp(0.75rem, 2vw, 1rem)'
              }}>
                Что дальше?
              </h3>
              <div style={{ textAlign: 'left' }}>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'flex-start', 
                  marginBottom: 'clamp(0.75rem, 2vw, 1rem)',
                  gap: '0.75rem'
                }}>
                  <span style={{ 
                    color: '#22c55e', 
                    fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                    fontWeight: 'bold',
                    minWidth: '1.5rem'
                  }}>1.</span>
                  <span style={{ 
                    color: '#a08670', 
                    fontSize: 'clamp(0.9rem, 2.2vw, 1.1rem)',
                    lineHeight: '1.4'
                  }}>
                    Анализируем ваш бизнес и конкурентов
                  </span>
                </div>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'flex-start', 
                  marginBottom: 'clamp(0.75rem, 2vw, 1rem)',
                  gap: '0.75rem'
                }}>
                  <span style={{ 
                    color: '#22c55e', 
                    fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                    fontWeight: 'bold',
                    minWidth: '1.5rem'
                  }}>2.</span>
                  <span style={{ 
                    color: '#a08670', 
                    fontSize: 'clamp(0.9rem, 2.2vw, 1.1rem)',
                    lineHeight: '1.4'
                  }}>
                    Составляем персональную стратегию продвижения
                  </span>
                </div>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'flex-start', 
                  gap: '0.75rem'
                }}>
                  <span style={{ 
                    color: '#22c55e', 
                    fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                    fontWeight: 'bold',
                    minWidth: '1.5rem'
                  }}>3.</span>
                  <span style={{ 
                    color: '#a08670', 
                    fontSize: 'clamp(0.9rem, 2.2vw, 1.1rem)',
                    lineHeight: '1.4'
                  }}>
                    Запускаем продвижение и получаем первые результаты
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="animate-slide-in-up" style={{ padding: '2rem 0', borderTop: '1px solid rgba(44, 44, 43, 0.3)' }}>
        <div className="container text-center" style={{ color: '#a08670' }}>
          <p>&copy; 2024 Phenix-project. Все права защищены.</p>
          <div className="flex justify-center space-x-4 stagger-animation" style={{ marginTop: '1rem' }}>
            <a href="tel:+79023845591" style={{ color: '#d4c4b0' }}>
              +7 902 384-55-91
            </a>
            <span>•</span>
            <a href="mailto:XSchoolbiz@yandex.ru" style={{ color: '#d4c4b0' }}>
              XSchoolbiz@yandex.ru
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ThankYou;
