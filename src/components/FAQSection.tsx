import { useState } from 'react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Как быстро будут видны результаты?",
      answer: "Первые результаты вы увидите уже через 2-3 недели. Полноценное продвижение в топ занимает 1-3 месяца в зависимости от конкуренции в вашей нише."
    },
    {
      question: "Какие гарантии вы даете?",
      answer: "Мы гарантируем попадание в топ-10 по основным запросам или возвращаем деньги. Также предоставляем еженедельные отчеты о проделанной работе."
    },
    {
      question: "Сколько стоят ваши услуги?",
      answer: "Стоимость зависит от региона, конкуренции и количества продвигаемых запросов. Базовый пакет от 25 000 рублей в месяц. Точную стоимость рассчитаем после анализа вашей ниши."
    },
    {
      question: "Работаете ли вы с небольшими городами?",
      answer: "Да, мы работаем по всей России. В небольших городах конкуренция ниже, поэтому результаты достигаются быстрее и стоимость продвижения меньше."
    },
    {
      question: "Что входит в услугу гео-продвижения?",
      answer: "Оптимизация карточек в Яндекс.Картах и Google Maps, работа с отзывами, создание и оптимизация сайта, настройка рекламы, SEO-продвижение, аналитика и отчетность."
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
    <section style={{ padding: '5rem 0', background: 'rgba(0, 0, 0, 0.5)', backdropFilter: 'blur(5px)' }}>
      <div className="container">
        <div className="text-center animate-slide-in-up" style={{ marginBottom: '4rem' }}>
          <h2 className="text-6xl font-bold animate-fade-in-scale" style={{ marginBottom: '1rem' }}>
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
          <p className="text-2xl animate-slide-in-up" style={{ color: '#a08670', maxWidth: '32rem', margin: '0 auto', animationDelay: '0.3s' }}>
            Ответы на самые популярные вопросы о гео-продвижении
          </p>
        </div>

        <div style={{ maxWidth: '50rem', margin: '0 auto' }}>
          {faqs.map((faq, index) => (
            <div key={index} className="glass-card stagger-animation" style={{ marginBottom: '1rem', borderRadius: '0.75rem' }}>
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left"
                style={{
                  padding: '1.5rem',
                  background: 'transparent',
                  border: 'none',
                  color: '#d4c4b0',
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <span>{faq.question}</span>
                <span
                  className=""
                  style={{
                    transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease',
                    color: '#b8956f'
                  }}
                >
                  ▼
                </span>
              </button>

              {openIndex === index && (
                <div
                  className="animate-slide-in-up"
                  style={{
                    padding: '0 1.5rem 1.5rem',
                    color: '#a08670',
                    lineHeight: '1.6',
                    borderTop: '1px solid rgba(122, 97, 69, 0.2)'
                  }}
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center animate-slide-in-up" style={{ marginTop: '3rem', animationDelay: '0.8s' }}>
          <p style={{ color: '#a08670', marginBottom: '1rem', fontSize: '1.125rem' }}>
            Остались вопросы? Мы с радостью на них ответим!
          </p>
          <button
            className="px-8 py-4 text-lg font-semibold text-white rounded-lg"
            style={{
              background: 'linear-gradient(135deg, #6b5439, #7a6145)',
              boxShadow: '0 0 30px rgba(122, 97, 69, 0.4)',
              border: 'none',
              cursor: 'pointer'
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