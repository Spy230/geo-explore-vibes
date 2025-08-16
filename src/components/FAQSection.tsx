import { useState } from 'react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Как быстро вы даёте результат?",
      answer: "Первые результаты вы увидите уже через 2-3 недели. Для полноценного продвижения организации, исходя из специфики работы карт, требуется от 1 до 3 месяцев упорной работы."
    },
    {
      question: "Какие гарантии вы даёте?",
      answer: "Мы гарантируем выполнение своих обязанностей - пунктов плана работы, оговоренного до начала сотрудничества."
    },
    {
      question: "Сколько стоят ваши услуги?",
      answer: "Стоимость работы складывается из нескольких факторов: поставленные цели в виде желаемых результатов; нынешняя ситуация, в которой находится ваша карточка; а также объём работ, которые предстоит выполнить для достижения поставленных целей. Базовый пакет стартует от 27 999 рублей."
    },
    {
      question: "Работаете ли вы с небольшими городами?",
      answer: "Да, мы работаем по всей России."
    },
    {
      question: "Что входит в ваши услуги?",
      answer: "Создание контент плана, настройка алгоритмов продвижения, seo-оптимизация, визуальное оформление, создание воронки конверсии лидов и множество других, не менее важных пунктов работы."
    },
    {
      question: "Можно ли продвигать несколько точек одновременно?",
      answer: "Да, у нас есть специальные пакеты для сетевого бизнеса. Стоимость продвижения каждой дополнительной точки снижается при комплексном подходе."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section style={{ padding: 'clamp(3rem, 8vh, 5rem) 0', background: 'rgba(0, 0, 0, 0.5)', backdropFilter: 'blur(5px)' }}>
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
              Частые вопросы
            </span>
          </h2>
          <p className="animate-slide-in-up" style={{
            color: '#a08670',
            maxWidth: '32rem',
            margin: '0 auto',
            animationDelay: '0.3s',
            fontSize: 'clamp(1rem, 3vw, 1.5rem)',
            lineHeight: '1.4'
          }}>
            Ответы на самые популярные вопросы о гео-продвижении
          </p>
        </div>

        <div style={{ maxWidth: 'clamp(300px, 90vw, 50rem)', margin: '0 auto' }}>
          {faqs.map((faq, index) => (
            <div key={index} className="glass-card stagger-animation" style={{
              marginBottom: 'clamp(0.75rem, 2vw, 1rem)',
              borderRadius: 'clamp(0.5rem, 1.5vw, 0.75rem)'
            }}>
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left"
                style={{
                  padding: 'clamp(1rem, 3vw, 1.5rem)',
                  background: 'transparent',
                  border: 'none',
                  color: '#d4c4b0',
                  fontSize: 'clamp(0.9rem, 2.5vw, 1.125rem)',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  lineHeight: '1.4'
                }}
              >
                <span style={{ paddingRight: '1rem' }}>{faq.question}</span>
                <span
                  className=""
                  style={{
                    transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease',
                    color: '#b8956f',
                    fontSize: 'clamp(0.8rem, 2vw, 1rem)',
                    flexShrink: 0
                  }}
                >
                  ▼
                </span>
              </button>

              {openIndex === index && (
                <div
                  className="animate-slide-in-up"
                  style={{
                    padding: `0 clamp(1rem, 3vw, 1.5rem) clamp(1rem, 3vw, 1.5rem)`,
                    color: '#a08670',
                    lineHeight: '1.6',
                    borderTop: '1px solid rgba(122, 97, 69, 0.2)',
                    fontSize: 'clamp(0.85rem, 2.2vw, 1rem)'
                  }}
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center animate-slide-in-up" style={{ marginTop: 'clamp(2rem, 5vw, 3rem)', animationDelay: '0.8s' }}>
          <p style={{
            color: '#a08670',
            marginBottom: 'clamp(0.75rem, 2vw, 1rem)',
            fontSize: 'clamp(0.9rem, 2.5vw, 1.125rem)',
            lineHeight: '1.4'
          }}>
            Остались вопросы? Мы с радостью на них ответим!
          </p>
          <button
            className="font-semibold text-white rounded-lg"
            style={{
              background: 'linear-gradient(135deg, #6b5439, #7a6145)',
              boxShadow: '0 0 30px rgba(122, 97, 69, 0.4)',
              border: 'none',
              cursor: 'pointer',
              padding: 'clamp(0.75rem, 2vw, 1rem) clamp(1.5rem, 4vw, 2rem)',
              fontSize: 'clamp(0.9rem, 2.5vw, 1.125rem)'
            }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Задать вопрос
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
