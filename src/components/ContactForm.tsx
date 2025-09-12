import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { toast } from '../hooks/use-toast';
import telegramIcon from '../assets/telegram-icon-new.png';
import ConsentCheckboxes from './legal/ConsentCheckboxes';

const ContactForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    business_type: ''
  });
  const [consents, setConsents] = useState({
    terms: false,
    privacy: false,
    marketing: false,
  });
  const [isLoading, setIsLoading] = useState(false);

  const handlePhoneKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Разрешаем только цифры, Backspace, Delete, Tab, Enter, стрелки
    const allowedKeys = ['Backspace', 'Delete', 'Tab', 'Enter', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'];
    const isNumber = /^[0-9]$/.test(e.key);

    if (!isNumber && !allowedKeys.includes(e.key)) {
      e.preventDefault();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (name === 'phone') {
      // Удаляем все символы кроме цифр
      const digits = value.replace(/\D/g, '');

      // Ограничиваем до 11 цифр (1 для кода страны + 10 для номера)
      const limitedDigits = digits.slice(0, 11);

      // Форматируем номер
      let formattedPhone = '';
      if (limitedDigits.length > 0) {
        if (limitedDigits.startsWith('7')) {
          formattedPhone = '+7';
          if (limitedDigits.length > 1) {
            formattedPhone += ' (' + limitedDigits.slice(1, 4);
            if (limitedDigits.length > 4) {
              formattedPhone += ') ' + limitedDigits.slice(4, 7);
              if (limitedDigits.length > 7) {
                formattedPhone += '-' + limitedDigits.slice(7, 9);
                if (limitedDigits.length > 9) {
                  formattedPhone += '-' + limitedDigits.slice(9, 11);
                }
              }
            }
          }
        } else if (limitedDigits.startsWith('8')) {
          // Заменяем 8 на +7
          const russianDigits = '7' + limitedDigits.slice(1);
          formattedPhone = '+7';
          if (russianDigits.length > 1) {
            formattedPhone += ' (' + russianDigits.slice(1, 4);
            if (russianDigits.length > 4) {
              formattedPhone += ') ' + russianDigits.slice(4, 7);
              if (russianDigits.length > 7) {
                formattedPhone += '-' + russianDigits.slice(7, 9);
                if (russianDigits.length > 9) {
                  formattedPhone += '-' + russianDigits.slice(9, 11);
                }
              }
            }
          }
        } else {
          // Если номер не начинается с 7 или 8, добавляем +7
          formattedPhone = '+7 (' + limitedDigits.slice(0, 3);
          if (limitedDigits.length > 3) {
            formattedPhone += ') ' + limitedDigits.slice(3, 6);
            if (limitedDigits.length > 6) {
              formattedPhone += '-' + limitedDigits.slice(6, 8);
              if (limitedDigits.length > 8) {
                formattedPhone += '-' + limitedDigits.slice(8, 10);
              }
            }
          }
        }
      }

      setFormData({
        ...formData,
        phone: formattedPhone
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Проверяем обязательные согласия
    if (!consents.terms || !consents.privacy) {
      toast({
        title: "Ошибка",
        description: "Необходимо дать согласие на обработку персональных данных и принять условия оферты",
        variant: "destructive",
      });
      return;
    }

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

      // Перенаправление на страницу благодарности
      navigate('/thank-you');
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
    <section id="contact" style={{ padding: 'clamp(3rem, 8vh, 5rem) 0', background: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(10px)' }}>
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
              Получить консультацию
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
            Оставьте заявку и мы свяжемся с вами в течение 15 минут
          </p>
        </div>

        <div style={{ maxWidth: 'clamp(300px, 90vw, 32rem)', margin: '0 auto' }}>
          <form onSubmit={handleSubmit} className="animate-slide-in-up contact-form form-container" style={{
            padding: 'clamp(1.5rem, 4vw, 2rem)',
            borderRadius: 'clamp(0.75rem, 2vw, 1rem)',
            background: 'rgba(20, 20, 20, 0.02)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(128, 128, 128, 0.3)',
            animationDelay: '0.5s'
          }}>
            <div style={{ marginBottom: 'clamp(1rem, 3vw, 1.5rem)' }}>
              <label style={{
                display: 'block',
                marginBottom: 'clamp(0.25rem, 1vw, 0.5rem)',
                color: '#d4c4b0',
                fontWeight: '600',
                fontSize: 'clamp(0.9rem, 2.5vw, 1rem)'
              }}>
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
                  padding: 'clamp(0.5rem, 2vw, 0.75rem)',
                  borderRadius: 'clamp(0.375rem, 1vw, 0.5rem)',
                  border: '1px solid rgba(128, 128, 128, 0.3)',
                  background: 'rgba(20, 20, 20, 0.3)',
                  color: '#d4c4b0',
                  fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
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
                onKeyDown={handlePhoneKeyPress}
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

            {/* Чекбоксы согласий */}
            <div style={{ marginBottom: '1.5rem', paddingTop: '1rem', borderTop: '1px solid rgba(128, 128, 128, 0.2)' }}>
              <ConsentCheckboxes
                onConsentChange={setConsents}
                showMarketing={true}
                className="space-y-3"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading || !consents.terms || !consents.privacy}
              className="w-full font-semibold text-white rounded-lg"
              style={{
                background: (isLoading || !consents.terms || !consents.privacy) ? 'rgba(122, 97, 69, 0.5)' : 'linear-gradient(135deg, #6b5439, #7a6145)',
                boxShadow: '0 0 30px rgba(122, 97, 69, 0.4)',
                border: 'none',
                cursor: (isLoading || !consents.terms || !consents.privacy) ? 'not-allowed' : 'pointer',
                marginBottom: 'clamp(0.75rem, 2vw, 1rem)',
                opacity: (isLoading || !consents.terms || !consents.privacy) ? 0.7 : 1,
                padding: 'clamp(0.75rem, 3vw, 1rem) clamp(1.5rem, 4vw, 2rem)',
                fontSize: 'clamp(0.9rem, 2.5vw, 1.125rem)'
              }}
            >
              {isLoading ? 'Отправка...' : 'Получить консультацию'}
            </button>

            <p style={{
              textAlign: 'center',
              color: '#a08670',
              fontSize: 'clamp(0.75rem, 2vw, 0.875rem)',
              lineHeight: '1.4'
            }}>
              * Обязательные поля и согласия
            </p>
          </form>

          <div className="text-center animate-slide-in-up" style={{ marginTop: 'clamp(1.5rem, 4vw, 2rem)', animationDelay: '0.7s' }}>
            <p style={{
              color: '#a08670',
              marginBottom: 'clamp(0.75rem, 2vw, 1rem)',
              fontSize: 'clamp(0.9rem, 2.5vw, 1rem)'
            }}>Или свяжитесь с нами напрямую:</p>
            <div className="flex justify-center contact-buttons" style={{
              gap: 'clamp(0.5rem, 2vw, 1rem)',
              flexWrap: 'wrap',
              flexDirection: 'row',
              alignItems: 'center'
            }}>
              <a
                href="tel:+79023889482"
                className="text-white rounded-lg hover-glow contact-button"
                style={{
                  background: 'rgba(20, 20, 20, 0.5)',
                  border: '1px solid rgba(0, 0, 0, 0.8)',
                  backdropFilter: 'blur(5px)',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  padding: 'clamp(0.5rem, 2vw, 0.75rem) clamp(1rem, 3vw, 1.5rem)',
                  fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
                  minWidth: 'clamp(140px, 30vw, 180px)',
                  textAlign: 'center'
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ marginRight: '8px' }}
                >
                  <path
                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                    fill="#dc2626"
                  />
                </svg>
                +7 902 388-94-82
              </a>
              <a
                href="https://wa.me/79023889482"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white rounded-lg hover-glow contact-button"
                style={{
                  background: 'rgba(20, 20, 20, 0.3)',
                  border: '1px solid rgba(37, 211, 102, 0.3)',
                  backdropFilter: 'blur(5px)',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  padding: 'clamp(0.5rem, 2vw, 0.75rem) clamp(1rem, 3vw, 1.5rem)',
                  fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
                  minWidth: 'clamp(120px, 25vw, 150px)',
                  textAlign: 'center'
                }}
              >
                <img
                  src="https://a.imgfoto.host/2025/08/17/icons8-whatsapp-30.png"
                  alt="WhatsApp"
                  style={{
                    width: '18px',
                    height: '18px',
                    marginRight: '8px'
                  }}
                />
                WhatsApp
              </a>
              <a
                href="https://t.me/+79023889482"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white rounded-lg hover-glow contact-button"
                style={{
                  background: 'rgba(20, 20, 20, 0.3)',
                  border: '1px solid rgba(0, 136, 204, 0.3)',
                  backdropFilter: 'blur(5px)',
                  textDecoration: 'none',
                  display: 'inline-block',
                  transition: 'all 0.3s ease',
                  padding: 'clamp(0.5rem, 2vw, 0.75rem) clamp(1rem, 3vw, 1.5rem)',
                  fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
                  minWidth: 'clamp(120px, 25vw, 150px)',
                  textAlign: 'center'
                }}
              >
                <img src={telegramIcon} alt="Telegram" style={{
                  width: 'clamp(16px, 4vw, 20px)',
                  height: 'clamp(16px, 4vw, 20px)',
                  display: 'inline-block',
                  marginRight: 'clamp(4px, 1vw, 8px)'
                }} />
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
