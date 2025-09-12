import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import ConsentCheckboxes from "@/components/legal/ConsentCheckboxes";

const OrderForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
  });
  
  const [consents, setConsents] = useState({
    terms: false,
    privacy: false,
    marketing: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
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

    // Здесь была бы логика отправки формы
    console.log("Form data:", formData);
    console.log("Consents:", consents);
    
    toast({
      title: "Заявка отправлена",
      description: "Мы свяжемся с вами в ближайшее время",
    });
  };

  const isFormValid = formData.name && formData.email && formData.phone && 
                     consents.terms && consents.privacy;

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Заказать услугу</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Имя *</Label>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <Label htmlFor="phone">Телефон *</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <Label htmlFor="service">Услуга</Label>
            <Input
              id="service"
              name="service"
              type="text"
              value={formData.service}
              onChange={handleInputChange}
              placeholder="Какая услуга вас интересует?"
            />
          </div>

          {/* Чекбоксы согласий */}
          <div className="pt-4 border-t">
            <ConsentCheckboxes
              onConsentChange={setConsents}
              showMarketing={true}
            />
          </div>

          <Button 
            type="submit" 
            className="w-full"
            disabled={!isFormValid}
          >
            Отправить заявку
          </Button>

          <p className="text-xs text-gray-500 text-center">
            * Обязательные поля
          </p>
        </form>
      </CardContent>
    </Card>
  );
};

export default OrderForm;
