const CasesSection = () => {
  const cases = [
    {
      title: "Подняли трафик с абсолютного нуля, возродив карточку",
      description: "Юридическое бюро Де-Юрекс получил долгожданных клиентов, благодаря грамотному гео-продвижению и seo-оптимизации карточек на картах.",
      screenshot: "https://a.imgfoto.host/2025/08/16/1card.jpeg",
      metrics: [
        { label: "Звонки", value: "15" },
        { label: "Проложено маршрутов", value: "29" },
        { label: "Переходов на сайт", value: "62" }
      ]
    },
    {
      title: "Вывели в топ-3 за месяц",
      description: "Юридическая компания Grade с нуля поднялась в топ-3 локального поиска, обогнав конкурентов с многолетней историей в интернете.",
      screenshot: "https://a.imgfoto.host/2025/08/16/2card.jpeg",
      metrics: []
    },
    {
      title: "Запустили организацию и обеспечили поток лидов",
      description: "Мужской бутик быстро закрепился на новом месте, получив большой прирост по всем ключевым показателям всего за полмесяца работы.",
      screenshot: "https://a.imgfoto.host/2025/08/16/3card.jpeg",
      metrics: [
        { label: "Звонки", value: "4" },
        { label: "Проложено маршрутов", value: "34" },
        { label: "Переходов на сайт", value: "8" }
      ]
    }
  ];

  return (
    <section style={{ padding: '5rem 0', background: 'rgba(0, 0, 0, 0.3)', backdropFilter: 'blur(5px)' }}>
      <div style={{ width: '100%', padding: '0 clamp(1rem, 4vw, 2rem)' }}>
        <div className="text-center animate-slide-in-up" style={{ marginBottom: 'clamp(2rem, 6vw, 4rem)' }}>
          <h2 className="font-bold animate-fade-in-scale" style={{
            marginBottom: 'clamp(0.5rem, 2vw, 1rem)',
            fontSize: 'clamp(2rem, 8vw, 3.75rem)',
            lineHeight: '1.1'
          }}>
            <span
              style={{
                background: 'linear-gradient(135deg, #7a6145, #9c7a5a, #b8956f)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent'
              }}
            >
              Результаты наших клиентов
            </span>
          </h2>
          <p className="animate-slide-in-up" style={{
            color: '#a08670',
            maxWidth: '48rem',
            margin: '0 auto',
            animationDelay: '0.3s',
            fontSize: 'clamp(1rem, 3vw, 1.5rem)',
            lineHeight: '1.4'
          }}>
            Реальные кейсы с подтвержденными результатами
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3" style={{ width: '100%', justifyItems: 'center' }}>
          {cases.map((caseItem, index) => (
            <div key={index} className="stagger-animation" style={{
              padding: 'clamp(1.5rem, 4vw, 4rem)',
              borderRadius: 'clamp(1rem, 2vw, 2rem)',
              background: 'rgba(20, 20, 20, 0.02)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(128, 128, 128, 0.3)',
              minHeight: 'clamp(400px, 50vh, 650px)',
              width: '100%',
              maxWidth: 'none'
            }}>
              <img
                src={caseItem.screenshot}
                alt={caseItem.title}
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: 'clamp(250px, 35vw, 400px)',
                  objectFit: 'contain',
                  objectPosition: 'center',
                  borderRadius: 'clamp(0.5rem, 1vw, 1rem)',
                  marginBottom: 'clamp(1rem, 3vw, 2.5rem)',
                  display: 'block'
                }}
              />

              <h3 style={{
                color: '#d4c4b0',
                marginBottom: 'clamp(1rem, 2vw, 2rem)',
                fontSize: 'clamp(1.25rem, 3vw, 1.875rem)',
                fontWeight: 'bold',
                lineHeight: '1.2'
              }}>
                {caseItem.title}
              </h3>

              <p style={{
                color: '#a08670',
                lineHeight: '1.6',
                marginBottom: 'clamp(1.5rem, 3vw, 2.5rem)',
                fontSize: 'clamp(0.9rem, 2vw, 1.2rem)'
              }}>
                {caseItem.description}
              </p>

              {caseItem.metrics.length > 0 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(0.75rem, 2vw, 1rem)' }}>
                  {caseItem.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex justify-between items-center" style={{ padding: 'clamp(0.25rem, 1vw, 0.5rem) 0' }}>
                      <span style={{
                        color: '#a08670',
                        fontSize: 'clamp(0.8rem, 1.8vw, 1rem)',
                        flex: '1'
                      }}>{metric.label}:</span>
                      <span
                        className="font-bold"
                        style={{
                          color: '#b8956f',
                          textShadow: '0 0 10px rgba(184, 149, 111, 0.3)',
                          fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                          textAlign: 'right'
                        }}
                      >
                        {metric.value}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center animate-slide-in-up" style={{ marginTop: 'clamp(2rem, 6vw, 4rem)', animationDelay: '0.8s' }}>
          <button
            className="font-semibold text-white rounded-lg"
            style={{
              background: 'linear-gradient(135deg, #2d7a3d, #4ade80)',
              boxShadow: '0 0 30px rgba(74, 222, 128, 0.4)',
              border: 'none',
              cursor: 'pointer',
              padding: 'clamp(0.75rem, 2vw, 1rem) clamp(1.5rem, 4vw, 2rem)',
              fontSize: 'clamp(0.9rem, 2.5vw, 1.125rem)'
            }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Получить такой же результат
          </button>
        </div>
      </div>
    </section>
  );
};

export default CasesSection;
