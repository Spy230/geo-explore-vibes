const CasesSection = () => {
  const cases = [
    {
      title: "Подняли трафик в 3 раза за 2 недели",
      description: "Ресторан в центре города увеличил количество посетителей на 300% благодаря грамотному гео-продвижению и оптимизации карточек в картах.",
      screenshot: "https://via.placeholder.com/400x300/1a1a1a/7a6145?text=Кейс+1",
      metrics: [
        { label: "Рост трафика", value: "+300%" },
        { label: "Новые клиенты", value: "+150 в месяц" },
        { label: "Время до результата", value: "14 дней" }
      ]
    },
    {
      title: "Вывели в топ-3 за месяц",
      description: "Салон красоты с нуля поднялся в топ-3 локального поиска, обогнав конкурентов с многолетней историей в интернете.",
      screenshot: "https://via.placeholder.com/400x300/1a1a1a/9c7a5a?text=Кейс+2",
      metrics: [
        { label: "Позиция в поиске", value: "Топ-3" },
        { label: "Охват аудитории", value: "+500%" },
        { label: "Запись клиентов", value: "+80%" }
      ]
    },
    {
      title: "Запустили франшизу в новом городе",
      description: "Федеральная сеть быстро закрепилась в новом регионе, заняв лидирующие позиции по всем ключевым запросам за первый месяц работы.",
      screenshot: "https://via.placeholder.com/400x300/1a1a1a/b8956f?text=Кейс+3",
      metrics: [
        { label: "Покрытие города", value: "100%" },
        { label: "Конверсия звонков", value: "+400%" },
        { label: "ROI кампании", value: "850%" }
      ]
    }
  ];

  return (
    <section style={{ padding: '5rem 0', background: 'rgba(0, 0, 0, 0.3)', backdropFilter: 'blur(5px)' }}>
      <div className="container">
        <div className="text-center animate-slide-in-up px-4" style={{ marginBottom: '4rem' }}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold animate-fade-in-scale" style={{ marginBottom: '1rem' }}>
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
          <p className="text-lg sm:text-xl md:text-2xl animate-slide-in-up" style={{ color: '#a08670', maxWidth: '48rem', margin: '0 auto', animationDelay: '0.3s' }}>
            Реальные кейсы с подтвержденными результатами
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 px-4">
          {cases.map((caseItem, index) => (
            <div key={index} className="stagger-animation" style={{ 
              padding: '1.5rem sm:2rem', 
              borderRadius: '1rem',
              background: 'rgba(20, 20, 20, 0.02)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(128, 128, 128, 0.3)'
            }}>
              <img
                src={caseItem.screenshot}
                alt={caseItem.title}
                className=""
                style={{
                  width: '100%',
                  height: '180px',
                  objectFit: 'cover',
                  borderRadius: '0.5rem',
                  marginBottom: '1.5rem'
                }}
              />

              <h3 className="text-lg sm:text-xl font-bold" style={{ color: '#d4c4b0', marginBottom: '1rem' }}>
                {caseItem.title}
              </h3>

              <p className="text-sm sm:text-base" style={{ color: '#a08670', lineHeight: '1.6', marginBottom: '2rem' }}>
                {caseItem.description}
              </p>

              <div className="space-y-3">
                {caseItem.metrics.map((metric, metricIndex) => (
                  <div key={metricIndex} className="flex justify-between items-center">
                    <span className="text-sm sm:text-base" style={{ color: '#a08670' }}>{metric.label}:</span>
                    <span
                      className="font-bold text-sm sm:text-base"
                      style={{
                        color: '#b8956f',
                        textShadow: '0 0 10px rgba(184, 149, 111, 0.3)'
                      }}
                    >
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center animate-slide-in-up px-4" style={{ marginTop: '4rem', animationDelay: '0.8s' }}>
          <button
            className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white rounded-lg w-full sm:w-auto"
            style={{
              background: 'linear-gradient(135deg, #2d7a3d, #4ade80)',
              boxShadow: '0 0 30px rgba(74, 222, 128, 0.4)',
              border: 'none',
              cursor: 'pointer',
              maxWidth: '320px'
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
