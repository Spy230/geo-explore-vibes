import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from '../hooks/use-toast';
import telegramIcon from '../assets/telegram-icon-new.png';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    business_type: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        'service_ad7ibtx', // Service ID
        'template_2rxivsp', // Template ID  
        {
          from_name: formData.name,
          phone: formData.phone,
          city: formData.city,
          business_type: formData.business_type,
        },
        'RpE_8tUva8bMWnOdf' // Public Key
      );

      toast({
        title: "Заявка отправлена!",
        description: "Мы свяжемся с вами в течение 15 минут.",
      });

      // Очистка формы
      setFormData({
        name: '',
        phone: '',
        city: '',
        business_type: ''
      });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Ошибка отправки",
        description: "Попробуйте еще раз или свяжитесь с нами напрямую.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" style={{ padding: '5rem 0', background: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(10px)' }}>
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
              Получить консультацию
            </span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl animate-slide-in-up" style={{ color: '#a08670', maxWidth: '32rem', margin: '0 auto', animationDelay: '0.3s' }}>
            Оставьте заявку и мы свяжемся с вами в течение 15 минут
          </p>
        </div>

        <div className="px-4" style={{ maxWidth: '32rem', margin: '0 auto' }}>
          <form onSubmit={handleSubmit} className="animate-slide-in-up contact-form form-container" style={{ 
            padding: '1.5rem sm:2rem', 
            borderRadius: '1rem',
            background: 'rgba(20, 20, 20, 0.02)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(128, 128, 128, 0.3)',
            animationDelay: '0.5s' 
          }}>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: '#d4c4b0', fontWeight: '600' }}>
                Ваше имя
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Введите ваше имя"
                required
                className=""
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '0.5rem',
                  border: '1px solid rgba(128, 128, 128, 0.3)',
                  background: 'rgba(20, 20, 20, 0.3)',
                  color: '#d4c4b0',
                  fontSize: '1rem',
                  backdropFilter: 'blur(5px)'
                }}
              />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: '#d4c4b0', fontWeight: '600' }}>
                Телефон
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+7 (___) ___-__-__"
                required
                className=""
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '0.5rem',
                  border: '1px solid rgba(128, 128, 128, 0.3)',
                  background: 'rgba(20, 20, 20, 0.3)',
                  color: '#d4c4b0',
                  fontSize: '1rem',
                  backdropFilter: 'blur(5px)'
                }}
              />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: '#d4c4b0', fontWeight: '600' }}>
                Город
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="В каком городе ваш бизнес?"
                required
                className=""
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '0.5rem',
                  border: '1px solid rgba(128, 128, 128, 0.3)',
                  background: 'rgba(20, 20, 20, 0.3)',
                  color: '#d4c4b0',
                  fontSize: '1rem',
                  backdropFilter: 'blur(5px)'
                }}
              />
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: '#d4c4b0', fontWeight: '600' }}>
                Тип бизнеса
              </label>
              <select
                name="business_type"
                value={formData.business_type}
                onChange={handleChange}
                required
                className=""
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '0.5rem',
                  border: '1px solid rgba(128, 128, 128, 0.3)',
                  background: 'rgba(20, 20, 20, 0.3)',
                  color: '#d4c4b0',
                  fontSize: '1rem',
                  backdropFilter: 'blur(5px)'
                }}
              >
                <option value="">Выберите тип бизнеса</option>
                <option value="restaurant">Ресторан/Кафе</option>
                <option value="beauty">Салон красоты</option>
                <option value="medical">Медицинские услуги</option>
                <option value="auto">Автосервис</option>
                <option value="retail">Розничная торговля</option>
                <option value="services">Услуги</option>
                <option value="other">Другое</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full px-8 py-4 text-lg font-semibold text-white rounded-lg"
              style={{
                background: isLoading ? 'rgba(122, 97, 69, 0.5)' : 'linear-gradient(135deg, #6b5439, #7a6145)',
                boxShadow: '0 0 30px rgba(122, 97, 69, 0.4)',
                border: 'none',
                cursor: isLoading ? 'not-allowed' : 'pointer',
                marginBottom: '1rem',
                opacity: isLoading ? 0.7 : 1
              }}
            >
              {isLoading ? 'Отправка...' : 'Получить консультацию'}
            </button>

            <p style={{ textAlign: 'center', color: '#a08670', fontSize: '0.875rem' }}>
              Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
            </p>
          </form>

          <div className="text-center animate-slide-in-up" style={{ marginTop: '2rem', animationDelay: '0.7s' }}>
            <p style={{ color: '#a08670', marginBottom: '1rem' }}>Или свяжитесь с нами напрямую:</p>
            <div className="flex flex-col sm:flex-row justify-center contact-buttons" style={{ gap: '0.75rem', alignItems: 'center' }}>
              <a
                href="tel:+79023845591"
                className="px-4 sm:px-6 py-3 text-white rounded-lg hover-glow contact-button w-full sm:w-auto text-center"
                style={{
                  background: 'rgba(20, 20, 20, 0.3)',
                  border: '1px solid rgba(128, 128, 128, 0.3)',
                  backdropFilter: 'blur(5px)',
                  textDecoration: 'none',
                  display: 'inline-block',
                  transition: 'all 0.3s ease',
                  fontSize: '0.9rem'
                }}
              >
                📞 +7 902 384-55-91
              </a>
              <a
                href="https://wa.me/79023889482"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 sm:px-6 py-3 text-white rounded-lg hover-glow contact-button w-full sm:w-auto text-center"
                style={{
                  background: 'rgba(20, 20, 20, 0.3)',
                  border: '1px solid rgba(37, 211, 102, 0.3)',
                  backdropFilter: 'blur(5px)',
                  textDecoration: 'none',
                  display: 'inline-block',
                  transition: 'all 0.3s ease',
                  fontSize: '0.9rem'
                }}
              >
                💬 WhatsApp
              </a>
              <a
                href="https://t.me/+79023889482"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 sm:px-6 py-3 text-white rounded-lg hover-glow contact-button w-full sm:w-auto text-center"
                style={{
                  background: 'rgba(20, 20, 20, 0.3)',
                  border: '1px solid rgba(0, 136, 204, 0.3)',
                  backdropFilter: 'blur(5px)',
                  textDecoration: 'none',
                  display: 'inline-block',
                  transition: 'all 0.3s ease',
                  fontSize: '0.9rem'
                }}
              >
                <img src={telegramIcon} alt="Telegram" style={{ width: '16px', height: '16px', display: 'inline-block', marginRight: '6px' }} />
                Telegram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
