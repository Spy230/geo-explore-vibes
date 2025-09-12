import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="animate-slide-in-up" style={{ 
      padding: '2rem 0', 
      borderTop: '1px solid rgba(44, 44, 43, 0.3)',
      background: 'rgba(0, 0, 0, 0.7)',
      backdropFilter: 'blur(10px)'
    }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Основная информация */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold mb-4" style={{ color: '#d4c4b0' }}>Phenix-project</h3>
            <p className="text-sm mb-4" style={{ color: '#a08670' }}>
              Мы предоставляем качественные услуги и заботимся о защите ваших данных 
              в соответствии с требованиями российского законодательства.
            </p>
            <div className="text-sm" style={{ color: '#a08670' }}>
              <p>&copy; 2024 Phenix-project. Все права защищены.</p>
            </div>
          </div>

          {/* Контакты */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ color: '#d4c4b0' }}>Контакты</h3>
            <div className="text-sm space-y-2" style={{ color: '#a08670' }}>
              <p>Email: XSchoolBiz@yandex.ru</p>
              <p>Телефон: +7 902 388-94-82</p>
              <p>Адрес: г. Москва</p>
            </div>
          </div>

          {/* Правовые документы */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ color: '#d4c4b0' }}>Документы</h3>
            <div className="space-y-2 text-sm">
              <Link 
                to="/legal/terms" 
                className="block transition-colors hover:underline"
                style={{ color: '#a08670' }}
              >
                Публичная оферта
              </Link>
              <Link 
                to="/legal/privacy" 
                className="block transition-colors hover:underline"
                style={{ color: '#a08670' }}
              >
                Политика конфиденциальности
              </Link>
              <Link 
                to="/legal/data-processing" 
                className="block transition-colors hover:underline"
                style={{ color: '#a08670' }}
              >
                Согласие на обработку ПДн
              </Link>
              <Link 
                to="/legal/marketing" 
                className="block transition-colors hover:underline"
                style={{ color: '#a08670' }}
              >
                Согласие на рекламную рассылку
              </Link>
            </div>
          </div>
        </div>

        {/* Дополнительная информация */}
        <div className="mt-8 pt-6" style={{ borderTop: '1px solid rgba(128, 128, 128, 0.3)' }}>
          <div className="text-xs mb-4" style={{ color: '#a08670' }}>
            <p>
              * Деятельность компании Meta Platforms Inc., которой принадлежит Instagram/Facebook, 
              запрещена на территории РФ в части реализации данной(-ых) социальной(-ых) сети(-ей) 
              на основании осуществления ею экстремистской деятельности
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
