import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import OrderForm from "@/components/forms/OrderForm";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/legal/CookieBanner";
import TelegramBotExample from "@/components/legal/TelegramBotExample";
import AntiPatterns from "@/components/legal/AntiPatterns";

const LegalDemo = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-center">
            Демо: Правовые документы для сайта
          </h1>
          <p className="text-center text-gray-600 mt-2">
            Пример правильного размещения документов согласно российскому законодательству
          </p>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 py-8">
        <div className="space-y-12">
          {/* Форма и информация */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Форма заказа */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Форма заказа с согласиями</h2>
            <OrderForm />
          </div>

          {/* Информация о документах */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Обязательные документы</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-green-600">✓ Публичная оферта</h3>
                  <p className="text-sm text-gray-600">
                    Размещена в чекбоксе формы и доступна по ссылке в футере
                  </p>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="font-semibold text-green-600">✓ Политика конфиденциальности</h3>
                  <p className="text-sm text-gray-600">
                    Доступна по ссылке в футере и в чекбоксе согласия
                  </p>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="font-semibold text-green-600">✓ Согласие на обработку ПДн</h3>
                  <p className="text-sm text-gray-600">
                    Отдельный чекбокс в форме, обязательный для заполнения
                  </p>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="font-semibold text-blue-600">○ Согласие на рекламную рассылку</h3>
                  <p className="text-sm text-gray-600">
                    Отдельный чекбокс, опциональный
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Дополнительные элементы</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-green-600">✓ Cookie баннер</h3>
                  <p className="text-sm text-gray-600">
                    Появляется при первом посещении сайта
                  </p>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="font-semibold text-green-600">✓ Сноска о соцсетях</h3>
                  <p className="text-sm text-gray-600">
                    Указание о запрете деятельности Meta в РФ
                  </p>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="font-semibold text-green-600">✓ Футер с ссылками</h3>
                  <p className="text-sm text-gray-600">
                    Все документы доступны в подвале сайта
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Важные правила</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm">
                  <p className="font-medium text-red-600">❌ Нельзя:</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                    <li>Объединять все согласия в один чекбокс</li>
                    <li>Заранее проставлять галочки</li>
                    <li>Скрывать ссылки на документы</li>
                    <li>Обрабатывать данные без статуса оператора</li>
                  </ul>
                </div>
                
                <div className="text-sm">
                  <p className="font-medium text-green-600">✅ Нужно:</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                    <li>Разделять чекбоксы по типам согласий</li>
                    <li>Делать ссылки на документы кликабельными</li>
                    <li>Размещать документы в футере</li>
                    <li>Получать согласия ДО сбора данных</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Примеры для Telegram и мессенджеров */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Примеры для Telegram-ботов и мессенджеров</h2>
          <TelegramBotExample />
        </div>

        {/* Антипаттерны */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Как НЕ надо делать (антипаттерны)</h2>
          <AntiPatterns />
        </div>
      </div>
      </main>

      {/* Footer */}
      <Footer />
      
      {/* Cookie Banner */}
      <CookieBanner />
    </div>
  );
};

export default LegalDemo;
