import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { X, AlertTriangle } from "lucide-react";

const AntiPatterns = () => {
  return (
    <div className="space-y-6">
      <Card className="border-red-200">
        <CardHeader className="bg-red-50">
          <CardTitle className="text-red-700 flex items-center gap-2">
            <X className="h-5 w-5" />
            Неправильно: Все согласия в одном чекбоксе
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="flex items-start space-x-2">
            <Checkbox id="bad-example-1" defaultChecked className="mt-1" />
            <label htmlFor="bad-example-1" className="text-sm text-red-600">
              Я согласен с офертой, политикой конфиденциальности, 
              на обработку персональных данных и рекламную рассылку
            </label>
          </div>
          <div className="mt-3 p-3 bg-red-50 rounded text-sm text-red-700">
            <AlertTriangle className="h-4 w-4 inline mr-2" />
            Проблема: Невозможно дать согласие только на часть условий
          </div>
        </CardContent>
      </Card>

      <Card className="border-red-200">
        <CardHeader className="bg-red-50">
          <CardTitle className="text-red-700 flex items-center gap-2">
            <X className="h-5 w-5" />
            Неправильно: Заранее проставленные галочки
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="space-y-3">
            <div className="flex items-start space-x-2">
              <Checkbox id="bad-example-2" defaultChecked className="mt-1" />
              <label htmlFor="bad-example-2" className="text-sm text-red-600">
                Я принимаю условия оферты
              </label>
            </div>
            <div className="flex items-start space-x-2">
              <Checkbox id="bad-example-3" defaultChecked className="mt-1" />
              <label htmlFor="bad-example-3" className="text-sm text-red-600">
                Я даю согласие на обработку персональных данных
              </label>
            </div>
          </div>
          <div className="mt-3 p-3 bg-red-50 rounded text-sm text-red-700">
            <AlertTriangle className="h-4 w-4 inline mr-2" />
            Проблема: Согласие должно быть добровольным и осознанным
          </div>
        </CardContent>
      </Card>

      <Card className="border-red-200">
        <CardHeader className="bg-red-50">
          <CardTitle className="text-red-700 flex items-center gap-2">
            <X className="h-5 w-5" />
            Неправильно: Отсутствие согласия на обработку ПДн в форме
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="space-y-3">
            <input 
              type="text" 
              placeholder="Ваше имя" 
              className="w-full p-2 border rounded text-red-600"
            />
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full p-2 border rounded text-red-600"
            />
            <Button className="w-full bg-red-600 hover:bg-red-700">
              Отправить
            </Button>
          </div>
          <div className="mt-3 p-3 bg-red-50 rounded text-sm text-red-700">
            <AlertTriangle className="h-4 w-4 inline mr-2" />
            Проблема: Сбор персональных данных без получения согласия
          </div>
        </CardContent>
      </Card>

      <Card className="border-red-200">
        <CardHeader className="bg-red-50">
          <CardTitle className="text-red-700 flex items-center gap-2">
            <X className="h-5 w-5" />
            Неправильно: Скрытые ссылки на документы
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="flex items-start space-x-2">
            <Checkbox id="bad-example-4" className="mt-1" />
            <label htmlFor="bad-example-4" className="text-sm text-red-600">
              Я согласен с условиями использования и политикой конфиденциальности
            </label>
          </div>
          <div className="mt-3 p-3 bg-red-50 rounded text-sm text-red-700">
            <AlertTriangle className="h-4 w-4 inline mr-2" />
            Проблема: Нет кликабельных ссылок на документы
          </div>
        </CardContent>
      </Card>

      <Card className="border-red-200">
        <CardHeader className="bg-red-50">
          <CardTitle className="text-red-700 flex items-center gap-2">
            <X className="h-5 w-5" />
            Неправильно: Включение рекламной рассылки в обязательное согласие
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="flex items-start space-x-2">
            <Checkbox id="bad-example-5" className="mt-1" />
            <label htmlFor="bad-example-5" className="text-sm text-red-600">
              Я даю согласие на обработку персональных данных и рекламную рассылку *
            </label>
          </div>
          <p className="text-xs text-red-600 mt-1">* Обязательное поле</p>
          <div className="mt-3 p-3 bg-red-50 rounded text-sm text-red-700">
            <AlertTriangle className="h-4 w-4 inline mr-2" />
            Проблема: Согласие на рекламу должно быть отдельным и добровольным
          </div>
        </CardContent>
      </Card>

      <Card className="border-green-200">
        <CardHeader className="bg-green-50">
          <CardTitle className="text-green-700">
            ✓ Правильный подход
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="space-y-3">
            <div className="flex items-start space-x-2">
              <Checkbox id="good-example-1" className="mt-1" />
              <label htmlFor="good-example-1" className="text-sm">
                Я принимаю условия{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  публичной оферты
                </a>
              </label>
            </div>
            
            <div className="flex items-start space-x-2">
              <Checkbox id="good-example-2" className="mt-1" />
              <label htmlFor="good-example-2" className="text-sm">
                Я даю{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  согласие на обработку персональных данных
                </a>
                {" "}в соответствии с{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  политикой конфиденциальности
                </a>
              </label>
            </div>
            
            <div className="flex items-start space-x-2">
              <Checkbox id="good-example-3" className="mt-1" />
              <label htmlFor="good-example-3" className="text-sm">
                Я даю{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  согласие на рекламную рассылку
                </a>
                {" "}(необязательно)
              </label>
            </div>
          </div>
          
          <div className="mt-3 p-3 bg-green-50 rounded text-sm text-green-700">
            ✓ Правильно: Разделенные чекбоксы с кликабельными ссылками
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AntiPatterns;
