const HeroSection = () => {
  const stats = [
    { value: '300%', label: 'Рост трафика' },
    { value: '500+', label: 'Городов' },
    { value: '1000+', label: 'Клиентов' },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center" style={{ paddingTop: '5rem', paddingBottom: '2.5rem' }}>
      <div className="container text-center">
        <div className="animate-slide-in-up" style={{ marginBottom: '2rem' }}>
          <h1 className="text-6xl font-bold animate-fade-in-scale" style={{ marginBottom: '1rem' }}>
            <span
              style={{
                background: 'linear-gradient(135deg, #7a6145, #9c7a5a, #b8956f)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent'
              }}
            >
              Гео-продвижение
            </span>
            <br />
            <span style={{ color: '#d4c4b0' }}>для вашего бизнеса</span>
          </h1>
          <p className="text-2xl animate-slide-in-up" style={{ color: '#a08670', maxWidth: '48rem', margin: '0 auto', lineHeight: '1.6', animationDelay: '0.3s' }}>
            Поднимем ваш бизнес в топ локального поиска.
            Больше клиентов из вашего города уже через 2 недели
          </p>
        </div>

        <div className="flex justify-center animate-slide-in-up" style={{ gap: '1rem', marginBottom: '4rem', flexWrap: 'wrap', animationDelay: '0.5s' }}>
          <button
            className="px-8 py-4 text-lg font-semibold text-white rounded-lg"
            style={{
              background: 'linear-gradient(135deg, #2d7a3d, #4ade80)',
              boxShadow: '0 0 30px rgba(74, 222, 128, 0.4)',
              border: 'none',
              cursor: 'pointer'
            }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Получить консультацию
          </button>
          <button
            className="px-8 py-4 text-lg font-semibold rounded-lg"
            style={{
              background: 'transparent',
              color: '#d4c4b0',
              border: '2px solid #7a6145',
              cursor: 'pointer'
            }}
            onClick={() => window.open('https://wa.me/79023889482', '_blank')}
          >
            Связаться в WhatsApp
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" style={{ maxWidth: '48rem', margin: '0 auto' }}>
          {stats.map((stat, index) => (
            <div key={index} className="text-center stagger-animation">
              <div
                className="text-4xl font-bold"
                style={{
                  color: '#b8956f',
                  textShadow: '0 0 20px rgba(184, 149, 111, 0.3)'
                }}
              >
                {stat.value}
              </div>
              <div className="text-lg" style={{ color: '#a08670' }}>
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